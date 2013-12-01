// Object literal property name flags
var PROP_NORMAL = 1,
    PROP_DATA = 2,
    PROP_GET = 4,
    PROP_SET = 8;

// Identifiers which are reserved in strict mode    
var strictReservedWord = new RegExp("^(?:" +
    "implements|private|public|interface|package|let|protected|static|yield" +
")$");

// Returns true if the specified name is a restricted identifier in strict mode
function isPoisonIdent(name) {

    return name === "eval" || name === "arguments";
}

export class Validate {

    // Checks an assignment target for strict mode restrictions
    checkAssignTarget(node, strict) {
    
        if (node.type !== "Identifier")
            this.fail("Invalid left-hand side in assignment.");
        
        // Mark identifier node as a variable
        node.context = "variable";
        
        if (isPoisonIdent(node.value)) {
        
            var msg = "Cannot modify " + node.value + " in strict mode";
            
            if (strict) this.fail(msg, node);
            else this.addStrictError(msg, node);
        }
    }
    
    // Checks an identifier for strict mode reserved words
    checkIdentifier(node) {
    
        var ident = node.value;
        
        if (ident === "yield" && this.context.isGenerator)
            this.fail("yield cannot be an identifier inside of a generator function.", node);
        else if (strictReservedWord.test(ident))
            this.addStrictError(ident + " cannot be used as an identifier in strict mode.", node);
    }
    
    // Checks a binding identifier for strict mode restrictions
    checkBindingIdent(node, strict) {
    
        // Mark identifier node as a declaration
        node.context = "declaration";
            
        var name = node.value;
        
        if (isPoisonIdent(name)) {
        
            var msg = "Binding cannot be created for '" + name + "' in strict mode";
            
            if (strict) this.fail(msg, node);
            else this.addStrictError(msg, node);
        }
    }
    
    // Checks function formal parameters for strict mode restrictions
    checkParameters(params) {
    
        var names = {}, 
            name,
            node,
            i;
        
        for (i = 0; i < params.length; ++i) {
        
            node = params[i];
            
            if (node.type !== "FormalParameter" || node.pattern.type !== "Identifier")
                continue;
            
            name = node.pattern.value;
            
            if (isPoisonIdent(name))
                this.addStrictError("Parameter name " + name + " is not allowed in strict mode", node);
            
            if (names[name] === 1)
                this.addStrictError("Strict mode function may not have duplicate parameter names", node);
            
            names[name] = 1;
        }
    }
    
    // Performs validation on the init portion of a for-in or for-of statement
    checkForInit(init, type) {
    
        if (init.type === "VariableDeclaration") {
        
            // For-in/of may only have one variable declaration
            
            if (init.declarations.length !== 1)
                this.fail("for-" + type + " statement may not have more than one variable declaration", init);
            
            // A variable initializer is only allowed in for-in where 
            // variable type is "var" and it is not a pattern
                
            var decl = init.declarations[0];
            
            if (decl.initializer && (
                type === "of" ||
                init.kind !== "var" ||
                decl.pattern.type !== "Identifier")) {
                
                this.fail("Invalid initializer in for-" + type + " statement", init);
            }
            
        } else {
        
            // Transform object and array patterns
            this.transformPattern(init, false);
        }
    }
    
    // Returns true if the specified name type is a duplicate for a given set of flags
    isDuplicateName(type, flags, strict) {
    
        if (!flags)
            return false;
        
        switch (type) {
        
            case PROP_DATA: return strict || flags !== PROP_DATA;
            case PROP_GET: return flags !== PROP_SET;
            case PROP_SET: return flags !== PROP_GET;
            default: return !!flags;
        }
    }
    
    // Checks for duplicate property names in object literals or classes
    checkInvalidNodes() {
    
        var context = this.context,
            list = context.invalidNodes,
            item,
            node,
            i;
        
        if (list === null)
            return;
        
        for (i = 0; i < list.length; ++i) {
        
            item = list[i];
            node = item.node;
            
            if (node.error) {
            
                if (item.strict) this.addStrictError(node.error, node);
                else this.fail(node.error, node);
            }
        }
        
        context.invalidNodes = null;
    }
    
}
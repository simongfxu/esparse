{

/** function *g() {} **/
"generator declarations":
{   type: "Script",
    statements: [

    {   type: "FunctionDeclaration",
        kind: "generator",

        identifier:
        {   type: "Identifier",
            value: "g"
        },

        params: [],

        body:
        {   type: "FunctionBody",
            statements: []
        }
    }]
},

/** (function *g() {}); **/
"generator expresions":
{   type: "Script",
    statements: [

    {   type: "ExpressionStatement",
        expression:

        {   type: "ParenExpression",
            expression:

            {   type: "FunctionExpression",
                kind: "generator",

                identifier:
                {   type: "Identifier",
                    value: "g"
                },

                params: [],

                body:
                {   type: "FunctionBody",
                    statements: []
                }
            }
        }
    }]
},

/** function *g() { yield 1; } **/
"yield is a keyword in generators":
{   type: "Script",
    statements: [

    {   type: "FunctionDeclaration",
        kind: "generator",

        identifier:
        {   type: "Identifier",
            value: "g"
        },

        params: [],

        body:
        {   type: "FunctionBody",
            statements: [
            {   type: "ExpressionStatement",
                expression:
                {   type: "YieldExpression",
                    delegate: false,
                    expression:
                    {   type: "NumberLiteral",
                        value: 1
                    }
                }
            }]
        }
    }]
},

/** function *g() { (yield) } **/
"yield expression inside of parens":
{   type: "Script",
    statements: [

    {   type: "FunctionDeclaration",
        kind: "generator",

        identifier:
        {   type: "Identifier",
            value: "g"
        },

        params: [],

        body:
        {   type: "FunctionBody",
            statements: [
            {   type: "ExpressionStatement",
                expression:
                {   type: "ParenExpression",
                    expression:
                    {   type: "YieldExpression",
                        delegate: false,
                        expression: null
                    }
                }
            }]
        }
    }]
},

/** function *g() {
yield
x } **/
"yield has no-line-terminator restriction":
{   type: "Script",
    statements: [

    {   type: "FunctionDeclaration",
        kind: "generator",

        identifier:
        {   type: "Identifier",
            value: "g"
        },

        params: [],

        body:
        {   type: "FunctionBody",
            statements: [
            {   type: "ExpressionStatement",
                expression:
                {   type: "YieldExpression",
                    delegate: false,
                    expression: null
                }
            },
            {   type: "ExpressionStatement",
                expression:
                {   type: "Identifier",
                    value: "x"
                }
            }]
        }
    }]
},

/** function *g() { yield
* x } **/
"no newline between yield and *": {},

/** function *g() { -yield; } **/
"yield is not allowed as an identifier within a generator": {},

/** function *g() { var yield; } **/
"yield is not allowed as a binding identifier within a generator": {},

/** function* g(yield) {} **/
"yield is not allowed as a binding identifier within a generator head": {},

/** function* g() { (yield) => null } **/
"yield is not allowed within an arrow parameter list inside of a generator - 1": {},

/** function* g() { (x = yield 1) => null } **/
"yield is not allowed within an arrow parameter list inside of a generator - 2": {},

/** function* g() { yield, null } **/
"yield is allowed in comma expressions":
{ type: 'Script',
  start: 0,
  end: 29,
  statements:
   [ { type: 'FunctionDeclaration',
       start: 0,
       end: 29,
       kind: 'generator',
       identifier:
        { type: 'Identifier',
          start: 10,
          end: 11,
          value: 'g',
          context: 'declaration' },
       params: [],
       body:
        { type: 'FunctionBody',
          start: 14,
          end: 29,
          statements:
           [ { type: 'ExpressionStatement',
               start: 16,
               end: 27,
               expression:
                { type: 'SequenceExpression',
                  start: 16,
                  end: 27,
                  expressions:
                   [ { type: 'YieldExpression',
                       start: 16,
                       end: 21,
                       delegate: false,
                       expression: null },
                     { type: 'NullLiteral', start: 23, end: 27 } ] } } ] } } ] },

};

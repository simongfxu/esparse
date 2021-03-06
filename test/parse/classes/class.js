({

/** class C {} **/
'class declaration':
{ type: 'Script',
  start: 0,
  end: 10,
  statements:
   [ { type: 'ClassDeclaration',
       start: 0,
       end: 10,
       identifier:
        { type: 'Identifier',
          start: 6,
          end: 7,
          value: 'C',
          context: 'declaration' },
       base: null,
       body: { type: 'ClassBody', start: 8, end: 10, elements: [] } } ] },

/** (class C {}); **/
'class expression':
{ type: 'Script',
  start: 0,
  end: 13,
  statements:
   [ { type: 'ExpressionStatement',
       start: 0,
       end: 13,
       expression:
        { type: 'ParenExpression',
          start: 0,
          end: 12,
          expression:
           { type: 'ClassExpression',
             start: 1,
             end: 11,
             identifier:
              { type: 'Identifier',
                start: 7,
                end: 8,
                value: 'C',
                context: 'declaration' },
             base: null,
             body: { type: 'ClassBody', start: 9, end: 11, elements: [] } } } } ] },

/** class C extends B {} **/
'class with extends':
{ type: 'Script',
  start: 0,
  end: 20,
  statements:
   [ { type: 'ClassDeclaration',
       start: 0,
       end: 20,
       identifier:
        { type: 'Identifier',
          start: 6,
          end: 7,
          value: 'C',
          context: 'declaration' },
       base:
        { type: 'Identifier',
          start: 16,
          end: 17,
          value: 'B',
          context: 'variable' },
       body: { type: 'ClassBody', start: 18, end: 20, elements: [] } } ] },

/** class C { static S() {} } **/
'static method':
{ type: 'Script',
  start: 0,
  end: 25,
  statements:
   [ { type: 'ClassDeclaration',
       start: 0,
       end: 25,
       identifier:
        { type: 'Identifier',
          start: 6,
          end: 7,
          value: 'C',
          context: 'declaration' },
       base: null,
       body:
        { type: 'ClassBody',
          start: 8,
          end: 25,
          elements:
           [ { type: 'MethodDefinition',
               start: 10,
               end: 23,
               static: true,
               kind: '',
               name: { type: 'Identifier', start: 17, end: 18, value: 'S', context: '' },
               params: [],
               body: { type: 'FunctionBody', start: 21, end: 23, statements: [] } } ] } } ] },

/** class C { m() { new super; } } **/
'new super not allowed': {},

/** class C { m() { new super.foo; } } **/
'new applied to super property':
{ type: 'Script',
  start: 0,
  end: 34,
  statements:
   [ { type: 'ClassDeclaration',
       start: 0,
       end: 34,
       identifier:
        { type: 'Identifier',
          start: 6,
          end: 7,
          value: 'C',
          context: 'declaration' },
       base: null,
       body:
        { type: 'ClassBody',
          start: 8,
          end: 34,
          elements:
           [ { type: 'MethodDefinition',
               start: 10,
               end: 32,
               static: false,
               kind: '',
               name: { type: 'Identifier', start: 10, end: 11, value: 'm', context: '' },
               params: [],
               body:
                { type: 'FunctionBody',
                  start: 14,
                  end: 32,
                  statements:
                   [ { type: 'ExpressionStatement',
                       start: 16,
                       end: 30,
                       expression:
                        { type: 'NewExpression',
                          start: 16,
                          end: 29,
                          callee:
                           { type: 'MemberExpression',
                             start: 20,
                             end: 29,
                             object: { type: 'SuperKeyword', start: 20, end: 25 },
                             property:
                              { type: 'Identifier',
                                start: 26,
                                end: 29,
                                value: 'foo',
                                context: '' },
                             computed: false },
                          arguments: null } } ] } } ] } } ] },

/** class C extends A + B {} **/
'extends clause does not allow assignment expression': {},

/** (class C extends A + B {}) **/
'extends clause does not allow assignment expression in class expression': {},

/** super() **/
'super cannot appear outside of a function': {},

/** class C { a() {} a() {} } **/
'duplicate methods are allowed':
{ type: 'Script',
  start: 0,
  end: 25,
  statements:
   [ { type: 'ClassDeclaration',
       start: 0,
       end: 25,
       identifier:
        { type: 'Identifier',
          start: 6,
          end: 7,
          value: 'C',
          context: 'declaration' },
       base: null,
       body:
        { type: 'ClassBody',
          start: 8,
          end: 25,
          elements:
           [ { type: 'MethodDefinition',
               start: 10,
               end: 16,
               static: false,
               kind: '',
               name: { type: 'Identifier', start: 10, end: 11, value: 'a', context: '' },
               params: [],
               body: { type: 'FunctionBody', start: 14, end: 16, statements: [] } },
             { type: 'MethodDefinition',
               start: 17,
               end: 23,
               static: false,
               kind: '',
               name: { type: 'Identifier', start: 17, end: 18, value: 'a', context: '' },
               params: [],
               body: { type: 'FunctionBody', start: 21, end: 23, statements: [] } } ] } } ] },

/** class C { static a() {} static a() {} } **/
'duplicate static methods are allowed':
{ type: 'Script',
  start: 0,
  end: 39,
  statements:
   [ { type: 'ClassDeclaration',
       start: 0,
       end: 39,
       identifier:
        { type: 'Identifier',
          start: 6,
          end: 7,
          value: 'C',
          context: 'declaration' },
       base: null,
       body:
        { type: 'ClassBody',
          start: 8,
          end: 39,
          elements:
           [ { type: 'MethodDefinition',
               start: 10,
               end: 23,
               static: true,
               kind: '',
               name: { type: 'Identifier', start: 17, end: 18, value: 'a', context: '' },
               params: [],
               body: { type: 'FunctionBody', start: 21, end: 23, statements: [] } },
             { type: 'MethodDefinition',
               start: 24,
               end: 37,
               static: true,
               kind: '',
               name: { type: 'Identifier', start: 31, end: 32, value: 'a', context: '' },
               params: [],
               body: { type: 'FunctionBody', start: 35, end: 37, statements: [] } } ] } } ] },

/** class C { a() {} static a() {} } **/
'static and instance methods may have the same name':
{ type: 'Script',
  start: 0,
  end: 32,
  statements:
   [ { type: 'ClassDeclaration',
       start: 0,
       end: 32,
       identifier:
        { type: 'Identifier',
          start: 6,
          end: 7,
          value: 'C',
          context: 'declaration' },
       base: null,
       body:
        { type: 'ClassBody',
          start: 8,
          end: 32,
          elements:
           [ { type: 'MethodDefinition',
               start: 10,
               end: 16,
               static: false,
               kind: '',
               name: { type: 'Identifier', start: 10, end: 11, value: 'a', context: '' },
               params: [],
               body: { type: 'FunctionBody', start: 14, end: 16, statements: [] } },
             { type: 'MethodDefinition',
               start: 17,
               end: 30,
               static: true,
               kind: '',
               name: { type: 'Identifier', start: 24, end: 25, value: 'a', context: '' },
               params: [],
               body: { type: 'FunctionBody', start: 28, end: 30, statements: [] } } ] } } ] },

/** class C { get constructor() {} } **/
'special constructor method not allowed - 1': {},

/** class C { set constructor() {} } **/
'special constructor method not allowed - 2': {},

/** class C { *constructor() {} } **/
'special constructor method not allowed - 3': {},

/** class C { static prototype() {} } **/
'static prototype method not allowed - 1': {},

/** class C { static get prototype() {} } **/
'static prototype method not allowed - 2': {},

/** class C { static set prototype() {} } **/
'static prototype method not allowed - 3': {},

/** class C { static *prototype() {} } **/
'static prototype method not allowed - 4': {},

/** function() { super`kasdf`; } **/
'super followed by template not allowed': {},

/** class C { constructor() { super } } **/
'super is not a primary expression': {},

/** class C { ; ; } **/
'empty class elements - 1':
{ type: 'Script',
  start: 0,
  end: 15,
  statements:
   [ { type: 'ClassDeclaration',
       start: 0,
       end: 15,
       identifier:
        { type: 'Identifier',
          start: 6,
          end: 7,
          value: 'C',
          context: 'declaration' },
       base: null,
       body:
        { type: 'ClassBody',
          start: 8,
          end: 15,
          elements:
           [ { type: 'EmptyClassElement', start: 10, end: 11 },
             { type: 'EmptyClassElement', start: 12, end: 13 } ] } } ] },

/** class C { foo() {}; } **/
'empty class elements - 2':
{ type: 'Script',
  start: 0,
  end: 21,
  statements:
   [ { type: 'ClassDeclaration',
       start: 0,
       end: 21,
       identifier:
        { type: 'Identifier',
          start: 6,
          end: 7,
          value: 'C',
          context: 'declaration' },
       base: null,
       body:
        { type: 'ClassBody',
          start: 8,
          end: 21,
          elements:
           [ { type: 'MethodDefinition',
               start: 10,
               end: 18,
               static: false,
               kind: '',
               name:
                { type: 'Identifier',
                  start: 10,
                  end: 13,
                  value: 'foo',
                  context: '' },
               params: [],
               body: { type: 'FunctionBody', start: 16, end: 18, statements: [] } },
             { type: 'EmptyClassElement', start: 18, end: 19 } ] } } ] },

/** class C { constructor() { new.target } } **/
'new.target meta property':
{ type: 'Script',
  start: 0,
  end: 40,
  statements:
   [ { type: 'ClassDeclaration',
       start: 0,
       end: 40,
       identifier:
        { type: 'Identifier',
          start: 6,
          end: 7,
          value: 'C',
          context: 'declaration' },
       base: null,
       body:
        { type: 'ClassBody',
          start: 8,
          end: 40,
          elements:
           [ { type: 'MethodDefinition',
               start: 10,
               end: 38,
               static: false,
               kind: 'constructor',
               name:
                { type: 'Identifier',
                  start: 10,
                  end: 21,
                  value: 'constructor',
                  context: '' },
               params: [],
               body:
                { type: 'FunctionBody',
                  start: 24,
                  end: 38,
                  statements:
                   [ { type: 'ExpressionStatement',
                       start: 26,
                       end: 36,
                       expression:
                        { type: 'MetaProperty',
                          start: 26,
                          end: 36,
                          left: 'new',
                          right: 'target' } } ] } } ] } } ] },

/** class C { x() { new super() } } **/
'new super is not allowed': {},

/** class C { constructor() {} constructor() {} } **/
'duplicate constructors not allowed': {},

/** function f() { super.foo } **/
'super not allowed in function declaration': {},

/** function *g() { super.foo } **/
'super not allowed in generator declaration': {},

/** class C { constructor() { super() } } **/
'super call':
{ type: 'Script',
  start: 0,
  end: 37,
  statements:
   [ { type: 'ClassDeclaration',
       start: 0,
       end: 37,
       identifier:
        { type: 'Identifier',
          start: 6,
          end: 7,
          value: 'C',
          context: 'declaration' },
       base: null,
       body:
        { type: 'ClassBody',
          start: 8,
          end: 37,
          elements:
           [ { type: 'MethodDefinition',
               start: 10,
               end: 35,
               static: false,
               kind: 'constructor',
               name:
                { type: 'Identifier',
                  start: 10,
                  end: 21,
                  value: 'constructor',
                  context: '' },
               params: [],
               body:
                { type: 'FunctionBody',
                  start: 24,
                  end: 35,
                  statements:
                   [ { type: 'ExpressionStatement',
                       start: 26,
                       end: 33,
                       expression:
                        { type: 'CallExpression',
                          start: 26,
                          end: 33,
                          callee: { type: 'SuperKeyword', start: 26, end: 31 },
                          arguments: [] } } ] } } ] } } ] },

/** class C { a() { super() } } **/
'super call not allowed outside of constructor': {},

/** class C { constructor() { (super()) } } **/
'super call allowed inside of parens':
{ type: 'Script',
  start: 0,
  end: 39,
  statements:
   [ { type: 'ClassDeclaration',
       start: 0,
       end: 39,
       identifier:
        { type: 'Identifier',
          start: 6,
          end: 7,
          value: 'C',
          context: 'declaration' },
       base: null,
       body:
        { type: 'ClassBody',
          start: 8,
          end: 39,
          elements:
           [ { type: 'MethodDefinition',
               start: 10,
               end: 37,
               static: false,
               kind: 'constructor',
               name:
                { type: 'Identifier',
                  start: 10,
                  end: 21,
                  value: 'constructor',
                  context: '' },
               params: [],
               body:
                { type: 'FunctionBody',
                  start: 24,
                  end: 37,
                  statements:
                   [ { type: 'ExpressionStatement',
                       start: 26,
                       end: 35,
                       expression:
                        { type: 'ParenExpression',
                          start: 26,
                          end: 35,
                          expression:
                           { type: 'CallExpression',
                             start: 27,
                             end: 34,
                             callee: { type: 'SuperKeyword', start: 27, end: 32 },
                             arguments: [] } } } ] } } ] } } ] },

/** class C { constructor() { _=> super() } } **/
'super call allowed within arrow in constructor':
{ type: 'Script',
  start: 0,
  end: 41,
  statements:
   [ { type: 'ClassDeclaration',
       start: 0,
       end: 41,
       identifier:
        { type: 'Identifier',
          start: 6,
          end: 7,
          value: 'C',
          context: 'declaration' },
       base: null,
       body:
        { type: 'ClassBody',
          start: 8,
          end: 41,
          elements:
           [ { type: 'MethodDefinition',
               start: 10,
               end: 39,
               static: false,
               kind: 'constructor',
               name:
                { type: 'Identifier',
                  start: 10,
                  end: 21,
                  value: 'constructor',
                  context: '' },
               params: [],
               body:
                { type: 'FunctionBody',
                  start: 24,
                  end: 39,
                  statements:
                   [ { type: 'ExpressionStatement',
                       start: 26,
                       end: 37,
                       expression:
                        { type: 'ArrowFunction',
                          start: 26,
                          end: 37,
                          kind: '',
                          params:
                           [ { type: 'FormalParameter',
                               start: 26,
                               end: 27,
                               pattern:
                                { type: 'Identifier',
                                  start: 26,
                                  end: 27,
                                  value: '_',
                                  context: 'declaration' },
                               initializer: null } ],
                          body:
                           { type: 'CallExpression',
                             start: 30,
                             end: 37,
                             callee: { type: 'SuperKeyword', start: 30, end: 35 },
                             arguments: [] } } } ] } } ] } } ] },


})

({

/** class C { @x } **/
'private declaration':
{ type: 'Script',
  start: 0,
  end: 14,
  statements:
   [ { type: 'ClassDeclaration',
       start: 0,
       end: 14,
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
          end: 14,
          elements:
           [ { type: 'PrivateDeclaration',
               start: 10,
               end: 12,
               static: false,
               name: { type: 'AtName', start: 10, end: 12, value: '@x' },
               initializer: null } ] } } ] },

/** class C { @x = a = 1 } **/
'private declaration with initializer':
{ type: 'Script',
  start: 0,
  end: 22,
  statements:
   [ { type: 'ClassDeclaration',
       start: 0,
       end: 22,
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
          end: 22,
          elements:
           [ { type: 'PrivateDeclaration',
               start: 10,
               end: 20,
               static: false,
               name: { type: 'AtName', start: 10, end: 12, value: '@x' },
               initializer:
                { type: 'AssignmentExpression',
                  start: 15,
                  end: 20,
                  operator: '=',
                  left:
                   { type: 'Identifier',
                     start: 15,
                     end: 16,
                     value: 'a',
                     context: 'variable' },
                  right: { type: 'NumberLiteral', start: 19, end: 20, value: 1 } } } ] } } ] },

/** class C { static @x = 1 } **/
'private static field with initializer':
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
           [ { type: 'PrivateDeclaration',
               start: 10,
               end: 23,
               static: true,
               name: { type: 'AtName', start: 17, end: 19, value: '@x' },
               initializer: { type: 'NumberLiteral', start: 22, end: 23, value: 1 } } ] } } ] },

/** class C { @x() {} } **/
'private class method':
{ type: 'Script',
  start: 0,
  end: 19,
  statements:
   [ { type: 'ClassDeclaration',
       start: 0,
       end: 19,
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
          end: 19,
          elements:
           [ { type: 'MethodDefinition',
               start: 10,
               end: 17,
               static: false,
               kind: '',
               name: { type: 'AtName', start: 10, end: 12, value: '@x' },
               params: [],
               body: { type: 'FunctionBody', start: 15, end: 17, statements: [] } } ] } } ] },

/** class C { get @x() {} set @x(v) {} } **/
'private class getter and setter':
{ type: 'Script',
  start: 0,
  end: 36,
  statements:
   [ { type: 'ClassDeclaration',
       start: 0,
       end: 36,
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
          end: 36,
          elements:
           [ { type: 'MethodDefinition',
               start: 10,
               end: 21,
               static: false,
               kind: 'get',
               name: { type: 'AtName', start: 14, end: 16, value: '@x' },
               params: [],
               body: { type: 'FunctionBody', start: 19, end: 21, statements: [] } },
             { type: 'MethodDefinition',
               start: 22,
               end: 34,
               static: false,
               kind: 'set',
               name: { type: 'AtName', start: 26, end: 28, value: '@x' },
               params:
                [ { type: 'FormalParameter',
                    start: 29,
                    end: 30,
                    pattern:
                     { type: 'Identifier',
                       start: 29,
                       end: 30,
                       value: 'v',
                       context: 'declaration' },
                    initializer: null } ],
               body: { type: 'FunctionBody', start: 32, end: 34, statements: [] } } ] } } ] },

/** class C { *@x() {} } **/
'private class generator method':
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
       base: null,
       body:
        { type: 'ClassBody',
          start: 8,
          end: 20,
          elements:
           [ { type: 'MethodDefinition',
               start: 10,
               end: 18,
               static: false,
               kind: 'generator',
               name: { type: 'AtName', start: 11, end: 13, value: '@x' },
               params: [],
               body: { type: 'FunctionBody', start: 16, end: 18, statements: [] } } ] } } ] },

/** class C { static @x() {} } **/
'private static class method':
{ type: 'Script',
  start: 0,
  end: 26,
  statements:
   [ { type: 'ClassDeclaration',
       start: 0,
       end: 26,
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
          end: 26,
          elements:
           [ { type: 'MethodDefinition',
               start: 10,
               end: 24,
               static: true,
               kind: '',
               name: { type: 'AtName', start: 17, end: 19, value: '@x' },
               params: [],
               body: { type: 'FunctionBody', start: 22, end: 24, statements: [] } } ] } } ] },

/** class C { static get @x() {} static set @x(v) {} } **/
'private static class getter and setter':
{ type: 'Script',
  start: 0,
  end: 50,
  statements:
   [ { type: 'ClassDeclaration',
       start: 0,
       end: 50,
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
          end: 50,
          elements:
           [ { type: 'MethodDefinition',
               start: 10,
               end: 28,
               static: true,
               kind: 'get',
               name: { type: 'AtName', start: 21, end: 23, value: '@x' },
               params: [],
               body: { type: 'FunctionBody', start: 26, end: 28, statements: [] } },
             { type: 'MethodDefinition',
               start: 29,
               end: 48,
               static: true,
               kind: 'set',
               name: { type: 'AtName', start: 40, end: 42, value: '@x' },
               params:
                [ { type: 'FormalParameter',
                    start: 43,
                    end: 44,
                    pattern:
                     { type: 'Identifier',
                       start: 43,
                       end: 44,
                       value: 'v',
                       context: 'declaration' },
                    initializer: null } ],
               body: { type: 'FunctionBody', start: 46, end: 48, statements: [] } } ] } } ] },

/** ({ @x: 1 }) **/
'private object property':
{ type: 'Script',
  start: 0,
  end: 11,
  statements:
   [ { type: 'ExpressionStatement',
       start: 0,
       end: 11,
       expression:
        { type: 'ParenExpression',
          start: 0,
          end: 11,
          expression:
           { type: 'ObjectLiteral',
             start: 1,
             end: 10,
             properties:
              [ { type: 'PropertyDefinition',
                  start: 3,
                  end: 8,
                  name: { type: 'AtName', start: 3, end: 5, value: '@x' },
                  expression: { type: 'NumberLiteral', start: 7, end: 8, value: 1 } } ],
             trailingComma: false } } } ] },

/** ({ @x() {} }) **/
'private object method':
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
          end: 13,
          expression:
           { type: 'ObjectLiteral',
             start: 1,
             end: 12,
             properties:
              [ { type: 'MethodDefinition',
                  start: 3,
                  end: 10,
                  static: false,
                  kind: '',
                  name: { type: 'AtName', start: 3, end: 5, value: '@x' },
                  params: [],
                  body: { type: 'FunctionBody', start: 8, end: 10, statements: [] } } ],
             trailingComma: false } } } ] },

/** ({ get @x() {}, set @x(v) {} }) **/
'private object getter and setter':
{ type: 'Script',
  start: 0,
  end: 31,
  statements:
   [ { type: 'ExpressionStatement',
       start: 0,
       end: 31,
       expression:
        { type: 'ParenExpression',
          start: 0,
          end: 31,
          expression:
           { type: 'ObjectLiteral',
             start: 1,
             end: 30,
             properties:
              [ { type: 'MethodDefinition',
                  start: 3,
                  end: 14,
                  static: false,
                  kind: 'get',
                  name: { type: 'AtName', start: 7, end: 9, value: '@x' },
                  params: [],
                  body: { type: 'FunctionBody', start: 12, end: 14, statements: [] } },
                { type: 'MethodDefinition',
                  start: 16,
                  end: 28,
                  static: false,
                  kind: 'set',
                  name: { type: 'AtName', start: 20, end: 22, value: '@x' },
                  params:
                   [ { type: 'FormalParameter',
                       start: 23,
                       end: 24,
                       pattern:
                        { type: 'Identifier',
                          start: 23,
                          end: 24,
                          value: 'v',
                          context: 'declaration' },
                       initializer: null } ],
                  body: { type: 'FunctionBody', start: 26, end: 28, statements: [] } } ],
             trailingComma: false } } } ] },

/** ({ *@x() {} }) **/
'private object generator method':
{ type: 'Script',
  start: 0,
  end: 14,
  statements:
   [ { type: 'ExpressionStatement',
       start: 0,
       end: 14,
       expression:
        { type: 'ParenExpression',
          start: 0,
          end: 14,
          expression:
           { type: 'ObjectLiteral',
             start: 1,
             end: 13,
             properties:
              [ { type: 'MethodDefinition',
                  start: 3,
                  end: 11,
                  static: false,
                  kind: 'generator',
                  name: { type: 'AtName', start: 4, end: 6, value: '@x' },
                  params: [],
                  body: { type: 'FunctionBody', start: 9, end: 11, statements: [] } } ],
             trailingComma: false } } } ] },

/** this.@x; **/
'private member expression':
{ type: 'Script',
  start: 0,
  end: 8,
  statements:
   [ { type: 'ExpressionStatement',
       start: 0,
       end: 8,
       expression:
        { type: 'MemberExpression',
          start: 0,
          end: 7,
          object: { type: 'ThisExpression', start: 0, end: 4 },
          property: { type: 'AtName', start: 5, end: 7, value: '@x' },
          computed: false } } ] },

/** ({ @x: x }) = a; **/
'destructuring pattern with private property':
{ type: 'Script',
  start: 0,
  end: 16,
  statements:
   [ { type: 'ExpressionStatement',
       start: 0,
       end: 16,
       expression:
        { type: 'AssignmentExpression',
          start: 0,
          end: 15,
          operator: '=',
          left:
           { type: 'ParenExpression',
             start: 0,
             end: 11,
             expression:
              { type: 'ObjectPattern',
                start: 1,
                end: 10,
                properties:
                 [ { type: 'PatternProperty',
                     start: 3,
                     end: 8,
                     name: { type: 'AtName', start: 3, end: 5, value: '@x' },
                     pattern:
                      { type: 'Identifier',
                        start: 7,
                        end: 8,
                        value: 'x',
                        context: 'variable' },
                     initializer: null } ],
                trailingComma: false } },
          right:
           { type: 'Identifier',
             start: 14,
             end: 15,
             value: 'a',
             context: 'variable' } } } ] },

/** ({ @x }) **/
'shorthand private names not allowed in object literals': {},

/** ({ @x } = y) **/
'shorthand private names not allowed in object patterns': {},

/** class C { @x; @x; } **/
'duplicate private names not allowed - 1': {},

/** class C { @x() {}; @x; } **/
'duplicate private names not allowed - 2': {},

/** class C { @x; get @x() {} } **/
'duplicate private names not allowed - 3': {},

/** ({ @x: 1, @x: 1 }) **/
'duplicate private names not allowed - 4': {},

/** ({ get @x() {}, @x: 1 }) **/
'duplicate private names not allowed - 5': {},

/** ({ @x() {}, @x: 1 }) **/
'duplicate private names not allowed - 6': {},


});

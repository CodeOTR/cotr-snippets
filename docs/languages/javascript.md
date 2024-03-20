---
title: Javascript
description: Javascript snippets on the rocks.
---

## [cotrTypesBoolFalse](/snippets/cotrtypesboolfalse)

JavaScript Boolean False

```javascript
false;
```

## [cotrFuncSyntax](/snippets/cotrfuncsyntax)

JavaScript Function Syntax

```javascript
// JavaScript Function Syntax
// Basic function: function functionName(parameters) { ... }
// Function with arguments: function functionName(arg1, arg2, ...) { ... }
// Function with named arguments (using object destructuring): function functionName({arg1, arg2, ...}) { ... }
```

## [cotrTryCatch](/snippets/cotrtrycatch)

JavaScript Try Catch

```javascript
try {
  ${1:// Your code here}
} catch (${2:exception}) {
  ${3:// Your code here}
}
```

## [cotrInfo](/snippets/cotrinfo)

JavaScript Info

```javascript
Typing: Dynamically typed
Paradigm: Multi-paradigm: event-driven, functional, imperative, prototype-based
Compilation: Interpreted or just-in-time compiled
Concurrency: Event loop model with support for asynchronous programming using callbacks, promises, and async/await
```

## [cotrEntry](/snippets/cotrentry)

JavaScript Entry Point

```javascript
// JavaScript Entry Point
// To run this program, use: `node filename.js`

console.log('Hello, World!');
```

## [cotrVarMapAlt](/snippets/cotrvarmapalt)

JavaScript Create Map Variable

```javascript
let ${1:myMap} = new Map([
  [${2:'key1'}, ${3:'value1'}],
  [${4:'key2'}, ${5:'value2'}]
]);
```

## [cotrFuncAnon](/snippets/cotrfuncanon)

JavaScript Anonymous Function

```javascript
function(${1:parameters}) {
  ${2:// Your code here}
};
```

## [cotrClass](/snippets/cotrclass)

JavaScript Class

```javascript
class ${1:MyClass} {
  ${2:// Your code here}
}
```

## [cotrTypesString](/snippets/cotrtypesstring)

JavaScript String Type

```javascript
let text = "John Doe";
```

## [cotrPrint](/snippets/cotrprint)

JavaScript Print

```javascript
console.log(${1:'Your message here'});
```

## [cotrForLoop](/snippets/cotrforloop)

JavaScript For Loop

```javascript
for (let ${1:i} = 0; $1 < ${2:10}; $1++) {
  // Your code here
}
```

## [cotrVarDate](/snippets/cotrvardate)

JavaScript Create Date Variable

```javascript
let ${1:myDate} = new Date(${2:year}, ${3:month} - 1, ${4:day});
```

## [cotrVarList](/snippets/cotrvarlist)

JavaScript Create Array Variable

```javascript
let ${1:myList} = [${2:'item1'}, ${3:'item2'}];
```

## [cotrConst](/snippets/cotrconst)

JavaScript Create Constant

```javascript
const ${1:myConst} = $2;
```

## [cotrTernary](/snippets/cotrternary)

JavaScript Ternary Operator

```javascript
${1:condition} ? ${2:trueValue} : ${3:falseValue}
```

## [cotrNotEqual](/snippets/cotrnotequal)

JavaScript Not Equal To

```javascript
!==
```

## [cotrVarMultiString](/snippets/cotrvarmultistring)

JavaScript Create Multi-Line String Variable

```javascript
let ${1:myString} = `
${2:Line 1}
${3:Line 2}
${4:Line 3}
`;
```

## [cotrVarBool](/snippets/cotrvarbool)

JavaScript Create Boolean Variable

```javascript
let ${1:myBoolean} = ${2:true};
```

## [cotrOperators](/snippets/cotroperators)

JavaScript Mathematical Operators

```javascript
// JavaScript Mathematical Operators
// Addition: +
// Subtraction: -
// Multiplication: *
// Exponentiation: **
// Division: /
// Modulus (Remainder): %
// Increment: ++
// Decrement: --
// Assignment: =
// Addition assignment: +=
// Subtraction assignment: -=
// Multiplication assignment: *=
// Division assignment: /=
// Modulus assignment: %=
```

## [cotrVarStatic](/snippets/cotrvarstatic)

JavaScript Static Variable

```javascript
static ${3:myStaticVar} = ${4:value};

// Access the static variable
// MyClass.${3:myStaticVar}
```

## [cotrGenMap](/snippets/cotrgenmap)

JavaScript Generate Object Map

```javascript
const ${1:myMap} = Object.fromEntries(
  Array.from({ length: ${2:length} }, (_, index) => [`key${index}`, `value${index}`])
);
```

## [cotrIfElse](/snippets/cotrifelse)

JavaScript If Else Statement

```javascript
if (${1:condition}) {
  ${2:// Your code here}
} else if (${3:condition}) {
  ${4:// Your code here}
} else {
  ${5:// Your code here}
}
```

## [cotrTypesInt](/snippets/cotrtypesint)

JavaScript Int Type

```javascript
let integer = Math.floor($1);
```

## [cotrForOfLoop](/snippets/cotrforofloop)

JavaScript For...Of Loop

```javascript
for (const item of ${1:iterable}) {
  ${2:// Your code here}
}
```

## [cotrCommentMulti](/snippets/cotrcommentmulti)

JavaScript Multi-Line Comment

```javascript
/*
 * ${1:Your comment here}
 */
```

## [cotrInterpolate](/snippets/cotrinterpolate)

JavaScript Interpolate String

```javascript
let text = `Hello, ${1:name}!`;
```

## [cotrVarString](/snippets/cotrvarstring)

JavaScript Create String Variable

```javascript
let ${1:myString} = "${2:Your string here}";
```

## [cotrNow](/snippets/cotrnow)

JavaScript Date Now

```javascript
new Date()
```

## [cotrTypeCheck](/snippets/cotrtypecheck)

JavaScript Type Check

```javascript
typeof ${1:variable}
```

## [cotrTypeConvert](/snippets/cotrtypeconvert)

JavaScript Type Conversion

```javascript
// JavaScript Type Conversion:

// Implicit conversions (JavaScript performs automatically):
// - Can be unpredictable, especially with loose equality (==).

// Explicit conversions:
// - Number(variable)  // Converts to number
// - String(variable)  // Converts to string
// - Boolean(variable)  // Converts to boolean
// - parseInt(string)  // Converts string to integer
// - parseFloat(string)  // Converts string to floating-point number

// Note:
// - Be aware of implicit conversions and use explicit conversions when necessary for clarity and control.
```

## [cotrTypesBool](/snippets/cotrtypesbool)

JavaScript Boolean Type

```javascript
let flag = Boolean($1);
```

## [cotrVarTyped](/snippets/cotrvartyped)

JavaScript Create Typed Variable

```javascript
let ${1:myVar} = $2; // Note: JavaScript is dynamically typed.
```

## [cotrLambda](/snippets/cotrlambda)

JavaScript Lambda

```javascript
const ${1:myLambda} = (${2:parameters}) => ${3:expression};
```

## [cotrConcat](/snippets/cotrconcat)

JavaScript Concatenate String

```javascript
let text = 'Hello, ' + ${1:name} + '!';
```

## [cotrVarNullable](/snippets/cotrvarnullable)

JavaScript Create Nullable Variable

```javascript
let ${1:myVar} = null;
```

## [cotrGenList](/snippets/cotrgenlist)

JavaScript Generate Array

```javascript
const ${1:myList} = Array.from({ length: ${2:length} }, (_, index) => ${3:'item'} + index);
```

## [cotrIf](/snippets/cotrif)

JavaScript If Statement

```javascript
if (${1:condition}) {
  ${2:// Your code here}
}
```

## [cotrStructure](/snippets/cotrstructure)

JavaScript Project Structure (High-Level)

```javascript
// Recommended High-Level JavaScript Project Structure:

// - src/
//   - Contains the source code of the application.
//   - Common subdirectories within src include:
//     - components/ (for UI components in a React/Vue/Angular app)
//     - utils/ (for utility functions)
//     - services/ (for API calls and external services interaction)
//     - assets/ (for images, fonts, and other static assets)

// - public/
//   - Contains static files like index.html, favicon.ico, etc.

// - tests/ or __tests__/
//   - Contains test files for unit testing, integration testing, etc.

// - node_modules/
//   - Contains all the npm packages and dependencies for the project.

// - build/ or dist/
//   - Contains the compiled and minified production-ready files.

// - config/
//   - Contains configuration files for build tools, CI/CD processes, etc.

// - docs/
//   - Documentation for the project.

// - scripts/
//   - Build scripts, deployment scripts, and other automation scripts.

// Note:
// - The actual structure can vary based on the project's needs,
//   and the tools/frameworks being used (e.g., React, Vue, Angular, etc.).
```

## [cotrOperatorsBool](/snippets/cotroperatorsbool)

JavaScript Boolean Operators

```javascript
// JavaScript Boolean Operators
// Logical AND: &&
// Logical OR: ||
// Logical NOT: !
// Equality: ==
// Strict Equality: ===
// Inequality: !=
// Strict Inequality: !==
// Greater than: >
// Less than: <
// Greater than or equal to: >=
// Less than or equal to: <=
```

## [cotrTypes](/snippets/cotrtypes)

JavaScript Types

```javascript
$BLOCK_COMMENT_START
JavaScript is a dynamically typed language. It does not have static types.

Types in JavaScript include:
- Number: for both integers and floating-point numbers
- String: for text
- Boolean: for true/false values
- Object: for key-value pairs
- Array: for ordered lists
- Function: for executable functions
- Symbol: for unique identifiers
- null: for absence of value
- undefined: for uninitialized variables
$BLOCK_COMMENT_END
```

## [cotrTypeCompare](/snippets/cotrtypecompare)

JavaScript Type Comparison

```javascript
// Check if two variables have the same type:
if (typeof ${1:variable1} === typeof ${2:variable2}) {
  // Your code here
}
```

## [cotrTypesMap](/snippets/cotrtypesmap)

JavaScript Map Type

```javascript
new Map()
```

## [cotrWhileLoop](/snippets/cotrwhileloop)

JavaScript While Loop

```javascript
while (${1:condition}) {
  ${2:// Your code here}
}
```

## [cotrThrow](/snippets/cotrthrow)

JavaScript Throw Exception

```javascript
throw new Error('Your message here');
```

## [cotrFunc](/snippets/cotrfunc)

JavaScript Function

```javascript
function ${2:myFunction}(${3:parameters}) {
  ${4:// Your code here}
}
```

## [cotrFuncArgs](/snippets/cotrfuncargs)

JavaScript Function Args

```javascript
// In JavaScript, functions can have arguments with default values.
function ${2:myFunction}(${3:arg1}, ${4:arg2} = ${5:defaultValue}) {
  ${6:// Your code here}
}
```

## [cotrTypesNum](/snippets/cotrtypesnum)

JavaScript Number Type

```javascript
let number = $1;
```

## [cotrVar](/snippets/cotrvar)

JavaScript Create Variable

```javascript
let ${1:myVar} = $2;
```

## [cotrSwitch](/snippets/cotrswitch)

JavaScript Switch Statement

```javascript
switch (${1:variable}) {
  case ${2:value1}:
    ${3:// Your code here}
    break;
  case ${4:value2}:
    ${5:// Your code here}
    break;
  default:
    ${6:// Your code here}
}
```

## [cotrComment](/snippets/cotrcomment)

JavaScript Comment

```javascript
// ${1:Your comment here}
```

## [cotrTypesBoolTrue](/snippets/cotrtypesbooltrue)

JavaScript Boolean True

```javascript
true;
```

## [cotrTypesDate](/snippets/cotrtypesdate)

JavaScript Date Type

```javascript
Date
```

## [cotrTypesList](/snippets/cotrtypeslist)

JavaScript List Type

```javascript
[]
```

## [cotrVarMap](/snippets/cotrvarmap)

JavaScript Create Map Variable (Object)

```javascript
let ${1:myObject} = {
  ${2:'key1'}: ${3:'value1'},
  ${4:'key2'}: ${5:'value2'}
};
```

## [cotrPrintMulti](/snippets/cotrprintmulti)

JavaScript Print Multi

```javascript
console.log(`
${1:Line 1}
${2:Line 2}
${3:Line 3}
`);
```

## [cotrFuncArrow](/snippets/cotrfuncarrow)

JavaScript Arrow Function

```javascript
const ${2:myFunction} = (${3:parameters}) => {
  ${4:// Your code here}
};
```

## [cotrNull](/snippets/cotrnull)

JavaScript Null Type

```javascript
null
```

## [cotrVarSyntax](/snippets/cotrvarsyntax)

Variable Declaration Syntax

```javascript
// JavaScript Variable Declaration Syntax:

// - var: (Scope: Function or Global)
//   - Can be reassigned and redeclared within its scope.
//   - Use with caution due to potential scoping issues.

// - let: (Scope: Block)
//   - Can be reassigned but not redeclared within its scope.
//   - Preferred for variables that need to be reassigned.

// - const: (Scope: Block)
//   - Cannot be reassigned or redeclared.
//   - Use for values that should remain constant.

// Note:
// - Use 'let' for most variable declarations.
// - Use 'const' for values that should not change.
```

## [cotrVarNum](/snippets/cotrvarnum)

JavaScript Create Number Variable

```javascript
let ${1:myNumber} = ${2:0};
```

## [cotrEqual](/snippets/cotrequal)

JavaScript Equal To

```javascript
===
```

## [cotrTypesDynamic](/snippets/cotrtypesdynamic)

JavaScript Dynamic Type

```javascript
// There is no specific syntax for declaring a variable with a dynamic type in JavaScript.
```

## [cotrFuncArgsNamed](/snippets/cotrfuncargsnamed)

JavaScript Function Named Args

```javascript
function ${2:myFunction}({${3:arg1}, ${4:arg2}}) {
  ${5:// Your code here}
}
```


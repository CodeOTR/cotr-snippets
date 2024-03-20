---
title: Javascriptreact
description: Javascriptreact snippets on the rocks.
---

## [cotrTypeConvert](/snippets/cotrtypeconvert)

JavaScript Type Conversion

```javascriptreact
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

## [cotrInterpolate](/snippets/cotrinterpolate)

JavaScript Interpolate String

```javascriptreact
let text = `Hello, ${1:name}!`;
```

## [cotrFunc](/snippets/cotrfunc)

JavaScript Function

```javascriptreact
function ${2:myFunction}(${3:parameters}) {
  ${4:// Your code here}
}
```

## [cotrVarMapAlt](/snippets/cotrvarmapalt)

JavaScript Create Map Variable

```javascriptreact
let ${1:myMap} = new Map([
  [${2:'key1'}, ${3:'value1'}],
  [${4:'key2'}, ${5:'value2'}]
]);
```

## [cotrTernary](/snippets/cotrternary)

JavaScript Ternary Operator

```javascriptreact
${1:condition} ? ${2:trueValue} : ${3:falseValue}
```

## [cotrEntry](/snippets/cotrentry)

JavaScript Entry Point

```javascriptreact
// JavaScript Entry Point
// To run this program, use: `node filename.js`

console.log('Hello, World!');
```

## [cotrOperators](/snippets/cotroperators)

JavaScript Mathematical Operators

```javascriptreact
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

## [cotrEqual](/snippets/cotrequal)

JavaScript Equal To

```javascriptreact
===
```

## [cotrTypeCheck](/snippets/cotrtypecheck)

JavaScript Type Check

```javascriptreact
typeof ${1:variable}
```

## [cotrTypesBool](/snippets/cotrtypesbool)

JavaScript Boolean Type

```javascriptreact
let flag = Boolean($1);
```

## [cotrFuncSyntax](/snippets/cotrfuncsyntax)

JavaScript Function Syntax

```javascriptreact
// JavaScript Function Syntax
// Basic function: function functionName(parameters) { ... }
// Function with arguments: function functionName(arg1, arg2, ...) { ... }
// Function with named arguments (using object destructuring): function functionName({arg1, arg2, ...}) { ... }
```

## [cotrOperatorsBool](/snippets/cotroperatorsbool)

JavaScript Boolean Operators

```javascriptreact
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

## [cotrTypesMap](/snippets/cotrtypesmap)

JavaScript Map Type

```javascriptreact
new Map()
```

## [cotrConcat](/snippets/cotrconcat)

JavaScript Concatenate String

```javascriptreact
let text = 'Hello, ' + ${1:name} + '!';
```

## [cotrVarTyped](/snippets/cotrvartyped)

JavaScript Create Typed Variable

```javascriptreact
let ${1:myVar} = $2; // Note: JavaScript is dynamically typed.
```

## [cotrPrint](/snippets/cotrprint)

JavaScript Print

```javascriptreact
console.log(${1:'Your message here'});
```

## [cotrIfElse](/snippets/cotrifelse)

JavaScript If Else Statement

```javascriptreact
if (${1:condition}) {
  ${2:// Your code here}
} else if (${3:condition}) {
  ${4:// Your code here}
} else {
  ${5:// Your code here}
}
```

## [cotrVarStatic](/snippets/cotrvarstatic)

JavaScript Static Variable

```javascriptreact
static ${3:myStaticVar} = ${4:value};

// Access the static variable
// MyClass.${3:myStaticVar}
```

## [cotrGenMap](/snippets/cotrgenmap)

JavaScript Generate Object Map

```javascriptreact
const ${1:myMap} = Object.fromEntries(
  Array.from({ length: ${2:length} }, (_, index) => [`key${index}`, `value${index}`])
);
```

## [cotrFuncArgs](/snippets/cotrfuncargs)

JavaScript Function Args

```javascriptreact
// In JavaScript, functions can have arguments with default values.
function ${2:myFunction}(${3:arg1}, ${4:arg2} = ${5:defaultValue}) {
  ${6:// Your code here}
}
```

## [cotrLambda](/snippets/cotrlambda)

JavaScript Lambda

```javascriptreact
const ${1:myLambda} = (${2:parameters}) => ${3:expression};
```

## [cotrGenList](/snippets/cotrgenlist)

JavaScript Generate Array

```javascriptreact
const ${1:myList} = Array.from({ length: ${2:length} }, (_, index) => ${3:'item'} + index);
```

## [cotrNotEqual](/snippets/cotrnotequal)

JavaScript Not Equal To

```javascriptreact
!==
```

## [cotrTypesInt](/snippets/cotrtypesint)

JavaScript Int Type

```javascriptreact
let integer = Math.floor($1);
```

## [cotrTypesList](/snippets/cotrtypeslist)

JavaScript List Type

```javascriptreact
[]
```

## [cotrPrintMulti](/snippets/cotrprintmulti)

JavaScript Print Multi

```javascriptreact
console.log(`
${1:Line 1}
${2:Line 2}
${3:Line 3}
`);
```

## [cotrTryCatch](/snippets/cotrtrycatch)

JavaScript Try Catch

```javascriptreact
try {
  ${1:// Your code here}
} catch (${2:exception}) {
  ${3:// Your code here}
}
```

## [cotrTypes](/snippets/cotrtypes)

JavaScript Types

```javascriptreact
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

## [cotrTypesNum](/snippets/cotrtypesnum)

JavaScript Number Type

```javascriptreact
let number = $1;
```

## [cotrVarDate](/snippets/cotrvardate)

JavaScript Create Date Variable

```javascriptreact
let ${1:myDate} = new Date(${2:year}, ${3:month} - 1, ${4:day});
```

## [cotrClass](/snippets/cotrclass)

JavaScript Class

```javascriptreact
class ${1:MyClass} {
  ${2:// Your code here}
}
```

## [cotrIf](/snippets/cotrif)

JavaScript If Statement

```javascriptreact
if (${1:condition}) {
  ${2:// Your code here}
}
```

## [cotrVar](/snippets/cotrvar)

JavaScript Create Variable

```javascriptreact
let ${1:myVar} = $2;
```

## [cotrVarNullable](/snippets/cotrvarnullable)

JavaScript Create Nullable Variable

```javascriptreact
let ${1:myVar} = null;
```

## [cotrWhileLoop](/snippets/cotrwhileloop)

JavaScript While Loop

```javascriptreact
while (${1:condition}) {
  ${2:// Your code here}
}
```

## [cotrFuncArrow](/snippets/cotrfuncarrow)

JavaScript Arrow Function

```javascriptreact
const ${2:myFunction} = (${3:parameters}) => {
  ${4:// Your code here}
};
```

## [cotrFuncAnon](/snippets/cotrfuncanon)

JavaScript Anonymous Function

```javascriptreact
function(${1:parameters}) {
  ${2:// Your code here}
};
```

## [cotrTypesDate](/snippets/cotrtypesdate)

JavaScript Date Type

```javascriptreact
Date
```

## [cotrNow](/snippets/cotrnow)

JavaScript Date Now

```javascriptreact
new Date()
```

## [cotrVarSyntax](/snippets/cotrvarsyntax)

Variable Declaration Syntax

```javascriptreact
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

## [cotrConst](/snippets/cotrconst)

JavaScript Create Constant

```javascriptreact
const ${1:myConst} = $2;
```

## [cotrSwitch](/snippets/cotrswitch)

JavaScript Switch Statement

```javascriptreact
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

## [cotrVarMultiString](/snippets/cotrvarmultistring)

JavaScript Create Multi-Line String Variable

```javascriptreact
let ${1:myString} = `
${2:Line 1}
${3:Line 2}
${4:Line 3}
`;
```

## [cotrFuncArgsNamed](/snippets/cotrfuncargsnamed)

JavaScript Function Named Args

```javascriptreact
function ${2:myFunction}({${3:arg1}, ${4:arg2}}) {
  ${5:// Your code here}
}
```

## [cotrTypesDynamic](/snippets/cotrtypesdynamic)

JavaScript Dynamic Type

```javascriptreact
// There is no specific syntax for declaring a variable with a dynamic type in JavaScript.
```

## [cotrVarString](/snippets/cotrvarstring)

JavaScript Create String Variable

```javascriptreact
let ${1:myString} = "${2:Your string here}";
```

## [cotrVarMap](/snippets/cotrvarmap)

JavaScript Create Map Variable (Object)

```javascriptreact
let ${1:myObject} = {
  ${2:'key1'}: ${3:'value1'},
  ${4:'key2'}: ${5:'value2'}
};
```

## [cotrForOfLoop](/snippets/cotrforofloop)

JavaScript For...Of Loop

```javascriptreact
for (const item of ${1:iterable}) {
  ${2:// Your code here}
}
```

## [cotrJSXMultiComment](/snippets/cotrjsxmulticomment)

JSX Multi-Line Comment

```javascriptreact
{/*
 * ${1:Your comment here}
 */}
```

## [cotrTypeCompare](/snippets/cotrtypecompare)

JavaScript Type Comparison

```javascriptreact
// Check if two variables have the same type:
if (typeof ${1:variable1} === typeof ${2:variable2}) {
  // Your code here
}
```

## [cotrTypesString](/snippets/cotrtypesstring)

JavaScript String Type

```javascriptreact
let text = "John Doe";
```

## [cotrVarNum](/snippets/cotrvarnum)

JavaScript Create Number Variable

```javascriptreact
let ${1:myNumber} = ${2:0};
```

## [cotrVarBool](/snippets/cotrvarbool)

JavaScript Create Boolean Variable

```javascriptreact
let ${1:myBoolean} = ${2:true};
```

## [cotrThrow](/snippets/cotrthrow)

JavaScript Throw Exception

```javascriptreact
throw new Error('Your message here');
```

## [cotrInfo](/snippets/cotrinfo)

JavaScript Info

```javascriptreact
Typing: Dynamically typed
Paradigm: Multi-paradigm: event-driven, functional, imperative, prototype-based
Compilation: Interpreted or just-in-time compiled
Concurrency: Event loop model with support for asynchronous programming using callbacks, promises, and async/await
```

## [cotrTypesBoolTrue](/snippets/cotrtypesbooltrue)

JavaScript Boolean True

```javascriptreact
true;
```

## [cotrNull](/snippets/cotrnull)

JavaScript Null Type

```javascriptreact
null
```

## [cotrStructure](/snippets/cotrstructure)

JavaScript with React Project Structure (High-Level)

```javascriptreact
// Recommended High-Level JavaScript with React Project Structure:

// - public/
//   - Contains the HTML file and static assets like images and fonts.

// - src/
//   - App.jsx: The root React component.
//   - index.tsx: Entry point that renders the React app.
//   - /components/
//     - Reusable UI components.
//   - /containers/
//     - Components connected to the Redux store or context providers.
//   - /hooks/
//     - Custom React hooks.
//   - /pages/
//     - Components representing pages or routes.
//   - /utils/
//     - Utility functions and helpers.
//   - /services/
//     - API calls, data fetching, and other services.
//   - /store/
//     - Redux store, actions, and reducers.
//   - /styles/
//     - CSS/SCSS files or styled-components.

// - .env files
//   - Environment-specific configurations.

// - package.json
//   - Project metadata and dependencies.

// Note:
// - This structure is common for larger React applications and can be scaled according to the project size.
// - Smaller projects might not need separate directories for hooks, services, or containers.
```

## [cotrTypesBoolFalse](/snippets/cotrtypesboolfalse)

JavaScript Boolean False

```javascriptreact
false;
```

## [cotrVarList](/snippets/cotrvarlist)

JavaScript Create Array Variable

```javascriptreact
let ${1:myList} = [${2:'item1'}, ${3:'item2'}];
```

## [cotrForLoop](/snippets/cotrforloop)

JavaScript For Loop

```javascriptreact
for (let ${1:i} = 0; $1 < ${2:10}; $1++) {
  // Your code here
}
```

## [cotrJSXComment](/snippets/cotrjsxcomment)

JSX Comment

```javascriptreact
{/* ${1:Your comment here} */}
```


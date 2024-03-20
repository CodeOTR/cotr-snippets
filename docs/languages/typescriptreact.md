---
title: Typescriptreact
description: Typescriptreact snippets on the rocks.
---

## [cotrEntry](/snippets/cotrentry)

TypeScript Entry Point

```typescriptreact
// TypeScript Entry Point
// To run this program, use: `ts-node filename.ts`
// Note: Ensure you have ts-node installed globally (`npm install -g ts-node`)

console.log('Hello, World!');
```

## [cotrNotEqual](/snippets/cotrnotequal)

TypeScript Not Equal To

```typescriptreact
!==
```

## [cotrTypesBoolFalse](/snippets/cotrtypesboolfalse)

TypeScript Boolean False

```typescriptreact
false
```

## [cotrAny](/snippets/cotrany)

TypeScript Dynamic Type

```typescriptreact
any
```

## [cotrVar](/snippets/cotrvar)

TypeScript Create Variable

```typescriptreact
let ${1:myVar} = $2;
```

## [cotrSwitch](/snippets/cotrswitch)

TypeScript Switch Statement

```typescriptreact
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

## [cotrFuncArrow](/snippets/cotrfuncarrow)

TypeScript Arrow Function

```typescriptreact
const ${2:myFunction} = (${3:parameters}): ${1:void} => {
  ${4:// Your code here}
};
```

## [cotrTernary](/snippets/cotrternary)

TypeScript Ternary Operator

```typescriptreact
${1:condition} ? ${2:trueValue} : ${3:falseValue}
```

## [cotrOperatorsBool](/snippets/cotroperatorsbool)

TypeScript Boolean Operators

```typescriptreact
// TypeScript Boolean Operators
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

## [cotrGenMap](/snippets/cotrgenmap)

TypeScript Generate Object Map

```typescriptreact
const ${1:myMap} = Object.fromEntries(
  Array.from({ length: ${2:length} }, (_, index) => [`key${index}`, `value${index}`])
);
```

## [cotrTypesNum](/snippets/cotrtypesnum)

TypeScript Number Type

```typescriptreact
number
```

## [cotrVarString](/snippets/cotrvarstring)

TypeScript Create String Variable

```typescriptreact
let ${1:myString}: string = ${2:'myValue'};
```

## [cotrVarMapClass](/snippets/cotrvarmapclass)

TypeScript Create Map Variable (Map Class)

```typescriptreact
let ${1:myMap} = new Map<string, ${2:type}>([
  ['${3:key1}', ${4:'value1'}],
  ['${5:key2}', ${6:'value2}']
]);
```

## [cotrFunc](/snippets/cotrfunc)

TypeScript Function

```typescriptreact
function ${2:myFunction}(${3:parameters}): ${1:void} {
  ${4:// Your code here}
}
```

## [cotrCommentMulti](/snippets/cotrcommentmulti)

TSX Multi-Line Comment

```typescriptreact
{/*
  ${1:Your comment here}
  ${2:Your comment here}
  ${3:Your comment here}
*/}
```

## [cotrTypeConvert](/snippets/cotrtypeconvert)

TypeScript Type Conversion

```typescriptreact
// TypeScript Type Conversion:

// Implicit conversions (TypeScript performs automatically):
// - Can be unpredictable, especially with loose equality (==).

// Explicit conversions:
// - variable as Type  // Type assertion (can throw an error if conversion fails)
// - <Type>variable  // Type casting (can throw an error if conversion fails)

// Note:
// - Be aware of implicit conversions and use explicit conversions when necessary for clarity and control.
```

## [cotrVarDate](/snippets/cotrvardate)

TypeScript Create Date Variable

```typescriptreact
let ${1:myDate}: Date = new Date(${2:year}, ${3:month} - 1, ${4:day});
```

## [cotrPrintMulti](/snippets/cotrprintmulti)

TypeScript Print Multi

```typescriptreact
console.log(`
${1:Line 1}
${2:Line 2}
${3:Line 3}
`);
```

## [cotrVarNullable](/snippets/cotrvarnullable)

TypeScript Create Nullable Variable

```typescriptreact
let ${1:myVar}: ${2:Type} | null = $3;
```

## [cotrFuncArgs](/snippets/cotrfuncargs)

TypeScript Function Args

```typescriptreact
// In TypeScript, functions can have arguments with default values.
function ${2:myFunction}(${3:arg1}: ${4:type1}, ${5:arg2}: ${6:type2} = ${7:defaultValue}): ${1:void} {
  ${8:// Your code here}
}
```

## [cotrTypesBoolTrue](/snippets/cotrtypesbooltrue)

TypeScript Boolean True

```typescriptreact
true
```

## [cotrTypesList](/snippets/cotrtypeslist)

TypeScript List Type

```typescriptreact
Array<${1:Type}>
```

## [cotrVarBool](/snippets/cotrvarbool)

TypeScript Create Boolean Variable

```typescriptreact
let ${1:myBoolean}: boolean = ${2:true};
```

## [cotrComment](/snippets/cotrcomment)

TSX Comment

```typescriptreact
{/* ${1:Your comment here} */}
```

## [cotrTypesBool](/snippets/cotrtypesbool)

TypeScript Boolean Type

```typescriptreact
boolean
```

## [cotrVarNumber](/snippets/cotrvarnumber)

TypeScript Create Number Variable

```typescriptreact
let ${1:myNumber}: number = ${2:0};
```

## [cotrVarStatic](/snippets/cotrvarstatic)

TypeScript Static Variable

```typescriptreact
static ${3:myStaticVar}: ${2:type} = ${4:value};

// Access the static variable
// MyClass.${3:myStaticVar}
```

## [cotrFuncArgsNamed](/snippets/cotrfuncargsnamed)

TypeScript Function Named Args

```typescriptreact
function ${2:myFunction}({${3:arg1}, ${4:arg2}}: {${3:arg1}: ${5:type1}, ${4:arg2}: ${6:type2}}): ${1:void} {
  ${7:// Your code here}
}
```

## [cotrIfElse](/snippets/cotrifelse)

TypeScript If Else Statement

```typescriptreact
if (${1:condition}) {
  ${2:// Your code here}
} else if (${3:condition}) {
  ${4:// Your code here}
} else {
  ${5:// Your code here}
}
```

## [cotrEqual](/snippets/cotrequal)

TypeScript Equal To

```typescriptreact
===
```

## [cotrTypeCheck](/snippets/cotrtypecheck)

TypeScript Type Check

```typescriptreact
typeof ${1:variable}  // Note: This checks the runtime type.
```

## [cotrTypesString](/snippets/cotrtypesstring)

TypeScript String Type

```typescriptreact
string
```

## [cotrGenList](/snippets/cotrgenlist)

TypeScript Generate Array

```typescriptreact
const ${1:myList} = Array.from({ length: ${2:length} }, (_, index) => ${3:'item'} + index);
```

## [cotrTryCatch](/snippets/cotrtrycatch)

TSX Try Catch

```typescriptreact
try {
  ${1:// Your code here}
} catch (${2:exception}) {
  ${3:// Your code here}
}
```

## [cotrIf](/snippets/cotrif)

TypeScript If Statement

```typescriptreact
if (${1:condition}) {
  ${2:// Your code here}
}
```

## [cotrNull](/snippets/cotrnull)

TypeScript Null Type

```typescriptreact
null
```

## [cotrVarTyped](/snippets/cotrvartyped)

TypeScript Create Typed Variable

```typescriptreact
let ${1:myVar}: ${2:Type} = $3;
```

## [cotrVarList](/snippets/cotrvarlist)

TypeScript Create List Variable

```typescriptreact
let ${1:myList}: ${2:type}[] = [
  ${3:'item1'},
  ${4:'item2'},
  // Add more items here
];
```

## [cotrForOfLoop](/snippets/cotrforofloop)

TypeScript For...Of Loop

```typescriptreact
for (const item of ${1:iterable}) {
  ${2:// Your code here}
}
```

## [cotrThrow](/snippets/cotrthrow)

TSX Throw Exception

```typescriptreact
throw new Error('Your message here');
```

## [cotrTypes](/snippets/cotrtypes)

TypeScript Types

```typescriptreact
$BLOCK_COMMENT_START
Basic types in TypeScript:
- number: Numeric data type
- string: Textual data type
- boolean: True or false value
- array: Array of values
- tuple: Fixed-length array of values
- enum: Enumeration of named values
- any: Any data type
- void: Absence of a value
- null: Null value
- undefined: Undefined value
- never: Represents values that never occur
- object: Non-primitive data type
$BLOCK_COMMENT_END
```

## [cotrVarSyntax](/snippets/cotrvarsyntax)

Variable Declaration Syntax

```typescriptreact
// TypeScript Variable Declaration Syntax:

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

## [cotrVarStringMulti](/snippets/cotrvarstringmulti)

TypeScript Create Multi-Line String Variable

```typescriptreact
let ${1:myString}: string = `
${2:Line 1}
${3:Line 2}
${4:Line 3}
`;
```

## [cotrConst](/snippets/cotrconst)

TypeScript Create Constant

```typescriptreact
const ${1:myConst} = $2;
```

## [cotrForLoop](/snippets/cotrforloop)

TypeScript For Loop

```typescriptreact
for (let ${1:i} = 0; $1 < ${2:10}; $1++) {
  // Your code here
}
```

## [cotrWhileLoop](/snippets/cotrwhileloop)

TypeScript While Loop

```typescriptreact
while (${1:condition}) {
  ${2:// Your code here}
}
```

## [cotrOperators](/snippets/cotroperators)

TypeScript Mathematical Operators

```typescriptreact
// TypeScript Mathematical Operators
// Addition: +
// Subtraction: -
// Multiplication: *
// Division: /
// Modulus (Remainder): %
// Exponentiation: **
// Increment: Use ++ or +=
// Decrement: Use -- or -=
// Assignment: =
// Addition assignment: +=
// Subtraction assignment: -=
// Multiplication assignment: *=
// Division assignment: /=
// Modulus assignment: %=
// Exponentiation assignment: **=
```

## [cotrTypeCompare](/snippets/cotrtypecompare)

TypeScript Type Comparison

```typescriptreact
// Check if two variables have the same type:
if (typeof ${1:variable1} === typeof ${2:variable2}) {
  // Your code here
}
```

## [cotrTypesDate](/snippets/cotrtypesdate)

TypeScript Date Type

```typescriptreact
Date
```

## [cotrNow](/snippets/cotrnow)

TypeScript Date Now

```typescriptreact
new Date()
```

## [cotrInterpolate](/snippets/cotrinterpolate)

TypeScript Interpolate String

```typescriptreact
`Hello, ${1:name}!`
```

## [cotrClass](/snippets/cotrclass)

TypeScript Class

```typescriptreact
class ${1:MyClass} {
  ${2:// Your code here}
}
```

## [cotrStructure](/snippets/cotrstructure)

TypeScript with React Project Structure (High-Level)

```typescriptreact
// Recommended High-Level TypeScript with React Project Structure:

// - public/
//   - Contains the HTML file and static assets like images and fonts.

// - src/
//   - App.tsx: The root React component.
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

// - tsconfig.json
//   - Configuration for the TypeScript compiler.

// - package.json
//   - Project metadata and dependencies.

// Note:
// - This structure is common for larger React applications and can be scaled according to the project size.
// - Smaller projects might not need separate directories for hooks, services, or containers.
```

## [cotrTypesMap](/snippets/cotrtypesmap)

TypeScript Map Type

```typescriptreact
Map<${1:KeyType}, ${2:ValueType}>
```

## [cotrConcat](/snippets/cotrconcat)

TypeScript Concatenate Strings

```typescriptreact
'Hello, ' + ${1:name} + '!'
```

## [cotrVarMap](/snippets/cotrvarmap)

TypeScript Create Map Variable

```typescriptreact
let ${1:myMap}: { [key: string]: ${2:type} } = {
  ${3:'key1'}: ${4:'value1'},
  ${5:'key2'}: ${6:'value2'},
  // Add more key-value pairs here
};
```

## [cotrFuncLambda](/snippets/cotrfunclambda)

TypeScript Lambda

```typescriptreact
const ${1:myLambda} = (${2:parameters}) => ${3:expression};
```

## [cotrFuncSyntax](/snippets/cotrfuncsyntax)

TypeScript Function Syntax

```typescriptreact
// TypeScript Function Syntax
// Basic function: function functionName(parameters): ReturnType { ... }
// Function with arguments: function functionName(arg1: Type1, arg2: Type2, ...): ReturnType { ... }
// Function with named arguments: function functionName({arg1, arg2, ...}: {arg1: Type1, arg2: Type2, ...}): ReturnType { ... }
```

## [cotrInfo](/snippets/cotrinfo)

TypeScript Info

```typescriptreact
Typing: Statically typed (superset of JavaScript)
Paradigm: Multi-paradigm: event-driven, functional, imperative, object-oriented
Compilation: Transpiled to JavaScript
Concurrency: Inherits JavaScript's event loop model for asynchronous programming
```

## [cotrPrint](/snippets/cotrprint)

TypeScript Print

```typescriptreact
console.log(${1:'Your message here'});
```

## [cotrFuncAnon](/snippets/cotrfuncanon)

TypeScript Anonymous Function

```typescriptreact
(${1:parameters}): ${2:void} => {
  ${3:// Your code here}
};
```

## [cotrEnum](/snippets/cotrenum)

TypeScript Enum

```typescriptreact
enum ${1:MyEnum} {
  ${2:value1},
  ${3:value2},
  // Add more values here
}
```


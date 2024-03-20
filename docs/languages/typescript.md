---
title: Typescript
description: Typescript snippets on the rocks.
---

## [cotrVar](/snippets/cotrvar)

TypeScript Create Variable

```typescript
let ${1:myVar} = $2;
```

## [cotrVarNullable](/snippets/cotrvarnullable)

TypeScript Create Nullable Variable

```typescript
let ${1:myVar}: ${2:Type} | null = $3;
```

## [cotrVarMapClass](/snippets/cotrvarmapclass)

TypeScript Create Map Variable (Map Class)

```typescript
let ${1:myMap} = new Map<string, ${2:type}>([
  ['${3:key1}', ${4:'value1'}],
  ['${5:key2}', ${6:'value2}']
]);
```

## [cotrPrintMulti](/snippets/cotrprintmulti)

TypeScript Print Multi

```typescript
console.log(`
${1:Line 1}
${2:Line 2}
${3:Line 3}
`);
```

## [cotrTernary](/snippets/cotrternary)

TypeScript Ternary Operator

```typescript
${1:condition} ? ${2:trueValue} : ${3:falseValue}
```

## [cotrTypeCheck](/snippets/cotrtypecheck)

TypeScript Type Check

```typescript
typeof ${1:variable}  // Note: This checks the runtime type.
```

## [cotrVarStatic](/snippets/cotrvarstatic)

TypeScript Static Variable

```typescript
static ${3:myStaticVar}: ${2:type} = ${4:value};

// Access the static variable
// MyClass.${3:myStaticVar}
```

## [cotrWhileLoop](/snippets/cotrwhileloop)

TypeScript While Loop

```typescript
while (${1:condition}) {
  ${2:// Your code here}
}
```

## [cotrTypes](/snippets/cotrtypes)

TypeScript Types

```typescript
$BLOCK_COMMENT_START
TypeScript is a statically typed language.

Types in TypeScript include:
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

## [cotrConcat](/snippets/cotrconcat)

TypeScript Concatenate Strings

```typescript
'Hello, ' + ${1:name} + '!'
```

## [cotrSwitch](/snippets/cotrswitch)

TypeScript Switch Statement

```typescript
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

## [cotrEnum](/snippets/cotrenum)

TypeScript Enum

```typescript
enum ${1:MyEnum} {
  ${2:value1},
  ${3:value2},
  // Add more values here
}
```

## [cotrOperatorsBool](/snippets/cotroperatorsbool)

TypeScript Boolean Operators

```typescript
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

## [cotrVarNumber](/snippets/cotrvarnumber)

TypeScript Create Number Variable

```typescript
let ${1:myNumber}: number = ${2:0};
```

## [cotrOperators](/snippets/cotroperators)

TypeScript Mathematical Operators

```typescript
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

## [cotrTypesBool](/snippets/cotrtypesbool)

TypeScript Boolean Type

```typescript
boolean
```

## [cotrTypesBoolFalse](/snippets/cotrtypesboolfalse)

TypeScript Boolean False

```typescript
false
```

## [cotrForLoop](/snippets/cotrforloop)

TypeScript For Loop

```typescript
for (let ${1:i} = 0; $1 < ${2:10}; $1++) {
  // Your code here
}
```

## [cotrTypeCompare](/snippets/cotrtypecompare)

TypeScript Type Comparison

```typescript
// Check if two variables have the same type:
if (typeof ${1:variable1} === typeof ${2:variable2}) {
  // Your code here
}
```

## [cotrThrow](/snippets/cotrthrow)

TypeScript Throw Exception

```typescript
throw new Error('Your message here');
```

## [cotrTypeConvert](/snippets/cotrtypeconvert)

TypeScript Type Conversion

```typescript
// TypeScript Type Conversion:

// Implicit conversions (TypeScript performs automatically):
// - Can be unpredictable, especially with loose equality (==).

// Explicit conversions:
// - variable as Type  // Type assertion (can throw an error if conversion fails)
// - <Type>variable  // Type casting (can throw an error if conversion fails)

// Note:
// - Be aware of implicit conversions and use explicit conversions when necessary for clarity and control.
```

## [cotrVarMap](/snippets/cotrvarmap)

TypeScript Create Map Variable

```typescript
let ${1:myMap}: { [key: string]: ${2:type} } = {
  ${3:'key1'}: ${4:'value1'},
  ${5:'key2'}: ${6:'value2'},
  // Add more key-value pairs here
};
```

## [cotrGenMap](/snippets/cotrgenmap)

TypeScript Generate Object Map

```typescript
const ${1:myMap} = Object.fromEntries(
  Array.from({ length: ${2:length} }, (_, index) => [`key${index}`, `value${index}`])
);
```

## [cotrFuncArgsNamed](/snippets/cotrfuncargsnamed)

TypeScript Function Named Args

```typescript
function ${2:myFunction}({${3:arg1}, ${4:arg2}}: {${3:arg1}: ${5:type1}, ${4:arg2}: ${6:type2}}): ${1:void} {
  ${7:// Your code here}
}
```

## [cotrIf](/snippets/cotrif)

TypeScript If Statement

```typescript
if (${1:condition}) {
  ${2:// Your code here}
}
```

## [cotrTypesBoolTrue](/snippets/cotrtypesbooltrue)

TypeScript Boolean True

```typescript
true
```

## [cotrNow](/snippets/cotrnow)

TypeScript Date Now

```typescript
new Date()
```

## [cotrVarString](/snippets/cotrvarstring)

TypeScript Create String Variable

```typescript
let ${1:myString}: string = ${2:'myValue'};
```

## [cotrFuncArrow](/snippets/cotrfuncarrow)

TypeScript Arrow Function

```typescript
const ${2:myFunction} = (${3:parameters}): ${1:void} => {
  ${4:// Your code here}
};
```

## [cotrComment](/snippets/cotrcomment)

TypeScript Comment

```typescript
// ${1:Your comment here}
```

## [cotrInterpolate](/snippets/cotrinterpolate)

TypeScript Interpolate String

```typescript
`Hello, ${1:name}!`
```

## [cotrVarDate](/snippets/cotrvardate)

TypeScript Create Date Variable

```typescript
let ${1:myDate}: Date = new Date(${2:year}, ${3:month} - 1, ${4:day});
```

## [cotrTryCatch](/snippets/cotrtrycatch)

TypeScript Try Catch

```typescript
try {
  ${1:// Your code here}
} catch (${2:exception}) {
  ${3:// Your code here}
}
```

## [cotrStructure](/snippets/cotrstructure)

TypeScript Project Structure (High-Level)

```typescript
// Recommended High-Level TypeScript Project Structure:

// - src/
//   - Contains the TypeScript source files.
//   - Organize code into modules or features.

// - dist/
//   - Contains the compiled JavaScript files.
//   - This directory is generated after transpilation.

// - tests/
//   - Contains test files, often mirroring the structure of the src/ directory.

// - node_modules/
//   - Contains all the npm dependencies.

// - package.json
//   - Manages project metadata, scripts, and dependencies.

// - tsconfig.json
//   - Configuration for the TypeScript compiler.

// - .gitignore
//   - Specifies intentionally untracked files to ignore.

// - README.md
//   - Project overview, setup instructions, and other essential information.

// Note:
// - Adjust the structure as needed based on project size and complexity.
// - Consider separate directories for assets, styles, or utilities if necessary.
```

## [cotrConst](/snippets/cotrconst)

TypeScript Create Constant

```typescript
const ${1:myConst} = $2;
```

## [cotrFunc](/snippets/cotrfunc)

TypeScript Function

```typescript
function ${2:myFunction}(${3:parameters}): ${1:void} {
  ${4:// Your code here}
}
```

## [cotrFuncLambda](/snippets/cotrfunclambda)

TypeScript Lambda

```typescript
const ${1:myLambda} = (${2:parameters}) => ${3:expression};
```

## [cotrTypesString](/snippets/cotrtypesstring)

TypeScript String Type

```typescript
string
```

## [cotrTypesList](/snippets/cotrtypeslist)

TypeScript List Type

```typescript
Array<${1:Type}>
```

## [cotrFuncAnon](/snippets/cotrfuncanon)

TypeScript Anonymous Function

```typescript
(${1:parameters}): ${2:void} => {
  ${3:// Your code here}
};
```

## [cotrInfo](/snippets/cotrinfo)

TypeScript Info

```typescript
Typing: Statically typed (superset of JavaScript)
Paradigm: Multi-paradigm: event-driven, functional, imperative, object-oriented
Compilation: Transpiled to JavaScript
Concurrency: Inherits JavaScript's event loop model for asynchronous programming
```

## [cotrAny](/snippets/cotrany)

TypeScript Dynamic Type

```typescript
any
```

## [cotrVarSyntax](/snippets/cotrvarsyntax)

Variable Declaration Syntax

```typescript
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

## [cotrVarTyped](/snippets/cotrvartyped)

TypeScript Create Typed Variable

```typescript
let ${1:myVar}: ${2:Type} = $3;
```

## [cotrGenList](/snippets/cotrgenlist)

TypeScript Generate Array

```typescript
const ${1:myList} = Array.from({ length: ${2:length} }, (_, index) => ${3:'item'} + index);
```

## [cotrEntry](/snippets/cotrentry)

TypeScript Entry Point

```typescript
// TypeScript Entry Point
// To run this program, use: `ts-node filename.ts`
// Note: Ensure you have ts-node installed globally (`npm install -g ts-node`)

console.log('Hello, World!');
```

## [cotrNotEqual](/snippets/cotrnotequal)

TypeScript Not Equal To

```typescript
!==
```

## [cotrTypesNum](/snippets/cotrtypesnum)

TypeScript Number Type

```typescript
number
```

## [cotrNull](/snippets/cotrnull)

TypeScript Null Type

```typescript
null
```

## [cotrForOfLoop](/snippets/cotrforofloop)

TypeScript For...Of Loop

```typescript
for (const item of ${1:iterable}) {
  ${2:// Your code here}
}
```

## [cotrCommentMulti](/snippets/cotrcommentmulti)

TypeScript Multi-Line Comment

```typescript
/*
 * ${1:Your comment here}
 */
```

## [cotrClass](/snippets/cotrclass)

TypeScript Class

```typescript
class ${1:MyClass} {
  ${2:// Your code here}
}
```

## [cotrEqual](/snippets/cotrequal)

TypeScript Equal To

```typescript
===
```

## [cotrTypesDate](/snippets/cotrtypesdate)

TypeScript Date Type

```typescript
Date
```

## [cotrTypesMap](/snippets/cotrtypesmap)

TypeScript Map Type

```typescript
Map<${1:KeyType}, ${2:ValueType}>
```

## [cotrVarStringMulti](/snippets/cotrvarstringmulti)

TypeScript Create Multi-Line String Variable

```typescript
let ${1:myString}: string = `
${2:Line 1}
${3:Line 2}
${4:Line 3}
`;
```

## [cotrVarBool](/snippets/cotrvarbool)

TypeScript Create Boolean Variable

```typescript
let ${1:myBoolean}: boolean = ${2:true};
```

## [cotrIfElse](/snippets/cotrifelse)

TypeScript If Else Statement

```typescript
if (${1:condition}) {
  ${2:// Your code here}
} else if (${3:condition}) {
  ${4:// Your code here}
} else {
  ${5:// Your code here}
}
```

## [cotrVarList](/snippets/cotrvarlist)

TypeScript Create List Variable

```typescript
let ${1:myList}: ${2:type}[] = [${3:'item1'}, ${4:'item2'}];
```

## [cotrPrint](/snippets/cotrprint)

TypeScript Print

```typescript
console.log(${1:'Your message here'});
```

## [cotrFuncArgs](/snippets/cotrfuncargs)

TypeScript Function Args

```typescript
// In TypeScript, functions can have arguments with default values.
function ${2:myFunction}(${3:arg1}: ${4:type1}, ${5:arg2}: ${6:type2} = ${7:defaultValue}): ${1:void} {
  ${8:// Your code here}
}
```

## [cotrFuncSyntax](/snippets/cotrfuncsyntax)

TypeScript Function Syntax

```typescript
// TypeScript Function Syntax
// Basic function: function functionName(parameters): ReturnType { ... }
// Function with arguments: function functionName(arg1: Type1, arg2: Type2, ...): ReturnType { ... }
// Function with named arguments: function functionName({arg1, arg2, ...}: {arg1: Type1, arg2: Type2, ...}): ReturnType { ... }
```


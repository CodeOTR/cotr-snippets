## TypeScript List Type

### [cotrTypesList](/snippets/cotrTypesList)

```typescript
Array<${1:Type}>
```

## TypeScript Create Map Variable

### [cotrVarMap](/snippets/cotrVarMap)

```typescript
let ${1:myMap}: { [key: string]: ${2:type} } = {
  ${3:'key1'}: ${4:'value1'},
  ${5:'key2'}: ${6:'value2'},
  // Add more key-value pairs here
};
```

## TypeScript Create Map Variable (Map Class)

### [cotrVarMapClass](/snippets/cotrVarMapClass)

```typescript
let ${1:myMap} = new Map<string, ${2:type}>([
  ['${3:key1}', ${4:'value1'}],
  ['${5:key2}', ${6:'value2}']
]);
```

## TypeScript Boolean True

### [cotrTypesBoolTrue](/snippets/cotrTypesBoolTrue)

```typescript
true
```

## TypeScript Create Variable

### [cotrVar](/snippets/cotrVar)

```typescript
let ${1:myVar} = $2;
```

## TypeScript Try Catch

### [cotrTryCatch](/snippets/cotrTryCatch)

```typescript
try {
  ${1:// Your code here}
} catch (${2:exception}) {
  ${3:// Your code here}
}
```

## TypeScript Type Conversion

### [cotrTypeConvert](/snippets/cotrTypeConvert)

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

## TypeScript Type Check

### [cotrTypeCheck](/snippets/cotrTypeCheck)

```typescript
typeof ${1:variable}  // Note: This checks the runtime type.
```

## TypeScript Date Type

### [cotrTypesDate](/snippets/cotrTypesDate)

```typescript
Date
```

## TypeScript Create Number Variable

### [cotrVarNumber](/snippets/cotrVarNumber)

```typescript
let ${1:myNumber}: number = ${2:0};
```

## TypeScript Entry Point

### [cotrEntry](/snippets/cotrEntry)

```typescript
// TypeScript Entry Point
// To run this program, use: `ts-node filename.ts`
// Note: Ensure you have ts-node installed globally (`npm install -g ts-node`)

console.log('Hello, World!');
```

## TypeScript Switch Statement

### [cotrSwitch](/snippets/cotrSwitch)

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

## TypeScript Function Named Args

### [cotrFuncArgsNamed](/snippets/cotrFuncArgsNamed)

```typescript
function ${2:myFunction}({${3:arg1}, ${4:arg2}}: {${3:arg1}: ${5:type1}, ${4:arg2}: ${6:type2}}): ${1:void} {
  ${7:// Your code here}
}
```

## TypeScript Types

### [cotrTypes](/snippets/cotrTypes)

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

## TypeScript Create String Variable

### [cotrVarString](/snippets/cotrVarString)

```typescript
let ${1:myString}: string = ${2:'myValue'};
```

## TypeScript Function Args

### [cotrFuncArgs](/snippets/cotrFuncArgs)

```typescript
// In TypeScript, functions can have arguments with default values.
function ${2:myFunction}(${3:arg1}: ${4:type1}, ${5:arg2}: ${6:type2} = ${7:defaultValue}): ${1:void} {
  ${8:// Your code here}
}
```

## TypeScript Boolean Type

### [cotrTypesBool](/snippets/cotrTypesBool)

```typescript
boolean
```

## TypeScript Generate Object Map

### [cotrGenMap](/snippets/cotrGenMap)

```typescript
const ${1:myMap} = Object.fromEntries(
  Array.from({ length: ${2:length} }, (_, index) => [`key${index}`, `value${index}`])
);
```

## TypeScript Print Multi

### [cotrPrintMulti](/snippets/cotrPrintMulti)

```typescript
console.log(`
${1:Line 1}
${2:Line 2}
${3:Line 3}
`);
```

## TypeScript Lambda

### [cotrFuncLambda](/snippets/cotrFuncLambda)

```typescript
const ${1:myLambda} = (${2:parameters}) => ${3:expression};
```

## TypeScript Enum

### [cotrEnum](/snippets/cotrEnum)

```typescript
enum ${1:MyEnum} {
  ${2:value1},
  ${3:value2},
  // Add more values here
}
```

## TypeScript Boolean False

### [cotrTypesBoolFalse](/snippets/cotrTypesBoolFalse)

```typescript
false
```

## TypeScript Create Constant

### [cotrConst](/snippets/cotrConst)

```typescript
const ${1:myConst} = $2;
```

## TypeScript For...Of Loop

### [cotrForOfLoop](/snippets/cotrForOfLoop)

```typescript
for (const item of ${1:iterable}) {
  ${2:// Your code here}
}
```

## TypeScript Anonymous Function

### [cotrFuncAnon](/snippets/cotrFuncAnon)

```typescript
(${1:parameters}): ${2:void} => {
  ${3:// Your code here}
};
```

## TypeScript Comment

### [cotrComment](/snippets/cotrComment)

```typescript
// ${1:Your comment here}
```

## TypeScript String Type

### [cotrTypesString](/snippets/cotrTypesString)

```typescript
string
```

## TypeScript Create List Variable

### [cotrVarList](/snippets/cotrVarList)

```typescript
let ${1:myList}: ${2:type}[] = [${3:'item1'}, ${4:'item2'}];
```

## TypeScript Multi-Line Comment

### [cotrCommentMulti](/snippets/cotrCommentMulti)

```typescript
/*
 * ${1:Your comment here}
 */
```

## TypeScript Date Now

### [cotrNow](/snippets/cotrNow)

```typescript
new Date()
```

## TypeScript Null Type

### [cotrNull](/snippets/cotrNull)

```typescript
null
```

## TypeScript Create Boolean Variable

### [cotrVarBool](/snippets/cotrVarBool)

```typescript
let ${1:myBoolean}: boolean = ${2:true};
```

## TypeScript Info

### [cotrInfo](/snippets/cotrInfo)

```typescript
Typing: Statically typed (superset of JavaScript)
Paradigm: Multi-paradigm: event-driven, functional, imperative, object-oriented
Compilation: Transpiled to JavaScript
Concurrency: Inherits JavaScript's event loop model for asynchronous programming
```

## TypeScript Map Type

### [cotrTypesMap](/snippets/cotrTypesMap)

```typescript
Map<${1:KeyType}, ${2:ValueType}>
```

## TypeScript Interpolate String

### [cotrInterpolate](/snippets/cotrInterpolate)

```typescript
`Hello, ${1:name}!`
```

## TypeScript Create Multi-Line String Variable

### [cotrVarStringMulti](/snippets/cotrVarStringMulti)

```typescript
let ${1:myString}: string = `
${2:Line 1}
${3:Line 2}
${4:Line 3}
`;
```

## TypeScript Mathematical Operators

### [cotrOperators](/snippets/cotrOperators)

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

## TypeScript Boolean Operators

### [cotrOperatorsBool](/snippets/cotrOperatorsBool)

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

## TypeScript Type Comparison

### [cotrTypeCompare](/snippets/cotrTypeCompare)

```typescript
// Check if two variables have the same type:
if (typeof ${1:variable1} === typeof ${2:variable2}) {
  // Your code here
}
```

## TypeScript Create Typed Variable

### [cotrVarTyped](/snippets/cotrVarTyped)

```typescript
let ${1:myVar}: ${2:Type} = $3;
```

## TypeScript Create Nullable Variable

### [cotrVarNullable](/snippets/cotrVarNullable)

```typescript
let ${1:myVar}: ${2:Type} | null = $3;
```

## TypeScript If Statement

### [cotrIf](/snippets/cotrIf)

```typescript
if (${1:condition}) {
  ${2:// Your code here}
}
```

## TypeScript Not Equal To

### [cotrNotEqual](/snippets/cotrNotEqual)

```typescript
!==
```

## TypeScript Generate Array

### [cotrGenList](/snippets/cotrGenList)

```typescript
const ${1:myList} = Array.from({ length: ${2:length} }, (_, index) => ${3:'item'} + index);
```

## TypeScript Static Variable

### [cotrVarStatic](/snippets/cotrVarStatic)

```typescript
static ${3:myStaticVar}: ${2:type} = ${4:value};

// Access the static variable
// MyClass.${3:myStaticVar}
```

## TypeScript For Loop

### [cotrForLoop](/snippets/cotrForLoop)

```typescript
for (let ${1:i} = 0; $1 < ${2:10}; $1++) {
  // Your code here
}
```

## TypeScript Number Type

### [cotrTypesNum](/snippets/cotrTypesNum)

```typescript
number
```

## TypeScript Concatenate Strings

### [cotrConcat](/snippets/cotrConcat)

```typescript
'Hello, ' + ${1:name} + '!'
```

## TypeScript While Loop

### [cotrWhileLoop](/snippets/cotrWhileLoop)

```typescript
while (${1:condition}) {
  ${2:// Your code here}
}
```

## TypeScript Function

### [cotrFunc](/snippets/cotrFunc)

```typescript
function ${2:myFunction}(${3:parameters}): ${1:void} {
  ${4:// Your code here}
}
```

## TypeScript Arrow Function

### [cotrFuncArrow](/snippets/cotrFuncArrow)

```typescript
const ${2:myFunction} = (${3:parameters}): ${1:void} => {
  ${4:// Your code here}
};
```

## TypeScript Function Syntax

### [cotrFuncSyntax](/snippets/cotrFuncSyntax)

```typescript
// TypeScript Function Syntax
// Basic function: function functionName(parameters): ReturnType { ... }
// Function with arguments: function functionName(arg1: Type1, arg2: Type2, ...): ReturnType { ... }
// Function with named arguments: function functionName({arg1, arg2, ...}: {arg1: Type1, arg2: Type2, ...}): ReturnType { ... }
```

## TypeScript If Else Statement

### [cotrIfElse](/snippets/cotrIfElse)

```typescript
if (${1:condition}) {
  ${2:// Your code here}
} else if (${3:condition}) {
  ${4:// Your code here}
} else {
  ${5:// Your code here}
}
```

## TypeScript Dynamic Type

### [cotrAny](/snippets/cotrAny)

```typescript
any
```

## Variable Declaration Syntax

### [cotrVarSyntax](/snippets/cotrVarSyntax)

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

## TypeScript Print

### [cotrPrint](/snippets/cotrPrint)

```typescript
console.log(${1:'Your message here'});
```

## TypeScript Throw Exception

### [cotrThrow](/snippets/cotrThrow)

```typescript
throw new Error('Your message here');
```

## TypeScript Class

### [cotrClass](/snippets/cotrClass)

```typescript
class ${1:MyClass} {
  ${2:// Your code here}
}
```

## TypeScript Project Structure (High-Level)

### [cotrStructure](/snippets/cotrStructure)

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

## TypeScript Create Date Variable

### [cotrVarDate](/snippets/cotrVarDate)

```typescript
let ${1:myDate}: Date = new Date(${2:year}, ${3:month} - 1, ${4:day});
```

## TypeScript Ternary Operator

### [cotrTernary](/snippets/cotrTernary)

```typescript
${1:condition} ? ${2:trueValue} : ${3:falseValue}
```

## TypeScript Equal To

### [cotrEqual](/snippets/cotrEqual)

```typescript
===
```


## TypeScript Date Now

### [cotrNow](/snippets/cotrNow)

```typescriptreact
new Date()
```

## TypeScript Static Variable

### [cotrVarStatic](/snippets/cotrVarStatic)

```typescriptreact
static ${3:myStaticVar}: ${2:type} = ${4:value};

// Access the static variable
// MyClass.${3:myStaticVar}
```

## TypeScript Generate Array

### [cotrGenList](/snippets/cotrGenList)

```typescriptreact
const ${1:myList} = Array.from({ length: ${2:length} }, (_, index) => ${3:'item'} + index);
```

## TypeScript Create String Variable

### [cotrVarString](/snippets/cotrVarString)

```typescriptreact
let ${1:myString}: string = ${2:'myValue'};
```

## TypeScript Arrow Function

### [cotrFuncArrow](/snippets/cotrFuncArrow)

```typescriptreact
const ${2:myFunction} = (${3:parameters}): ${1:void} => {
  ${4:// Your code here}
};
```

## TypeScript Anonymous Function

### [cotrFuncAnon](/snippets/cotrFuncAnon)

```typescriptreact
(${1:parameters}): ${2:void} => {
  ${3:// Your code here}
};
```

## TSX Try Catch

### [cotrTryCatch](/snippets/cotrTryCatch)

```typescriptreact
try {
  ${1:// Your code here}
} catch (${2:exception}) {
  ${3:// Your code here}
}
```

## TypeScript Equal To

### [cotrEqual](/snippets/cotrEqual)

```typescriptreact
===
```

## TypeScript Create Multi-Line String Variable

### [cotrVarStringMulti](/snippets/cotrVarStringMulti)

```typescriptreact
let ${1:myString}: string = `
${2:Line 1}
${3:Line 2}
${4:Line 3}
`;
```

## TypeScript Function

### [cotrFunc](/snippets/cotrFunc)

```typescriptreact
function ${2:myFunction}(${3:parameters}): ${1:void} {
  ${4:// Your code here}
}
```

## TypeScript For Loop

### [cotrForLoop](/snippets/cotrForLoop)

```typescriptreact
for (let ${1:i} = 0; $1 < ${2:10}; $1++) {
  // Your code here
}
```

## TypeScript Lambda

### [cotrFuncLambda](/snippets/cotrFuncLambda)

```typescriptreact
const ${1:myLambda} = (${2:parameters}) => ${3:expression};
```

## TypeScript Type Comparison

### [cotrTypeCompare](/snippets/cotrTypeCompare)

```typescriptreact
// Check if two variables have the same type:
if (typeof ${1:variable1} === typeof ${2:variable2}) {
  // Your code here
}
```

## TypeScript Null Type

### [cotrNull](/snippets/cotrNull)

```typescriptreact
null
```

## Variable Declaration Syntax

### [cotrVarSyntax](/snippets/cotrVarSyntax)

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

## TypeScript Function Named Args

### [cotrFuncArgsNamed](/snippets/cotrFuncArgsNamed)

```typescriptreact
function ${2:myFunction}({${3:arg1}, ${4:arg2}}: {${3:arg1}: ${5:type1}, ${4:arg2}: ${6:type2}}): ${1:void} {
  ${7:// Your code here}
}
```

## TSX Multi-Line Comment

### [cotrCommentMulti](/snippets/cotrCommentMulti)

```typescriptreact
{/*
  ${1:Your comment here}
  ${2:Your comment here}
  ${3:Your comment here}
*/}
```

## TypeScript String Type

### [cotrTypesString](/snippets/cotrTypesString)

```typescriptreact
string
```

## TypeScript Boolean False

### [cotrTypesBoolFalse](/snippets/cotrTypesBoolFalse)

```typescriptreact
false
```

## TypeScript Switch Statement

### [cotrSwitch](/snippets/cotrSwitch)

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

## TypeScript Date Type

### [cotrTypesDate](/snippets/cotrTypesDate)

```typescriptreact
Date
```

## TypeScript Create Number Variable

### [cotrVarNumber](/snippets/cotrVarNumber)

```typescriptreact
let ${1:myNumber}: number = ${2:0};
```

## TypeScript Class

### [cotrClass](/snippets/cotrClass)

```typescriptreact
class ${1:MyClass} {
  ${2:// Your code here}
}
```

## TypeScript Mathematical Operators

### [cotrOperators](/snippets/cotrOperators)

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

## TypeScript Boolean Operators

### [cotrOperatorsBool](/snippets/cotrOperatorsBool)

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

## TypeScript Type Conversion

### [cotrTypeConvert](/snippets/cotrTypeConvert)

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

## TypeScript Number Type

### [cotrTypesNum](/snippets/cotrTypesNum)

```typescriptreact
number
```

## TSX Comment

### [cotrComment](/snippets/cotrComment)

```typescriptreact
{/* ${1:Your comment here} */}
```

## TypeScript Print

### [cotrPrint](/snippets/cotrPrint)

```typescriptreact
console.log(${1:'Your message here'});
```

## TypeScript Info

### [cotrInfo](/snippets/cotrInfo)

```typescriptreact
Typing: Statically typed (superset of JavaScript)
Paradigm: Multi-paradigm: event-driven, functional, imperative, object-oriented
Compilation: Transpiled to JavaScript
Concurrency: Inherits JavaScript's event loop model for asynchronous programming
```

## TypeScript Boolean True

### [cotrTypesBoolTrue](/snippets/cotrTypesBoolTrue)

```typescriptreact
true
```

## TypeScript Create Constant

### [cotrConst](/snippets/cotrConst)

```typescriptreact
const ${1:myConst} = $2;
```

## TypeScript Function Args

### [cotrFuncArgs](/snippets/cotrFuncArgs)

```typescriptreact
// In TypeScript, functions can have arguments with default values.
function ${2:myFunction}(${3:arg1}: ${4:type1}, ${5:arg2}: ${6:type2} = ${7:defaultValue}): ${1:void} {
  ${8:// Your code here}
}
```

## TypeScript with React Project Structure (High-Level)

### [cotrStructure](/snippets/cotrStructure)

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

## TypeScript Boolean Type

### [cotrTypesBool](/snippets/cotrTypesBool)

```typescriptreact
boolean
```

## TypeScript Create Typed Variable

### [cotrVarTyped](/snippets/cotrVarTyped)

```typescriptreact
let ${1:myVar}: ${2:Type} = $3;
```

## TypeScript Interpolate String

### [cotrInterpolate](/snippets/cotrInterpolate)

```typescriptreact
`Hello, ${1:name}!`
```

## TypeScript Create Map Variable (Map Class)

### [cotrVarMapClass](/snippets/cotrVarMapClass)

```typescriptreact
let ${1:myMap} = new Map<string, ${2:type}>([
  ['${3:key1}', ${4:'value1'}],
  ['${5:key2}', ${6:'value2}']
]);
```

## TypeScript While Loop

### [cotrWhileLoop](/snippets/cotrWhileLoop)

```typescriptreact
while (${1:condition}) {
  ${2:// Your code here}
}
```

## TypeScript If Else Statement

### [cotrIfElse](/snippets/cotrIfElse)

```typescriptreact
if (${1:condition}) {
  ${2:// Your code here}
} else if (${3:condition}) {
  ${4:// Your code here}
} else {
  ${5:// Your code here}
}
```

## TypeScript List Type

### [cotrTypesList](/snippets/cotrTypesList)

```typescriptreact
Array<${1:Type}>
```

## TypeScript Enum

### [cotrEnum](/snippets/cotrEnum)

```typescriptreact
enum ${1:MyEnum} {
  ${2:value1},
  ${3:value2},
  // Add more values here
}
```

## TypeScript If Statement

### [cotrIf](/snippets/cotrIf)

```typescriptreact
if (${1:condition}) {
  ${2:// Your code here}
}
```

## TypeScript Create Date Variable

### [cotrVarDate](/snippets/cotrVarDate)

```typescriptreact
let ${1:myDate}: Date = new Date(${2:year}, ${3:month} - 1, ${4:day});
```

## TypeScript Generate Object Map

### [cotrGenMap](/snippets/cotrGenMap)

```typescriptreact
const ${1:myMap} = Object.fromEntries(
  Array.from({ length: ${2:length} }, (_, index) => [`key${index}`, `value${index}`])
);
```

## TypeScript Create List Variable

### [cotrVarList](/snippets/cotrVarList)

```typescriptreact
let ${1:myList}: ${2:type}[] = [
  ${3:'item1'},
  ${4:'item2'},
  // Add more items here
];
```

## TypeScript For...Of Loop

### [cotrForOfLoop](/snippets/cotrForOfLoop)

```typescriptreact
for (const item of ${1:iterable}) {
  ${2:// Your code here}
}
```

## TypeScript Ternary Operator

### [cotrTernary](/snippets/cotrTernary)

```typescriptreact
${1:condition} ? ${2:trueValue} : ${3:falseValue}
```

## TypeScript Entry Point

### [cotrEntry](/snippets/cotrEntry)

```typescriptreact
// TypeScript Entry Point
// To run this program, use: `ts-node filename.ts`
// Note: Ensure you have ts-node installed globally (`npm install -g ts-node`)

console.log('Hello, World!');
```

## TypeScript Create Variable

### [cotrVar](/snippets/cotrVar)

```typescriptreact
let ${1:myVar} = $2;
```

## TypeScript Create Nullable Variable

### [cotrVarNullable](/snippets/cotrVarNullable)

```typescriptreact
let ${1:myVar}: ${2:Type} | null = $3;
```

## TypeScript Function Syntax

### [cotrFuncSyntax](/snippets/cotrFuncSyntax)

```typescriptreact
// TypeScript Function Syntax
// Basic function: function functionName(parameters): ReturnType { ... }
// Function with arguments: function functionName(arg1: Type1, arg2: Type2, ...): ReturnType { ... }
// Function with named arguments: function functionName({arg1, arg2, ...}: {arg1: Type1, arg2: Type2, ...}): ReturnType { ... }
```

## TypeScript Map Type

### [cotrTypesMap](/snippets/cotrTypesMap)

```typescriptreact
Map<${1:KeyType}, ${2:ValueType}>
```

## TypeScript Dynamic Type

### [cotrAny](/snippets/cotrAny)

```typescriptreact
any
```

## TSX Throw Exception

### [cotrThrow](/snippets/cotrThrow)

```typescriptreact
throw new Error('Your message here');
```

## TypeScript Concatenate Strings

### [cotrConcat](/snippets/cotrConcat)

```typescriptreact
'Hello, ' + ${1:name} + '!'
```

## TypeScript Create Boolean Variable

### [cotrVarBool](/snippets/cotrVarBool)

```typescriptreact
let ${1:myBoolean}: boolean = ${2:true};
```

## TypeScript Create Map Variable

### [cotrVarMap](/snippets/cotrVarMap)

```typescriptreact
let ${1:myMap}: { [key: string]: ${2:type} } = {
  ${3:'key1'}: ${4:'value1'},
  ${5:'key2'}: ${6:'value2'},
  // Add more key-value pairs here
};
```

## TypeScript Print Multi

### [cotrPrintMulti](/snippets/cotrPrintMulti)

```typescriptreact
console.log(`
${1:Line 1}
${2:Line 2}
${3:Line 3}
`);
```

## TypeScript Not Equal To

### [cotrNotEqual](/snippets/cotrNotEqual)

```typescriptreact
!==
```

## TypeScript Type Check

### [cotrTypeCheck](/snippets/cotrTypeCheck)

```typescriptreact
typeof ${1:variable}  // Note: This checks the runtime type.
```

## TypeScript Types

### [cotrTypes](/snippets/cotrTypes)

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


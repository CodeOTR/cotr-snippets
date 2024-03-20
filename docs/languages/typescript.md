## TypeScript Create Nullable Variable

### {[cotrVarNullable variableNullable nullableVariable]}

```
let ${1:myVar}: ${2:Type} | null = $3;
```

## TypeScript Ternary Operator

### {[cotrTernary ternary conditionalOperator]}

```
${1:condition} ? ${2:trueValue} : ${3:falseValue}
```

## TypeScript Not Equal To

### {[cotrNotEqual notEqual doesNotEqual]}

```
!==
```

## TypeScript Create Boolean Variable

### {[cotrVarBool variableBool bool boolVariable createBool]}

```
let ${1:myBoolean}: boolean = ${2:true};
```

## TypeScript Create Variable

### {[cotrVar variable createVariable newVariable]}

```
let ${1:myVar} = $2;
```

## TypeScript Generate Object Map

### {[cotrGenMap generateMap]}

```
const ${1:myMap} = Object.fromEntries(
  Array.from({ length: ${2:length} }, (_, index) => [`key${index}`, `value${index}`])
);
```

## TypeScript Function

### {[cotrFunc function subprogram procedure subroutine method]}

```
function ${2:myFunction}(${3:parameters}): ${1:void} {
  ${4:// Your code here}
}
```

## TypeScript Enum

### {[cotrEnum enum]}

```
enum ${1:MyEnum} {
  ${2:value1},
  ${3:value2},
  // Add more values here
}
```

## TypeScript Entry Point

### {[cotrEntry entry start startingPoint]}

```
// TypeScript Entry Point
// To run this program, use: `ts-node filename.ts`
// Note: Ensure you have ts-node installed globally (`npm install -g ts-node`)

console.log('Hello, World!');
```

## TypeScript Create String Variable

### {[cotrVarString string stringVariable variableString text createString createText]}

```
let ${1:myString}: string = ${2:'myValue'};
```

## TypeScript Static Variable

### {[cotrVarStatic staticVariable associatedConstant]}

```
static ${3:myStaticVar}: ${2:type} = ${4:value};

// Access the static variable
// MyClass.${3:myStaticVar}
```

## TypeScript Function Syntax

### {[cotrFuncSyntax functionSyntax functionDocs]}

```
// TypeScript Function Syntax
// Basic function: function functionName(parameters): ReturnType { ... }
// Function with arguments: function functionName(arg1: Type1, arg2: Type2, ...): ReturnType { ... }
// Function with named arguments: function functionName({arg1, arg2, ...}: {arg1: Type1, arg2: Type2, ...}): ReturnType { ... }
```

## TypeScript If Else Statement

### {[cotrIfElse ifElseStatement]}

```
if (${1:condition}) {
  ${2:// Your code here}
} else if (${3:condition}) {
  ${4:// Your code here}
} else {
  ${5:// Your code here}
}
```

## TypeScript Equal To

### {[cotrEqual equal]}

```
===
```

## TypeScript Boolean Operators

### {[cotrOperatorsBool booleanOperators logic]}

```
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

## TypeScript Switch Statement

### {[cotrSwitch switch switchStatement select case]}

```
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

## TypeScript Project Structure (High-Level)

### {[cotrStructure structure architecture]}

```
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

## TypeScript Date Type

### {[cotrTypesDate dateType typeDate timeType timestampType dateTimeType]}

```
Date
```

## TypeScript Null Type

### {[cotrNull null nil none nothing option]}

```
null
```

## TypeScript Mathematical Operators

### {[cotrOperators operators mathDocs]}

```
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

## TypeScript Boolean True

### {[cotrTypesBoolTrue true booleanTrue on]}

```
true
```

## TypeScript Create Date Variable

### {[cotrVarDate dateVariable variableDate date]}

```
let ${1:myDate}: Date = new Date(${2:year}, ${3:month} - 1, ${4:day});
```

## TypeScript Create Constant

### {[cotrConst constant]}

```
const ${1:myConst} = $2;
```

## TypeScript Print Multi

### {[cotrPrintMulti printMultiLine]}

```
console.log(`
${1:Line 1}
${2:Line 2}
${3:Line 3}
`);
```

## TypeScript For...Of Loop

### {cotrForOfLoop}

```
for (const item of ${1:iterable}) {
  ${2:// Your code here}
}
```

## TypeScript Type Conversion

### {[cotrTypeConvert cotrTypeCast cotrConvert cotrCast]}

```
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

### {[cotrTypesNum numberType typeNumber doubleType typeDouble]}

```
number
```

## TypeScript Boolean Type

### {[cotrTypesBool booleanType typeBool]}

```
boolean
```

## TypeScript Boolean False

### {[cotrTypesBoolFalse false off booleanFalse]}

```
false
```

## TypeScript Create Map Variable (Map Class)

### {cotrVarMapClass}

```
let ${1:myMap} = new Map<string, ${2:type}>([
  ['${3:key1}', ${4:'value1'}],
  ['${5:key2}', ${6:'value2}']
]);
```

## TypeScript Generate Array

### {[cotrGenList generateList listGen]}

```
const ${1:myList} = Array.from({ length: ${2:length} }, (_, index) => ${3:'item'} + index);
```

## TypeScript Comment

### {[cotrComment comment note]}

```
// ${1:Your comment here}
```

## TypeScript Type Comparison

### {[cotrTypeCompare compareTypes]}

```
// Check if two variables have the same type:
if (typeof ${1:variable1} === typeof ${2:variable2}) {
  // Your code here
}
```

## TypeScript Create Typed Variable

### {[cotrVarTyped typedVariable variableWithType]}

```
let ${1:myVar}: ${2:Type} = $3;
```

## TypeScript Create List Variable

### {[cotrVarList createList listVariable arrayVariable variableList variableArray list array]}

```
let ${1:myList}: ${2:type}[] = [${3:'item1'}, ${4:'item2'}];
```

## TypeScript Arrow Function

### {[cotrFuncArrow arrowFunction functionArrow]}

```
const ${2:myFunction} = (${3:parameters}): ${1:void} => {
  ${4:// Your code here}
};
```

## TypeScript Throw Exception

### {[cotrThrow throwError throwException]}

```
throw new Error('Your message here');
```

## TypeScript Map Type

### {[cotrTypesMap mapType typeMap hashmapType structType dictType typeDict typeScruct]}

```
Map<${1:KeyType}, ${2:ValueType}>
```

## TypeScript Dynamic Type

### {cotrAny}

```
any
```

## TypeScript Multi-Line Comment

### {[cotrCommentMulti multiLineComment commentMultiLine blockComment]}

```
/*
 * ${1:Your comment here}
 */
```

## TypeScript Date Now

### {[cotrNow now currentTime dateNow]}

```
new Date()
```

## TypeScript Print

### {[cotrPrint print log systemOut write consoleLog]}

```
console.log(${1:'Your message here'});
```

## TypeScript Function Named Args

### {[cotrFuncArgsNamed functionNamedArgs]}

```
function ${2:myFunction}({${3:arg1}, ${4:arg2}}: {${3:arg1}: ${5:type1}, ${4:arg2}: ${6:type2}}): ${1:void} {
  ${7:// Your code here}
}
```

## TypeScript Class

### {[cotrClass class objectTemplate]}

```
class ${1:MyClass} {
  ${2:// Your code here}
}
```

## TypeScript Info

### {[cotrInfo languageInfo info]}

```
Typing: Statically typed (superset of JavaScript)
Paradigm: Multi-paradigm: event-driven, functional, imperative, object-oriented
Compilation: Transpiled to JavaScript
Concurrency: Inherits JavaScript's event loop model for asynchronous programming
```

## TypeScript String Type

### {[cotrTypesString stringType typeString textType typeText]}

```
string
```

## Variable Declaration Syntax

### {[cotrVarSyntax variableSyntax howToVariables letSyntax]}

```
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

## TypeScript While Loop

### {[cotrWhileLoop whileLoop whileTrue]}

```
while (${1:condition}) {
  ${2:// Your code here}
}
```

## TypeScript Anonymous Function

### {[cotrFuncAnon anonFunc anonymous closure lambda functionLiteral cotrFuncLambda]}

```
(${1:parameters}): ${2:void} => {
  ${3:// Your code here}
};
```

## TypeScript Type Check

### {[cotrTypeCheck checkType getType typeOf]}

```
typeof ${1:variable}  // Note: This checks the runtime type.
```

## TypeScript Create Number Variable

### {[cotrVarNumber integer number createInt createNumber intVariable variableInt]}

```
let ${1:myNumber}: number = ${2:0};
```

## TypeScript Create Map Variable

### {[cotrVarMap createMap createStruct variableMap variableStruct mapVariable structVariable dictVariable variableDict createDict]}

```
let ${1:myMap}: { [key: string]: ${2:type} } = {
  ${3:'key1'}: ${4:'value1'},
  ${5:'key2'}: ${6:'value2'},
  // Add more key-value pairs here
};
```

## TypeScript Lambda

### {[cotrFuncLambda cotrLambda]}

```
const ${1:myLambda} = (${2:parameters}) => ${3:expression};
```

## TypeScript Try Catch

### {[cotrTryCatch tryCatch]}

```
try {
  ${1:// Your code here}
} catch (${2:exception}) {
  ${3:// Your code here}
}
```

## TypeScript This Type Check

### {[thisTypeCheck thisType getThisType]}

```
typeof $CLIPBOARD // Note: This checks the runtime type.
```

## TypeScript Types

### {[cotrTypes types allTypes languageTypes builtInTypes dataTypes]}

```
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

## TypeScript List Type

### {[cotrTypesList listType typeList typeArray]}

```
Array<${1:Type}>
```

## TypeScript Interpolate String

### {[cotrInterpolate interpolate variableExpansion variableSubstitution stringPlaceholders stringInterpolation]}

```
`Hello, ${1:name}!`
```

## TypeScript Create Multi-Line String Variable

### {[cotrVarStringMulti multiLineString varStringMulti stringVariableMulti createMultiLineString]}

```
let ${1:myString}: string = `
${2:Line 1}
${3:Line 2}
${4:Line 3}
`;
```

## TypeScript Function Args

### {[cotrFuncArgs functionArgs functionWithArgs]}

```
// In TypeScript, functions can have arguments with default values.
function ${2:myFunction}(${3:arg1}: ${4:type1}, ${5:arg2}: ${6:type2} = ${7:defaultValue}): ${1:void} {
  ${8:// Your code here}
}
```

## TypeScript Concatenate Strings

### {[cotrConcat concatenate combine]}

```
'Hello, ' + ${1:name} + '!'
```

## TypeScript For Loop

### {[cotrForLoop forLoop forX]}

```
for (let ${1:i} = 0; $1 < ${2:10}; $1++) {
  // Your code here
}
```

## TypeScript If Statement

### {[cotrIf ifStatement]}

```
if (${1:condition}) {
  ${2:// Your code here}
}
```


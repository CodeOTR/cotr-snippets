## JavaScript Info

### {[cotrInfo languageInfo info]}

```
Typing: Dynamically typed
Paradigm: Multi-paradigm: event-driven, functional, imperative, prototype-based
Compilation: Interpreted or just-in-time compiled
Concurrency: Event loop model with support for asynchronous programming using callbacks, promises, and async/await
```

## JavaScript Type Check

### {[cotrTypeCheck checkType getType typeOf]}

```
typeof ${1:variable}
```

## JavaScript Boolean Type

### {[cotrTypesBool booleanType typeBool]}

```
let flag = Boolean($1);
```

## JavaScript Function Args

### {[cotrFuncArgs functionArgs functionWithArgs]}

```
// In JavaScript, functions can have arguments with default values.
function ${2:myFunction}(${3:arg1}, ${4:arg2} = ${5:defaultValue}) {
  ${6:// Your code here}
}
```

## JavaScript Date Now

### {[cotrNow now currentTime dateNow]}

```
new Date()
```

## JavaScript Create Typed Variable

### {[cotrVarTyped typedVariable variableWithType]}

```
let ${1:myVar} = $2; // Note: JavaScript is dynamically typed.
```

## JavaScript Arrow Function

### {[cotrFuncArrow arrowFunction functionArrow]}

```
const ${2:myFunction} = (${3:parameters}) => {
  ${4:// Your code here}
};
```

## JavaScript Mathematical Operators

### {[cotrOperators operators mathDocs]}

```
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

## JavaScript Null Type

### {[cotrNull null nil none nothing option]}

```
null
```

## JavaScript Create Constant

### {[cotrConst constant]}

```
const ${1:myConst} = $2;
```

## JavaScript While Loop

### {[cotrWhileLoop whileLoop whileTrue]}

```
while (${1:condition}) {
  ${2:// Your code here}
}
```

## JavaScript Create Nullable Variable

### {[cotrVarNullable variableNullable nullableVariable]}

```
let ${1:myVar} = null;
```

## JavaScript Create Multi-Line String Variable

### {[cotrVarMultiString multiString variableMultiString multiStringVariable multilineText]}

```
let ${1:myString} = `
${2:Line 1}
${3:Line 2}
${4:Line 3}
`;
```

## JavaScript Create Array Variable

### {[cotrVarList createList listVariable arrayVariable variableList variableArray list array]}

```
let ${1:myList} = [${2:'item1'}, ${3:'item2'}];
```

## JavaScript Multi-Line Comment

### {[cotrCommentMulti multiLineComment commentMultiLine blockComment]}

```
/*
 * ${1:Your comment here}
 */
```

## JavaScript Entry Point

### {[cotrEntry entry start startingPoint]}

```
// JavaScript Entry Point
// To run this program, use: `node filename.js`

console.log('Hello, World!');
```

## JavaScript Project Structure (High-Level)

### {[cotrStructure structure architecture]}

```
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

## JavaScript Type Comparison

### {[cotrTypeCompare compareTypes]}

```
// Check if two variables have the same type:
if (typeof ${1:variable1} === typeof ${2:variable2}) {
  // Your code here
}
```

## JavaScript Interpolate String

### {[cotrInterpolate interpolate variableExpansion variableSubstitution stringPlaceholders stringInterpolation]}

```
let text = `Hello, ${1:name}!`;
```

## JavaScript This Type Check

### {[thisTypeCheck thisType getThisType]}

```
typeof $CLIPBOARD
```

## JavaScript Boolean False

### {[cotrTypesBoolFalse false off booleanFalse]}

```
false;
```

## JavaScript Try Catch

### {[cotrTryCatch tryCatch]}

```
try {
  ${1:// Your code here}
} catch (${2:exception}) {
  ${3:// Your code here}
}
```

## JavaScript Types

### {[cotrTypes types allTypes languageTypes builtInTypes dataTypes]}

```
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

## JavaScript Create Map Variable (Object)

### {[cotrVarMap createMap createStruct variableMap variableStruct mapVariable structVariable dictVariable variableDict createDict]}

```
let ${1:myObject} = {
  ${2:'key1'}: ${3:'value1'},
  ${4:'key2'}: ${5:'value2'}
};
```

## JavaScript Generate Array

### {[cotrGenList generateList listGen]}

```
const ${1:myList} = Array.from({ length: ${2:length} }, (_, index) => ${3:'item'} + index);
```

## JavaScript Print

### {[cotrPrint print log systemOut write consoleLog]}

```
console.log(${1:'Your message here'});
```

## JavaScript Function Syntax

### {[cotrFuncSyntax functionSyntax functionDocs]}

```
// JavaScript Function Syntax
// Basic function: function functionName(parameters) { ... }
// Function with arguments: function functionName(arg1, arg2, ...) { ... }
// Function with named arguments (using object destructuring): function functionName({arg1, arg2, ...}) { ... }
```

## JavaScript Class

### {[cotrClass class objectTemplate]}

```
class ${1:MyClass} {
  ${2:// Your code here}
}
```

## JavaScript If Statement

### {[cotrIf ifStatement]}

```
if (${1:condition}) {
  ${2:// Your code here}
}
```

## JavaScript Ternary Operator

### {[cotrTernary ternary conditionalOperator]}

```
${1:condition} ? ${2:trueValue} : ${3:falseValue}
```

## JavaScript Boolean Operators

### {[cotrOperatorsBool booleanOperators logic]}

```
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

## JavaScript String Type

### {[cotrTypesString stringType typeString textType typeText]}

```
let text = "John Doe";
```

## JavaScript Number Type

### {[cotrTypesNum numberType typeNumber doubleType typeDouble]}

```
let number = $1;
```

## JavaScript Switch Statement

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

## JavaScript Boolean True

### {[cotrTypesBoolTrue true booleanTrue on]}

```
true;
```

## JavaScript Print Multi

### {[cotrPrintMulti printMultiLine]}

```
console.log(`
${1:Line 1}
${2:Line 2}
${3:Line 3}
`);
```

## JavaScript Function Named Args

### {[cotrFuncArgsNamed functionNamedArgs]}

```
function ${2:myFunction}({${3:arg1}, ${4:arg2}}) {
  ${5:// Your code here}
}
```

## JavaScript Equal To

### {[cotrEqual equal]}

```
===
```

## JavaScript Int Type

### {[cotrTypesInt intType typeInt]}

```
let integer = Math.floor($1);
```

## JavaScript If Else Statement

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

## JavaScript Date Type

### {[cotrTypesDate dateType typeDate timeType timestampType dateTimeType]}

```
Date
```

## JavaScript Create String Variable

### {[cotrVarString string stringVariable variableString text createString createText]}

```
let ${1:myString} = "${2:Your string here}";
```

## JavaScript Static Variable

### {[cotrVarStatic staticVariable associatedConstant]}

```
static ${3:myStaticVar} = ${4:value};

// Access the static variable
// MyClass.${3:myStaticVar}
```

## JavaScript Generate Object Map

### {[cotrGenMap generateMap]}

```
const ${1:myMap} = Object.fromEntries(
  Array.from({ length: ${2:length} }, (_, index) => [`key${index}`, `value${index}`])
);
```

## JavaScript Not Equal To

### {[cotrNotEqual notEqual doesNotEqual]}

```
!==
```

## JavaScript For...Of Loop

### {cotrForOfLoop}

```
for (const item of ${1:iterable}) {
  ${2:// Your code here}
}
```

## JavaScript Throw Exception

### {[cotrThrow throwError throwException]}

```
throw new Error('Your message here');
```

## JavaScript Lambda

### {cotrLambda}

```
const ${1:myLambda} = (${2:parameters}) => ${3:expression};
```

## JavaScript Type Conversion

### {[cotrTypeConvert convert cast]}

```
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

## JavaScript For Loop

### {[cotrForLoop forLoop forX]}

```
for (let ${1:i} = 0; $1 < ${2:10}; $1++) {
  // Your code here
}
```

## JavaScript Function

### {[cotrFunc function subprogram procedure subroutine method]}

```
function ${2:myFunction}(${3:parameters}) {
  ${4:// Your code here}
}
```

## JavaScript Anonymous Function

### {[cotrFuncAnon anonFunc anonymous closure lambda functionLiteral cotrFuncLambda]}

```
function(${1:parameters}) {
  ${2:// Your code here}
};
```

## JavaScript Concatenate String

### {[cotrConcat concatenate combine]}

```
let text = 'Hello, ' + ${1:name} + '!';
```

## JavaScript Create Variable

### {[cotrVar variable createVariable newVariable]}

```
let ${1:myVar} = $2;
```

## JavaScript Create Boolean Variable

### {[cotrVarBool variableBool bool boolVariable createBool]}

```
let ${1:myBoolean} = ${2:true};
```

## JavaScript Comment

### {[cotrComment comment note]}

```
// ${1:Your comment here}
```

## JavaScript Map Type

### {[cotrTypesMap mapType typeMap hashmapType structType dictType typeDict typeScruct]}

```
new Map()
```

## JavaScript Create Number Variable

### {[cotrVarNum number float floatVariable variableFloat variableNumber numberVariable]}

```
let ${1:myNumber} = ${2:0};
```

## JavaScript Create Date Variable

### {[cotrVarDate dateVariable variableDate date]}

```
let ${1:myDate} = new Date(${2:year}, ${3:month} - 1, ${4:day});
```

## JavaScript List Type

### {[cotrTypesList listType typeList typeArray]}

```
[]
```

## JavaScript Dynamic Type

### {[cotrTypesDynamic typesDynamic typesAny dynamicType anyType]}

```
// There is no specific syntax for declaring a variable with a dynamic type in JavaScript.
```

## Variable Declaration Syntax

### {[cotrVarSyntax variableSyntax howToVariables letSyntax]}

```
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

## JavaScript Create Map Variable

### {cotrVarMapAlt}

```
let ${1:myMap} = new Map([
  [${2:'key1'}, ${3:'value1'}],
  [${4:'key2'}, ${5:'value2'}]
]);
```


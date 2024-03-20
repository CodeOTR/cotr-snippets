## JavaScript Boolean Operators

### [cotrOperatorsBool](/snippets/cotrOperatorsBool)

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

## JavaScript Concatenate String

### [cotrConcat](/snippets/cotrConcat)

```javascript
let text = 'Hello, ' + ${1:name} + '!';
```

## JavaScript If Else Statement

### [cotrIfElse](/snippets/cotrIfElse)

```javascript
if (${1:condition}) {
  ${2:// Your code here}
} else if (${3:condition}) {
  ${4:// Your code here}
} else {
  ${5:// Your code here}
}
```

## JavaScript Entry Point

### [cotrEntry](/snippets/cotrEntry)

```javascript
// JavaScript Entry Point
// To run this program, use: `node filename.js`

console.log('Hello, World!');
```

## JavaScript Type Comparison

### [cotrTypeCompare](/snippets/cotrTypeCompare)

```javascript
// Check if two variables have the same type:
if (typeof ${1:variable1} === typeof ${2:variable2}) {
  // Your code here
}
```

## JavaScript Create Variable

### [cotrVar](/snippets/cotrVar)

```javascript
let ${1:myVar} = $2;
```

## JavaScript Create Multi-Line String Variable

### [cotrVarMultiString](/snippets/cotrVarMultiString)

```javascript
let ${1:myString} = `
${2:Line 1}
${3:Line 2}
${4:Line 3}
`;
```

## JavaScript Create Date Variable

### [cotrVarDate](/snippets/cotrVarDate)

```javascript
let ${1:myDate} = new Date(${2:year}, ${3:month} - 1, ${4:day});
```

## JavaScript Create Map Variable (Object)

### [cotrVarMap](/snippets/cotrVarMap)

```javascript
let ${1:myObject} = {
  ${2:'key1'}: ${3:'value1'},
  ${4:'key2'}: ${5:'value2'}
};
```

## JavaScript Create Typed Variable

### [cotrVarTyped](/snippets/cotrVarTyped)

```javascript
let ${1:myVar} = $2; // Note: JavaScript is dynamically typed.
```

## JavaScript Create Constant

### [cotrConst](/snippets/cotrConst)

```javascript
const ${1:myConst} = $2;
```

## JavaScript Type Conversion

### [cotrTypeConvert](/snippets/cotrTypeConvert)

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

## JavaScript Date Type

### [cotrTypesDate](/snippets/cotrTypesDate)

```javascript
Date
```

## JavaScript Create Nullable Variable

### [cotrVarNullable](/snippets/cotrVarNullable)

```javascript
let ${1:myVar} = null;
```

## JavaScript Switch Statement

### [cotrSwitch](/snippets/cotrSwitch)

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

## JavaScript Try Catch

### [cotrTryCatch](/snippets/cotrTryCatch)

```javascript
try {
  ${1:// Your code here}
} catch (${2:exception}) {
  ${3:// Your code here}
}
```

## JavaScript If Statement

### [cotrIf](/snippets/cotrIf)

```javascript
if (${1:condition}) {
  ${2:// Your code here}
}
```

## JavaScript Info

### [cotrInfo](/snippets/cotrInfo)

```javascript
Typing: Dynamically typed
Paradigm: Multi-paradigm: event-driven, functional, imperative, prototype-based
Compilation: Interpreted or just-in-time compiled
Concurrency: Event loop model with support for asynchronous programming using callbacks, promises, and async/await
```

## JavaScript Mathematical Operators

### [cotrOperators](/snippets/cotrOperators)

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

## JavaScript Create String Variable

### [cotrVarString](/snippets/cotrVarString)

```javascript
let ${1:myString} = "${2:Your string here}";
```

## JavaScript Create Map Variable

### [cotrVarMapAlt](/snippets/cotrVarMapAlt)

```javascript
let ${1:myMap} = new Map([
  [${2:'key1'}, ${3:'value1'}],
  [${4:'key2'}, ${5:'value2'}]
]);
```

## JavaScript While Loop

### [cotrWhileLoop](/snippets/cotrWhileLoop)

```javascript
while (${1:condition}) {
  ${2:// Your code here}
}
```

## JavaScript Types

### [cotrTypes](/snippets/cotrTypes)

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

## JavaScript Boolean Type

### [cotrTypesBool](/snippets/cotrTypesBool)

```javascript
let flag = Boolean($1);
```

## JavaScript List Type

### [cotrTypesList](/snippets/cotrTypesList)

```javascript
[]
```

## JavaScript Static Variable

### [cotrVarStatic](/snippets/cotrVarStatic)

```javascript
static ${3:myStaticVar} = ${4:value};

// Access the static variable
// MyClass.${3:myStaticVar}
```

## JavaScript Function Named Args

### [cotrFuncArgsNamed](/snippets/cotrFuncArgsNamed)

```javascript
function ${2:myFunction}({${3:arg1}, ${4:arg2}}) {
  ${5:// Your code here}
}
```

## JavaScript Lambda

### [cotrLambda](/snippets/cotrLambda)

```javascript
const ${1:myLambda} = (${2:parameters}) => ${3:expression};
```

## JavaScript Date Now

### [cotrNow](/snippets/cotrNow)

```javascript
new Date()
```

## JavaScript Dynamic Type

### [cotrTypesDynamic](/snippets/cotrTypesDynamic)

```javascript
// There is no specific syntax for declaring a variable with a dynamic type in JavaScript.
```

## JavaScript Generate Object Map

### [cotrGenMap](/snippets/cotrGenMap)

```javascript
const ${1:myMap} = Object.fromEntries(
  Array.from({ length: ${2:length} }, (_, index) => [`key${index}`, `value${index}`])
);
```

## JavaScript Function Syntax

### [cotrFuncSyntax](/snippets/cotrFuncSyntax)

```javascript
// JavaScript Function Syntax
// Basic function: function functionName(parameters) { ... }
// Function with arguments: function functionName(arg1, arg2, ...) { ... }
// Function with named arguments (using object destructuring): function functionName({arg1, arg2, ...}) { ... }
```

## JavaScript String Type

### [cotrTypesString](/snippets/cotrTypesString)

```javascript
let text = "John Doe";
```

## JavaScript Number Type

### [cotrTypesNum](/snippets/cotrTypesNum)

```javascript
let number = $1;
```

## JavaScript Create Boolean Variable

### [cotrVarBool](/snippets/cotrVarBool)

```javascript
let ${1:myBoolean} = ${2:true};
```

## JavaScript Throw Exception

### [cotrThrow](/snippets/cotrThrow)

```javascript
throw new Error('Your message here');
```

## JavaScript Boolean False

### [cotrTypesBoolFalse](/snippets/cotrTypesBoolFalse)

```javascript
false;
```

## JavaScript Map Type

### [cotrTypesMap](/snippets/cotrTypesMap)

```javascript
new Map()
```

## JavaScript Generate Array

### [cotrGenList](/snippets/cotrGenList)

```javascript
const ${1:myList} = Array.from({ length: ${2:length} }, (_, index) => ${3:'item'} + index);
```

## JavaScript For...Of Loop

### [cotrForOfLoop](/snippets/cotrForOfLoop)

```javascript
for (const item of ${1:iterable}) {
  ${2:// Your code here}
}
```

## JavaScript Anonymous Function

### [cotrFuncAnon](/snippets/cotrFuncAnon)

```javascript
function(${1:parameters}) {
  ${2:// Your code here}
};
```

## JavaScript Class

### [cotrClass](/snippets/cotrClass)

```javascript
class ${1:MyClass} {
  ${2:// Your code here}
}
```

## JavaScript Create Array Variable

### [cotrVarList](/snippets/cotrVarList)

```javascript
let ${1:myList} = [${2:'item1'}, ${3:'item2'}];
```

## JavaScript Function

### [cotrFunc](/snippets/cotrFunc)

```javascript
function ${2:myFunction}(${3:parameters}) {
  ${4:// Your code here}
}
```

## JavaScript Arrow Function

### [cotrFuncArrow](/snippets/cotrFuncArrow)

```javascript
const ${2:myFunction} = (${3:parameters}) => {
  ${4:// Your code here}
};
```

## JavaScript Multi-Line Comment

### [cotrCommentMulti](/snippets/cotrCommentMulti)

```javascript
/*
 * ${1:Your comment here}
 */
```

## JavaScript Boolean True

### [cotrTypesBoolTrue](/snippets/cotrTypesBoolTrue)

```javascript
true;
```

## JavaScript Create Number Variable

### [cotrVarNum](/snippets/cotrVarNum)

```javascript
let ${1:myNumber} = ${2:0};
```

## JavaScript For Loop

### [cotrForLoop](/snippets/cotrForLoop)

```javascript
for (let ${1:i} = 0; $1 < ${2:10}; $1++) {
  // Your code here
}
```

## JavaScript Ternary Operator

### [cotrTernary](/snippets/cotrTernary)

```javascript
${1:condition} ? ${2:trueValue} : ${3:falseValue}
```

## JavaScript Project Structure (High-Level)

### [cotrStructure](/snippets/cotrStructure)

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

## JavaScript Print Multi

### [cotrPrintMulti](/snippets/cotrPrintMulti)

```javascript
console.log(`
${1:Line 1}
${2:Line 2}
${3:Line 3}
`);
```

## JavaScript Equal To

### [cotrEqual](/snippets/cotrEqual)

```javascript
===
```

## JavaScript Null Type

### [cotrNull](/snippets/cotrNull)

```javascript
null
```

## JavaScript Print

### [cotrPrint](/snippets/cotrPrint)

```javascript
console.log(${1:'Your message here'});
```

## JavaScript Comment

### [cotrComment](/snippets/cotrComment)

```javascript
// ${1:Your comment here}
```

## JavaScript Not Equal To

### [cotrNotEqual](/snippets/cotrNotEqual)

```javascript
!==
```

## JavaScript Type Check

### [cotrTypeCheck](/snippets/cotrTypeCheck)

```javascript
typeof ${1:variable}
```

## JavaScript Int Type

### [cotrTypesInt](/snippets/cotrTypesInt)

```javascript
let integer = Math.floor($1);
```

## JavaScript Interpolate String

### [cotrInterpolate](/snippets/cotrInterpolate)

```javascript
let text = `Hello, ${1:name}!`;
```

## Variable Declaration Syntax

### [cotrVarSyntax](/snippets/cotrVarSyntax)

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

## JavaScript Function Args

### [cotrFuncArgs](/snippets/cotrFuncArgs)

```javascript
// In JavaScript, functions can have arguments with default values.
function ${2:myFunction}(${3:arg1}, ${4:arg2} = ${5:defaultValue}) {
  ${6:// Your code here}
}
```


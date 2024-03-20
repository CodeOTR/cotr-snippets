## JavaScript Create Nullable Variable

### [cotrVarNullable](/snippets/cotrVarNullable)

```javascriptreact
let ${1:myVar} = null;
```

## JavaScript Entry Point

### [cotrEntry](/snippets/cotrEntry)

```javascriptreact
// JavaScript Entry Point
// To run this program, use: `node filename.js`

console.log('Hello, World!');
```

## JavaScript Not Equal To

### [cotrNotEqual](/snippets/cotrNotEqual)

```javascriptreact
!==
```

## JavaScript Types

### [cotrTypes](/snippets/cotrTypes)

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

## JavaScript Boolean False

### [cotrTypesBoolFalse](/snippets/cotrTypesBoolFalse)

```javascriptreact
false;
```

## JavaScript Number Type

### [cotrTypesNum](/snippets/cotrTypesNum)

```javascriptreact
let number = $1;
```

## JavaScript Type Check

### [cotrTypeCheck](/snippets/cotrTypeCheck)

```javascriptreact
typeof ${1:variable}
```

## JavaScript Dynamic Type

### [cotrTypesDynamic](/snippets/cotrTypesDynamic)

```javascriptreact
// There is no specific syntax for declaring a variable with a dynamic type in JavaScript.
```

## JSX Comment

### [cotrJSXComment](/snippets/cotrJSXComment)

```javascriptreact
{/* ${1:Your comment here} */}
```

## JavaScript Static Variable

### [cotrVarStatic](/snippets/cotrVarStatic)

```javascriptreact
static ${3:myStaticVar} = ${4:value};

// Access the static variable
// MyClass.${3:myStaticVar}
```

## JavaScript Boolean Operators

### [cotrOperatorsBool](/snippets/cotrOperatorsBool)

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

## JavaScript List Type

### [cotrTypesList](/snippets/cotrTypesList)

```javascriptreact
[]
```

## JavaScript Create Variable

### [cotrVar](/snippets/cotrVar)

```javascriptreact
let ${1:myVar} = $2;
```

## JavaScript Create String Variable

### [cotrVarString](/snippets/cotrVarString)

```javascriptreact
let ${1:myString} = "${2:Your string here}";
```

## JavaScript Create Number Variable

### [cotrVarNum](/snippets/cotrVarNum)

```javascriptreact
let ${1:myNumber} = ${2:0};
```

## JavaScript Create Array Variable

### [cotrVarList](/snippets/cotrVarList)

```javascriptreact
let ${1:myList} = [${2:'item1'}, ${3:'item2'}];
```

## JavaScript Create Map Variable (Object)

### [cotrVarMap](/snippets/cotrVarMap)

```javascriptreact
let ${1:myObject} = {
  ${2:'key1'}: ${3:'value1'},
  ${4:'key2'}: ${5:'value2'}
};
```

## JavaScript Print

### [cotrPrint](/snippets/cotrPrint)

```javascriptreact
console.log(${1:'Your message here'});
```

## JavaScript String Type

### [cotrTypesString](/snippets/cotrTypesString)

```javascriptreact
let text = "John Doe";
```

## JavaScript Concatenate String

### [cotrConcat](/snippets/cotrConcat)

```javascriptreact
let text = 'Hello, ' + ${1:name} + '!';
```

## JavaScript Create Multi-Line String Variable

### [cotrVarMultiString](/snippets/cotrVarMultiString)

```javascriptreact
let ${1:myString} = `
${2:Line 1}
${3:Line 2}
${4:Line 3}
`;
```

## JavaScript Create Boolean Variable

### [cotrVarBool](/snippets/cotrVarBool)

```javascriptreact
let ${1:myBoolean} = ${2:true};
```

## JavaScript Create Date Variable

### [cotrVarDate](/snippets/cotrVarDate)

```javascriptreact
let ${1:myDate} = new Date(${2:year}, ${3:month} - 1, ${4:day});
```

## JavaScript Info

### [cotrInfo](/snippets/cotrInfo)

```javascriptreact
Typing: Dynamically typed
Paradigm: Multi-paradigm: event-driven, functional, imperative, prototype-based
Compilation: Interpreted or just-in-time compiled
Concurrency: Event loop model with support for asynchronous programming using callbacks, promises, and async/await
```

## JavaScript with React Project Structure (High-Level)

### [cotrStructure](/snippets/cotrStructure)

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

## JavaScript For Loop

### [cotrForLoop](/snippets/cotrForLoop)

```javascriptreact
for (let ${1:i} = 0; $1 < ${2:10}; $1++) {
  // Your code here
}
```

## JavaScript Class

### [cotrClass](/snippets/cotrClass)

```javascriptreact
class ${1:MyClass} {
  ${2:// Your code here}
}
```

## JavaScript Int Type

### [cotrTypesInt](/snippets/cotrTypesInt)

```javascriptreact
let integer = Math.floor($1);
```

## JavaScript Date Now

### [cotrNow](/snippets/cotrNow)

```javascriptreact
new Date()
```

## JavaScript Generate Array

### [cotrGenList](/snippets/cotrGenList)

```javascriptreact
const ${1:myList} = Array.from({ length: ${2:length} }, (_, index) => ${3:'item'} + index);
```

## JavaScript Throw Exception

### [cotrThrow](/snippets/cotrThrow)

```javascriptreact
throw new Error('Your message here');
```

## JavaScript If Statement

### [cotrIf](/snippets/cotrIf)

```javascriptreact
if (${1:condition}) {
  ${2:// Your code here}
}
```

## JavaScript Map Type

### [cotrTypesMap](/snippets/cotrTypesMap)

```javascriptreact
new Map()
```

## JavaScript Function

### [cotrFunc](/snippets/cotrFunc)

```javascriptreact
function ${2:myFunction}(${3:parameters}) {
  ${4:// Your code here}
}
```

## JavaScript Generate Object Map

### [cotrGenMap](/snippets/cotrGenMap)

```javascriptreact
const ${1:myMap} = Object.fromEntries(
  Array.from({ length: ${2:length} }, (_, index) => [`key${index}`, `value${index}`])
);
```

## JavaScript Type Comparison

### [cotrTypeCompare](/snippets/cotrTypeCompare)

```javascriptreact
// Check if two variables have the same type:
if (typeof ${1:variable1} === typeof ${2:variable2}) {
  // Your code here
}
```

## JavaScript Boolean Type

### [cotrTypesBool](/snippets/cotrTypesBool)

```javascriptreact
let flag = Boolean($1);
```

## JavaScript Create Typed Variable

### [cotrVarTyped](/snippets/cotrVarTyped)

```javascriptreact
let ${1:myVar} = $2; // Note: JavaScript is dynamically typed.
```

## JavaScript For...Of Loop

### [cotrForOfLoop](/snippets/cotrForOfLoop)

```javascriptreact
for (const item of ${1:iterable}) {
  ${2:// Your code here}
}
```

## JavaScript Ternary Operator

### [cotrTernary](/snippets/cotrTernary)

```javascriptreact
${1:condition} ? ${2:trueValue} : ${3:falseValue}
```

## JavaScript Boolean True

### [cotrTypesBoolTrue](/snippets/cotrTypesBoolTrue)

```javascriptreact
true;
```

## JavaScript Date Type

### [cotrTypesDate](/snippets/cotrTypesDate)

```javascriptreact
Date
```

## Variable Declaration Syntax

### [cotrVarSyntax](/snippets/cotrVarSyntax)

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

## JavaScript Function Syntax

### [cotrFuncSyntax](/snippets/cotrFuncSyntax)

```javascriptreact
// JavaScript Function Syntax
// Basic function: function functionName(parameters) { ... }
// Function with arguments: function functionName(arg1, arg2, ...) { ... }
// Function with named arguments (using object destructuring): function functionName({arg1, arg2, ...}) { ... }
```

## JavaScript If Else Statement

### [cotrIfElse](/snippets/cotrIfElse)

```javascriptreact
if (${1:condition}) {
  ${2:// Your code here}
} else if (${3:condition}) {
  ${4:// Your code here}
} else {
  ${5:// Your code here}
}
```

## JavaScript Try Catch

### [cotrTryCatch](/snippets/cotrTryCatch)

```javascriptreact
try {
  ${1:// Your code here}
} catch (${2:exception}) {
  ${3:// Your code here}
}
```

## JavaScript Equal To

### [cotrEqual](/snippets/cotrEqual)

```javascriptreact
===
```

## JavaScript Null Type

### [cotrNull](/snippets/cotrNull)

```javascriptreact
null
```

## JavaScript Function Named Args

### [cotrFuncArgsNamed](/snippets/cotrFuncArgsNamed)

```javascriptreact
function ${2:myFunction}({${3:arg1}, ${4:arg2}}) {
  ${5:// Your code here}
}
```

## JavaScript Arrow Function

### [cotrFuncArrow](/snippets/cotrFuncArrow)

```javascriptreact
const ${2:myFunction} = (${3:parameters}) => {
  ${4:// Your code here}
};
```

## JSX Multi-Line Comment

### [cotrJSXMultiComment](/snippets/cotrJSXMultiComment)

```javascriptreact
{/*
 * ${1:Your comment here}
 */}
```

## JavaScript Mathematical Operators

### [cotrOperators](/snippets/cotrOperators)

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

## JavaScript Type Conversion

### [cotrTypeConvert](/snippets/cotrTypeConvert)

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

## JavaScript Interpolate String

### [cotrInterpolate](/snippets/cotrInterpolate)

```javascriptreact
let text = `Hello, ${1:name}!`;
```

## JavaScript Switch Statement

### [cotrSwitch](/snippets/cotrSwitch)

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

## JavaScript Lambda

### [cotrLambda](/snippets/cotrLambda)

```javascriptreact
const ${1:myLambda} = (${2:parameters}) => ${3:expression};
```

## JavaScript Create Constant

### [cotrConst](/snippets/cotrConst)

```javascriptreact
const ${1:myConst} = $2;
```

## JavaScript Function Args

### [cotrFuncArgs](/snippets/cotrFuncArgs)

```javascriptreact
// In JavaScript, functions can have arguments with default values.
function ${2:myFunction}(${3:arg1}, ${4:arg2} = ${5:defaultValue}) {
  ${6:// Your code here}
}
```

## JavaScript Anonymous Function

### [cotrFuncAnon](/snippets/cotrFuncAnon)

```javascriptreact
function(${1:parameters}) {
  ${2:// Your code here}
};
```

## JavaScript Create Map Variable

### [cotrVarMapAlt](/snippets/cotrVarMapAlt)

```javascriptreact
let ${1:myMap} = new Map([
  [${2:'key1'}, ${3:'value1'}],
  [${4:'key2'}, ${5:'value2'}]
]);
```

## JavaScript While Loop

### [cotrWhileLoop](/snippets/cotrWhileLoop)

```javascriptreact
while (${1:condition}) {
  ${2:// Your code here}
}
```

## JavaScript Print Multi

### [cotrPrintMulti](/snippets/cotrPrintMulti)

```javascriptreact
console.log(`
${1:Line 1}
${2:Line 2}
${3:Line 3}
`);
```


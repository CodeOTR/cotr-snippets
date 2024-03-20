## PHP Boolean Type

### [cotrTypesBool](/snippets/cotrTypesBool)

```php
bool
```

## PHP List Type

### [cotrTypesList](/snippets/cotrTypesList)

```php
// In PHP, indexed arrays are used as lists.
```

## PHP Arrow Function

### [cotrFuncArrow](/snippets/cotrFuncArrow)

```php
$${2:myFunction} = fn(${3:parameters}) => ${4:// Your code here};
```

## PHP Float Type

### [cotrTypesNum](/snippets/cotrTypesNum)

```php
float
```

## PHP Create Typed Variable

### [cotrVarTyped](/snippets/cotrVarTyped)

```php
// PHP is a dynamically typed language, which means that by default there is no need to specify the type
//  of a variable, as this will be determined at runtime.
//  However, it is possible to statically type some aspect of the language via the use of type declarations.
${1:Type} $${2:myVar} = $3;
```

## PHP Print

### [cotrPrint](/snippets/cotrPrint)

```php
print('${1:Your message here}');
```

## PHP Switch Statement

### [cotrSwitch](/snippets/cotrSwitch)

```php
switch ($${1:variable}) {
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

## PHP Entry Point

### [cotrEntry](/snippets/cotrEntry)

```php
// PHP Entry Point
// To run this program, use: `php filename.php`

<?php
echo 'Hello, World!';
?>
```

## PHP Concatenate Strings

### [cotrConcat](/snippets/cotrConcat)

```php
'${1:string1}' . '${2:string2}'
```

## PHP Function Named Args

### [cotrFuncArgsNamed](/snippets/cotrFuncArgsNamed)

```php
// Note: PHP does not support named arguments in function definitions.
```

## PHP Create Multi-Line String Variable

### [cotrVarMultiString](/snippets/cotrVarMultiString)

```php
$${1:myString} = <<<EOT
${2:Your string here}
EOT;
```

## PHP For Loop

### [cotrForLoop](/snippets/cotrForLoop)

```php
for ($${1:i} = 0; $1 < ${2:10}; $1++) {
  // Your code here
}
```

## PHP Function Args

### [cotrFuncArgs](/snippets/cotrFuncArgs)

```php
// In PHP, functions can have arguments with default values.
function ${2:myFunction}(${3:$arg1}, ${4:$arg2} = '${5:defaultVal}') {
  ${6:// Your code here}
}
```

## PHP Function Syntax

### [cotrFuncSyntax](/snippets/cotrFuncSyntax)

```php
// PHP Function Syntax
// Basic function: function functionName(parameters) { ... }
// Function with arguments: function functionName($arg1, $arg2, ...) { ... }
// Note: PHP does not support named arguments in function definitions.
```

## PHP Comment

### [cotrComment](/snippets/cotrComment)

```php
// ${1:Your comment here}
```

## PHP Enum

### [cotrEnum](/snippets/cotrEnum)

```php
abstract class ${1:MyEnum} {
  const ${2:VALUE1} = ${3:0};
  const ${4:VALUE2} = ${5:1};
  // Add more values here
}
```

## PHP Type Check

### [cotrTypeCheck](/snippets/cotrTypeCheck)

```php
gettype(${1:variable})
```

## PHP Map Type

### [cotrTypesMap](/snippets/cotrTypesMap)

```php
// In PHP, associative arrays are used as maps.
```

## PHP Create Nullable Variable

### [cotrVarNullable](/snippets/cotrVarNullable)

```php
${1:Type}? $${2:myVar} = $3;
```

## PHP Interpolate String

### [cotrInterpolate](/snippets/cotrInterpolate)

```php
'Your string here \${${1:variable}}'
```

## PHP Create Integer Variable

### [cotrVarInt](/snippets/cotrVarInt)

```php
$${1:myInt} = ${2:0};
```

## PHP Generate Array

### [cotrGenList](/snippets/cotrGenList)

```php
$${1:myArray} = range(${2:0}, ${3:10});
```

## PHP Anonymous Function

### [cotrFuncAnon](/snippets/cotrFuncAnon)

```php
$${2:myFunction} = function(${3:parameters}) {
    ${4:// Your code here}
};
```

## PHP Multi-Line Comment

### [cotrCommentMulti](/snippets/cotrCommentMulti)

```php
/*
 * ${1:Your comment here}
 */
```

## PHP If Else Statement

### [cotrIfElse](/snippets/cotrIfElse)

```php
if (${1:condition}) {
  ${2:// Your code here}
} else {
  ${3:// Your code here}
}
```

## PHP Create Variable

### [cotrVar](/snippets/cotrVar)

```php
$${1:myVar} = $2;
```

## PHP Do While Loop

### [cotrDoWhileLoop](/snippets/cotrDoWhileLoop)

```php
do {
  ${1:// Your code here}
} while ($${2:condition});
```

## PHP Throw Exception

### [cotrThrow](/snippets/cotrThrow)

```php
throw new ${1:Exception}('${2:Your message here}');
```

## PHP String Type

### [cotrTypesString](/snippets/cotrTypesString)

```php
string
```

## PHP If Statement

### [cotrIf](/snippets/cotrIf)

```php
if (${1:condition}) {
  ${2:// Your code here}
}
```

## PHP Dynamic Type

### [cotrTypesDynamic](/snippets/cotrTypesDynamic)

```php
// PHP is a dynamically typed language.
```

## PHP For Each Loop

### [cotrForEachLoop](/snippets/cotrForEachLoop)

```php
foreach ($${1:iterable} as $${2:item}) {
  ${3:// Your code here}
}
```

## PHP Info

### [cotrInfo](/snippets/cotrInfo)

```php
Typing: Dynamically typed
Paradigm: Multi-paradigm: imperative, object-oriented, procedural, reflective
Compilation: Interpreted
Concurrency: Supports multi-threading with extensions like pthreads, but traditionally single-threaded
```

## PHP Mathematical Operators

### [cotrOperators](/snippets/cotrOperators)

```php
// PHP Mathematical Operators
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

## PHP Create Constant

### [cotrConst](/snippets/cotrConst)

```php
const $${1:myConst} = $2;
```

## PHP Print Multi

### [cotrPrintMulti](/snippets/cotrPrintMulti)

```php
echo <<<EOT
${1:Line 1}
${2:Line 2}
${3:Line 3}
EOT;
```

## PHP While Loop

### [cotrWhileLoop](/snippets/cotrWhileLoop)

```php
while ($${1:condition}) {
  ${2:// Your code here}
}
```

## PHP Lambda Function

### [cotrFuncLambda](/snippets/cotrFuncLambda)

```php
function (${1:parameters}) => ${2:expression}
```

## PHP Boolean Operators

### [cotrOperatorsBool](/snippets/cotrOperatorsBool)

```php
// PHP Boolean Operators
// Logical AND: && or and
// Logical OR: || or or
// Logical NOT: !
// Equality: ==
// Identity (Strict Equality): ===
// Inequality: !=
// Non-identity (Strict Inequality): !==
// Greater than: >
// Less than: <
// Greater than or equal to: >=
// Less than or equal to: <=
```

## PHP Integer Type

### [cotrTypesInt](/snippets/cotrTypesInt)

```php
int
```

## PHP Create String Variable

### [cotrVarString](/snippets/cotrVarString)

```php
$${1:myString} = '${2:Your string here}';
```

## PHP Create Date Variable

### [cotrVarDate](/snippets/cotrVarDate)

```php
$${1:myDate} = new DateTime('${2:Y-m-d}');
```

## PHP Equal To

### [cotrEqual](/snippets/cotrEqual)

```php
==
```

## Variable Declaration Syntax

### [cotrVarSyntax](/snippets/cotrVarSyntax)

```php
// PHP Variable Declaration Syntax:

// - $: (Scope: Global or Function)
//   - Variables start with a dollar sign.
//   - Can be reassigned and redeclared within their scope.
//   - Use with caution due to potential scoping issues.

// - const: (Scope: Global)
//   - Cannot be reassigned or redeclared.
//   - Use for values that should remain constant.

// Note:
// - PHP does not have a direct equivalent to 'let'.
// - Use '$' for most variable declarations.
// - Use 'const' for values that are known at compile time.
```

## PHP Function

### [cotrFunc](/snippets/cotrFunc)

```php
function ${2:myFunction}(${3:parameters}) {
  ${4:// Your code here}
}
```

## PHP Null Type

### [cotrNull](/snippets/cotrNull)

```php
null
```

## PHP Create Float Variable

### [cotrVarNum](/snippets/cotrVarNum)

```php
$${1:myFloat} = ${2:0.0};
```

## PHP Ternary Operator

### [cotrTernary](/snippets/cotrTernary)

```php
${1:condition} ? ${2:trueValue} : ${3:falseValue}
```

## PHP Type Conversion

### [cotrTypeConvert](/snippets/cotrTypeConvert)

```php
// PHP Type Conversion:

// Implicit conversions (PHP performs automatically):
// - Can be unpredictable, especially with loose equality (==).

// Explicit conversions (using casts):
// - (Type)variable  // C-style cast

// Conversion functions:
// - intval(variable)  // Converts to integer
// - floatval(variable)  // Converts to float
// - strval(variable)  // Converts to string
// - boolval(variable)  // Converts to boolean

// Note:
// - Be aware of implicit conversions and use explicit conversions when necessary for clarity and control.
```

## PHP Types

### [cotrTypes](/snippets/cotrTypes)

```php
$BLOCK_COMMENT_START
PHP is a dynamically typed language.

Types in PHP include:
- int: Integer
- float: Floating-point number
- string: A sequence of characters
- bool: Boolean
- array: An ordered map
- object: An instance of a class
- resource: Holds a reference to an external resource
- NULL: Represents a variable with no value
- callable: A type that can be called, such as a function or a method
- iterable: A type that can be iterated over, such as an array or an object implementing the Traversable interface
- mixed: Indicates that a parameter may accept multiple (but not all) types
- void: Indicates that a function does not return a value
- never: Indicates that a function does not return normally (it either throws an exception or terminates the script)
$BLOCK_COMMENT_END
```

## PHP Create Boolean Variable

### [cotrVarBool](/snippets/cotrVarBool)

```php
$${1:myBool} = ${2:true};
```

## PHP Create Map Variable

### [cotrVarMap](/snippets/cotrVarMap)

```php
$${1:myMap} = [${2:key} => ${3:value}];
```

## PHP Generate Map

### [cotrGenMap](/snippets/cotrGenMap)

```php
$${1:myMap} = array_combine(range(${2:0}, ${3:10}), range(${4:0}, ${5:10}));
```

## PHP Class

### [cotrClass](/snippets/cotrClass)

```php
class ${1:MyClass} {
  ${2:// Your code here}
}
```

## PHP Not Equal To

### [cotrNotEqual](/snippets/cotrNotEqual)

```php
!=
```

## PHP Boolean False

### [cotrTypesBoolFalse](/snippets/cotrTypesBoolFalse)

```php
false
```

## PHP Date Type

### [cotrTypesDate](/snippets/cotrTypesDate)

```php
DateTime
```

## PHP Create Array Variable

### [cotrVarList](/snippets/cotrVarList)

```php
$${1:myArray} = [${2:items}];
```

## PHP Static Variable

### [cotrVarStatic](/snippets/cotrVarStatic)

```php
static $${1:myStaticVar} = $2;
```

## PHP Project Structure (High-Level)

### [cotrStructure](/snippets/cotrStructure)

```php
// Recommended High-Level PHP Project Structure:

// - public/
//   - Contains the entry point of the application (e.g., index.php) and static files.

// - src/
//   - Contains the PHP source files and classes.
//   - Organize by feature or component.

// - vendor/
//   - Contains third-party dependencies managed by Composer.

// - config/
//   - Configuration files for the application.

// - templates/
//   - View templates for the application (if using a traditional MVC structure).

// - resources/
//   - Other resources like language files, not directly accessed by the public.

// - tests/
//   - Unit and functional tests for the application.

// - storage/
//   - Used for logs, cache, and other generated files.

// Note:
// - This structure can be adapted based on the framework or libraries you are using.
// - Ensure that the public directory is the document root for the web server to secure application internals.
```

## PHP Type Comparison

### [cotrTypeCompare](/snippets/cotrTypeCompare)

```php
// Check if two variables have the same type:
if (gettype(${1:variable1}) === gettype(${2:variable2})) {
  // Your code here
}
```

## PHP Boolean True

### [cotrTypesBoolTrue](/snippets/cotrTypesBoolTrue)

```php
true
```

## PHP Try Catch

### [cotrTryCatch](/snippets/cotrTryCatch)

```php
try {
  ${1:// Your code here}
} catch (${2:Exception} $${3:e}) {
  ${4:// Your code here}
}
```


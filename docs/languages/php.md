---
title: Php
description: Php snippets on the rocks.
---

## [cotrTypeCheck](/snippets/cotrtypecheck)

PHP Type Check

```php
gettype(${1:variable})
```

## [cotrTypeCompare](/snippets/cotrtypecompare)

PHP Type Comparison

```php
// Check if two variables have the same type:
if (gettype(${1:variable1}) === gettype(${2:variable2})) {
  // Your code here
}
```

## [cotrTypesBool](/snippets/cotrtypesbool)

PHP Boolean Type

```php
bool
```

## [cotrThrow](/snippets/cotrthrow)

PHP Throw Exception

```php
throw new ${1:Exception}('${2:Your message here}');
```

## [cotrInfo](/snippets/cotrinfo)

PHP Info

```php
Typing: Dynamically typed
Paradigm: Multi-paradigm: imperative, object-oriented, procedural, reflective
Compilation: Interpreted
Concurrency: Supports multi-threading with extensions like pthreads, but traditionally single-threaded
```

## [cotrTypesString](/snippets/cotrtypesstring)

PHP String Type

```php
string
```

## [cotrVarTyped](/snippets/cotrvartyped)

PHP Create Typed Variable

```php
// PHP is a dynamically typed language, which means that by default there is no need to specify the type
//  of a variable, as this will be determined at runtime.
//  However, it is possible to statically type some aspect of the language via the use of type declarations.
${1:Type} $${2:myVar} = $3;
```

## [cotrTypeConvert](/snippets/cotrtypeconvert)

PHP Type Conversion

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

## [cotrVarMultiString](/snippets/cotrvarmultistring)

PHP Create Multi-Line String Variable

```php
$${1:myString} = <<<EOT
${2:Your string here}
EOT;
```

## [cotrFuncArgs](/snippets/cotrfuncargs)

PHP Function Args

```php
// In PHP, functions can have arguments with default values.
function ${2:myFunction}(${3:$arg1}, ${4:$arg2} = '${5:defaultVal}') {
  ${6:// Your code here}
}
```

## [cotrComment](/snippets/cotrcomment)

PHP Comment

```php
// ${1:Your comment here}
```

## [cotrTypesDate](/snippets/cotrtypesdate)

PHP Date Type

```php
DateTime
```

## [cotrTypesDynamic](/snippets/cotrtypesdynamic)

PHP Dynamic Type

```php
// PHP is a dynamically typed language.
```

## [cotrVarBool](/snippets/cotrvarbool)

PHP Create Boolean Variable

```php
$${1:myBool} = ${2:true};
```

## [cotrVarList](/snippets/cotrvarlist)

PHP Create Array Variable

```php
$${1:myArray} = [${2:items}];
```

## [cotrForLoop](/snippets/cotrforloop)

PHP For Loop

```php
for ($${1:i} = 0; $1 < ${2:10}; $1++) {
  // Your code here
}
```

## [cotrForEachLoop](/snippets/cotrforeachloop)

PHP For Each Loop

```php
foreach ($${1:iterable} as $${2:item}) {
  ${3:// Your code here}
}
```

## [cotrFuncArrow](/snippets/cotrfuncarrow)

PHP Arrow Function

```php
$${2:myFunction} = fn(${3:parameters}) => ${4:// Your code here};
```

## [cotrTypesBoolFalse](/snippets/cotrtypesboolfalse)

PHP Boolean False

```php
false
```

## [cotrVarStatic](/snippets/cotrvarstatic)

PHP Static Variable

```php
static $${1:myStaticVar} = $2;
```

## [cotrVarNum](/snippets/cotrvarnum)

PHP Create Float Variable

```php
$${1:myFloat} = ${2:0.0};
```

## [cotrGenList](/snippets/cotrgenlist)

PHP Generate Array

```php
$${1:myArray} = range(${2:0}, ${3:10});
```

## [cotrGenMap](/snippets/cotrgenmap)

PHP Generate Map

```php
$${1:myMap} = array_combine(range(${2:0}, ${3:10}), range(${4:0}, ${5:10}));
```

## [cotrDoWhileLoop](/snippets/cotrdowhileloop)

PHP Do While Loop

```php
do {
  ${1:// Your code here}
} while ($${2:condition});
```

## [cotrFunc](/snippets/cotrfunc)

PHP Function

```php
function ${2:myFunction}(${3:parameters}) {
  ${4:// Your code here}
}
```

## [cotrTypesInt](/snippets/cotrtypesint)

PHP Integer Type

```php
int
```

## [cotrTypesNum](/snippets/cotrtypesnum)

PHP Float Type

```php
float
```

## [cotrTryCatch](/snippets/cotrtrycatch)

PHP Try Catch

```php
try {
  ${1:// Your code here}
} catch (${2:Exception} $${3:e}) {
  ${4:// Your code here}
}
```

## [cotrNotEqual](/snippets/cotrnotequal)

PHP Not Equal To

```php
!=
```

## [cotrVarInt](/snippets/cotrvarint)

PHP Create Integer Variable

```php
$${1:myInt} = ${2:0};
```

## [cotrEqual](/snippets/cotrequal)

PHP Equal To

```php
==
```

## [cotrSwitch](/snippets/cotrswitch)

PHP Switch Statement

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

## [cotrFuncLambda](/snippets/cotrfunclambda)

PHP Lambda Function

```php
function (${1:parameters}) => ${2:expression}
```

## [cotrVar](/snippets/cotrvar)

PHP Create Variable

```php
$${1:myVar} = $2;
```

## [cotrPrintMulti](/snippets/cotrprintmulti)

PHP Print Multi

```php
echo <<<EOT
${1:Line 1}
${2:Line 2}
${3:Line 3}
EOT;
```

## [cotrFuncArgsNamed](/snippets/cotrfuncargsnamed)

PHP Function Named Args

```php
// Note: PHP does not support named arguments in function definitions.
```

## [cotrFuncAnon](/snippets/cotrfuncanon)

PHP Anonymous Function

```php
$${2:myFunction} = function(${3:parameters}) {
    ${4:// Your code here}
};
```

## [cotrEnum](/snippets/cotrenum)

PHP Enum

```php
abstract class ${1:MyEnum} {
  const ${2:VALUE1} = ${3:0};
  const ${4:VALUE2} = ${5:1};
  // Add more values here
}
```

## [cotrIf](/snippets/cotrif)

PHP If Statement

```php
if (${1:condition}) {
  ${2:// Your code here}
}
```

## [cotrVarDate](/snippets/cotrvardate)

PHP Create Date Variable

```php
$${1:myDate} = new DateTime('${2:Y-m-d}');
```

## [cotrIfElse](/snippets/cotrifelse)

PHP If Else Statement

```php
if (${1:condition}) {
  ${2:// Your code here}
} else {
  ${3:// Your code here}
}
```

## [cotrTernary](/snippets/cotrternary)

PHP Ternary Operator

```php
${1:condition} ? ${2:trueValue} : ${3:falseValue}
```

## [cotrClass](/snippets/cotrclass)

PHP Class

```php
class ${1:MyClass} {
  ${2:// Your code here}
}
```

## [cotrOperatorsBool](/snippets/cotroperatorsbool)

PHP Boolean Operators

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

## [cotrTypes](/snippets/cotrtypes)

PHP Types

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

## [cotrNull](/snippets/cotrnull)

PHP Null Type

```php
null
```

## [cotrTypesList](/snippets/cotrtypeslist)

PHP List Type

```php
// In PHP, indexed arrays are used as lists.
```

## [cotrVarNullable](/snippets/cotrvarnullable)

PHP Create Nullable Variable

```php
${1:Type}? $${2:myVar} = $3;
```

## [cotrVarString](/snippets/cotrvarstring)

PHP Create String Variable

```php
$${1:myString} = '${2:Your string here}';
```

## [cotrCommentMulti](/snippets/cotrcommentmulti)

PHP Multi-Line Comment

```php
/*
 * ${1:Your comment here}
 */
```

## [cotrEntry](/snippets/cotrentry)

PHP Entry Point

```php
// PHP Entry Point
// To run this program, use: `php filename.php`

<?php
echo 'Hello, World!';
?>
```

## [cotrVarSyntax](/snippets/cotrvarsyntax)

Variable Declaration Syntax

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

## [cotrPrint](/snippets/cotrprint)

PHP Print

```php
print('${1:Your message here}');
```

## [cotrStructure](/snippets/cotrstructure)

PHP Project Structure (High-Level)

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

## [cotrOperators](/snippets/cotroperators)

PHP Mathematical Operators

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

## [cotrTypesBoolTrue](/snippets/cotrtypesbooltrue)

PHP Boolean True

```php
true
```

## [cotrInterpolate](/snippets/cotrinterpolate)

PHP Interpolate String

```php
'Your string here \${${1:variable}}'
```

## [cotrConcat](/snippets/cotrconcat)

PHP Concatenate Strings

```php
'${1:string1}' . '${2:string2}'
```

## [cotrVarMap](/snippets/cotrvarmap)

PHP Create Map Variable

```php
$${1:myMap} = [${2:key} => ${3:value}];
```

## [cotrConst](/snippets/cotrconst)

PHP Create Constant

```php
const $${1:myConst} = $2;
```

## [cotrTypesMap](/snippets/cotrtypesmap)

PHP Map Type

```php
// In PHP, associative arrays are used as maps.
```

## [cotrWhileLoop](/snippets/cotrwhileloop)

PHP While Loop

```php
while ($${1:condition}) {
  ${2:// Your code here}
}
```

## [cotrFuncSyntax](/snippets/cotrfuncsyntax)

PHP Function Syntax

```php
// PHP Function Syntax
// Basic function: function functionName(parameters) { ... }
// Function with arguments: function functionName($arg1, $arg2, ...) { ... }
// Note: PHP does not support named arguments in function definitions.
```


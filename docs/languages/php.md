## PHP Map Type

### {[cotrTypesMap mapType typeMap hashmapType structType dictType typeDict typeScruct]}

```
// In PHP, associative arrays are used as maps.
```

## PHP Generate Map

### {[cotrGenMap generateMap]}

```
$${1:myMap} = array_combine(range(${2:0}, ${3:10}), range(${4:0}, ${5:10}));
```

## PHP Lambda Function

### {[cotrFuncLambda cotrLambda]}

```
function (${1:parameters}) => ${2:expression}
```

## PHP Throw Exception

### {[cotrThrow throwError throwException]}

```
throw new ${1:Exception}('${2:Your message here}');
```

## PHP Class

### {[cotrClass class objectTemplate]}

```
class ${1:MyClass} {
  ${2:// Your code here}
}
```

## PHP If Statement

### {[cotrIf ifStatement]}

```
if (${1:condition}) {
  ${2:// Your code here}
}
```

## PHP Null Type

### {[cotrNull null nil none nothing option]}

```
null
```

## PHP Create Variable

### {[cotrVar variable createVariable newVariable]}

```
$${1:myVar} = $2;
```

## PHP Arrow Function

### {[cotrFuncArrow arrowFunction functionArrow]}

```
$${2:myFunction} = fn(${3:parameters}) => ${4:// Your code here};
```

## PHP Function Syntax

### {[cotrFuncSyntax functionSyntax functionDocs]}

```
// PHP Function Syntax
// Basic function: function functionName(parameters) { ... }
// Function with arguments: function functionName($arg1, $arg2, ...) { ... }
// Note: PHP does not support named arguments in function definitions.
```

## PHP Multi-Line Comment

### {[cotrCommentMulti multiLineComment commentMultiLine blockComment]}

```
/*
 * ${1:Your comment here}
 */
```

## PHP Try Catch

### {[cotrTryCatch tryCatch]}

```
try {
  ${1:// Your code here}
} catch (${2:Exception} $${3:e}) {
  ${4:// Your code here}
}
```

## PHP Type Comparison

### {[cotrTypeCompare compareTypes]}

```
// Check if two variables have the same type:
if (gettype(${1:variable1}) === gettype(${2:variable2})) {
  // Your code here
}
```

## PHP Boolean True

### {[cotrTypesBoolTrue true booleanTrue on]}

```
true
```

## PHP Boolean False

### {[cotrTypesBoolFalse false off booleanFalse]}

```
false
```

## PHP Interpolate String

### {[cotrInterpolate interpolate variableExpansion variableSubstitution stringPlaceholders stringInterpolation]}

```
'Your string here \${${1:variable}}'
```

## PHP Function Args

### {[cotrFuncArgs functionArgs functionWithArgs]}

```
// In PHP, functions can have arguments with default values.
function ${2:myFunction}(${3:$arg1}, ${4:$arg2} = '${5:defaultVal}') {
  ${6:// Your code here}
}
```

## PHP Anonymous Function

### {[cotrFuncAnon anonFunc anonymous closure lambda functionLiteral cotrFuncLambda]}

```
$${2:myFunction} = function(${3:parameters}) {
    ${4:// Your code here}
};
```

## PHP Boolean Type

### {[cotrTypesBool booleanType typeBool]}

```
bool
```

## PHP Dynamic Type

### {[cotrTypesDynamic typesDynamic typesAny dynamicType anyType]}

```
// PHP is a dynamically typed language.
```

## PHP For Each Loop

### {[cotrForEachLoop forEach]}

```
foreach ($${1:iterable} as $${2:item}) {
  ${3:// Your code here}
}
```

## PHP Info

### {[cotrInfo languageInfo info]}

```
Typing: Dynamically typed
Paradigm: Multi-paradigm: imperative, object-oriented, procedural, reflective
Compilation: Interpreted
Concurrency: Supports multi-threading with extensions like pthreads, but traditionally single-threaded
```

## PHP List Type

### {[cotrTypesList listType typeList typeArray]}

```
// In PHP, indexed arrays are used as lists.
```

## PHP Create Constant

### {[cotrConst constant]}

```
const $${1:myConst} = $2;
```

## PHP If Else Statement

### {[cotrIfElse ifElseStatement]}

```
if (${1:condition}) {
  ${2:// Your code here}
} else {
  ${3:// Your code here}
}
```

## PHP Comment

### {[cotrComment comment note]}

```
// ${1:Your comment here}
```

## PHP Mathematical Operators

### {[cotrOperators operators mathDocs]}

```
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

## PHP This Type Check

### {[thisTypeCheck thisType getThisType]}

```
gettype($CLIPBOARD)
```

## PHP String Type

### {[cotrTypesString stringType typeString textType typeText]}

```
string
```

## PHP Date Type

### {[cotrTypesDate dateType typeDate timeType timestampType dateTimeType]}

```
DateTime
```

## PHP Create Typed Variable

### {[cotrVarTyped typedVariable variableWithType]}

```
// PHP is a dynamically typed language, which means that by default there is no need to specify the type
//  of a variable, as this will be determined at runtime.
//  However, it is possible to statically type some aspect of the language via the use of type declarations.
${1:Type} $${2:myVar} = $3;
```

## PHP Static Variable

### {[cotrVarStatic staticVariable associatedConstant]}

```
static $${1:myStaticVar} = $2;
```

## PHP Project Structure (High-Level)

### {[cotrStructure structure architecture]}

```
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

## PHP Do While Loop

### {[cotrDoWhileLoop doWhile]}

```
do {
  ${1:// Your code here}
} while ($${2:condition});
```

## PHP Entry Point

### {[cotrEntry entry start startingPoint]}

```
// PHP Entry Point
// To run this program, use: `php filename.php`

<?php
echo 'Hello, World!';
?>
```

## PHP Create String Variable

### {[cotrVarString string stringVariable variableString text createString createText]}

```
$${1:myString} = '${2:Your string here}';
```

## PHP Create Map Variable

### {[cotrVarMap createMap createStruct variableMap variableStruct mapVariable structVariable dictVariable variableDict createDict]}

```
$${1:myMap} = [${2:key} => ${3:value}];
```

## PHP Concatenate Strings

### {[cotrConcat concatenate combine]}

```
'${1:string1}' . '${2:string2}'
```

## PHP Switch Statement

### {[cotrSwitch switch switchStatement select case]}

```
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

## PHP Function

### {[cotrFunc function subprogram procedure subroutine method]}

```
function ${2:myFunction}(${3:parameters}) {
  ${4:// Your code here}
}
```

## PHP Type Check

### {[cotrTypeCheck checkType getType typeOf]}

```
gettype(${1:variable})
```

## PHP Type Conversion

### {[cotrTypeConvert cotrTypeCast cotrConvert cotrCast]}

```
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

## PHP Print Multi

### {[cotrPrintMulti printMultiLine]}

```
echo <<<EOT
${1:Line 1}
${2:Line 2}
${3:Line 3}
EOT;
```

## PHP Ternary Operator

### {[cotrTernary ternary conditionalOperator]}

```
${1:condition} ? ${2:trueValue} : ${3:falseValue}
```

## PHP Create Float Variable

### {[cotrVarNum number float floatVariable variableFloat variableNumber numberVariable]}

```
$${1:myFloat} = ${2:0.0};
```

## PHP Create Boolean Variable

### {[cotrVarBool variableBool bool boolVariable createBool]}

```
$${1:myBool} = ${2:true};
```

## PHP Function Named Args

### {[cotrFuncArgsNamed functionNamedArgs]}

```
// Note: PHP does not support named arguments in function definitions.
```

## PHP Enum

### {[cotrEnum enum]}

```
abstract class ${1:MyEnum} {
  const ${2:VALUE1} = ${3:0};
  const ${4:VALUE2} = ${5:1};
  // Add more values here
}
```

## PHP Integer Type

### {[cotrTypesInt intType typeInt]}

```
int
```

## PHP Create Nullable Variable

### {[cotrVarNullable variableNullable nullableVariable]}

```
${1:Type}? $${2:myVar} = $3;
```

## PHP Create Integer Variable

### {[cotrVarInt integer int variableInt intVariable createInt]}

```
$${1:myInt} = ${2:0};
```

## PHP Create Date Variable

### {[cotrVarDate dateVariable variableDate date]}

```
$${1:myDate} = new DateTime('${2:Y-m-d}');
```

## PHP Generate Array

### {[cotrGenList generateList listGen]}

```
$${1:myArray} = range(${2:0}, ${3:10});
```

## PHP While Loop

### {[cotrWhileLoop whileLoop whileTrue]}

```
while ($${1:condition}) {
  ${2:// Your code here}
}
```

## PHP Equal To

### {[cotrEqual equal]}

```
==
```

## PHP Boolean Operators

### {[cotrOperatorsBool booleanOperators logic]}

```
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

## Variable Declaration Syntax

### {[cotrVarSyntax variableSyntax howToVariables letSyntax]}

```
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

## PHP For Loop

### {[cotrForLoop forLoop forX]}

```
for ($${1:i} = 0; $1 < ${2:10}; $1++) {
  // Your code here
}
```

## PHP Not Equal To

### {[cotrNotEqual notEqual doesNotEqual]}

```
!=
```

## PHP Types

### {[cotrTypes types allTypes languageTypes builtInTypes dataTypes]}

```
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

## PHP Float Type

### {[cotrTypesNum numberType typeNumber doubleType typeDouble]}

```
float
```

## PHP Create Multi-Line String Variable

### {[cotrVarMultiString multiString variableMultiString multiStringVariable multilineText]}

```
$${1:myString} = <<<EOT
${2:Your string here}
EOT;
```

## PHP Create Array Variable

### {[cotrVarList createList listVariable arrayVariable variableList variableArray list array]}

```
$${1:myArray} = [${2:items}];
```

## PHP Print

### {[cotrPrint print log systemOut write consoleLog]}

```
print('${1:Your message here}');
```


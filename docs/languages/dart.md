---
title: Dart
description: Dart snippets on the rocks.
---

## [cotrVarStringMulti](/snippets/cotrvarstringmulti)

Dart Create Multiline String Variable

```dart
String ${1:myString} = '''
${2:Your string here}
''';
```

## [cotrVarInt](/snippets/cotrvarint)

Dart Create Integer Variable

```dart
int ${1:myInt} = ${2:0};
```

## [cotrVarDouble](/snippets/cotrvardouble)

Dart Create Double Variable

```dart
double ${1:myDouble} = ${2:0.0};
```

## [cotrComment](/snippets/cotrcomment)

Dart Comment

```dart
// ${1:Your comment here}
```

## [cotrEqual](/snippets/cotrequal)

Dart Equal To

```dart
==
```

## [cotrTypes](/snippets/cotrtypes)

Dart Types

```dart
$BLOCK_COMMENT_START
Dart is a statically typed language.

Types in Dart include:
- num: A number type that can be either an int or a double
- int: Integer
- BigInt: Arbitrary-precision integer
- double: Double-precision floating-point number
- String: A sequence of characters
- bool: Boolean
- List: A list of elements
- Map: A collection of key-value pairs
- Set: A collection of unique elements
- Runes: For expressing Unicode characters in a String
- Symbol: An opaque, dynamic representation of a string in Dart

Read more here: https://dart.dev/language/built-in-types
$BLOCK_COMMENT_END
```

## [cotrTypesInt](/snippets/cotrtypesint)

Dart Integer Type

```dart
int
```

## [cotrVar](/snippets/cotrvar)

Dart Create Variable

```dart
var ${1:myVar} = $2;
```

## [cotrTryCatch](/snippets/cotrtrycatch)

Dart Try Catch

```dart
try {
  ${1:// Your code here}
} catch (${2:exception}) {
  ${3:// Your code here}
}
```

## [cotrIf](/snippets/cotrif)

Dart If Statement

```dart
if (${1:condition}) {
  ${2:// Your code here}
}
```

## [cotrEnum](/snippets/cotrenum)

Dart Enum

```dart
enum ${1:MyEnum} {
  ${2:value1},
  ${3:value2},
  // Add more values here
}
```

## [cotrInfo](/snippets/cotrinfo)

Dart Info

```dart
Typing: Statically typed
Paradigm: Multi-paradigm: object-oriented, functional, imperative, reflective
Compilation: Compiled to native code or transpiled to JavaScript
Concurrency: Supports isolates for concurrent execution
```

## [cotrTypesDate](/snippets/cotrtypesdate)

Dart Date Type

```dart
DateTime
```

## [cotrVarNullable](/snippets/cotrvarnullable)

Dart Create Nullable Variable

```dart
${1:Type}? ${2:myVar} = $3;
```

## [cotrVarString](/snippets/cotrvarstring)

Dart Create String Variable

```dart
String ${1:myString} = ${2:'Your string here'};
```

## [cotrTypesNum](/snippets/cotrtypesnum)

Dart Double Type

```dart
double
```

## [cotrForInLoop](/snippets/cotrforinloop)

Dart For...In Loop

```dart
for (var item in ${1:iterable}) {
  ${2:// Your code here}
}
```

## [cotrThrow](/snippets/cotrthrow)

Dart Throw Exception

```dart
throw ${1:Exception('Your message here')};
```

## [cotrTypesString](/snippets/cotrtypesstring)

Dart String Type

```dart
String
```

## [cotrTypesNumAlt](/snippets/cotrtypesnumalt)

Dart Float Type

```dart
float
```

## [cotrVarBool](/snippets/cotrvarbool)

Dart Create Boolean Variable

```dart
bool ${1:myBool} = ${2:true};
```

## [cotrGenMap](/snippets/cotrgenmap)

Dart Generate Map

```dart
var ${1:myMap} = Map.fromIterable(List.generate(${2:length}, (index) => index),
  key: (item) => 'key' + item.toString(),
  value: (item) => 'value' + item.toString(),
);
```

## [cotrTypesMap](/snippets/cotrtypesmap)

Dart Map Type

```dart
Map<${1:keyType}, ${2:valueType}>
```

## [cotrPrint](/snippets/cotrprint)

Dart Print

```dart
print(${1:'Your message here'});
```

## [cotrFuncSyntax](/snippets/cotrfuncsyntax)

Dart Function Syntax

```dart
// Dart Function Syntax
// Basic function: returnType functionName(parameters) { ... }
// Function with arguments: returnType functionName(arg1Type arg1, arg2Type arg2, ...) { ... }
// Function with named arguments: returnType functionName({arg1Type arg1, arg2Type arg2, ...}) { ... }
```

## [cotrInterpolate](/snippets/cotrinterpolate)

Dart Interpolate String

```dart
'Your string here \${${1:variable}}'
```

## [cotrSwitch](/snippets/cotrswitch)

Dart Switch Statement

```dart
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

## [cotrStructure](/snippets/cotrstructure)

Dart Project Structure (High-Level)

```dart
// Recommended High-Level Dart Project Structure:

// - lib/
//   - Contains the main Dart source files for the project.
//   - Organize by feature or functionality, for example:
//     - models/
//     - views/
//     - controllers/
//     - services/

// - web/ or bin/
//   - For web projects, `web/` contains HTML, CSS, and client-side Dart.
//   - For command-line or server-side projects, `bin/` contains the main entry point scripts.

// - test/
//   - Contains test files for the project, mirroring the structure of `lib/`.

// - pubspec.yaml
//   - The project's package and dependency management file.

// - build/
//   - Contains the output of the Dart build system.

// - doc/ or docs/
//   - Documentation for the project.

// Note:
// - Adjust the structure as needed based on the specific project type and requirements.
// - Use `web/` for web projects and `bin/` for server-side or command-line projects.
```

## [cotrOperators](/snippets/cotroperators)

Dart Mathematical Operators

```dart
// Dart Mathematical Operators
// Addition: +
// Subtraction: -
// Multiplication: *
// Exponentiation: **
// Division: /
// Modulus: %
// Increment: ++
// Decrement: --
// Assignment: =
// Addition assignment: +=
// Subtraction assignment: -=
// Multiplication assignment: *=
// Division assignment: /=
// Modulus assignment: %=
```

## [cotrTypeCheck](/snippets/cotrtypecheck)

Dart Type Check

```dart
${1:variable}.runtimeType
```

## [cotrNow](/snippets/cotrnow)

Dart Date Now

```dart
DateTime.now()
```

## [cotrEntry](/snippets/cotrentry)

Dart Entry Point

```dart
// Dart Entry Point
// To run this program, use: `dart run filename.dart`

void main() {
  // Your code here
}
```

## [cotrFuncArgs](/snippets/cotrfuncargs)

Dart Function Args

```dart
// In Dart, functions can have optional named or positional parameters with default values.
${1:void} ${2:myFunction}(${3:Type} ${4:arg1}, [${5:Type} ${6:arg2} = ${7:defaultValue}]) {
  ${8:// Your code here}
}
```

## [cotrClass](/snippets/cotrclass)

Dart Class

```dart
class ${1:MyClass} {
  ${2:// Your code here}
}
```

## [cotrLambda](/snippets/cotrlambda)

Dart Lambda Function

```dart
(${1:parameters}) => ${2:expression}
```

## [cotrForLoop](/snippets/cotrforloop)

Dart For Loop

```dart
for (int ${1:i} = 0; $1 < ${2:10}; $1++) {
  // Your code here
}
```

## [cotrFuncAnon](/snippets/cotrfuncanon)

Dart Function Anonymous

```dart
(${1:parameters}) {
  ${2:// Your code here}
}
```

## [cotrTypesBoolTrue](/snippets/cotrtypesbooltrue)

Dart Boolean True

```dart
true
```

## [cotrTypesBoolFalse](/snippets/cotrtypesboolfalse)

Dart Boolean False

```dart
false
```

## [cotrTypesList](/snippets/cotrtypeslist)

Dart List Type

```dart
List<${1:type}>
```

## [cotrConst](/snippets/cotrconst)

Dart Create Constant

```dart
const ${1:myConst} = $2;
```

## [cotrTypesBool](/snippets/cotrtypesbool)

Dart Boolean Type

```dart
bool
```

## [cotrVarMap](/snippets/cotrvarmap)

Dart Create Map Variable

```dart
Map<${1:KeyType}, ${2:ValueType}> ${3:myMap} = {
  ${4:key1}: ${5:value1},
  ${6:key2}: ${7:value2}
};
```

## [cotrWhileLoop](/snippets/cotrwhileloop)

Dart While Loop

```dart
while (${1:condition}) {
  ${2:// Your code here}
}
```

## [cotrNull](/snippets/cotrnull)

Dart Null Type

```dart
null
```

## [cotrVarStatic](/snippets/cotrvarstatic)

Dart Static Variable

```dart
static ${2:var} ${3:myStaticVar} = ${4:value};

// Access the static variable
// MyClass.${3:myStaticVar}
```

## [cotrTypeCompare](/snippets/cotrtypecompare)

Dart Type Comparison

```dart
// Check if two variables have the same type:
if (${1:variable1}.runtimeType == ${2:variable2}.runtimeType) {
  // Your code here
}
```

## [cotrFuncArrow](/snippets/cotrfuncarrow)

Dart Function Arrow

```dart
${1:Type} ${2:myFunction}(${3:parameters}) => ${4:expression};
```

## [cotrVarList](/snippets/cotrvarlist)

Dart Create List Variable

```dart
List<${1:Type}> ${2:myList} = [${3:items}];
```

## [cotrVarDate](/snippets/cotrvardate)

Dart Create Date Variable

```dart
DateTime ${1:myDate} = DateTime(${2:year}, ${3:month}, ${4:day});
```

## [cotrIfElse](/snippets/cotrifelse)

Dart If Else Statement

```dart
if (${1:condition}) {
  ${2:// Your code here}
} else if (${3:condition}) {
  ${4:// Your code here}
} else {
  ${5:// Your code here}
}
```

## [cotrTypesChar](/snippets/cotrtypeschar)

Dart Character Type

```dart
char
```

## [cotrTypesDynamic](/snippets/cotrtypesdynamic)

Dart Dynamic Type

```dart
dynamic
```

## [cotrVarSyntax](/snippets/cotrvarsyntax)

Variable Declaration Syntax

```dart
// Dart Variable Declaration Syntax:

// - var: (Scope: Block)
//   - Type is automatically inferred by the compiler.
//   - Preferred for most variable declarations.

// - type: (Scope: Block)
//   - Explicitly specify the variable's type.
//   - Use when var deduction is not desired or not possible.

// - const: (Scope: Block)
//   - Cannot be reassigned or redeclared.
//   - Use for values that should remain constant.

// - final: (Scope: Block)
//   - Cannot be reassigned, but can be declared without initialization.
//   - Use for variables that will be assigned a value later but should not change after that.

// Note:
// - Use 'var' for most variable declarations.
// - Use 'const' for values that are known at compile time.
// - Use 'final' for variables that will be assigned later but should not change.
```

## [cotrNotEqual](/snippets/cotrnotequal)

Dart Not Equal To

```dart
!=
```

## [cotrTernary](/snippets/cotrternary)

Dart Ternary Operator

```dart
${1:condition} ? ${2:trueValue} : ${3:falseValue}
```

## [cotrOperatorsBool](/snippets/cotroperatorsbool)

Dart Boolean Operators

```dart
// Dart Boolean Operators
// Logical AND: &&
// Logical OR: ||
// Logical NOT: !
// Equality: ==
// Inequality: !=
// Greater than: >
// Less than: <
// Greater than or equal to: >=
// Less than or equal to: <=
```

## [cotrTypeConvert](/snippets/cotrtypeconvert)

Dart Type Conversion

```dart
// Dart Type Conversion:

// Implicit conversions (compiler performs automatically):
// - int to double (if no precision loss).

// Explicit conversions (using casts):
// - variable as Type  // Safe cast (returns null if conversion fails)
// - Type.castFrom(variable)  // Conversion methods

// Note:
// - Be cautious with explicit conversions, as they can lead to data loss or errors if the conversion is not valid.
```

## [cotrVarTyped](/snippets/cotrvartyped)

Dart Create Typed Variable

```dart
${1:Type} ${2:myVar} = $3;
```

## [cotrConcat](/snippets/cotrconcat)

Dart Concatenate Strings

```dart
'Your string here ' + ${1:variable}
```

## [cotrCommentMulti](/snippets/cotrcommentmulti)

Dart Multi-Line Comment

```dart
/*
 * ${1:Your comment here}
 */
```

## [cotrGenList](/snippets/cotrgenlist)

Dart Generate List

```dart
var ${1:myList} = List.generate(${2:length}, (index) => ${3:'item'} + index.toString());
```

## [cotrPrintMulti](/snippets/cotrprintmulti)

Dart Print Multi

```dart
print('''
${1:Line 1}
${2:Line 2}
${3:Line 3}
''');
```

## [cotrFunc](/snippets/cotrfunc)

Dart Function

```dart
${1:void} ${2:myFunction}(${3:parameters}) {
  ${4:// Your code here}
}
```

## [cotrFuncArgsNamed](/snippets/cotrfuncargsnamed)

Dart Function Named Args

```dart
${1:void} ${2:myFunction}({${3:arg1}, ${4:arg2}}) {
  ${5:// Your code here}
}
```


## Dart Boolean Type

### [cotrTypesBool](/snippets/cotrTypesBool)

```dart
bool
```

## Dart Boolean True

### [cotrTypesBoolTrue](/snippets/cotrTypesBoolTrue)

```dart
true
```

## Dart Float Type

### [cotrTypesNumAlt](/snippets/cotrTypesNumAlt)

```dart
float
```

## Dart For...In Loop

### [cotrForInLoop](/snippets/cotrForInLoop)

```dart
for (var item in ${1:iterable}) {
  ${2:// Your code here}
}
```

## Dart Comment

### [cotrComment](/snippets/cotrComment)

```dart
// ${1:Your comment here}
```

## Dart Create Variable

### [cotrVar](/snippets/cotrVar)

```dart
var ${1:myVar} = $2;
```

## Dart Concatenate Strings

### [cotrConcat](/snippets/cotrConcat)

```dart
'Your string here ' + ${1:variable}
```

## Dart While Loop

### [cotrWhileLoop](/snippets/cotrWhileLoop)

```dart
while (${1:condition}) {
  ${2:// Your code here}
}
```

## Dart Try Catch

### [cotrTryCatch](/snippets/cotrTryCatch)

```dart
try {
  ${1:// Your code here}
} catch (${2:exception}) {
  ${3:// Your code here}
}
```

## Dart Not Equal To

### [cotrNotEqual](/snippets/cotrNotEqual)

```dart
!=
```

## Dart Double Type

### [cotrTypesNum](/snippets/cotrTypesNum)

```dart
double
```

## Dart Create Typed Variable

### [cotrVarTyped](/snippets/cotrVarTyped)

```dart
${1:Type} ${2:myVar} = $3;
```

## Dart Create String Variable

### [cotrVarString](/snippets/cotrVarString)

```dart
String ${1:myString} = ${2:'Your string here'};
```

## Dart Date Now

### [cotrNow](/snippets/cotrNow)

```dart
DateTime.now()
```

## Dart Function Arrow

### [cotrFuncArrow](/snippets/cotrFuncArrow)

```dart
${1:Type} ${2:myFunction}(${3:parameters}) => ${4:expression};
```

## Dart Lambda Function

### [cotrLambda](/snippets/cotrLambda)

```dart
(${1:parameters}) => ${2:expression}
```

## Dart Create Double Variable

### [cotrVarDouble](/snippets/cotrVarDouble)

```dart
double ${1:myDouble} = ${2:0.0};
```

## Dart Generate Map

### [cotrGenMap](/snippets/cotrGenMap)

```dart
var ${1:myMap} = Map.fromIterable(List.generate(${2:length}, (index) => index),
  key: (item) => 'key' + item.toString(),
  value: (item) => 'value' + item.toString(),
);
```

## Dart Switch Statement

### [cotrSwitch](/snippets/cotrSwitch)

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

## Dart Multi-Line Comment

### [cotrCommentMulti](/snippets/cotrCommentMulti)

```dart
/*
 * ${1:Your comment here}
 */
```

## Dart Mathematical Operators

### [cotrOperators](/snippets/cotrOperators)

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

## Dart Integer Type

### [cotrTypesInt](/snippets/cotrTypesInt)

```dart
int
```

## Dart Character Type

### [cotrTypesChar](/snippets/cotrTypesChar)

```dart
char
```

## Dart Dynamic Type

### [cotrTypesDynamic](/snippets/cotrTypesDynamic)

```dart
dynamic
```

## Dart Function Syntax

### [cotrFuncSyntax](/snippets/cotrFuncSyntax)

```dart
// Dart Function Syntax
// Basic function: returnType functionName(parameters) { ... }
// Function with arguments: returnType functionName(arg1Type arg1, arg2Type arg2, ...) { ... }
// Function with named arguments: returnType functionName({arg1Type arg1, arg2Type arg2, ...}) { ... }
```

## Dart Project Structure (High-Level)

### [cotrStructure](/snippets/cotrStructure)

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

## Dart Type Conversion

### [cotrTypeConvert](/snippets/cotrTypeConvert)

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

## Dart Date Type

### [cotrTypesDate](/snippets/cotrTypesDate)

```dart
DateTime
```

## Dart Function Named Args

### [cotrFuncArgsNamed](/snippets/cotrFuncArgsNamed)

```dart
${1:void} ${2:myFunction}({${3:arg1}, ${4:arg2}}) {
  ${5:// Your code here}
}
```

## Dart Info

### [cotrInfo](/snippets/cotrInfo)

```dart
Typing: Statically typed
Paradigm: Multi-paradigm: object-oriented, functional, imperative, reflective
Compilation: Compiled to native code or transpiled to JavaScript
Concurrency: Supports isolates for concurrent execution
```

## Dart Boolean False

### [cotrTypesBoolFalse](/snippets/cotrTypesBoolFalse)

```dart
false
```

## Dart Create Map Variable

### [cotrVarMap](/snippets/cotrVarMap)

```dart
Map<${1:KeyType}, ${2:ValueType}> ${3:myMap} = {
  ${4:key1}: ${5:value1},
  ${6:key2}: ${7:value2}
};
```

## Dart Boolean Operators

### [cotrOperatorsBool](/snippets/cotrOperatorsBool)

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

## Dart Map Type

### [cotrTypesMap](/snippets/cotrTypesMap)

```dart
Map<${1:keyType}, ${2:valueType}>
```

## Dart Type Check

### [cotrTypeCheck](/snippets/cotrTypeCheck)

```dart
${1:variable}.runtimeType
```

## Dart Create Multiline String Variable

### [cotrVarStringMulti](/snippets/cotrVarStringMulti)

```dart
String ${1:myString} = '''
${2:Your string here}
''';
```

## Dart Create List Variable

### [cotrVarList](/snippets/cotrVarList)

```dart
List<${1:Type}> ${2:myList} = [${3:items}];
```

## Dart Generate List

### [cotrGenList](/snippets/cotrGenList)

```dart
var ${1:myList} = List.generate(${2:length}, (index) => ${3:'item'} + index.toString());
```

## Dart Static Variable

### [cotrVarStatic](/snippets/cotrVarStatic)

```dart
static ${2:var} ${3:myStaticVar} = ${4:value};

// Access the static variable
// MyClass.${3:myStaticVar}
```

## Dart List Type

### [cotrTypesList](/snippets/cotrTypesList)

```dart
List<${1:type}>
```

## Dart Interpolate String

### [cotrInterpolate](/snippets/cotrInterpolate)

```dart
'Your string here \${${1:variable}}'
```

## Dart Create Boolean Variable

### [cotrVarBool](/snippets/cotrVarBool)

```dart
bool ${1:myBool} = ${2:true};
```

## Dart Create Date Variable

### [cotrVarDate](/snippets/cotrVarDate)

```dart
DateTime ${1:myDate} = DateTime(${2:year}, ${3:month}, ${4:day});
```

## Dart Entry Point

### [cotrEntry](/snippets/cotrEntry)

```dart
// Dart Entry Point
// To run this program, use: `dart run filename.dart`

void main() {
  // Your code here
}
```

## Dart Equal To

### [cotrEqual](/snippets/cotrEqual)

```dart
==
```

## Dart Type Comparison

### [cotrTypeCompare](/snippets/cotrTypeCompare)

```dart
// Check if two variables have the same type:
if (${1:variable1}.runtimeType == ${2:variable2}.runtimeType) {
  // Your code here
}
```

## Dart String Type

### [cotrTypesString](/snippets/cotrTypesString)

```dart
String
```

## Dart Function Anonymous

### [cotrFuncAnon](/snippets/cotrFuncAnon)

```dart
(${1:parameters}) {
  ${2:// Your code here}
}
```

## Dart Ternary Operator

### [cotrTernary](/snippets/cotrTernary)

```dart
${1:condition} ? ${2:trueValue} : ${3:falseValue}
```

## Dart Create Constant

### [cotrConst](/snippets/cotrConst)

```dart
const ${1:myConst} = $2;
```

## Dart Print

### [cotrPrint](/snippets/cotrPrint)

```dart
print(${1:'Your message here'});
```

## Dart For Loop

### [cotrForLoop](/snippets/cotrForLoop)

```dart
for (int ${1:i} = 0; $1 < ${2:10}; $1++) {
  // Your code here
}
```

## Dart Enum

### [cotrEnum](/snippets/cotrEnum)

```dart
enum ${1:MyEnum} {
  ${2:value1},
  ${3:value2},
  // Add more values here
}
```

## Dart Function Args

### [cotrFuncArgs](/snippets/cotrFuncArgs)

```dart
// In Dart, functions can have optional named or positional parameters with default values.
${1:void} ${2:myFunction}(${3:Type} ${4:arg1}, [${5:Type} ${6:arg2} = ${7:defaultValue}]) {
  ${8:// Your code here}
}
```

## Dart If Statement

### [cotrIf](/snippets/cotrIf)

```dart
if (${1:condition}) {
  ${2:// Your code here}
}
```

## Dart Null Type

### [cotrNull](/snippets/cotrNull)

```dart
null
```

## Dart Create Nullable Variable

### [cotrVarNullable](/snippets/cotrVarNullable)

```dart
${1:Type}? ${2:myVar} = $3;
```

## Dart Create Integer Variable

### [cotrVarInt](/snippets/cotrVarInt)

```dart
int ${1:myInt} = ${2:0};
```

## Dart Class

### [cotrClass](/snippets/cotrClass)

```dart
class ${1:MyClass} {
  ${2:// Your code here}
}
```

## Dart Throw Exception

### [cotrThrow](/snippets/cotrThrow)

```dart
throw ${1:Exception('Your message here')};
```

## Dart If Else Statement

### [cotrIfElse](/snippets/cotrIfElse)

```dart
if (${1:condition}) {
  ${2:// Your code here}
} else if (${3:condition}) {
  ${4:// Your code here}
} else {
  ${5:// Your code here}
}
```

## Dart Types

### [cotrTypes](/snippets/cotrTypes)

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

## Variable Declaration Syntax

### [cotrVarSyntax](/snippets/cotrVarSyntax)

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

## Dart Print Multi

### [cotrPrintMulti](/snippets/cotrPrintMulti)

```dart
print('''
${1:Line 1}
${2:Line 2}
${3:Line 3}
''');
```

## Dart Function

### [cotrFunc](/snippets/cotrFunc)

```dart
${1:void} ${2:myFunction}(${3:parameters}) {
  ${4:// Your code here}
}
```


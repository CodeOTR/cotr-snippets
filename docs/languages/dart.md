## Dart Null Type

### {[cotrNull null nil none nothing option]}

```
null
```

## Variable Declaration Syntax

### {[cotrVarSyntax variableSyntax howToVariables letSyntax]}

```
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

## Dart Create Boolean Variable

### {[cotrVarBool variableBool bool boolVariable createBool]}

```
bool ${1:myBool} = ${2:true};
```

## Dart Boolean Operators

### {[cotrOperatorsBool booleanOperators logic]}

```
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

## Dart This Type Check

### {[thisTypeCheck thisType getThisType]}

```
$CLIPBOARD.runtimeType
```

## Dart Double Type

### {[cotrTypesNum numberType typeNumber doubleType typeDouble]}

```
double
```

## Dart Boolean False

### {[cotrTypesBoolFalse false off booleanFalse]}

```
false
```

## Dart Create Map Variable

### {[cotrVarMap createMap createStruct variableMap variableStruct mapVariable structVariable dictVariable variableDict createDict]}

```
Map<${1:KeyType}, ${2:ValueType}> ${3:myMap} = {
  ${4:key1}: ${5:value1},
  ${6:key2}: ${7:value2}
};
```

## Dart For Loop

### {[cotrForLoop forLoop forX]}

```
for (int ${1:i} = 0; $1 < ${2:10}; $1++) {
  // Your code here
}
```

## Dart Function Arrow

### {[cotrFuncArrow arrowFunction functionArrow]}

```
${1:Type} ${2:myFunction}(${3:parameters}) => ${4:expression};
```

## Dart Integer Type

### {[cotrTypesInt intType typeInt]}

```
int
```

## Dart Comment

### {[cotrComment comment note]}

```
// ${1:Your comment here}
```

## Dart Create Multiline String Variable

### {[cotrVarStringMulti multiLineString varStringMulti stringVariableMulti createMultiLineString]}

```
String ${1:myString} = '''
${2:Your string here}
''';
```

## Dart Create Double Variable

### {[cotrVarDouble double doubleVariable variableDouble createDouble]}

```
double ${1:myDouble} = ${2:0.0};
```

## Dart Function Args

### {[cotrFuncArgs functionArgs functionWithArgs]}

```
// In Dart, functions can have optional named or positional parameters with default values.
${1:void} ${2:myFunction}(${3:Type} ${4:arg1}, [${5:Type} ${6:arg2} = ${7:defaultValue}]) {
  ${8:// Your code here}
}
```

## Dart Equal To

### {[cotrEqual equal]}

```
==
```

## Dart String Type

### {[cotrTypesString stringType typeString textType typeText]}

```
String
```

## Dart Date Type

### {[cotrTypesDate dateType typeDate timeType timestampType dateTimeType]}

```
DateTime
```

## Dart Concatenate Strings

### {[cotrConcat concatenate combine]}

```
'Your string here ' + ${1:variable}
```

## Dart Function Syntax

### {[cotrFuncSyntax functionSyntax functionDocs]}

```
// Dart Function Syntax
// Basic function: returnType functionName(parameters) { ... }
// Function with arguments: returnType functionName(arg1Type arg1, arg2Type arg2, ...) { ... }
// Function with named arguments: returnType functionName({arg1Type arg1, arg2Type arg2, ...}) { ... }
```

## Dart Throw Exception

### {[cotrThrow throwError throwException]}

```
throw ${1:Exception('Your message here')};
```

## Dart Class

### {[cotrClass class objectTemplate]}

```
class ${1:MyClass} {
  ${2:// Your code here}
}
```

## Dart Create String Variable

### {[cotrVarString string stringVariable variableString text createString createText]}

```
String ${1:myString} = ${2:'Your string here'};
```

## Dart Generate Map

### {[cotrGenMap generateMap]}

```
var ${1:myMap} = Map.fromIterable(List.generate(${2:length}, (index) => index),
  key: (item) => 'key' + item.toString(),
  value: (item) => 'value' + item.toString(),
);
```

## Dart While Loop

### {[cotrWhileLoop whileLoop whileTrue]}

```
while (${1:condition}) {
  ${2:// Your code here}
}
```

## Dart Function

### {[cotrFunc function subprogram procedure subroutine method]}

```
${1:void} ${2:myFunction}(${3:parameters}) {
  ${4:// Your code here}
}
```

## Dart Entry Point

### {[cotrEntry entry start startingPoint]}

```
// Dart Entry Point
// To run this program, use: `dart run filename.dart`

void main() {
  // Your code here
}
```

## Dart Generate List

### {[cotrGenList generateList listGen]}

```
var ${1:myList} = List.generate(${2:length}, (index) => ${3:'item'} + index.toString());
```

## Dart Enum

### {[cotrEnum enum]}

```
enum ${1:MyEnum} {
  ${2:value1},
  ${3:value2},
  // Add more values here
}
```

## Dart Create Constant

### {[cotrConst constant]}

```
const ${1:myConst} = $2;
```

## Dart Type Check

### {[cotrTypeCheck checkType getType typeOf]}

```
${1:variable}.runtimeType
```

## Dart Boolean True

### {[cotrTypesBoolTrue true booleanTrue on]}

```
true
```

## Dart Character Type

### {[cotrTypesChar]}

```
char
```

## Dart Create Nullable Variable

### {[cotrVarNullable variableNullable nullableVariable]}

```
${1:Type}? ${2:myVar} = $3;
```

## Dart Not Equal To

### {[cotrNotEqual notEqual doesNotEqual]}

```
!=
```

## Dart Print

### {[cotrPrint print log systemOut write consoleLog]}

```
print(${1:'Your message here'});
```

## Dart Lambda Function

### {cotrLambda}

```
(${1:parameters}) => ${2:expression}
```

## Dart Boolean Type

### {[cotrTypesBool booleanType typeBool]}

```
bool
```

## Dart Create Variable

### {[cotrVar variable createVariable newVariable]}

```
var ${1:myVar} = $2;
```

## Dart Type Comparison

### {[cotrTypeCompare compareTypes]}

```
// Check if two variables have the same type:
if (${1:variable1}.runtimeType == ${2:variable2}.runtimeType) {
  // Your code here
}
```

## Dart Types

### {[cotrTypes types allTypes languageTypes builtInTypes dataTypes]}

```
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

## Dart List Type

### {[cotrTypesList listType typeList typeArray]}

```
List<${1:type}>
```

## Dart Map Type

### {[cotrTypesMap mapType typeMap hashmapType structType dictType typeDict typeScruct]}

```
Map<${1:keyType}, ${2:valueType}>
```

## Dart Create Date Variable

### {[cotrVarDate dateVariable variableDate date]}

```
DateTime ${1:myDate} = DateTime(${2:year}, ${3:month}, ${4:day});
```

## Dart Create Typed Variable

### {[cotrVarTyped typedVariable variableWithType]}

```
${1:Type} ${2:myVar} = $3;
```

## Dart Print Multi

### {[cotrPrintMulti printMultiLine]}

```
print('''
${1:Line 1}
${2:Line 2}
${3:Line 3}
''');
```

## Dart Function Named Args

### {[cotrFuncArgsNamed functionNamedArgs]}

```
${1:void} ${2:myFunction}({${3:arg1}, ${4:arg2}}) {
  ${5:// Your code here}
}
```

## Dart Info

### {[cotrInfo languageInfo info]}

```
Typing: Statically typed
Paradigm: Multi-paradigm: object-oriented, functional, imperative, reflective
Compilation: Compiled to native code or transpiled to JavaScript
Concurrency: Supports isolates for concurrent execution
```

## Dart Create List Variable

### {[cotrVarList createList listVariable arrayVariable variableList variableArray list array]}

```
List<${1:Type}> ${2:myList} = [${3:items}];
```

## Dart Static Variable

### {[cotrVarStatic staticVariable associatedConstant]}

```
static ${2:var} ${3:myStaticVar} = ${4:value};

// Access the static variable
// MyClass.${3:myStaticVar}
```

## Dart Try Catch

### {[cotrTryCatch tryCatch]}

```
try {
  ${1:// Your code here}
} catch (${2:exception}) {
  ${3:// Your code here}
}
```

## Dart Ternary Operator

### {[cotrTernary ternary conditionalOperator]}

```
${1:condition} ? ${2:trueValue} : ${3:falseValue}
```

## Dart Mathematical Operators

### {[cotrOperators operators mathDocs]}

```
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

## Dart Dynamic Type

### {[cotrTypesDynamic typesDynamic typesAny dynamicType anyType]}

```
dynamic
```

## Dart Date Now

### {[cotrNow now currentTime dateNow]}

```
DateTime.now()
```

## Dart Interpolate String

### {[cotrInterpolate interpolate variableExpansion variableSubstitution stringPlaceholders stringInterpolation]}

```
'Your string here \${${1:variable}}'
```

## Dart If Else Statement

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

## Dart Project Structure (High-Level)

### {[cotrStructure structure architecture]}

```
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

### {[cotrTypeConvert cotrTypeCast cotrConvert cotrCast]}

```
// Dart Type Conversion:

// Implicit conversions (compiler performs automatically):
// - int to double (if no precision loss).

// Explicit conversions (using casts):
// - variable as Type  // Safe cast (returns null if conversion fails)
// - Type.castFrom(variable)  // Conversion methods

// Note:
// - Be cautious with explicit conversions, as they can lead to data loss or errors if the conversion is not valid.
```

## Dart Float Type

### {[cotrTypesNumAlt floatType typeFloat]}

```
float
```

## Dart Create Integer Variable

### {[cotrVarInt integer int variableInt intVariable createInt]}

```
int ${1:myInt} = ${2:0};
```

## Dart If Statement

### {[cotrIf ifStatement]}

```
if (${1:condition}) {
  ${2:// Your code here}
}
```

## Dart For...In Loop

### {[cotrForInLoop forIn]}

```
for (var item in ${1:iterable}) {
  ${2:// Your code here}
}
```

## Dart Switch Statement

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

## Dart Function Anonymous

### {[cotrFuncAnon anonFunc anonymous closure lambda functionLiteral cotrFuncLambda]}

```
(${1:parameters}) {
  ${2:// Your code here}
}
```

## Dart Multi-Line Comment

### {[cotrCommentMulti multiLineComment commentMultiLine blockComment]}

```
/*
 * ${1:Your comment here}
 */
```


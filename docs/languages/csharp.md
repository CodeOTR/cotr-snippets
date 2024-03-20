## C# Date Now

### {[cotrNow now currentTime dateNow]}

```
DateTime.Now
```

## C# Interpolate String

### {[cotrInterpolate interpolate variableExpansion variableSubstitution stringPlaceholders stringInterpolation]}

```
$"${1:Your string here}"
```

## C# Print

### {[cotrPrint print log systemOut write consoleLog]}

```
Console.WriteLine(${1:'Your message here'});
```

## C# For Each Loop

### {[cotrForEachLoop forEach]}

```
foreach (${1:Type} ${2:item} in ${3:iterable}) {
  ${4:// Your code here}
}
```

## C# Function Args

### {[cotrFuncArgs functionArgs functionWithArgs]}

```
// In C#, functions can have arguments with default values.
public ${1:void} ${2:MyFunction}(${3:type1} ${4:arg1}, ${5:type2} ${6:arg2} = ${7:defaultValue})
{
    ${8:// Your code here}
}
```

## C# Info

### {[cotrInfo languageInfo info]}

```
// Typing: Statically typed
// Paradigm: Multi-paradigm: structured, imperative, object-oriented, event-driven, task-driven, functional, generic, reflective, concurrent
// Compilation: Compiled (.NET Framework), Just-In-Time (JIT) compilation (.NET Core)
// Concurrency: Supports multi-threading, async/await
```

## C# Double Type

### {[cotrTypesNum number numberType typeNumber double doubleType typeDouble]}

```
double
```

## C# Null Type

### {[cotrTypesNull nullType typesNull]}

```
null
```

## C# Create Variable

### {[cotrVar variable createVariable newVariable]}

```
${1:Type} ${2:myVar} = ${3:value};
```

## C# Static Variable

### {[cotrVarStatic staticVariable associatedConstant]}

```
static ${2:Type} ${3:myStaticVar} = ${4:value};

// Access the static variable
// MyClass.${3:myStaticVar}
```

## C# Print Multi

### {[cotrPrintMulti printMultiLine]}

```
Console.WriteLine(@"""
${1:Line 1}
${2:Line 2}
${3:Line 3}
""");
```

## C# If Else Statement

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

## C# List Type

### {[cotrTypesList list array listType typeList typeArray]}

```
List<${1:type}>
```

## C# Create String Variable

### {[cotrVarString string stringVariable variableString text createString createText]}

```
string ${1:myString} = ${2:'Your string here'};
```

## C# Anonymous Function

### {[cotrFuncAnon anonFunc anonymous closure functionLiteral]}

```
(${1:parameters}) => {
    ${2:// Your code here}
};
```

## C# Equal To

### {[cotrEqual equal]}

```
==
```

## C# Dynamic Type

### {[cotrTypesDynamic typesDynamic typesAny dynamicType anyType]}

```
dynamic
```

## C# For Loop

### {[cotrForLoop forLoop forX]}

```
for (int ${1:i} = 0; $1 < ${2:10}; $1++) {
  // Your code here
}
```

## C# Ternary Operator

### {[cotrTernary ternary conditionalOperator]}

```
${1:condition} ? ${2:trueValue} : ${3:falseValue}
```

## C# String Type

### {[cotrTypesString stringType typeString textType typeText]}

```
string
```

## C# Switch Statement

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

## C# Create Multi-Line String Variable

### {[cotrVarStringMulti multiLineString varStringMulti stringVariableMulti createMultiLineString]}

```
string ${1:myString} = @"""
${2:Line 1}
${3:Line 2}
${4:Line 3}
""";
```

## C# Project Structure (High-Level)

### {[cotrStructure structure architecture]}

```
// Recommended High-Level C# Project Structure:

// - src/
//   - Contains the source code for the application.
//   - Organize by feature or purpose within separate directories or projects,
//     such as:
//     - Services/
//     - Controllers/
//     - Models/
//     - Views/ (for web applications)

// - lib/
//   - Contains external libraries or dependencies, typically managed by NuGet.

// - tests/
//   - Contains unit tests, integration tests, etc.
//   - Organize tests to reflect the structure of the src/ directory.

// - docs/
//   - Documentation related to the project.

// - tools/
//   - Contains scripts and other tools for the project (e.g., build scripts).

// - build/
//   - Contains build output.

// Note:
// - Projects in C# are often structured as solutions containing multiple
//   projects (class libraries, web applications, etc.).
// - This structure can vary depending on the project type and developer preferences.
```

## C# This Type Check

### {[thisTypeCheck thisType getThisType]}

```
$CLIPBOARD.GetType().Name
```

## C# Boolean True

### {[cotrTypesBoolTrue true booleanTrue on]}

```
true
```

## C# Date Type

### {[cotrTypesDate dateType typeDate timeType timestampType dateTimeType]}

```
DateTime
```

## C# Create Integer Variable

### {[cotrVarInt integer int variableInt intVariable createInt]}

```
int ${1:myInt} = ${2:0};
```

## C# Create Boolean Variable

### {[cotrVarBool variableBool bool boolVariable createBool]}

```
bool ${1:myBool} = ${2:true};
```

## C# Function Named Args

### {[cotrFuncArgsNamed functionNamedArgs]}

```
// Note: C# does not have named arguments in function definitions.
// You can use named parameters in method calls.
public ${1:void} ${2:MyFunction}(${3:type1} ${4:arg1}, ${5:type2} ${6:arg2})
{
    ${7:// Your code here}
}
```

## C# Arrow Function

### {[cotrFuncArrow arrowFunction functionArrow]}

```
Func<${2:parameters}, ${1:returnType}> ${3:myFunction} = (${4:parameters}) => {
    ${5:// Your code here}
};
```

## C# Mathematical Operators

### {[cotrOperators operators mathDocs]}

```
// C# Mathematical Operators
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

## C# Create List Variable

### {[cotrVarList createList listVariable arrayVariable variableList variableArray list array]}

```
List<${1:Type}> ${2:myList} = new List<${1:Type}>();
```

## C# Try Catch

### {[cotrTryCatch tryCatch]}

```
try {
  ${1:// Your code here}
} catch (${2:Exception} ${3:e}) {
  ${4:// Your code here}
}
```

## C# Not Equal To

### {[cotrNotEqual notEqual doesNotEqual]}

```
!=
```

## C# Map Type

### {[cotrTypesMap map mapType typeMap hashmap struct dict typeDict typeScruct]}

```
Dictionary<${1:keyType}, ${2:valueType}>
```

## C# Concatenate Strings

### {[cotrConcat concatenate combine]}

```
string result = string.Concat(${1:First string}, ${2:Second string});
```

## C# While Loop

### {[cotrWhileLoop whileLoop whileTrue]}

```
while (${1:condition}) {
  ${2:// Your code here}
}
```

## C# Do While Loop

### {[cotrDoWhileLoop doWhile]}

```
do {
  ${1:// Your code here}
} while (${2:condition});
```

## C# Function

### {[cotrFunc function subprogram procedure subroutine method]}

```
public ${1:void} ${2:MyFunction}(${3:parameters})
{
    ${4:// Your code here}
}
```

## C# Throw Exception

### {[cotrThrow throwError throwException]}

```
throw new ${1:Exception}(${2:'Your message here'});
```

## C# Enum

### {[cotrEnum enum]}

```
enum ${1:MyEnum} {
  ${2:value1},
  ${3:value2},
  // Add more values here
}
```

## C# Class

### {[cotrClass class objectTemplate]}

```
public class ${1:MyClass} {
  ${2:// Your code here}
}
```

## C# Boolean Type

### {[cotrTypesBool booleanType typeBool]}

```
bool
```

## C# Boolean False

### {[cotrTypesBoolFalse false off booleanFalse]}

```
false
```

## C# Create Dictionary Variable

### {[cotrVarMap createMap createStruct variableMap variableStruct mapVariable structVariable dictVariable variableDict createDict]}

```
Dictionary<${1:Key}, ${2:Value}> ${3:myDict} = new Dictionary<${1:Key}, ${2:Value}>();
```

## C# Generate List

### {[cotrGenList generateList listGen]}

```
var ${1:myList} = Enumerable.Range(0, ${2:length}).Select(i => ${3:'item'} + i.ToString()).ToList();
```

## C# Function Syntax

### {[cotrFuncSyntax functionSyntax functionDocs]}

```
// C# Function Syntax
// Basic function: public returnType FunctionName(parameters) { ... }
// Function with arguments: public returnType FunctionName(argType argName, ...) { ... }
// Named parameters in method calls: FunctionName(argName: value, ...);
```

## C# Type Comparison

### {[cotrTypeCompare compareTypes]}

```
// Check if two variables have the same type:
if (${1:variable1}.GetType() == ${2:variable2}.GetType()) {
  // Your code here
}
```

## C# Entry Point

### {[cotrEntry entry start startingPoint]}

```
// C# Entry Point
// To run this program, use: `dotnet run` within the project directory

class Program
{
    static void Main(string[] args)
    {
        // Your code here
    }
}
```

## C# Types

### {[cotrTypes types allTypes languageTypes builtInTypes dataTypes]}

```
$BLOCK_COMMENT_START
C# is a statically typed language.

Types in C# include:
- int: Integer
- float: Single-precision floating-point number
- double: Double-precision floating-point number
- char: Character
- bool: Boolean
- string: String
- int[]: Array of integers
- List<int>: List of integers
- Dictionary<K, V>: Dictionary with key type K and value type V
- struct MyStruct: Custom value type with named fields
- enum MyEnum: Enumeration type
- void: Type representing the absence of a value
- object: Base type of all other types
- dynamic: Type for dynamic binding
- var: Type inferred by the compiler
- Nullable<T>: Type representing a value of type T or null
- Tuple<T1, T2, ...>: Tuple with elements of different types
- Action, Func<T>: Delegate types for methods

Read more here: https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types
$BLOCK_COMMENT_END
```

## C# Integer Type

### {[cotrTypesInt intType typeInt]}

```
int
```

## C# Float Type

### {[cotrTypesNumAlt floatType typeFloat]}

```
float
```

## C# Generate Map

### {[cotrGenMap generateMap]}

```
var ${1:myMap} = Enumerable.Range(0, ${2:length}).ToDictionary(i => i, i => ${3:'item'} + i.ToString());
```

## C# Lambda Function

### {[cotrFuncLambda cotrLambda lambda]}

```
(${1:parameters}) => ${2:expression}
```

## C# Type Conversion

### {[cotrTypeConvert cotrTypeCast cotrConvert]}

```
// C# Type Conversion:

// Implicit conversions (compiler performs automatically):
// - Smaller numeric types to larger numeric types (e.g., int to double).

// Explicit conversions (using casts):
// - (Type)variable  // C-style cast
// - variable as Type  // Safe cast (returns null if conversion fails)
// - Convert.ToType(variable)  // Conversion methods in the Convert class

// Note:
// - Be cautious with explicit conversions, as they can lead to data loss or errors if the conversion is not valid.
```

## C# Create Date Variable

### {[cotrVarDate dateVariable variableDate date]}

```
DateTime ${1:myDate} = new DateTime(${2:year}, ${3:month}, ${4:day});
```

## C# Multi-Line Comment

### {[cotrCommentMulti multiLineComment commentMultiLine blockComment]}

```
/*
 * ${1:Your comment here}
 */
```

## C# Create Typed Variable

### {[cotrVarTyped typedVariable variableWithType]}

```
${1:Type} ${2:myVar} = $3;
```

## C# Create Nullable Variable

### {[cotrVarNullable variableNullable nullableVariable]}

```
${1:Type}? ${2:myVar} = $3;
```

## C# If Statement

### {[cotrIf ifStatement]}

```
if (${1:condition}) {
  ${2:// Your code here}
}
```

## C# Boolean Operators

### {[cotrOperatorsBool booleanOperators logic]}

```
// C# Boolean Operators
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

## C# Type Check

### {[cotrTypeCheck checkType getType typeOf]}

```
${1:variable}.GetType()
```

## C# Variable Declaration Syntax

### {[cotrVarSyntax variableSyntax howToVariables letSyntax]}

```
// C# Variable Declaration Syntax:

// - var: (Scope: Block)
//   - Type is automatically inferred by the compiler.
//   - Preferred for most variable declarations.

// - type: (Scope: Block)
//   - Explicitly specify the variable's type.
//   - Use when var deduction is not desired or not possible.

// - const: (Scope: Block)
//   - Cannot be reassigned or redeclared.
//   - Use for values that should remain constant.

// Note:
// - C# does not have a direct equivalent to 'let'.
// - Use 'var' for most variable declarations.
// - Use 'const' for values that should not change.
```

## C# Create Double Variable

### {[cotrVarDouble double doubleVariable variableDouble createDouble]}

```
double ${1:myDouble} = ${2:0.0};
```

## C# Create Constant

### {[cotrConst constant]}

```
const ${1:Type} ${2:myConst} = ${3:value};
```

## C# Comment

### {[cotrComment comment note]}

```
// ${1:Your comment here}
```


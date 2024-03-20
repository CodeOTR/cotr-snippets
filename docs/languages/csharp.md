## C# Concatenate Strings

### [cotrConcat](/snippets/cotrConcat)

```csharp
string result = string.Concat(${1:First string}, ${2:Second string});
```

## C# Function Syntax

### [cotrFuncSyntax](/snippets/cotrFuncSyntax)

```csharp
// C# Function Syntax
// Basic function: public returnType FunctionName(parameters) { ... }
// Function with arguments: public returnType FunctionName(argType argName, ...) { ... }
// Named parameters in method calls: FunctionName(argName: value, ...);
```

## C# Boolean Type

### [cotrTypesBool](/snippets/cotrTypesBool)

```csharp
bool
```

## C# Date Now

### [cotrNow](/snippets/cotrNow)

```csharp
DateTime.Now
```

## C# Create Multi-Line String Variable

### [cotrVarStringMulti](/snippets/cotrVarStringMulti)

```csharp
string ${1:myString} = @"""
${2:Line 1}
${3:Line 2}
${4:Line 3}
""";
```

## C# Create Integer Variable

### [cotrVarInt](/snippets/cotrVarInt)

```csharp
int ${1:myInt} = ${2:0};
```

## C# Boolean False

### [cotrTypesBoolFalse](/snippets/cotrTypesBoolFalse)

```csharp
false
```

## C# Create Nullable Variable

### [cotrVarNullable](/snippets/cotrVarNullable)

```csharp
${1:Type}? ${2:myVar} = $3;
```

## C# If Statement

### [cotrIf](/snippets/cotrIf)

```csharp
if (${1:condition}) {
  ${2:// Your code here}
}
```

## C# Create Typed Variable

### [cotrVarTyped](/snippets/cotrVarTyped)

```csharp
${1:Type} ${2:myVar} = $3;
```

## C# Project Structure (High-Level)

### [cotrStructure](/snippets/cotrStructure)

```csharp
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

## C# Boolean Operators

### [cotrOperatorsBool](/snippets/cotrOperatorsBool)

```csharp
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

## C# Type Comparison

### [cotrTypeCompare](/snippets/cotrTypeCompare)

```csharp
// Check if two variables have the same type:
if (${1:variable1}.GetType() == ${2:variable2}.GetType()) {
  // Your code here
}
```

## C# List Type

### [cotrTypesList](/snippets/cotrTypesList)

```csharp
List<${1:type}>
```

## C# Entry Point

### [cotrEntry](/snippets/cotrEntry)

```csharp
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

## C# Create Variable

### [cotrVar](/snippets/cotrVar)

```csharp
${1:Type} ${2:myVar} = ${3:value};
```

## C# Generate List

### [cotrGenList](/snippets/cotrGenList)

```csharp
var ${1:myList} = Enumerable.Range(0, ${2:length}).Select(i => ${3:'item'} + i.ToString()).ToList();
```

## C# For Each Loop

### [cotrForEachLoop](/snippets/cotrForEachLoop)

```csharp
foreach (${1:Type} ${2:item} in ${3:iterable}) {
  ${4:// Your code here}
}
```

## C# Switch Statement

### [cotrSwitch](/snippets/cotrSwitch)

```csharp
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

## C# Function Named Args

### [cotrFuncArgsNamed](/snippets/cotrFuncArgsNamed)

```csharp
// Note: C# does not have named arguments in function definitions.
// You can use named parameters in method calls.
public ${1:void} ${2:MyFunction}(${3:type1} ${4:arg1}, ${5:type2} ${6:arg2})
{
    ${7:// Your code here}
}
```

## C# String Type

### [cotrTypesString](/snippets/cotrTypesString)

```csharp
string
```

## C# Types

### [cotrTypes](/snippets/cotrTypes)

```csharp
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

## C# Static Variable

### [cotrVarStatic](/snippets/cotrVarStatic)

```csharp
static ${2:Type} ${3:myStaticVar} = ${4:value};

// Access the static variable
// MyClass.${3:myStaticVar}
```

## C# Arrow Function

### [cotrFuncArrow](/snippets/cotrFuncArrow)

```csharp
Func<${2:parameters}, ${1:returnType}> ${3:myFunction} = (${4:parameters}) => {
    ${5:// Your code here}
};
```

## C# Lambda Function

### [cotrFuncLambda](/snippets/cotrFuncLambda)

```csharp
(${1:parameters}) => ${2:expression}
```

## C# Comment

### [cotrComment](/snippets/cotrComment)

```csharp
// ${1:Your comment here}
```

## C# Enum

### [cotrEnum](/snippets/cotrEnum)

```csharp
enum ${1:MyEnum} {
  ${2:value1},
  ${3:value2},
  // Add more values here
}
```

## C# Type Check

### [cotrTypeCheck](/snippets/cotrTypeCheck)

```csharp
${1:variable}.GetType()
```

## C# Dynamic Type

### [cotrTypesDynamic](/snippets/cotrTypesDynamic)

```csharp
dynamic
```

## C# Interpolate String

### [cotrInterpolate](/snippets/cotrInterpolate)

```csharp
$"${1:Your string here}"
```

## C# Create Double Variable

### [cotrVarDouble](/snippets/cotrVarDouble)

```csharp
double ${1:myDouble} = ${2:0.0};
```

## C# Equal To

### [cotrEqual](/snippets/cotrEqual)

```csharp
==
```

## C# Variable Declaration Syntax

### [cotrVarSyntax](/snippets/cotrVarSyntax)

```csharp
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

## C# Create String Variable

### [cotrVarString](/snippets/cotrVarString)

```csharp
string ${1:myString} = ${2:'Your string here'};
```

## C# For Loop

### [cotrForLoop](/snippets/cotrForLoop)

```csharp
for (int ${1:i} = 0; $1 < ${2:10}; $1++) {
  // Your code here
}
```

## C# Function

### [cotrFunc](/snippets/cotrFunc)

```csharp
public ${1:void} ${2:MyFunction}(${3:parameters})
{
    ${4:// Your code here}
}
```

## C# Function Args

### [cotrFuncArgs](/snippets/cotrFuncArgs)

```csharp
// In C#, functions can have arguments with default values.
public ${1:void} ${2:MyFunction}(${3:type1} ${4:arg1}, ${5:type2} ${6:arg2} = ${7:defaultValue})
{
    ${8:// Your code here}
}
```

## C# Null Type

### [cotrTypesNull](/snippets/cotrTypesNull)

```csharp
null
```

## C# Create Boolean Variable

### [cotrVarBool](/snippets/cotrVarBool)

```csharp
bool ${1:myBool} = ${2:true};
```

## C# Print

### [cotrPrint](/snippets/cotrPrint)

```csharp
Console.WriteLine(${1:'Your message here'});
```

## C# Print Multi

### [cotrPrintMulti](/snippets/cotrPrintMulti)

```csharp
Console.WriteLine(@"""
${1:Line 1}
${2:Line 2}
${3:Line 3}
""");
```

## C# While Loop

### [cotrWhileLoop](/snippets/cotrWhileLoop)

```csharp
while (${1:condition}) {
  ${2:// Your code here}
}
```

## C# Do While Loop

### [cotrDoWhileLoop](/snippets/cotrDoWhileLoop)

```csharp
do {
  ${1:// Your code here}
} while (${2:condition});
```

## C# Throw Exception

### [cotrThrow](/snippets/cotrThrow)

```csharp
throw new ${1:Exception}(${2:'Your message here'});
```

## C# Double Type

### [cotrTypesNum](/snippets/cotrTypesNum)

```csharp
double
```

## C# Not Equal To

### [cotrNotEqual](/snippets/cotrNotEqual)

```csharp
!=
```

## C# Float Type

### [cotrTypesNumAlt](/snippets/cotrTypesNumAlt)

```csharp
float
```

## C# Boolean True

### [cotrTypesBoolTrue](/snippets/cotrTypesBoolTrue)

```csharp
true
```

## C# Generate Map

### [cotrGenMap](/snippets/cotrGenMap)

```csharp
var ${1:myMap} = Enumerable.Range(0, ${2:length}).ToDictionary(i => i, i => ${3:'item'} + i.ToString());
```

## C# Multi-Line Comment

### [cotrCommentMulti](/snippets/cotrCommentMulti)

```csharp
/*
 * ${1:Your comment here}
 */
```

## C# Info

### [cotrInfo](/snippets/cotrInfo)

```csharp
// Typing: Statically typed
// Paradigm: Multi-paradigm: structured, imperative, object-oriented, event-driven, task-driven, functional, generic, reflective, concurrent
// Compilation: Compiled (.NET Framework), Just-In-Time (JIT) compilation (.NET Core)
// Concurrency: Supports multi-threading, async/await
```

## C# Type Conversion

### [cotrTypeConvert](/snippets/cotrTypeConvert)

```csharp
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

## C# Date Type

### [cotrTypesDate](/snippets/cotrTypesDate)

```csharp
DateTime
```

## C# Map Type

### [cotrTypesMap](/snippets/cotrTypesMap)

```csharp
Dictionary<${1:keyType}, ${2:valueType}>
```

## C# Create Dictionary Variable

### [cotrVarMap](/snippets/cotrVarMap)

```csharp
Dictionary<${1:Key}, ${2:Value}> ${3:myDict} = new Dictionary<${1:Key}, ${2:Value}>();
```

## C# Mathematical Operators

### [cotrOperators](/snippets/cotrOperators)

```csharp
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

## C# Ternary Operator

### [cotrTernary](/snippets/cotrTernary)

```csharp
${1:condition} ? ${2:trueValue} : ${3:falseValue}
```

## C# Class

### [cotrClass](/snippets/cotrClass)

```csharp
public class ${1:MyClass} {
  ${2:// Your code here}
}
```

## C# Try Catch

### [cotrTryCatch](/snippets/cotrTryCatch)

```csharp
try {
  ${1:// Your code here}
} catch (${2:Exception} ${3:e}) {
  ${4:// Your code here}
}
```

## C# Anonymous Function

### [cotrFuncAnon](/snippets/cotrFuncAnon)

```csharp
(${1:parameters}) => {
    ${2:// Your code here}
};
```

## C# Integer Type

### [cotrTypesInt](/snippets/cotrTypesInt)

```csharp
int
```

## C# Create List Variable

### [cotrVarList](/snippets/cotrVarList)

```csharp
List<${1:Type}> ${2:myList} = new List<${1:Type}>();
```

## C# Create Constant

### [cotrConst](/snippets/cotrConst)

```csharp
const ${1:Type} ${2:myConst} = ${3:value};
```

## C# If Else Statement

### [cotrIfElse](/snippets/cotrIfElse)

```csharp
if (${1:condition}) {
  ${2:// Your code here}
} else if (${3:condition}) {
  ${4:// Your code here}
} else {
  ${5:// Your code here}
}
```

## C# Create Date Variable

### [cotrVarDate](/snippets/cotrVarDate)

```csharp
DateTime ${1:myDate} = new DateTime(${2:year}, ${3:month}, ${4:day});
```


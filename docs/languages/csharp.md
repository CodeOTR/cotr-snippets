---
title: Csharp
description: Csharp snippets on the rocks.
---

## [cotrTypesList](/snippets/cotrtypeslist)

C# List Type

```csharp
List<${1:type}>
```

## [cotrTypesNumAlt](/snippets/cotrtypesnumalt)

C# Float Type

```csharp
float
```

## [cotrVarNullable](/snippets/cotrvarnullable)

C# Create Nullable Variable

```csharp
${1:Type}? ${2:myVar} = $3;
```

## [cotrComment](/snippets/cotrcomment)

C# Comment

```csharp
// ${1:Your comment here}
```

## [cotrTypeConvert](/snippets/cotrtypeconvert)

C# Type Conversion

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

## [cotrTypesDynamic](/snippets/cotrtypesdynamic)

C# Dynamic Type

```csharp
dynamic
```

## [cotrVarDouble](/snippets/cotrvardouble)

C# Create Double Variable

```csharp
double ${1:myDouble} = ${2:0.0};
```

## [cotrVarMap](/snippets/cotrvarmap)

C# Create Dictionary Variable

```csharp
Dictionary<${1:Key}, ${2:Value}> ${3:myDict} = new Dictionary<${1:Key}, ${2:Value}>();
```

## [cotrWhileLoop](/snippets/cotrwhileloop)

C# While Loop

```csharp
while (${1:condition}) {
  ${2:// Your code here}
}
```

## [cotrTypesNum](/snippets/cotrtypesnum)

C# Double Type

```csharp
double
```

## [cotrTernary](/snippets/cotrternary)

C# Ternary Operator

```csharp
${1:condition} ? ${2:trueValue} : ${3:falseValue}
```

## [cotrTypesBoolFalse](/snippets/cotrtypesboolfalse)

C# Boolean False

```csharp
false
```

## [cotrVarStatic](/snippets/cotrvarstatic)

C# Static Variable

```csharp
static ${2:Type} ${3:myStaticVar} = ${4:value};

// Access the static variable
// MyClass.${3:myStaticVar}
```

## [cotrFuncArgsNamed](/snippets/cotrfuncargsnamed)

C# Function Named Args

```csharp
// Note: C# does not have named arguments in function definitions.
// You can use named parameters in method calls.
public ${1:void} ${2:MyFunction}(${3:type1} ${4:arg1}, ${5:type2} ${6:arg2})
{
    ${7:// Your code here}
}
```

## [cotrTryCatch](/snippets/cotrtrycatch)

C# Try Catch

```csharp
try {
  ${1:// Your code here}
} catch (${2:Exception} ${3:e}) {
  ${4:// Your code here}
}
```

## [cotrEqual](/snippets/cotrequal)

C# Equal To

```csharp
==
```

## [cotrConcat](/snippets/cotrconcat)

C# Concatenate Strings

```csharp
string result = string.Concat(${1:First string}, ${2:Second string});
```

## [cotrThrow](/snippets/cotrthrow)

C# Throw Exception

```csharp
throw new ${1:Exception}(${2:'Your message here'});
```

## [cotrTypesDate](/snippets/cotrtypesdate)

C# Date Type

```csharp
DateTime
```

## [cotrInterpolate](/snippets/cotrinterpolate)

C# Interpolate String

```csharp
$"${1:Your string here}"
```

## [cotrVarSyntax](/snippets/cotrvarsyntax)

C# Variable Declaration Syntax

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

## [cotrVarString](/snippets/cotrvarstring)

C# Create String Variable

```csharp
string ${1:myString} = ${2:'Your string here'};
```

## [cotrSwitch](/snippets/cotrswitch)

C# Switch Statement

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

## [cotrFuncAnon](/snippets/cotrfuncanon)

C# Anonymous Function

```csharp
(${1:parameters}) => {
    ${2:// Your code here}
};
```

## [cotrTypesNull](/snippets/cotrtypesnull)

C# Null Type

```csharp
null
```

## [cotrTypesMap](/snippets/cotrtypesmap)

C# Map Type

```csharp
Dictionary<${1:keyType}, ${2:valueType}>
```

## [cotrVar](/snippets/cotrvar)

C# Create Variable

```csharp
${1:Type} ${2:myVar} = ${3:value};
```

## [cotrVarDate](/snippets/cotrvardate)

C# Create Date Variable

```csharp
DateTime ${1:myDate} = new DateTime(${2:year}, ${3:month}, ${4:day});
```

## [cotrPrint](/snippets/cotrprint)

C# Print

```csharp
Console.WriteLine(${1:'Your message here'});
```

## [cotrTypesBool](/snippets/cotrtypesbool)

C# Boolean Type

```csharp
bool
```

## [cotrVarList](/snippets/cotrvarlist)

C# Create List Variable

```csharp
List<${1:Type}> ${2:myList} = new List<${1:Type}>();
```

## [cotrDoWhileLoop](/snippets/cotrdowhileloop)

C# Do While Loop

```csharp
do {
  ${1:// Your code here}
} while (${2:condition});
```

## [cotrCommentMulti](/snippets/cotrcommentmulti)

C# Multi-Line Comment

```csharp
/*
 * ${1:Your comment here}
 */
```

## [cotrTypeCheck](/snippets/cotrtypecheck)

C# Type Check

```csharp
${1:variable}.GetType()
```

## [cotrNotEqual](/snippets/cotrnotequal)

C# Not Equal To

```csharp
!=
```

## [cotrNow](/snippets/cotrnow)

C# Date Now

```csharp
DateTime.Now
```

## [cotrGenMap](/snippets/cotrgenmap)

C# Generate Map

```csharp
var ${1:myMap} = Enumerable.Range(0, ${2:length}).ToDictionary(i => i, i => ${3:'item'} + i.ToString());
```

## [cotrStructure](/snippets/cotrstructure)

C# Project Structure (High-Level)

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

## [cotrTypeCompare](/snippets/cotrtypecompare)

C# Type Comparison

```csharp
// Check if two variables have the same type:
if (${1:variable1}.GetType() == ${2:variable2}.GetType()) {
  // Your code here
}
```

## [cotrTypes](/snippets/cotrtypes)

C# Types

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

## [cotrTypesInt](/snippets/cotrtypesint)

C# Integer Type

```csharp
int
```

## [cotrConst](/snippets/cotrconst)

C# Create Constant

```csharp
const ${1:Type} ${2:myConst} = ${3:value};
```

## [cotrIf](/snippets/cotrif)

C# If Statement

```csharp
if (${1:condition}) {
  ${2:// Your code here}
}
```

## [cotrOperatorsBool](/snippets/cotroperatorsbool)

C# Boolean Operators

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

## [cotrFuncArgs](/snippets/cotrfuncargs)

C# Function Args

```csharp
// In C#, functions can have arguments with default values.
public ${1:void} ${2:MyFunction}(${3:type1} ${4:arg1}, ${5:type2} ${6:arg2} = ${7:defaultValue})
{
    ${8:// Your code here}
}
```

## [cotrEnum](/snippets/cotrenum)

C# Enum

```csharp
enum ${1:MyEnum} {
  ${2:value1},
  ${3:value2},
  // Add more values here
}
```

## [cotrEntry](/snippets/cotrentry)

C# Entry Point

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

## [cotrVarBool](/snippets/cotrvarbool)

C# Create Boolean Variable

```csharp
bool ${1:myBool} = ${2:true};
```

## [cotrVarStringMulti](/snippets/cotrvarstringmulti)

C# Create Multi-Line String Variable

```csharp
string ${1:myString} = @"""
${2:Line 1}
${3:Line 2}
${4:Line 3}
""";
```

## [cotrOperators](/snippets/cotroperators)

C# Mathematical Operators

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

## [cotrTypesString](/snippets/cotrtypesstring)

C# String Type

```csharp
string
```

## [cotrVarInt](/snippets/cotrvarint)

C# Create Integer Variable

```csharp
int ${1:myInt} = ${2:0};
```

## [cotrGenList](/snippets/cotrgenlist)

C# Generate List

```csharp
var ${1:myList} = Enumerable.Range(0, ${2:length}).Select(i => ${3:'item'} + i.ToString()).ToList();
```

## [cotrForLoop](/snippets/cotrforloop)

C# For Loop

```csharp
for (int ${1:i} = 0; $1 < ${2:10}; $1++) {
  // Your code here
}
```

## [cotrForEachLoop](/snippets/cotrforeachloop)

C# For Each Loop

```csharp
foreach (${1:Type} ${2:item} in ${3:iterable}) {
  ${4:// Your code here}
}
```

## [cotrFuncArrow](/snippets/cotrfuncarrow)

C# Arrow Function

```csharp
Func<${2:parameters}, ${1:returnType}> ${3:myFunction} = (${4:parameters}) => {
    ${5:// Your code here}
};
```

## [cotrInfo](/snippets/cotrinfo)

C# Info

```csharp
// Typing: Statically typed
// Paradigm: Multi-paradigm: structured, imperative, object-oriented, event-driven, task-driven, functional, generic, reflective, concurrent
// Compilation: Compiled (.NET Framework), Just-In-Time (JIT) compilation (.NET Core)
// Concurrency: Supports multi-threading, async/await
```

## [cotrClass](/snippets/cotrclass)

C# Class

```csharp
public class ${1:MyClass} {
  ${2:// Your code here}
}
```

## [cotrIfElse](/snippets/cotrifelse)

C# If Else Statement

```csharp
if (${1:condition}) {
  ${2:// Your code here}
} else if (${3:condition}) {
  ${4:// Your code here}
} else {
  ${5:// Your code here}
}
```

## [cotrFuncSyntax](/snippets/cotrfuncsyntax)

C# Function Syntax

```csharp
// C# Function Syntax
// Basic function: public returnType FunctionName(parameters) { ... }
// Function with arguments: public returnType FunctionName(argType argName, ...) { ... }
// Named parameters in method calls: FunctionName(argName: value, ...);
```

## [cotrPrintMulti](/snippets/cotrprintmulti)

C# Print Multi

```csharp
Console.WriteLine(@"""
${1:Line 1}
${2:Line 2}
${3:Line 3}
""");
```

## [cotrTypesBoolTrue](/snippets/cotrtypesbooltrue)

C# Boolean True

```csharp
true
```

## [cotrFunc](/snippets/cotrfunc)

C# Function

```csharp
public ${1:void} ${2:MyFunction}(${3:parameters})
{
    ${4:// Your code here}
}
```

## [cotrFuncLambda](/snippets/cotrfunclambda)

C# Lambda Function

```csharp
(${1:parameters}) => ${2:expression}
```

## [cotrVarTyped](/snippets/cotrvartyped)

C# Create Typed Variable

```csharp
${1:Type} ${2:myVar} = $3;
```


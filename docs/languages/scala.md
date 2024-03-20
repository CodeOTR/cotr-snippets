---
title: Scala
description: Scala snippets on the rocks.
---

## [cotrConst](/snippets/cotrconst)

Scala Create Constant

```scala
val ${1:myConst} = $2
```

## [cotrInfo](/snippets/cotrinfo)

Scala Info

```scala
// Typing: Statically typed
// Paradigm: Multi-paradigm: object-oriented, functional
// Compilation: Compiled to bytecode for the Java Virtual Machine (JVM)
// Concurrency: Supports multi-threading and concurrent programming with actors and futures
```

## [cotrTypesBool](/snippets/cotrtypesbool)

Scala Boolean Type

```scala
Boolean
```

## [cotrVar](/snippets/cotrvar)

Scala Create Variable

```scala
var ${1:myVar}: ${2:Type} = $3
```

## [cotrForEachLoop](/snippets/cotrforeachloop)

Scala For Each Loop

```scala
for (item <- ${1:iterable}) {
  // Your code here
}
```

## [cotrFuncLambda](/snippets/cotrfunclambda)

Scala Lambda

```scala
(${1:parameters}) => ${2:expression}
```

## [cotrTypesList](/snippets/cotrtypeslist)

Scala List Type

```scala
List[${1:type}]
```

## [cotrVarMap](/snippets/cotrvarmap)

Scala Create Map Variable

```scala
val ${1:myMap} = Map(${2:key} -> ${3:value})
```

## [cotrEntry](/snippets/cotrentry)

Scala Entry Point

```scala
// Scala Entry Point
// To run this program, use: `scala Main.scala`

object Main extends App {
  // Your code here
}
```

## [cotrOperatorsBool](/snippets/cotroperatorsbool)

Scala Boolean Operators

```scala
// Scala Boolean Operators
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

## [cotrTypesMap](/snippets/cotrtypesmap)

Scala Map Type

```scala
Map[${1:keyType}, ${2:valueType}]
```

## [cotrDynamic](/snippets/cotrdynamic)

Scala Dynamic Type

```scala
Any
```

## [cotrFunc](/snippets/cotrfunc)

Scala Function

```scala
def ${2:myFunction}(${3:parameters}): ${1:Unit} = {
  ${4:// Your code here}
}
```

## [cotrEqual](/snippets/cotrequal)

Scala Equal To

```scala
==
```

## [cotrNotEqual](/snippets/cotrnotequal)

Scala Not Equal To

```scala
!=
```

## [cotrVarString](/snippets/cotrvarstring)

Scala Create String Variable

```scala
val ${1:myString} = "${2:Your string here}"
```

## [cotrIf](/snippets/cotrif)

Scala If Statement

```scala
if (${1:condition}) {
  // Your code here
}
```

## [cotrTypeConvert](/snippets/cotrtypeconvert)

Scala Type Conversion

```scala
// Scala Type Conversion:

// Implicit conversions (compiler performs automatically):
// - Smaller numeric types to larger numeric types (e.g., Int to Double).

// Explicit conversions (using casts):
// - variable.asInstanceOf[Type]  // Type casting (can throw ClassCastException if conversion fails)
// - variable.toType  // Conversion methods (e.g., toInt, toDouble)

// Note:
// - Be cautious with explicit conversions, as they can lead to errors if the conversion is not valid.
```

## [cotrVarStringMulti](/snippets/cotrvarstringmulti)

Scala Create Multi-Line String Variable

```scala
val ${1:myString} = """
${2:Line 1}
${3:Line 2}
${4:Line 3}
"""
```

## [cotrVarBool](/snippets/cotrvarbool)

Scala Create Boolean Variable

```scala
val ${1:myBool} = ${2:true}
```

## [cotrCommentMulti](/snippets/cotrcommentmulti)

Scala Multi-Line Comment

```scala
/*
 * ${1:Your comment here}
 */
```

## [cotrOperators](/snippets/cotroperators)

Scala Mathematical Operators

```scala
// Scala Mathematical Operators
// Addition: +
// Subtraction: -
// Multiplication: *
// Exponentiation: Math.pow(base, exponent)
// Division: /
// Modulus (Remainder): %
// Increment: Use += 1
// Decrement: Use -= 1
// Assignment: =
// Addition assignment: +=
// Subtraction assignment: -=
// Multiplication assignment: *=
// Division assignment: /=
// Modulus assignment: %=
```

## [cotrTypesBoolFalse](/snippets/cotrtypesboolfalse)

Scala Boolean False

```scala
false
```

## [cotrNull](/snippets/cotrnull)

Scala Null Type

```scala
null
```

## [cotrVarNullable](/snippets/cotrvarnullable)

Scala Create Nullable Variable

```scala
var ${1:myVar}: Option[${2:Type}] = None
```

## [cotrComment](/snippets/cotrcomment)

Scala Comment

```scala
// ${1:Your comment here}
```

## [cotrTypesString](/snippets/cotrtypesstring)

Scala String Type

```scala
String
```

## [cotrTypesNumAlt](/snippets/cotrtypesnumalt)

Scala Float Type

```scala
Float
```

## [cotrInterpolate](/snippets/cotrinterpolate)

Scala Interpolate String

```scala
s"Your string here \${${1:variable}}"
```

## [cotrVarDouble](/snippets/cotrvardouble)

Scala Create Double Variable

```scala
val ${1:myDouble} = ${2:0.0}
```

## [cotrConcat](/snippets/cotrconcat)

Scala Concatenate String

```scala
${1:"string1"} + ${2:"string2"}
```

## [cotrStructure](/snippets/cotrstructure)

Scala Project Structure (High-Level)

```scala
// Recommended High-Level Scala Project Structure:

// - build.sbt: The build definition file for SBT (Scala Build Tool).
// - project/
//   - Contains build-related scripts and configurations for SBT.
// - src/
//   - main/
//     - scala/
//       - Contains Scala source files organized by package.
//     - java/
//       - Optional: Contains Java source files if the project mixes Scala and Java.
//     - resources/
//       - Contains non-compiled resources like configurations, JSON files, etc.
//   - test/
//     - scala/
//       - Contains Scala test files, typically using frameworks like ScalaTest or Specs2.
//     - java/
//       - Optional: Contains Java test files if the project mixes Scala and Java.
//     - resources/
//       - Test-specific resources.
// - lib/
//   - Optional: Contains unmanaged library dependencies (jars).
// - target/
//   - Contains compiled bytecode and other build artifacts.

// Note:
// - The structure is based on SBT's standard layout.
// - Use the 'lib' directory for unmanaged dependencies, although managed dependencies
//   in the build.sbt file are preferred.
```

## [cotrTypes](/snippets/cotrtypes)

Scala Types

```scala
$BLOCK_COMMENT_START
Scala is a statically typed language.

Types in Scala include:
- Int: Integer
- Double: Double-precision floating-point number
- Float: Single-precision floating-point number
- Char: Character
- Boolean: Boolean
- String: String
- Array[T]: Array of type T
- List[T]: List of type T
- Set[T]: Set of unique elements of type T
- Map[K, V]: Map with key type K and value type V
- Any: Base type of all non-nullable types
- Unit: Type with only one value - Unit (similar to void)
- Nothing: Type with no values - used for functions that never return
- Option[T]: Type representing a value of type T or None
- Function types (e.g., (Int, Int) => Int): Types representing functions
- Case classes: Classes primarily used to hold data
- Sealed classes: Classes that restrict which other classes can inherit from them
- Enum classes: Enumeration classes
- Object: Singleton object
- Trait: Interface type
$BLOCK_COMMENT_END
```

## [cotrVarSyntax](/snippets/cotrvarsyntax)

Scala Variable Declaration Syntax

```scala
// Scala Variable Declaration Syntax:

// - var: (Scope: Block or Class)
//   - Can be reassigned.
//   - Use for variables that need to be changed.

// - val: (Scope: Block or Class)
//   - Cannot be reassigned after initialization.
//   - Preferred for values that should remain constant.

// Note:
// - Use 'val' by default for values that won't change.
// - Use 'var' only when you need to reassign the variable.
```

## [cotrVarTyped](/snippets/cotrvartyped)

Scala Create Typed Variable

```scala
var ${1:myVar}: ${2:Type} = $3
```

## [cotrForLoop](/snippets/cotrforloop)

Scala For Loop

```scala
for (i <- ${1:0 until 10}) {
  // Your code here
}
```

## [cotrNow](/snippets/cotrnow)

Scala Date Now

```scala
// Use java.time or ScalaTime to get the current date and time.
```

## [cotrTernary](/snippets/cotrternary)

Ternary Operator (Alternative)

```scala
// Scala does not have a ternary operator.
// Use an if-else expression instead:

val result = if (${1:condition}) ${2:trueValue} else ${3:falseValue}
```

## [cotrFuncArgsNamed](/snippets/cotrfuncargsnamed)

Scala Function Named Args

```scala
def ${2:myFunction}(${3:arg1}: ${4:Type1} = ${5:defaultValue1}, ${6:arg2}: ${7:Type2} = ${8:defaultValue2}): ${1:Unit} = {
  ${9:// Your code here}
}
```

## [cotrTypeCompare](/snippets/cotrtypecompare)

Scala Type Comparison

```scala
// Check if two variables have the same type:
if (${1:variable1}.getClass == ${2:variable2}.getClass) {
  // Your code here
}
```

## [cotrTypesDate](/snippets/cotrtypesdate)

Scala Date Type

```scala
// Scala does not have a built-in Date type. Use the java.time package or libraries like ScalaTime for date and time operations.
```

## [cotrWhileLoop](/snippets/cotrwhileloop)

Scala While Loop

```scala
while (${1:condition}) {
  // Your code here
}
```

## [cotrPrint](/snippets/cotrprint)

Scala Print

```scala
println(${1:'Your message here'})
```

## [cotrTypesInt](/snippets/cotrtypesint)

Scala Integer Type

```scala
Int
```

## [cotrTypesNum](/snippets/cotrtypesnum)

Scala Double Type

```scala
Double
```

## [cotrTypesBoolTrue](/snippets/cotrtypesbooltrue)

Scala Boolean True

```scala
true
```

## [cotrVarInt](/snippets/cotrvarint)

Scala Create Integer Variable

```scala
val ${1:myInt} = ${2:0}
```

## [cotrClass](/snippets/cotrclass)

Scala Class Syntax

```scala
class ${1:MyClass} {
  // Your code here
}
```

## [cotrVarList](/snippets/cotrvarlist)

Scala Create Array Variable

```scala
val ${1:myList} = List(${2:items})
```

## [cotrIfElse](/snippets/cotrifelse)

Scala If Else Statement

```scala
if (${1:condition}) {
  // Your code here
} else {
  // Your code here
}
```

## [cotrFuncSyntax](/snippets/cotrfuncsyntax)

Function Syntax

```scala
// Scala Function Syntax:

// Basic function:
// def functionName(parameters): ReturnType = { ... }

// Function with arguments:
// def functionName(arg1: Type1, arg2: Type2, ...): ReturnType = { ... }

// Function with named arguments and default values:
// def functionName(arg1: Type1 = defaultValue1, arg2: Type2 = defaultValue2, ...): ReturnType = { ... }
```

## [cotrFuncArgs](/snippets/cotrfuncargs)

Scala Function Args

```scala
// In Scala, functions can have arguments with default values.
def ${2:myFunction}(${3:arg1}: ${4:Type1}, ${5:arg2}: ${6:Type2} = ${7:defaultValue}): ${1:Unit} = {
  ${8:// Your code here}
}
```

## [cotrTypeCheck](/snippets/cotrtypecheck)

Scala Type Check

```scala
${1:variable}.getClass
```

## [cotrPrintMulti](/snippets/cotrprintmulti)

Scala Print Multi

```scala
println("""
${1:Line 1}
${2:Line 2}
${3:Line 3}
""")
```


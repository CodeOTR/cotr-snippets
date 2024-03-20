## Scala Float Type

### [cotrTypesNumAlt](/snippets/cotrTypesNumAlt)

```scala
Float
```

## Scala Types

### [cotrTypes](/snippets/cotrTypes)

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

## Scala Boolean True

### [cotrTypesBoolTrue](/snippets/cotrTypesBoolTrue)

```scala
true
```

## Scala Create Variable

### [cotrVar](/snippets/cotrVar)

```scala
var ${1:myVar}: ${2:Type} = $3
```

## Scala Create Array Variable

### [cotrVarList](/snippets/cotrVarList)

```scala
val ${1:myList} = List(${2:items})
```

## Scala Entry Point

### [cotrEntry](/snippets/cotrEntry)

```scala
// Scala Entry Point
// To run this program, use: `scala Main.scala`

object Main extends App {
  // Your code here
}
```

## Scala Type Comparison

### [cotrTypeCompare](/snippets/cotrTypeCompare)

```scala
// Check if two variables have the same type:
if (${1:variable1}.getClass == ${2:variable2}.getClass) {
  // Your code here
}
```

## Scala List Type

### [cotrTypesList](/snippets/cotrTypesList)

```scala
List[${1:type}]
```

## Scala Variable Declaration Syntax

### [cotrVarSyntax](/snippets/cotrVarSyntax)

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

## Scala While Loop

### [cotrWhileLoop](/snippets/cotrWhileLoop)

```scala
while (${1:condition}) {
  // Your code here
}
```

## Scala Project Structure (High-Level)

### [cotrStructure](/snippets/cotrStructure)

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

## Scala Type Conversion

### [cotrTypeConvert](/snippets/cotrTypeConvert)

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

## Function Syntax

### [cotrFuncSyntax](/snippets/cotrFuncSyntax)

```scala
// Scala Function Syntax:

// Basic function:
// def functionName(parameters): ReturnType = { ... }

// Function with arguments:
// def functionName(arg1: Type1, arg2: Type2, ...): ReturnType = { ... }

// Function with named arguments and default values:
// def functionName(arg1: Type1 = defaultValue1, arg2: Type2 = defaultValue2, ...): ReturnType = { ... }
```

## Scala Lambda

### [cotrFuncLambda](/snippets/cotrFuncLambda)

```scala
(${1:parameters}) => ${2:expression}
```

## Scala Double Type

### [cotrTypesNum](/snippets/cotrTypesNum)

```scala
Double
```

## Ternary Operator (Alternative)

### [cotrTernary](/snippets/cotrTernary)

```scala
// Scala does not have a ternary operator.
// Use an if-else expression instead:

val result = if (${1:condition}) ${2:trueValue} else ${3:falseValue}
```

## Scala Print Multi

### [cotrPrintMulti](/snippets/cotrPrintMulti)

```scala
println("""
${1:Line 1}
${2:Line 2}
${3:Line 3}
""")
```

## Scala For Loop

### [cotrForLoop](/snippets/cotrForLoop)

```scala
for (i <- ${1:0 until 10}) {
  // Your code here
}
```

## Scala For Each Loop

### [cotrForEachLoop](/snippets/cotrForEachLoop)

```scala
for (item <- ${1:iterable}) {
  // Your code here
}
```

## Scala Function

### [cotrFunc](/snippets/cotrFunc)

```scala
def ${2:myFunction}(${3:parameters}): ${1:Unit} = {
  ${4:// Your code here}
}
```

## Scala Map Type

### [cotrTypesMap](/snippets/cotrTypesMap)

```scala
Map[${1:keyType}, ${2:valueType}]
```

## Scala Create Typed Variable

### [cotrVarTyped](/snippets/cotrVarTyped)

```scala
var ${1:myVar}: ${2:Type} = $3
```

## Scala Function Named Args

### [cotrFuncArgsNamed](/snippets/cotrFuncArgsNamed)

```scala
def ${2:myFunction}(${3:arg1}: ${4:Type1} = ${5:defaultValue1}, ${6:arg2}: ${7:Type2} = ${8:defaultValue2}): ${1:Unit} = {
  ${9:// Your code here}
}
```

## Scala Multi-Line Comment

### [cotrCommentMulti](/snippets/cotrCommentMulti)

```scala
/*
 * ${1:Your comment here}
 */
```

## Scala Interpolate String

### [cotrInterpolate](/snippets/cotrInterpolate)

```scala
s"Your string here \${${1:variable}}"
```

## Scala If Else Statement

### [cotrIfElse](/snippets/cotrIfElse)

```scala
if (${1:condition}) {
  // Your code here
} else {
  // Your code here
}
```

## Scala Function Args

### [cotrFuncArgs](/snippets/cotrFuncArgs)

```scala
// In Scala, functions can have arguments with default values.
def ${2:myFunction}(${3:arg1}: ${4:Type1}, ${5:arg2}: ${6:Type2} = ${7:defaultValue}): ${1:Unit} = {
  ${8:// Your code here}
}
```

## Scala Type Check

### [cotrTypeCheck](/snippets/cotrTypeCheck)

```scala
${1:variable}.getClass
```

## Scala If Statement

### [cotrIf](/snippets/cotrIf)

```scala
if (${1:condition}) {
  // Your code here
}
```

## Scala Boolean False

### [cotrTypesBoolFalse](/snippets/cotrTypesBoolFalse)

```scala
false
```

## Scala Null Type

### [cotrNull](/snippets/cotrNull)

```scala
null
```

## Scala Create Integer Variable

### [cotrVarInt](/snippets/cotrVarInt)

```scala
val ${1:myInt} = ${2:0}
```

## Scala Create Double Variable

### [cotrVarDouble](/snippets/cotrVarDouble)

```scala
val ${1:myDouble} = ${2:0.0}
```

## Scala Create Boolean Variable

### [cotrVarBool](/snippets/cotrVarBool)

```scala
val ${1:myBool} = ${2:true}
```

## Scala Info

### [cotrInfo](/snippets/cotrInfo)

```scala
// Typing: Statically typed
// Paradigm: Multi-paradigm: object-oriented, functional
// Compilation: Compiled to bytecode for the Java Virtual Machine (JVM)
// Concurrency: Supports multi-threading and concurrent programming with actors and futures
```

## Scala Not Equal To

### [cotrNotEqual](/snippets/cotrNotEqual)

```scala
!=
```

## Scala Dynamic Type

### [cotrDynamic](/snippets/cotrDynamic)

```scala
Any
```

## Scala Boolean Type

### [cotrTypesBool](/snippets/cotrTypesBool)

```scala
Boolean
```

## Scala Date Type

### [cotrTypesDate](/snippets/cotrTypesDate)

```scala
// Scala does not have a built-in Date type. Use the java.time package or libraries like ScalaTime for date and time operations.
```

## Scala Date Now

### [cotrNow](/snippets/cotrNow)

```scala
// Use java.time or ScalaTime to get the current date and time.
```

## Scala Mathematical Operators

### [cotrOperators](/snippets/cotrOperators)

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

## Scala Create Multi-Line String Variable

### [cotrVarStringMulti](/snippets/cotrVarStringMulti)

```scala
val ${1:myString} = """
${2:Line 1}
${3:Line 2}
${4:Line 3}
"""
```

## Scala Boolean Operators

### [cotrOperatorsBool](/snippets/cotrOperatorsBool)

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

## Scala Create Map Variable

### [cotrVarMap](/snippets/cotrVarMap)

```scala
val ${1:myMap} = Map(${2:key} -> ${3:value})
```

## Scala Class Syntax

### [cotrClass](/snippets/cotrClass)

```scala
class ${1:MyClass} {
  // Your code here
}
```

## Scala Equal To

### [cotrEqual](/snippets/cotrEqual)

```scala
==
```

## Scala Create String Variable

### [cotrVarString](/snippets/cotrVarString)

```scala
val ${1:myString} = "${2:Your string here}"
```

## Scala Comment

### [cotrComment](/snippets/cotrComment)

```scala
// ${1:Your comment here}
```

## Scala Integer Type

### [cotrTypesInt](/snippets/cotrTypesInt)

```scala
Int
```

## Scala Concatenate String

### [cotrConcat](/snippets/cotrConcat)

```scala
${1:"string1"} + ${2:"string2"}
```

## Scala Create Nullable Variable

### [cotrVarNullable](/snippets/cotrVarNullable)

```scala
var ${1:myVar}: Option[${2:Type}] = None
```

## Scala Create Constant

### [cotrConst](/snippets/cotrConst)

```scala
val ${1:myConst} = $2
```

## Scala Print

### [cotrPrint](/snippets/cotrPrint)

```scala
println(${1:'Your message here'})
```

## Scala String Type

### [cotrTypesString](/snippets/cotrTypesString)

```scala
String
```


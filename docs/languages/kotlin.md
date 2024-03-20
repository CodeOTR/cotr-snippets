---
title: Kotlin
description: Kotlin snippets on the rocks.
---

## [cotrForInLoop](/snippets/cotrforinloop)

Kotlin For...In Loop

```kotlin
for (item in ${1:iterable}) {
  // Your code here
}
```

## [cotrThrow](/snippets/cotrthrow)

Kotlin Throw Exception

```kotlin
throw ${1:Exception('Your message here')}
```

## [cotrEntry](/snippets/cotrentry)

Kotlin Entry Point

```kotlin
// Kotlin Entry Point
// To run this program, use: `kotlinc filename.kt -include-runtime -d filename.jar && java -jar filename.jar`

fun main() {
    println("Hello, World!")
}
```

## [cotrOperators](/snippets/cotroperators)

Kotlin Mathematical Operators

```kotlin
// Kotlin Mathematical Operators
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

## [cotrTypeConvert](/snippets/cotrtypeconvert)

Kotlin Type Conversion

```kotlin
// Kotlin Type Conversion:

// Implicit conversions (compiler performs automatically):
// - Smaller numeric types to larger numeric types (e.g., Int to Double).

// Explicit conversions (using casts):
// - variable as Type  // Safe cast (returns null if conversion fails)
// - variable.toType()  // Conversion methods (e.g., toInt(), toDouble())

// Note:
// - Be cautious with explicit conversions, as they can lead to data loss or errors if the conversion is not valid.
```

## [cotrVarSyntax](/snippets/cotrvarsyntax)

Variable Declaration Syntax

```kotlin
// Kotlin Variable Declaration Syntax:

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

## [cotrVarList](/snippets/cotrvarlist)

Kotlin Create List Variable

```kotlin
var ${1:myList} = listOf(${2:'item1'}, ${3:'item2'})
```

## [cotrFuncArgs](/snippets/cotrfuncargs)

Kotlin Function Args

```kotlin
// In Kotlin, functions can have arguments with default values.
fun ${2:myFunction}(${3:arg1}: ${4:Type1}, ${5:arg2}: ${6:Type2} = ${7:defaultValue}): ${1:Unit} {
    ${8:// Your code here}
}
```

## [cotrTypesBoolFalse](/snippets/cotrtypesboolfalse)

Kotlin Boolean False

```kotlin
false
```

## [cotrNow](/snippets/cotrnow)

Kotlin Date Now

```kotlin
import java.time.LocalDate

val now: LocalDate = LocalDate.now()
```

## [cotrTypesChar](/snippets/cotrtypeschar)

Kotlin Character Type

```kotlin
Char
```

## [cotrEqual](/snippets/cotrequal)

Kotlin Equal To

```kotlin
==
```

## [cotrVarTyped](/snippets/cotrvartyped)

Kotlin Create Typed Variable

```kotlin
var ${1:myVar}: ${2:Type} = $3
```

## [cotrWhileLoop](/snippets/cotrwhileloop)

Kotlin While Loop

```kotlin
while (${1:condition}) {
  // Your code here
}
```

## [cotrFuncAnon](/snippets/cotrfuncanon)

Kotlin Anonymous Function

```kotlin
fun(${1:parameters}): ${2:ReturnType} {
    ${3:// Your code here}
}
```

## [cotrComment](/snippets/cotrcomment)

Kotlin Comment

```kotlin
// ${1:Your comment here}
```

## [cotrTypeCheck](/snippets/cotrtypecheck)

Kotlin Type Check

```kotlin
${1:variable}::class
```

## [cotrGenMap](/snippets/cotrgenmap)

Kotlin Generate Map

```kotlin
val ${1:myMap} = (0 until ${2:length}).associate {
  'key' + it to 'value' + it
}
```

## [cotrPrintMulti](/snippets/cotrprintmulti)

Kotlin Print Multi

```kotlin
println("""
${1:Line 1}
${2:Line 2}
${3:Line 3}
""")
```

## [cotrTypeCompare](/snippets/cotrtypecompare)

Kotlin Type Comparison

```kotlin
// Check if two variables have the same type:
if (${1:variable1}::class == ${2:variable2}::class) {
  // Your code here
}
```

## [cotrTypesInt](/snippets/cotrtypesint)

Kotlin Integer Type

```kotlin
Int
```

## [cotrForLoop](/snippets/cotrforloop)

Kotlin For Loop

```kotlin
for (i in ${1:0 until 10}) {
  // Your code here
}
```

## [cotrInterpolate](/snippets/cotrinterpolate)

Kotlin Interpolate String

```kotlin
"${1:Your message here}"
```

## [cotrCommentMulti](/snippets/cotrcommentmulti)

Kotlin Multi-Line Comment

```kotlin
/*
 * ${1:Your comment here}
 */
```

## [cotrIfElse](/snippets/cotrifelse)

Kotlin If Else Statement

```kotlin
if (${1:condition}) {
  // Your code here
} else if (${2:condition}) {
  // Your code here
} else {
  // Your code here
}
```

## [cotrTryCatch](/snippets/cotrtrycatch)

Kotlin Try Catch

```kotlin
try {
  // Your code here
} catch (${1:exception}) {
  // Your code here
}
```

## [cotrTypesList](/snippets/cotrtypeslist)

Kotlin List Type

```kotlin
List<${1:type}>
```

## [cotrVarNumAlt](/snippets/cotrvarnumalt)

Kotlin Create Float Variable

```kotlin
var ${1:myFloat} = ${2:0.0f}
```

## [cotrPrint](/snippets/cotrprint)

Kotlin Print

```kotlin
println(${1:'Your message here'})
```

## [cotrTernary](/snippets/cotrternary)

Kotlin Ternary Operator

```kotlin
${1:condition} ? ${2:trueValue} : ${3:falseValue}
```

## [cotrInfo](/snippets/cotrinfo)

Kotlin Info

```kotlin
Typing: Statically typed
Paradigm: Multi-paradigm: object-oriented, functional, imperative
Compilation: Compiled to bytecode for the Java Virtual Machine (JVM), JavaScript, or native binaries
Concurrency: Supports coroutines for asynchronous programming and concurrency
```

## [cotrVarBool](/snippets/cotrvarbool)

Kotlin Create Boolean Variable

```kotlin
var ${1:myBool} = ${2:true}
```

## [cotrGenList](/snippets/cotrgenlist)

Kotlin Generate List

```kotlin
val ${1:myList} = List(${2:length}) {
  'item' + it
}
```

## [cotrVarMap](/snippets/cotrvarmap)

Kotlin Create Map Variable

```kotlin
var ${1:myMap} = mapOf(
  ${2:'key1' to 'value1'},
  ${3:'key2' to 'value2'},
  // Add more key-value pairs here
)
```

## [cotrTypesBool](/snippets/cotrtypesbool)

Kotlin Boolean Type

```kotlin
Boolean
```

## [cotrTypesBoolTrue](/snippets/cotrtypesbooltrue)

Kotlin Boolean True

```kotlin
true
```

## [cotrVarString](/snippets/cotrvarstring)

Kotlin Create String Variable

```kotlin
var ${1:myString} = "${2:myValue}"
```

## [cotrStructure](/snippets/cotrstructure)

Kotlin Project Structure (High-Level)

```kotlin
// Recommended High-Level Kotlin Project Structure:

// - src/main/kotlin/
//   - Contains Kotlin source files.
//   - Organize code into packages reflecting features or functionality.
//   - Example: com/example/myapp/domain, com/example/myapp/service, etc.

// - src/main/resources/
//   - Contains project resources, such as property files, configuration, and static assets.

// - src/test/kotlin/
//   - Contains Kotlin test files.
//   - Structure should mirror the src/main/kotlin directory.

// - src/test/resources/
//   - Contains resources for testing, like test configurations and data.

// - lib/
//   - Contains external libraries or dependencies not managed by the build system.
//   - Typically, dependencies are managed by Gradle or Maven and may not need this directory.

// - build/
//   - Contains compiled bytecode files and other build artifacts (Gradle or Maven output).

// - docs/
//   - Contains project documentation, like API docs, design documents, and user guides.

// - scripts/
//   - Contains build and utility scripts, like shell scripts for automation tasks.

// Note:
// - Use build tools like Gradle or Maven for dependency management and build processes.
// - This structure can vary depending on the specific needs and scale of the project.
```

## [cotrFuncArgsNamed](/snippets/cotrfuncargsnamed)

Kotlin Function Named Args

```kotlin
fun ${2:myFunction}(${3:arg1}: ${4:Type1} = ${5:defaultValue1}, ${6:arg2}: ${7:Type2} = ${8:defaultValue2}): ${1:Unit} {
    ${9:// Your code here}
}
```

## [cotrFuncSyntax](/snippets/cotrfuncsyntax)

Kotlin Function Syntax

```kotlin
// Kotlin Function Syntax
// Basic function: fun functionName(parameters): ReturnType { ... }
// Function with arguments: fun functionName(arg1: Type1, arg2: Type2, ...): ReturnType { ... }
// Function with named arguments and default values: fun functionName(arg1: Type1 = defaultValue1, arg2: Type2 = defaultValue2, ...): ReturnType { ... }
```

## [cotrEnum](/snippets/cotrenum)

Kotlin Enum

```kotlin
enum class ${1:MyEnum} {
  ${2:value1},
  ${3:value2},
  // Add more values here
}
```

## [cotrConcat](/snippets/cotrconcat)

Kotlin Concatenate String

```kotlin
"${1:Your message here}" + "${2:another message}"
```

## [cotrVarStringMulti](/snippets/cotrvarstringmulti)

Kotlin Create Multi-Line String Variable

```kotlin
var ${1:myString} = """
${2:Line 1}
${3:Line 2}
${4:Line 3}
"""
```

## [cotrWhen](/snippets/cotrwhen)

Kotlin When Expression

```kotlin
when (${1:variable}) {
  ${2:value1} -> {
    // Your code here
  }
  ${3:value2} -> {
    // Your code here
  }
  else -> {
    // Your code here
  }
}
```

## [cotrClass](/snippets/cotrclass)

Kotlin Class

```kotlin
class ${1:MyClass} {
  // Your code here
}
```

## [cotrTypesDate](/snippets/cotrtypesdate)

Kotlin Date Type

```kotlin
import java.time.LocalDate
```

## [cotrVarInt](/snippets/cotrvarint)

Kotlin Create Integer Variable

```kotlin
var ${1:myInt} = ${2:0}
```

## [cotrConst](/snippets/cotrconst)

Kotlin Create Value (Constant)

```kotlin
val ${1:myConst} = $2
```

## [cotrTypes](/snippets/cotrtypes)

Kotlin Types

```kotlin
$BLOCK_COMMENT_START
Kotlin is a statically typed language.

Types in Kotlin include:
- Int: Integer
- Double: Double-precision floating-point number
- Float: Single-precision floating-point number
- Char: Character
- Boolean: Boolean
- String: String
- Array<T>: Array of type T
- List<T>: List of type T
- Set<T>: Set of unique elements of type T
- Map<K, V>: Map with key type K and value type V
- Any: Base type of all non-nullable types
- Unit: Type with only one value - Unit (similar to void)
- Nothing: Type with no values - used for functions that never return
- Nullable types (e.g., Int?, String?): Types that can hold a value or null
- Function types (e.g., (Int, Int) -> Int): Types representing functions
- Data classes: Classes primarily used to hold data
- Sealed classes: Classes that restrict which other classes can inherit from them
- Enum classes: Enumeration classes
- Object: Singleton object
- Companion object: Object associated with a class
- Interface: Interface type

Read more here: https://kotlinlang.org/docs/basic-types.html
$BLOCK_COMMENT_END
```

## [cotrFuncLambda](/snippets/cotrfunclambda)

Kotlin Lambda

```kotlin
val ${1:myLambda}: (${2:ParameterType}) -> ${3:ReturnType} = { ${4:parameters} ->
  ${5:expression}
}
```

## [cotrFunc](/snippets/cotrfunc)

Kotlin Function

```kotlin
fun ${2:myFunction}(${3:parameters}): ${1:Unit} {
    ${4:// Your code here}
}
```

## [cotrNotEqual](/snippets/cotrnotequal)

Kotlin Not Equal To

```kotlin
!=
```

## [cotrVar](/snippets/cotrvar)

Kotlin Create Variable

```kotlin
var ${1:myVar} = $2
```

## [cotrVarNum](/snippets/cotrvarnum)

Kotlin Create Double Variable

```kotlin
var ${1:myDouble} = ${2:0.0}
```

## [cotrVarNullable](/snippets/cotrvarnullable)

Kotlin Create Nullable Variable

```kotlin
var ${1:myVar}: ${2:Type}? = null
```

## [cotrOperatorsBool](/snippets/cotroperatorsbool)

Kotlin Boolean Operators

```kotlin
// Kotlin Boolean Operators
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

## [cotrTypesNumAlt](/snippets/cotrtypesnumalt)

Kotlin Float Type

```kotlin
Float
```

## [cotrTypesAny](/snippets/cotrtypesany)

Kotlin Dynamic Type

```kotlin
Any
```

## [cotrTypesNull](/snippets/cotrtypesnull)

Kotlin Null Type

```kotlin
null
```

## [cotrVarDate](/snippets/cotrvardate)

Kotlin Create Date Variable

```kotlin
import java.time.LocalDate

val ${1:myDate}: LocalDate = LocalDate.of(${2:year}, ${3:month}, ${4:day})
```

## [cotrIf](/snippets/cotrif)

Kotlin If Statement

```kotlin
if (${1:condition}) {
  // Your code here
}
```

## [cotrTypesString](/snippets/cotrtypesstring)

Kotlin String Type

```kotlin
String
```

## [cotrTypesNum](/snippets/cotrtypesnum)

Kotlin Double Type

```kotlin
Double
```

## [cotrTypesMap](/snippets/cotrtypesmap)

Kotlin Map Type

```kotlin
Map<${1:keyType}, ${2:valueType}>
```


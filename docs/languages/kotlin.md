## Kotlin Entry Point

### [cotrEntry](/snippets/cotrEntry)

```kotlin
// Kotlin Entry Point
// To run this program, use: `kotlinc filename.kt -include-runtime -d filename.jar && java -jar filename.jar`

fun main() {
    println("Hello, World!")
}
```

## Kotlin Dynamic Type

### [cotrTypesAny](/snippets/cotrTypesAny)

```kotlin
Any
```

## Kotlin Create Typed Variable

### [cotrVarTyped](/snippets/cotrVarTyped)

```kotlin
var ${1:myVar}: ${2:Type} = $3
```

## Kotlin Generate List

### [cotrGenList](/snippets/cotrGenList)

```kotlin
val ${1:myList} = List(${2:length}) {
  'item' + it
}
```

## Kotlin Types

### [cotrTypes](/snippets/cotrTypes)

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

## Kotlin Double Type

### [cotrTypesNum](/snippets/cotrTypesNum)

```kotlin
Double
```

## Kotlin Map Type

### [cotrTypesMap](/snippets/cotrTypesMap)

```kotlin
Map<${1:keyType}, ${2:valueType}>
```

## Kotlin Create Variable

### [cotrVar](/snippets/cotrVar)

```kotlin
var ${1:myVar} = $2
```

## Kotlin Create Double Variable

### [cotrVarNum](/snippets/cotrVarNum)

```kotlin
var ${1:myDouble} = ${2:0.0}
```

## Kotlin Create List Variable

### [cotrVarList](/snippets/cotrVarList)

```kotlin
var ${1:myList} = listOf(${2:'item1'}, ${3:'item2'})
```

## Kotlin Create Date Variable

### [cotrVarDate](/snippets/cotrVarDate)

```kotlin
import java.time.LocalDate

val ${1:myDate}: LocalDate = LocalDate.of(${2:year}, ${3:month}, ${4:day})
```

## Kotlin For...In Loop

### [cotrForInLoop](/snippets/cotrForInLoop)

```kotlin
for (item in ${1:iterable}) {
  // Your code here
}
```

## Kotlin Function

### [cotrFunc](/snippets/cotrFunc)

```kotlin
fun ${2:myFunction}(${3:parameters}): ${1:Unit} {
    ${4:// Your code here}
}
```

## Kotlin Function Named Args

### [cotrFuncArgsNamed](/snippets/cotrFuncArgsNamed)

```kotlin
fun ${2:myFunction}(${3:arg1}: ${4:Type1} = ${5:defaultValue1}, ${6:arg2}: ${7:Type2} = ${8:defaultValue2}): ${1:Unit} {
    ${9:// Your code here}
}
```

## Kotlin Type Check

### [cotrTypeCheck](/snippets/cotrTypeCheck)

```kotlin
${1:variable}::class
```

## Kotlin Generate Map

### [cotrGenMap](/snippets/cotrGenMap)

```kotlin
val ${1:myMap} = (0 until ${2:length}).associate {
  'key' + it to 'value' + it
}
```

## Kotlin Create Multi-Line String Variable

### [cotrVarStringMulti](/snippets/cotrVarStringMulti)

```kotlin
var ${1:myString} = """
${2:Line 1}
${3:Line 2}
${4:Line 3}
"""
```

## Kotlin For Loop

### [cotrForLoop](/snippets/cotrForLoop)

```kotlin
for (i in ${1:0 until 10}) {
  // Your code here
}
```

## Kotlin Mathematical Operators

### [cotrOperators](/snippets/cotrOperators)

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

## Kotlin String Type

### [cotrTypesString](/snippets/cotrTypesString)

```kotlin
String
```

## Kotlin Boolean Type

### [cotrTypesBool](/snippets/cotrTypesBool)

```kotlin
Boolean
```

## Kotlin Boolean True

### [cotrTypesBoolTrue](/snippets/cotrTypesBoolTrue)

```kotlin
true
```

## Kotlin Date Type

### [cotrTypesDate](/snippets/cotrTypesDate)

```kotlin
import java.time.LocalDate
```

## Kotlin Date Now

### [cotrNow](/snippets/cotrNow)

```kotlin
import java.time.LocalDate

val now: LocalDate = LocalDate.now()
```

## Kotlin Lambda

### [cotrFuncLambda](/snippets/cotrFuncLambda)

```kotlin
val ${1:myLambda}: (${2:ParameterType}) -> ${3:ReturnType} = { ${4:parameters} ->
  ${5:expression}
}
```

## Kotlin Project Structure (High-Level)

### [cotrStructure](/snippets/cotrStructure)

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

## Kotlin Boolean False

### [cotrTypesBoolFalse](/snippets/cotrTypesBoolFalse)

```kotlin
false
```

## Kotlin Interpolate String

### [cotrInterpolate](/snippets/cotrInterpolate)

```kotlin
"${1:Your message here}"
```

## Kotlin Create Boolean Variable

### [cotrVarBool](/snippets/cotrVarBool)

```kotlin
var ${1:myBool} = ${2:true}
```

## Kotlin Print Multi

### [cotrPrintMulti](/snippets/cotrPrintMulti)

```kotlin
println("""
${1:Line 1}
${2:Line 2}
${3:Line 3}
""")
```

## Kotlin Comment

### [cotrComment](/snippets/cotrComment)

```kotlin
// ${1:Your comment here}
```

## Kotlin Multi-Line Comment

### [cotrCommentMulti](/snippets/cotrCommentMulti)

```kotlin
/*
 * ${1:Your comment here}
 */
```

## Kotlin Throw Exception

### [cotrThrow](/snippets/cotrThrow)

```kotlin
throw ${1:Exception('Your message here')}
```

## Kotlin If Statement

### [cotrIf](/snippets/cotrIf)

```kotlin
if (${1:condition}) {
  // Your code here
}
```

## Kotlin Not Equal To

### [cotrNotEqual](/snippets/cotrNotEqual)

```kotlin
!=
```

## Kotlin Type Comparison

### [cotrTypeCompare](/snippets/cotrTypeCompare)

```kotlin
// Check if two variables have the same type:
if (${1:variable1}::class == ${2:variable2}::class) {
  // Your code here
}
```

## Kotlin Type Conversion

### [cotrTypeConvert](/snippets/cotrTypeConvert)

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

## Kotlin Integer Type

### [cotrTypesInt](/snippets/cotrTypesInt)

```kotlin
Int
```

## Kotlin Character Type

### [cotrTypesChar](/snippets/cotrTypesChar)

```kotlin
Char
```

## Kotlin Create Nullable Variable

### [cotrVarNullable](/snippets/cotrVarNullable)

```kotlin
var ${1:myVar}: ${2:Type}? = null
```

## Kotlin Class

### [cotrClass](/snippets/cotrClass)

```kotlin
class ${1:MyClass} {
  // Your code here
}
```

## Kotlin Info

### [cotrInfo](/snippets/cotrInfo)

```kotlin
Typing: Statically typed
Paradigm: Multi-paradigm: object-oriented, functional, imperative
Compilation: Compiled to bytecode for the Java Virtual Machine (JVM), JavaScript, or native binaries
Concurrency: Supports coroutines for asynchronous programming and concurrency
```

## Kotlin Create String Variable

### [cotrVarString](/snippets/cotrVarString)

```kotlin
var ${1:myString} = "${2:myValue}"
```

## Kotlin Create Value (Constant)

### [cotrConst](/snippets/cotrConst)

```kotlin
val ${1:myConst} = $2
```

## Kotlin When Expression

### [cotrWhen](/snippets/cotrWhen)

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

## Kotlin Anonymous Function

### [cotrFuncAnon](/snippets/cotrFuncAnon)

```kotlin
fun(${1:parameters}): ${2:ReturnType} {
    ${3:// Your code here}
}
```

## Kotlin If Else Statement

### [cotrIfElse](/snippets/cotrIfElse)

```kotlin
if (${1:condition}) {
  // Your code here
} else if (${2:condition}) {
  // Your code here
} else {
  // Your code here
}
```

## Kotlin Create Integer Variable

### [cotrVarInt](/snippets/cotrVarInt)

```kotlin
var ${1:myInt} = ${2:0}
```

## Kotlin Create Map Variable

### [cotrVarMap](/snippets/cotrVarMap)

```kotlin
var ${1:myMap} = mapOf(
  ${2:'key1' to 'value1'},
  ${3:'key2' to 'value2'},
  // Add more key-value pairs here
)
```

## Kotlin Null Type

### [cotrTypesNull](/snippets/cotrTypesNull)

```kotlin
null
```

## Variable Declaration Syntax

### [cotrVarSyntax](/snippets/cotrVarSyntax)

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

## Kotlin Function Args

### [cotrFuncArgs](/snippets/cotrFuncArgs)

```kotlin
// In Kotlin, functions can have arguments with default values.
fun ${2:myFunction}(${3:arg1}: ${4:Type1}, ${5:arg2}: ${6:Type2} = ${7:defaultValue}): ${1:Unit} {
    ${8:// Your code here}
}
```

## Kotlin Function Syntax

### [cotrFuncSyntax](/snippets/cotrFuncSyntax)

```kotlin
// Kotlin Function Syntax
// Basic function: fun functionName(parameters): ReturnType { ... }
// Function with arguments: fun functionName(arg1: Type1, arg2: Type2, ...): ReturnType { ... }
// Function with named arguments and default values: fun functionName(arg1: Type1 = defaultValue1, arg2: Type2 = defaultValue2, ...): ReturnType { ... }
```

## Kotlin Concatenate String

### [cotrConcat](/snippets/cotrConcat)

```kotlin
"${1:Your message here}" + "${2:another message}"
```

## Kotlin Enum

### [cotrEnum](/snippets/cotrEnum)

```kotlin
enum class ${1:MyEnum} {
  ${2:value1},
  ${3:value2},
  // Add more values here
}
```

## Kotlin Equal To

### [cotrEqual](/snippets/cotrEqual)

```kotlin
==
```

## Kotlin Boolean Operators

### [cotrOperatorsBool](/snippets/cotrOperatorsBool)

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

## Kotlin List Type

### [cotrTypesList](/snippets/cotrTypesList)

```kotlin
List<${1:type}>
```

## Kotlin Create Float Variable

### [cotrVarNumAlt](/snippets/cotrVarNumAlt)

```kotlin
var ${1:myFloat} = ${2:0.0f}
```

## Kotlin Print

### [cotrPrint](/snippets/cotrPrint)

```kotlin
println(${1:'Your message here'})
```

## Kotlin Float Type

### [cotrTypesNumAlt](/snippets/cotrTypesNumAlt)

```kotlin
Float
```

## Kotlin While Loop

### [cotrWhileLoop](/snippets/cotrWhileLoop)

```kotlin
while (${1:condition}) {
  // Your code here
}
```

## Kotlin Try Catch

### [cotrTryCatch](/snippets/cotrTryCatch)

```kotlin
try {
  // Your code here
} catch (${1:exception}) {
  // Your code here
}
```

## Kotlin Ternary Operator

### [cotrTernary](/snippets/cotrTernary)

```kotlin
${1:condition} ? ${2:trueValue} : ${3:falseValue}
```


## Kotlin Info

### {[cotrInfo languageInfo info]}

```
Typing: Statically typed
Paradigm: Multi-paradigm: object-oriented, functional, imperative
Compilation: Compiled to bytecode for the Java Virtual Machine (JVM), JavaScript, or native binaries
Concurrency: Supports coroutines for asynchronous programming and concurrency
```

## Kotlin Integer Type

### {[cotrTypesInt intType typeInt]}

```
Int
```

## Kotlin Throw Exception

### {[cotrThrow throwError throwException]}

```
throw ${1:Exception('Your message here')}
```

## Kotlin Entry Point

### {[cotrEntry entry start startingPoint]}

```
// Kotlin Entry Point
// To run this program, use: `kotlinc filename.kt -include-runtime -d filename.jar && java -jar filename.jar`

fun main() {
    println("Hello, World!")
}
```

## Kotlin Project Structure (High-Level)

### {[cotrStructure structure architecture]}

```
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

## Kotlin Type Conversion

### {[cotrTypeConvert cotrTypeCast cotrConvert cotrCast]}

```
// Kotlin Type Conversion:

// Implicit conversions (compiler performs automatically):
// - Smaller numeric types to larger numeric types (e.g., Int to Double).

// Explicit conversions (using casts):
// - variable as Type  // Safe cast (returns null if conversion fails)
// - variable.toType()  // Conversion methods (e.g., toInt(), toDouble())

// Note:
// - Be cautious with explicit conversions, as they can lead to data loss or errors if the conversion is not valid.
```

## Variable Declaration Syntax

### {[cotrVarSyntax variableSyntax howToVariables letSyntax]}

```
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

## Kotlin When Expression

### {cotrWhen}

```
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

## Kotlin Lambda

### {[cotrFuncLambda cotrLambda cotrFuncArrow]}

```
val ${1:myLambda}: (${2:ParameterType}) -> ${3:ReturnType} = { ${4:parameters} ->
  ${5:expression}
}
```

## Kotlin Float Type

### {[cotrTypesNumAlt floatType typeFloat]}

```
Float
```

## Kotlin Date Now

### {[cotrNow now currentTime dateNow]}

```
import java.time.LocalDate

val now: LocalDate = LocalDate.now()
```

## Kotlin Character Type

### {[cotrTypesChar]}

```
Char
```

## Kotlin Interpolate String

### {[cotrInterpolate interpolate variableExpansion variableSubstitution stringPlaceholders stringInterpolation]}

```
"${1:Your message here}"
```

## Kotlin Create Boolean Variable

### {[cotrVarBool variableBool bool boolVariable createBool]}

```
var ${1:myBool} = ${2:true}
```

## Kotlin Create Value (Constant)

### {[cotrConst cotrVal]}

```
val ${1:myConst} = $2
```

## Kotlin Class

### {[cotrClass class objectTemplate]}

```
class ${1:MyClass} {
  // Your code here
}
```

## Kotlin Mathematical Operators

### {[cotrOperators operators mathDocs]}

```
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

## Kotlin Double Type

### {[cotrTypesNum numberType typeNumber doubleType typeDouble]}

```
Double
```

## Kotlin Create Double Variable

### {[cotrVarNum number float floatVariable variableFloat variableNumber numberVariable]}

```
var ${1:myDouble} = ${2:0.0}
```

## Kotlin Print Multi

### {[cotrPrintMulti printMultiLine]}

```
println("""
${1:Line 1}
${2:Line 2}
${3:Line 3}
""")
```

## Kotlin Function Named Args

### {[cotrFuncArgsNamed functionNamedArgs]}

```
fun ${2:myFunction}(${3:arg1}: ${4:Type1} = ${5:defaultValue1}, ${6:arg2}: ${7:Type2} = ${8:defaultValue2}): ${1:Unit} {
    ${9:// Your code here}
}
```

## Kotlin Comment

### {[cotrComment comment note]}

```
// ${1:Your comment here}
```

## Kotlin Equal To

### {[cotrEqual equal]}

```
==
```

## Kotlin Type Check

### {[cotrTypeCheck checkType getType typeOf]}

```
${1:variable}::class
```

## Kotlin Create Integer Variable

### {[cotrVarInt integer int variableInt intVariable createInt]}

```
var ${1:myInt} = ${2:0}
```

## Kotlin Generate Map

### {[cotrGenMap generateMap]}

```
val ${1:myMap} = (0 until ${2:length}).associate {
  'key' + it to 'value' + it
}
```

## Kotlin For Loop

### {[cotrForLoop forLoop forX]}

```
for (i in ${1:0 until 10}) {
  // Your code here
}
```

## Kotlin While Loop

### {[cotrWhileLoop whileLoop whileTrue]}

```
while (${1:condition}) {
  // Your code here
}
```

## Kotlin Types

### {[cotrTypes types allTypes languageTypes builtInTypes dataTypes]}

```
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

## Kotlin Boolean False

### {[cotrTypesBoolFalse false off booleanFalse]}

```
false
```

## Kotlin Create Variable

### {[cotrVar variable createVariable newVariable]}

```
var ${1:myVar} = $2
```

## Kotlin Create Float Variable

### {[cotrVarNumAlt float variableFloat floatVariable]}

```
var ${1:myFloat} = ${2:0.0f}
```

## Kotlin Create Map Variable

### {[cotrVarMap createMap createStruct variableMap variableStruct mapVariable structVariable dictVariable variableDict createDict]}

```
var ${1:myMap} = mapOf(
  ${2:'key1' to 'value1'},
  ${3:'key2' to 'value2'},
  // Add more key-value pairs here
)
```

## Kotlin Generate List

### {[cotrGenList generateList listGen]}

```
val ${1:myList} = List(${2:length}) {
  'item' + it
}
```

## Kotlin Function Args

### {[cotrFuncArgs functionArgs functionWithArgs]}

```
// In Kotlin, functions can have arguments with default values.
fun ${2:myFunction}(${3:arg1}: ${4:Type1}, ${5:arg2}: ${6:Type2} = ${7:defaultValue}): ${1:Unit} {
    ${8:// Your code here}
}
```

## Kotlin Null Type

### {[cotrTypesNull nullType typesNull]}

```
null
```

## Kotlin Anonymous Function

### {[cotrFuncAnon anonFunc anonymous closure lambda functionLiteral cotrFuncLambda]}

```
fun(${1:parameters}): ${2:ReturnType} {
    ${3:// Your code here}
}
```

## Kotlin If Statement

### {[cotrIf ifStatement]}

```
if (${1:condition}) {
  // Your code here
}
```

## Kotlin Not Equal To

### {[cotrNotEqual notEqual doesNotEqual]}

```
!=
```

## Kotlin Date Type

### {[cotrTypesDate dateType typeDate timeType timestampType dateTimeType]}

```
import java.time.LocalDate
```

## Kotlin Concatenate String

### {[cotrConcat concatenate combine]}

```
"${1:Your message here}" + "${2:another message}"
```

## Kotlin If Else Statement

### {[cotrIfElse ifElseStatement]}

```
if (${1:condition}) {
  // Your code here
} else if (${2:condition}) {
  // Your code here
} else {
  // Your code here
}
```

## Kotlin This Type Check

### {[thisTypeCheck thisType getThisType]}

```
$CLIPBOARD::class.simpleName
```

## Kotlin Create Nullable Variable

### {[cotrVarNullable variableNullable nullableVariable]}

```
var ${1:myVar}: ${2:Type}? = null
```

## Kotlin Create Date Variable

### {[cotrVarDate dateVariable variableDate date]}

```
import java.time.LocalDate

val ${1:myDate}: LocalDate = LocalDate.of(${2:year}, ${3:month}, ${4:day})
```

## Kotlin For...In Loop

### {[cotrForInLoop forIn]}

```
for (item in ${1:iterable}) {
  // Your code here
}
```

## Kotlin Ternary Operator

### {[cotrTernary ternary conditionalOperator]}

```
${1:condition} ? ${2:trueValue} : ${3:falseValue}
```

## Kotlin Boolean True

### {[cotrTypesBoolTrue true booleanTrue on]}

```
true
```

## Kotlin Create Multi-Line String Variable

### {[cotrVarStringMulti multiLineString varStringMulti stringVariableMulti createMultiLineString]}

```
var ${1:myString} = """
${2:Line 1}
${3:Line 2}
${4:Line 3}
"""
```

## Kotlin Print

### {[cotrPrint print log systemOut write consoleLog]}

```
println(${1:'Your message here'})
```

## Kotlin Function Syntax

### {[cotrFuncSyntax functionSyntax functionDocs]}

```
// Kotlin Function Syntax
// Basic function: fun functionName(parameters): ReturnType { ... }
// Function with arguments: fun functionName(arg1: Type1, arg2: Type2, ...): ReturnType { ... }
// Function with named arguments and default values: fun functionName(arg1: Type1 = defaultValue1, arg2: Type2 = defaultValue2, ...): ReturnType { ... }
```

## Kotlin Enum

### {[cotrEnum enum]}

```
enum class ${1:MyEnum} {
  ${2:value1},
  ${3:value2},
  // Add more values here
}
```

## Kotlin Boolean Operators

### {[cotrOperatorsBool booleanOperators logic]}

```
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

## Kotlin Map Type

### {[cotrTypesMap mapType typeMap hashmapType structType dictType typeDict typeScruct]}

```
Map<${1:keyType}, ${2:valueType}>
```

## Kotlin Dynamic Type

### {[cotrTypesAny dynamicType anyType typesDynamic typesAny]}

```
Any
```

## Kotlin Create Typed Variable

### {[cotrVarTyped typedVariable variableWithType]}

```
var ${1:myVar}: ${2:Type} = $3
```

## Kotlin Function

### {[cotrFunc function subprogram procedure subroutine method]}

```
fun ${2:myFunction}(${3:parameters}): ${1:Unit} {
    ${4:// Your code here}
}
```

## Kotlin Try Catch

### {[cotrTryCatch tryCatch]}

```
try {
  // Your code here
} catch (${1:exception}) {
  // Your code here
}
```

## Kotlin String Type

### {[cotrTypesString stringType typeString textType typeText]}

```
String
```

## Kotlin Boolean Type

### {[cotrTypesBool booleanType typeBool]}

```
Boolean
```

## Kotlin List Type

### {[cotrTypesList listType typeList typeArray]}

```
List<${1:type}>
```

## Kotlin Create String Variable

### {[cotrVarString string stringVariable variableString text createString createText]}

```
var ${1:myString} = "${2:myValue}"
```

## Kotlin Multi-Line Comment

### {[cotrCommentMulti multiLineComment commentMultiLine blockComment]}

```
/*
 * ${1:Your comment here}
 */
```

## Kotlin Type Comparison

### {[cotrTypeCompare compareTypes]}

```
// Check if two variables have the same type:
if (${1:variable1}::class == ${2:variable2}::class) {
  // Your code here
}
```

## Kotlin Create List Variable

### {[cotrVarList createList listVariable arrayVariable variableList variableArray list array]}

```
var ${1:myList} = listOf(${2:'item1'}, ${3:'item2'})
```


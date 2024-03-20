## Java Concatenate String

### [cotrConcat](/snippets/cotrConcat)

```java
${1:"String1"} + ${2:"String2"}
```

## Java Null Type

### [cotrTypesNull](/snippets/cotrTypesNull)

```java
null
```

## Java Create Double Variable

### [cotrVarDouble](/snippets/cotrVarDouble)

```java
double ${1:myDouble} = ${2:0.0};
```

## Java Create Constant

### [cotrConst](/snippets/cotrConst)

```java
final ${1:Type} ${2:myConst} = ${3:value};
```

## Java Function Args

### [cotrFuncArgs](/snippets/cotrFuncArgs)

```java
// In Java, functions do not support default argument values in definitions.
// You can achieve similar functionality using method overloading.
public ${1:void} ${2:myFunction}(${3:type1} ${4:arg1}, ${5:type2} ${6:arg2}) {
    ${7:// Your code here}
}

// Overloaded method with default value for arg2
public ${1:void} ${2:myFunction}(${3:type1} ${4:arg1}) {
    ${5:type2} ${6:arg2} = ${8:defaultValue};
    ${2:myFunction}(${4:arg1}, ${6:arg2});
}
```

## Java For Each Loop

### [cotrForEachLoop](/snippets/cotrForEachLoop)

```java
for (${1:Type} ${2:item} : ${3:iterable}) {
  ${4:// Your code here}
}
```

## Java Type Check

### [cotrTypeCheck](/snippets/cotrTypeCheck)

```java
${1:variable}.getClass()
```

## Java Float Type

### [cotrTypesNumAlt](/snippets/cotrTypesNumAlt)

```java
float
```

## Java Boolean Type

### [cotrTypesBool](/snippets/cotrTypesBool)

```java
boolean
```

## Java Date Now

### [cotrNow](/snippets/cotrNow)

```java
import java.time.LocalDate;

LocalDate now = LocalDate.now();
```

## Java Create Variable

### [cotrVar](/snippets/cotrVar)

```java
${1:Type} ${2:myVar} = ${3:value};
```

## Java Entry Point

### [cotrEntry](/snippets/cotrEntry)

```java
// Java Entry Point
// To run this program, use: `java Main.java`

public class Main {
    public static void main(String[] args) {
        // Your code here
    }
}
```

## Java Generate Map

### [cotrGenMap](/snippets/cotrGenMap)

```java
Map<${1:Key}, ${2:Value}> ${3:myMap} = IntStream.range(0, ${4:length}).boxed().collect(Collectors.toMap(i -> ${5:key}, i -> ${6:value}));
```

## Java While Loop

### [cotrWhileLoop](/snippets/cotrWhileLoop)

```java
while (${1:condition}) {
  ${2:// Your code here}
}
```

## Java Ternary Operator

### [cotrTernary](/snippets/cotrTernary)

```java
${1:condition} ? ${2:trueValue} : ${3:falseValue}
```

## Java Type Comparison

### [cotrTypeCompare](/snippets/cotrTypeCompare)

```java
// Check if two variables have the same type:
if (${1:variable1}.getClass() == ${2:variable2}.getClass()) {
  // Your code here
}
```

## Java Integer Type

### [cotrTypesInt](/snippets/cotrTypesInt)

```java
int
```

## Java Dynamic Type

### [cotrTypesDynamic](/snippets/cotrTypesDynamic)

```java
Object
```

## Java Create Boolean Variable

### [cotrVarBool](/snippets/cotrVarBool)

```java
boolean ${1:myBool} = ${2:true};
```

## Java Print Multi

### [cotrPrintMulti](/snippets/cotrPrintMulti)

```java
System.out.println(${1:"Line 1"} +
    ${2:"\nLine 2"} +
    ${3:"\nLine 3"});
```

## Java Create List Variable

### [cotrVarList](/snippets/cotrVarList)

```java
List<${1:Type}> ${2:myList} = new ArrayList<>();
${2:myList}.add(${3:value});
```

## Java Double Type

### [cotrTypesNum](/snippets/cotrTypesNum)

```java
double
```

## Java Boolean False

### [cotrTypesBoolFalse](/snippets/cotrTypesBoolFalse)

```java
false
```

## Java Date Type

### [cotrTypesDate](/snippets/cotrTypesDate)

```java
import java.time.LocalDate;
```

## Java Map Type

### [cotrTypesMap](/snippets/cotrTypesMap)

```java
Map<${1:keyType}, ${2:valueType}>
```

## Java Create Typed Variable

### [cotrVarTyped](/snippets/cotrVarTyped)

```java
${1:Type} ${2:myVar} = $3;
```

## Java Project Structure (High-Level)

### [cotrStructure](/snippets/cotrStructure)

```java
// Recommended High-Level Java Project Structure:

// - src/
//   - main/
//     - java/
//       - Contains all Java source files organized by package, e.g.,
//         - com/example/myapp/
//     - resources/
//       - Contains resources such as properties files, XML configurations, etc.
//   - test/
//     - java/
//       - Contains all Java test files organized similarly to the main source files.
//     - resources/
//       - Contains resources used for testing, such as test configurations.

// - lib/
//   - Contains external libraries or JAR files if not using a build tool like Maven or Gradle.

// - build/ or target/
//   - Contains compiled bytecode and other build artifacts. 'target' is common with Maven.

// - docs/
//   - Documentation related to the project.

// - scripts/
//   - Contains build scripts, utility scripts, etc.

// Build Tools:
// - For Maven projects, the pom.xml file at the root defines build configurations and dependencies.
// - For Gradle projects, the build.gradle file at the root defines build configurations and dependencies.

// Note:
// - This structure can vary depending on the build tool (Maven, Gradle, etc.) and project needs.
```

## Java Anonymous Function

### [cotrFuncAnon](/snippets/cotrFuncAnon)

```java
new ${1:InterfaceName}() {
    @Override
    public ${2:returnType} ${3:methodName}(${4:parameters}) {
        ${5:// Your code here}
    }
}
```

## Java Comment

### [cotrComment](/snippets/cotrComment)

```java
// ${1:Your comment here}
```

## Java If Else Statement

### [cotrIfElse](/snippets/cotrIfElse)

```java
if (${1:condition}) {
  ${2:// Your code here}
} else if (${3:condition}) {
  ${4:// Your code here}
} else {
  ${5:// Your code here}
}
```

## Java Multi-Line Comment

### [cotrCommentMulti](/snippets/cotrCommentMulti)

```java
/*
 * ${1:Your comment here}
 */
```

## Java Equal To

### [cotrEqual](/snippets/cotrEqual)

```java
==
```

## Java Interpolate String

### [cotrInterpolate](/snippets/cotrInterpolate)

```java
String.format("${1:%s}", ${2:value})
```

## Java Create Date Variable

### [cotrVarDate](/snippets/cotrVarDate)

```java
import java.time.LocalDate;

LocalDate ${1:myDate} = LocalDate.of(${2:year}, ${3:month}, ${4:day});
```

## Java Function Syntax

### [cotrFuncSyntax](/snippets/cotrFuncSyntax)

```java
// Java Function Syntax
// Basic function: public returnType functionName(parameters) { ... }
// Function with arguments: public returnType functionName(argType argName, ...) { ... }
// Note: Java does not support named arguments in function definitions.
```

## Java Lambda Function

### [cotrFuncLambda](/snippets/cotrFuncLambda)

```java
(${1:parameters}) -> ${2:expression}
```

## Java Boolean Operators

### [cotrOperatorsBool](/snippets/cotrOperatorsBool)

```java
// Java Boolean Operators
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

## Java String Type

### [cotrTypesString](/snippets/cotrTypesString)

```java
String
```

## Java Boolean True

### [cotrTypesBoolTrue](/snippets/cotrTypesBoolTrue)

```java
true
```

## Java Static Variable

### [cotrVarStatic](/snippets/cotrVarStatic)

```java
static ${2:Type} ${3:myStaticVar} = ${4:value};

// Access the static variable
// MyClass.${3:myStaticVar}
```

## Java Print

### [cotrPrint](/snippets/cotrPrint)

```java
System.out.println(${1:'Your message here'});
```

## Variable Declaration Syntax

### [cotrVarSyntax](/snippets/cotrVarSyntax)

```java
// Java Variable Declaration Syntax:

// - type: (Scope: Block or Class)
//   - Explicitly specify the variable's type.
//   - Can be declared without initialization (default value is assigned).

// - final: (Scope: Block or Class)
//   - Cannot be reassigned after initialization.
//   - Use for values that should remain constant.

// Note:
// - Java does not have a direct equivalent to 'var' or 'let'.
// - Use explicit type declaration for all variables.
// - Use 'final' for values that should not change.
```

## Java Create String Variable

### [cotrVarString](/snippets/cotrVarString)

```java
String ${1:myString} = ${2:'Your string here'};
```

## Java Create Multi-Line String Variable

### [cotrVarMultiString](/snippets/cotrVarMultiString)

```java
String ${1:myString} =
    "${2:Line 1}" +
    "\n${3:Line 2}" +
    "\n${4:Line 3}";
```

## Java Create Map Variable

### [cotrVarMap](/snippets/cotrVarMap)

```java
Map<${1:Key}, ${2:Value}> ${3:myMap} = new HashMap<>();
${3:myMap}.put(${4:key}, ${5:value});
```

## Java Arrow Function

### [cotrFuncArrow](/snippets/cotrFuncArrow)

```java
(${2:parameters}) -> ${1:returnType} {
    ${3:// Your code here}
}
```

## Java Function Named Args

### [cotrFuncArgsNamed](/snippets/cotrFuncArgsNamed)

```java
// Note: Java does not support named arguments in function definitions.
```

## Java Try Catch

### [cotrTryCatch](/snippets/cotrTryCatch)

```java
try {
  ${1:// Your code here}
} catch (${2:Exception} ${3:e}) {
  ${4:// Your code here}
}
```

## Java Type Conversion

### [cotrTypeConvert](/snippets/cotrTypeConvert)

```java
// Java Type Conversion:

// Implicit conversions (compiler performs automatically):
// - Smaller numeric types to larger numeric types (e.g., int to double).

// Explicit conversions (using casts):
// - (Type)variable  // C-style cast

// Conversion methods:
// - Integer.parseInt(string)  // Converts string to int
// - Double.parseDouble(string)  // Converts string to double
// - ... (Various conversion methods in wrapper classes and other packages)

// Note:
// - Be cautious with explicit conversions, as they can lead to data loss or errors if the conversion is not valid.
```

## Java Types

### [cotrTypes](/snippets/cotrTypes)

```java
$BLOCK_COMMENT_START
Java is a statically typed language.

Types in Java include:
- int: Integer
- float: Single-precision floating-point number
- double: Double-precision floating-point number
- char: Character
- boolean: Boolean
- String: String
- int[]: Array of integers
- ArrayList<Integer>: List of integers
- HashMap<K, V>: Map with key type K and value type V
- MyCustomClass: Custom class with named fields
- enum MyEnum: Enumeration type
- void: Type representing the absence of a value
- Object: Base type of all other types
- List<T>: Interface for lists in the Collections framework
- Set<T>: Interface for sets in the Collections framework
- Map<K, V>: Interface for maps in the Collections framework
$BLOCK_COMMENT_END
```

## Java Create Integer Variable

### [cotrVarInt](/snippets/cotrVarInt)

```java
int ${1:myInt} = ${2:0};
```

## Java Class

### [cotrClass](/snippets/cotrClass)

```java
public class ${1:MyClass} {
  ${2:// Your code here}
}
```

## Java If Statement

### [cotrIf](/snippets/cotrIf)

```java
if (${1:condition}) {
  ${2:// Your code here}
}
```

## Java Throw Exception

### [cotrThrow](/snippets/cotrThrow)

```java
throw new ${1:Exception}(${2:'Your message here'});
```

## Java Enum

### [cotrEnum](/snippets/cotrEnum)

```java
enum ${1:MyEnum} {
  ${2:value1},
  ${3:value2},
  // Add more values here
}
```

## Java Info

### [cotrInfo](/snippets/cotrInfo)

```java
Typing: Statically typed
Paradigm: Multi-paradigm: object-oriented, imperative, concurrent
Compilation: Compiled to bytecode, executed on the Java Virtual Machine (JVM)
Concurrency: Supports multi-threading and concurrent programming with the java.util.concurrent package
```

## Java Mathematical Operators

### [cotrOperators](/snippets/cotrOperators)

```java
// Java Mathematical Operators
// Addition: +
// Subtraction: -
// Multiplication: *
// Exponentiation: Math.pow(base, exponent)
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

## Java Generate List

### [cotrGenList](/snippets/cotrGenList)

```java
List<${1:Type}> ${2:myList} = IntStream.range(0, ${3:length}).mapToObj(i -> ${4:value}).collect(Collectors.toList());
```

## Java Function

### [cotrFunc](/snippets/cotrFunc)

```java
public ${1:void} ${2:myFunction}(${3:parameters}) {
    ${4:// Your code here}
}
```

## Java Not Equal To

### [cotrNotEqual](/snippets/cotrNotEqual)

```java
!=
```

## Java List Type

### [cotrTypesList](/snippets/cotrTypesList)

```java
List<${1:type}>
```

## Java Switch Statement

### [cotrSwitch](/snippets/cotrSwitch)

```java
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

## Java Create Nullable Variable

### [cotrVarNullable](/snippets/cotrVarNullable)

```java
${1:Type} ${2:myVar} = null;
```

## Java For Loop

### [cotrForLoop](/snippets/cotrForLoop)

```java
for (int ${1:i} = 0; $1 < ${2:10}; $1++) {
  // Your code here
}
```

## Java Do While Loop

### [cotrDoWhileLoop](/snippets/cotrDoWhileLoop)

```java
do {
  ${1:// Your code here}
} while (${2:condition});
```


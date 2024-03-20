---
title: Java
description: Java snippets on the rocks.
---

## [cotrVarBool](/snippets/cotrvarbool)

Java Create Boolean Variable

```java
boolean ${1:myBool} = ${2:true};
```

## [cotrConst](/snippets/cotrconst)

Java Create Constant

```java
final ${1:Type} ${2:myConst} = ${3:value};
```

## [cotrGenMap](/snippets/cotrgenmap)

Java Generate Map

```java
Map<${1:Key}, ${2:Value}> ${3:myMap} = IntStream.range(0, ${4:length}).boxed().collect(Collectors.toMap(i -> ${5:key}, i -> ${6:value}));
```

## [cotrFuncSyntax](/snippets/cotrfuncsyntax)

Java Function Syntax

```java
// Java Function Syntax
// Basic function: public returnType functionName(parameters) { ... }
// Function with arguments: public returnType functionName(argType argName, ...) { ... }
// Note: Java does not support named arguments in function definitions.
```

## [cotrEqual](/snippets/cotrequal)

Java Equal To

```java
==
```

## [cotrVarNullable](/snippets/cotrvarnullable)

Java Create Nullable Variable

```java
${1:Type} ${2:myVar} = null;
```

## [cotrInterpolate](/snippets/cotrinterpolate)

Java Interpolate String

```java
String.format("${1:%s}", ${2:value})
```

## [cotrVarMultiString](/snippets/cotrvarmultistring)

Java Create Multi-Line String Variable

```java
String ${1:myString} =
    "${2:Line 1}" +
    "\n${3:Line 2}" +
    "\n${4:Line 3}";
```

## [cotrVarList](/snippets/cotrvarlist)

Java Create List Variable

```java
List<${1:Type}> ${2:myList} = new ArrayList<>();
${2:myList}.add(${3:value});
```

## [cotrTypeConvert](/snippets/cotrtypeconvert)

Java Type Conversion

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

## [cotrTypesNum](/snippets/cotrtypesnum)

Java Double Type

```java
double
```

## [cotrConcat](/snippets/cotrconcat)

Java Concatenate String

```java
${1:"String1"} + ${2:"String2"}
```

## [cotrFunc](/snippets/cotrfunc)

Java Function

```java
public ${1:void} ${2:myFunction}(${3:parameters}) {
    ${4:// Your code here}
}
```

## [cotrVarStatic](/snippets/cotrvarstatic)

Java Static Variable

```java
static ${2:Type} ${3:myStaticVar} = ${4:value};

// Access the static variable
// MyClass.${3:myStaticVar}
```

## [cotrForEachLoop](/snippets/cotrforeachloop)

Java For Each Loop

```java
for (${1:Type} ${2:item} : ${3:iterable}) {
  ${4:// Your code here}
}
```

## [cotrWhileLoop](/snippets/cotrwhileloop)

Java While Loop

```java
while (${1:condition}) {
  ${2:// Your code here}
}
```

## [cotrTypeCompare](/snippets/cotrtypecompare)

Java Type Comparison

```java
// Check if two variables have the same type:
if (${1:variable1}.getClass() == ${2:variable2}.getClass()) {
  // Your code here
}
```

## [cotrVarDate](/snippets/cotrvardate)

Java Create Date Variable

```java
import java.time.LocalDate;

LocalDate ${1:myDate} = LocalDate.of(${2:year}, ${3:month}, ${4:day});
```

## [cotrFuncLambda](/snippets/cotrfunclambda)

Java Lambda Function

```java
(${1:parameters}) -> ${2:expression}
```

## [cotrVarInt](/snippets/cotrvarint)

Java Create Integer Variable

```java
int ${1:myInt} = ${2:0};
```

## [cotrFuncArgs](/snippets/cotrfuncargs)

Java Function Args

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

## [cotrTypesDate](/snippets/cotrtypesdate)

Java Date Type

```java
import java.time.LocalDate;
```

## [cotrFuncArgsNamed](/snippets/cotrfuncargsnamed)

Java Function Named Args

```java
// Note: Java does not support named arguments in function definitions.
```

## [cotrVarTyped](/snippets/cotrvartyped)

Java Create Typed Variable

```java
${1:Type} ${2:myVar} = $3;
```

## [cotrForLoop](/snippets/cotrforloop)

Java For Loop

```java
for (int ${1:i} = 0; $1 < ${2:10}; $1++) {
  // Your code here
}
```

## [cotrTypesList](/snippets/cotrtypeslist)

Java List Type

```java
List<${1:type}>
```

## [cotrPrintMulti](/snippets/cotrprintmulti)

Java Print Multi

```java
System.out.println(${1:"Line 1"} +
    ${2:"\nLine 2"} +
    ${3:"\nLine 3"});
```

## [cotrClass](/snippets/cotrclass)

Java Class

```java
public class ${1:MyClass} {
  ${2:// Your code here}
}
```

## [cotrIf](/snippets/cotrif)

Java If Statement

```java
if (${1:condition}) {
  ${2:// Your code here}
}
```

## [cotrStructure](/snippets/cotrstructure)

Java Project Structure (High-Level)

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

## [cotrTypesBoolFalse](/snippets/cotrtypesboolfalse)

Java Boolean False

```java
false
```

## [cotrTypesBool](/snippets/cotrtypesbool)

Java Boolean Type

```java
boolean
```

## [cotrVar](/snippets/cotrvar)

Java Create Variable

```java
${1:Type} ${2:myVar} = ${3:value};
```

## [cotrVarSyntax](/snippets/cotrvarsyntax)

Variable Declaration Syntax

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

## [cotrVarString](/snippets/cotrvarstring)

Java Create String Variable

```java
String ${1:myString} = ${2:'Your string here'};
```

## [cotrOperatorsBool](/snippets/cotroperatorsbool)

Java Boolean Operators

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

## [cotrTypes](/snippets/cotrtypes)

Java Types

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

## [cotrTypesNumAlt](/snippets/cotrtypesnumalt)

Java Float Type

```java
float
```

## [cotrComment](/snippets/cotrcomment)

Java Comment

```java
// ${1:Your comment here}
```

## [cotrDoWhileLoop](/snippets/cotrdowhileloop)

Java Do While Loop

```java
do {
  ${1:// Your code here}
} while (${2:condition});
```

## [cotrSwitch](/snippets/cotrswitch)

Java Switch Statement

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

## [cotrEntry](/snippets/cotrentry)

Java Entry Point

```java
// Java Entry Point
// To run this program, use: `java Main.java`

public class Main {
    public static void main(String[] args) {
        // Your code here
    }
}
```

## [cotrTypesNull](/snippets/cotrtypesnull)

Java Null Type

```java
null
```

## [cotrTypesDynamic](/snippets/cotrtypesdynamic)

Java Dynamic Type

```java
Object
```

## [cotrVarMap](/snippets/cotrvarmap)

Java Create Map Variable

```java
Map<${1:Key}, ${2:Value}> ${3:myMap} = new HashMap<>();
${3:myMap}.put(${4:key}, ${5:value});
```

## [cotrEnum](/snippets/cotrenum)

Java Enum

```java
enum ${1:MyEnum} {
  ${2:value1},
  ${3:value2},
  // Add more values here
}
```

## [cotrNotEqual](/snippets/cotrnotequal)

Java Not Equal To

```java
!=
```

## [cotrTypesBoolTrue](/snippets/cotrtypesbooltrue)

Java Boolean True

```java
true
```

## [cotrNow](/snippets/cotrnow)

Java Date Now

```java
import java.time.LocalDate;

LocalDate now = LocalDate.now();
```

## [cotrTernary](/snippets/cotrternary)

Java Ternary Operator

```java
${1:condition} ? ${2:trueValue} : ${3:falseValue}
```

## [cotrInfo](/snippets/cotrinfo)

Java Info

```java
Typing: Statically typed
Paradigm: Multi-paradigm: object-oriented, imperative, concurrent
Compilation: Compiled to bytecode, executed on the Java Virtual Machine (JVM)
Concurrency: Supports multi-threading and concurrent programming with the java.util.concurrent package
```

## [cotrTypesString](/snippets/cotrtypesstring)

Java String Type

```java
String
```

## [cotrTypesMap](/snippets/cotrtypesmap)

Java Map Type

```java
Map<${1:keyType}, ${2:valueType}>
```

## [cotrVarDouble](/snippets/cotrvardouble)

Java Create Double Variable

```java
double ${1:myDouble} = ${2:0.0};
```

## [cotrTryCatch](/snippets/cotrtrycatch)

Java Try Catch

```java
try {
  ${1:// Your code here}
} catch (${2:Exception} ${3:e}) {
  ${4:// Your code here}
}
```

## [cotrIfElse](/snippets/cotrifelse)

Java If Else Statement

```java
if (${1:condition}) {
  ${2:// Your code here}
} else if (${3:condition}) {
  ${4:// Your code here}
} else {
  ${5:// Your code here}
}
```

## [cotrOperators](/snippets/cotroperators)

Java Mathematical Operators

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

## [cotrPrint](/snippets/cotrprint)

Java Print

```java
System.out.println(${1:'Your message here'});
```

## [cotrCommentMulti](/snippets/cotrcommentmulti)

Java Multi-Line Comment

```java
/*
 * ${1:Your comment here}
 */
```

## [cotrThrow](/snippets/cotrthrow)

Java Throw Exception

```java
throw new ${1:Exception}(${2:'Your message here'});
```

## [cotrTypeCheck](/snippets/cotrtypecheck)

Java Type Check

```java
${1:variable}.getClass()
```

## [cotrTypesInt](/snippets/cotrtypesint)

Java Integer Type

```java
int
```

## [cotrFuncAnon](/snippets/cotrfuncanon)

Java Anonymous Function

```java
new ${1:InterfaceName}() {
    @Override
    public ${2:returnType} ${3:methodName}(${4:parameters}) {
        ${5:// Your code here}
    }
}
```

## [cotrGenList](/snippets/cotrgenlist)

Java Generate List

```java
List<${1:Type}> ${2:myList} = IntStream.range(0, ${3:length}).mapToObj(i -> ${4:value}).collect(Collectors.toList());
```

## [cotrFuncArrow](/snippets/cotrfuncarrow)

Java Arrow Function

```java
(${2:parameters}) -> ${1:returnType} {
    ${3:// Your code here}
}
```


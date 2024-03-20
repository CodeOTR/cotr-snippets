## Java Enum

### {[cotrEnum enum]}

```
enum ${1:MyEnum} {
  ${2:value1},
  ${3:value2},
  // Add more values here
}
```

## Java Ternary Operator

### {[cotrTernary ternary conditionalOperator]}

```
${1:condition} ? ${2:trueValue} : ${3:falseValue}
```

## Java Type Conversion

### {[cotrTypeConvert cotrTypeCast cotrConvert cotrCast]}

```
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

## Java Boolean False

### {[cotrTypesBoolFalse false off booleanFalse]}

```
false
```

## Java Function Named Args

### {[cotrFuncArgsNamed functionNamedArgs]}

```
// Note: Java does not support named arguments in function definitions.
```

## Java Create Nullable Variable

### {[cotrVarNullable variableNullable nullableVariable]}

```
${1:Type} ${2:myVar} = null;
```

## Java Create String Variable

### {[cotrVarString string stringVariable variableString text createString createText]}

```
String ${1:myString} = ${2:'Your string here'};
```

## Java Create List Variable

### {[cotrVarList createList listVariable arrayVariable variableList variableArray list array]}

```
List<${1:Type}> ${2:myList} = new ArrayList<>();
${2:myList}.add(${3:value});
```

## Java Anonymous Function

### {[cotrFuncAnon anonFunc anonymous closure lambda functionLiteral cotrFuncLambda]}

```
new ${1:InterfaceName}() {
    @Override
    public ${2:returnType} ${3:methodName}(${4:parameters}) {
        ${5:// Your code here}
    }
}
```

## Java Equal To

### {[cotrEqual equal]}

```
==
```

## Java Boolean Operators

### {[cotrOperatorsBool booleanOperators logic]}

```
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

## Java Create Variable

### {[cotrVar variable createVariable newVariable]}

```
${1:Type} ${2:myVar} = ${3:value};
```

## Java Mathematical Operators

### {[cotrOperators operators mathDocs]}

```
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

## Java String Type

### {[cotrTypesString stringType typeString textType typeText]}

```
String
```

## Java Concatenate String

### {[cotrConcat concatenate combine]}

```
${1:"String1"} + ${2:"String2"}
```

## Java Throw Exception

### {[cotrThrow throwError throwException]}

```
throw new ${1:Exception}(${2:'Your message here'});
```

## Java Type Check

### {[cotrTypeCheck checkType getType typeOf]}

```
${1:variable}.getClass()
```

## Java Integer Type

### {[cotrTypesInt intType typeInt]}

```
int
```

## Java Dynamic Type

### {[cotrTypesDynamic typesDynamic typesAny dynamicType anyType]}

```
Object
```

## Java Do While Loop

### {[cotrDoWhileLoop doWhile]}

```
do {
  ${1:// Your code here}
} while (${2:condition});
```

## Java Multi-Line Comment

### {[cotrCommentMulti multiLineComment commentMultiLine blockComment]}

```
/*
 * ${1:Your comment here}
 */
```

## Java Project Structure (High-Level)

### {[cotrStructure structure architecture]}

```
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

## Java Types

### {[cotrTypes types allTypes languageTypes builtInTypes dataTypes]}

```
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

## Java For Loop

### {[cotrForLoop forLoop forX]}

```
for (int ${1:i} = 0; $1 < ${2:10}; $1++) {
  // Your code here
}
```

## Java Try Catch

### {[cotrTryCatch tryCatch]}

```
try {
  ${1:// Your code here}
} catch (${2:Exception} ${3:e}) {
  ${4:// Your code here}
}
```

## Java If Else Statement

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

## Java Not Equal To

### {[cotrNotEqual notEqual doesNotEqual]}

```
!=
```

## Java Type Comparison

### {[cotrTypeCompare compareTypes]}

```
// Check if two variables have the same type:
if (${1:variable1}.getClass() == ${2:variable2}.getClass()) {
  // Your code here
}
```

## Java Date Now

### {[cotrNow now currentTime dateNow]}

```
import java.time.LocalDate;

LocalDate now = LocalDate.now();
```

## Java Arrow Function

### {[cotrFuncArrow arrowFunction functionArrow]}

```
(${2:parameters}) -> ${1:returnType} {
    ${3:// Your code here}
}
```

## Java Class

### {[cotrClass class objectTemplate]}

```
public class ${1:MyClass} {
  ${2:// Your code here}
}
```

## Java Generate List

### {[cotrGenList generateList listGen]}

```
List<${1:Type}> ${2:myList} = IntStream.range(0, ${3:length}).mapToObj(i -> ${4:value}).collect(Collectors.toList());
```

## Java Switch Statement

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

## Java Function Args

### {[cotrFuncArgs functionArgs functionWithArgs]}

```
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

## Java Double Type

### {[cotrTypesNum numberType typeNumber doubleType typeDouble]}

```
double
```

## Java List Type

### {[cotrTypesList listType typeList typeArray]}

```
List<${1:type}>
```

## Java Create Double Variable

### {[cotrVarDouble double doubleVariable variableDouble createDouble]}

```
double ${1:myDouble} = ${2:0.0};
```

## Variable Declaration Syntax

### {[cotrVarSyntax variableSyntax howToVariables letSyntax]}

```
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

## Java Create Typed Variable

### {[cotrVarTyped typedVariable variableWithType]}

```
${1:Type} ${2:myVar} = $3;
```

## Java If Statement

### {[cotrIf ifStatement]}

```
if (${1:condition}) {
  ${2:// Your code here}
}
```

## Java Float Type

### {[cotrTypesNumAlt floatType typeFloat]}

```
float
```

## Java Create Integer Variable

### {[cotrVarInt integer int variableInt intVariable createInt]}

```
int ${1:myInt} = ${2:0};
```

## Java Create Map Variable

### {[cotrVarMap createMap createStruct variableMap variableStruct mapVariable structVariable dictVariable variableDict createDict]}

```
Map<${1:Key}, ${2:Value}> ${3:myMap} = new HashMap<>();
${3:myMap}.put(${4:key}, ${5:value});
```

## Java Static Variable

### {[cotrVarStatic staticVariable associatedConstant]}

```
static ${2:Type} ${3:myStaticVar} = ${4:value};

// Access the static variable
// MyClass.${3:myStaticVar}
```

## Java While Loop

### {[cotrWhileLoop whileLoop whileTrue]}

```
while (${1:condition}) {
  ${2:// Your code here}
}
```

## Java Entry Point

### {[cotrEntry entry start startingPoint]}

```
// Java Entry Point
// To run this program, use: `java Main.java`

public class Main {
    public static void main(String[] args) {
        // Your code here
    }
}
```

## Java Print

### {[cotrPrint print log systemOut write consoleLog]}

```
System.out.println(${1:'Your message here'});
```

## Java Map Type

### {[cotrTypesMap mapType typeMap hashmapType structType dictType typeDict typeScruct]}

```
Map<${1:keyType}, ${2:valueType}>
```

## Java Interpolate String

### {[cotrInterpolate interpolate variableExpansion variableSubstitution stringPlaceholders stringInterpolation]}

```
String.format("${1:%s}", ${2:value})
```

## Java Create Date Variable

### {[cotrVarDate dateVariable variableDate date]}

```
import java.time.LocalDate;

LocalDate ${1:myDate} = LocalDate.of(${2:year}, ${3:month}, ${4:day});
```

## Java Comment

### {[cotrComment comment note]}

```
// ${1:Your comment here}
```

## Java This Type Check

### {[thisTypeCheck thisType getThisType]}

```
$CLIPBOARD.getClass().getName()
```

## Java Date Type

### {[cotrTypesDate dateType typeDate timeType timestampType dateTimeType]}

```
import java.time.LocalDate;
```

## Java Function Syntax

### {[cotrFuncSyntax functionSyntax functionDocs]}

```
// Java Function Syntax
// Basic function: public returnType functionName(parameters) { ... }
// Function with arguments: public returnType functionName(argType argName, ...) { ... }
// Note: Java does not support named arguments in function definitions.
```

## Java Print Multi

### {[cotrPrintMulti printMultiLine]}

```
System.out.println(${1:"Line 1"} +
    ${2:"\nLine 2"} +
    ${3:"\nLine 3"});
```

## Java Info

### {[cotrInfo languageInfo info]}

```
Typing: Statically typed
Paradigm: Multi-paradigm: object-oriented, imperative, concurrent
Compilation: Compiled to bytecode, executed on the Java Virtual Machine (JVM)
Concurrency: Supports multi-threading and concurrent programming with the java.util.concurrent package
```

## Java Boolean True

### {[cotrTypesBoolTrue true booleanTrue on]}

```
true
```

## Java Create Multi-Line String Variable

### {[cotrVarMultiString multiString variableMultiString multiStringVariable multilineText]}

```
String ${1:myString} =
    "${2:Line 1}" +
    "\n${3:Line 2}" +
    "\n${4:Line 3}";
```

## Java Create Constant

### {[cotrConst constant]}

```
final ${1:Type} ${2:myConst} = ${3:value};
```

## Java Generate Map

### {[cotrGenMap generateMap]}

```
Map<${1:Key}, ${2:Value}> ${3:myMap} = IntStream.range(0, ${4:length}).boxed().collect(Collectors.toMap(i -> ${5:key}, i -> ${6:value}));
```

## Java For Each Loop

### {[cotrForEachLoop forEach]}

```
for (${1:Type} ${2:item} : ${3:iterable}) {
  ${4:// Your code here}
}
```

## Java Function

### {[cotrFunc function subprogram procedure subroutine method]}

```
public ${1:void} ${2:myFunction}(${3:parameters}) {
    ${4:// Your code here}
}
```

## Java Lambda Function

### {[cotrFuncLambda cotrLambda]}

```
(${1:parameters}) -> ${2:expression}
```

## Java Boolean Type

### {[cotrTypesBool booleanType typeBool]}

```
boolean
```

## Java Null Type

### {[cotrTypesNull nullType typesNull]}

```
null
```

## Java Create Boolean Variable

### {[cotrVarBool variableBool bool boolVariable createBool]}

```
boolean ${1:myBool} = ${2:true};
```


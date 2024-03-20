## C++ If Else Statement

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

## C++ Type Check

### {[cotrTypeCheck checkType getType typeOf]}

```
typeid(${1:variable})
```

## C++ Character Type

### {[cotrTypesChar]}

```
char
```

## C++ Concatenate Strings

### {[cotrConcat concatenate combine]}

```
std::string ${1:myString} = ${2:"Hello, "} + ${3:"world!"};
```

## C++ Type Conversion

### {[cotrTypeConvert cotrConvert cotrTypeCast]}

```
// C++ Type Conversion:

// Implicit conversions (compiler performs automatically):
// - Smaller integer types to larger integer types (e.g., int to long).
// - Integers to floating-point types (e.g., int to double).

// Explicit conversions (using casts):
// - static_cast<Type>(expression): For safe conversions within compatible types.
// - dynamic_cast<Type>(expression): For safe conversions between polymorphic types.
// - const_cast<Type>(expression): For removing constness.
// - reinterpret_cast<Type>(expression): For low-level reinterpretations of data.

// Example:
// int x = 5;
// double y = static_cast<double>(x);
```

## C++ String Type

### {[cotrTypesString stringType typeString textType typeText]}

```
std::string
```

## C++ For Loop

### {[cotrForLoop forLoop forX]}

```
for (int ${1:i} = 0; $1 < ${2:10}; $1++) {
  // Your code here
}
```

## C++ Boolean Type

### {[cotrTypesBool booleanType typeBool]}

```
bool
```

## C++ Print Multi

### {[cotrPrintMulti printMultiLine]}

```
#include <iostream>

std::cout << ${1:"Line 1"} << std::endl
          << ${2:"Line 2"} << std::endl
          << ${3:"Line 3"} << std::endl;
```

## C++ Multi-Line Comment

### {[cotrCommentMulti multiLineComment commentMultiLine blockComment]}

```
/*
 * ${1:Your comment here}
 */
```

## C++ Equal To

### {[cotrEqual equal]}

```
==
```

## C++ Create Nullable Variable

### {[cotrVarNullable variableNullable nullableVariable]}

```
std::optional<${1:Type}> ${2:myVar} = $3;
```

## C++ Create Integer Variable

### {[cotrVarInt integer int variableInt intVariable createInt]}

```
int ${1:myInt} = ${2:value};
```

## C++ Create Double Variable

### {[cotrVarNum number float floatVariable variableFloat variableNumber numberVariable]}

```
double ${1:myDouble} = ${2:value};
```

## C++ Generate List

### {[cotrGenList generateList listGen]}

```
std::vector<${1:type}> ${2:listName}( ${3:size}, ${4:initialValue} );
```

## C++ Create Typed Variable

### {[cotrVarTyped typedVariable variableWithType]}

```
${1:Type} ${2:myVar} = $3;
```

## C++ Generate Map

### {[cotrGenMap generateMap]}

```
// C++ does not have a built-in way to generate a map with a specific number of key-value pairs.
// You can use a loop or a custom function to achieve this.
```

## C++ Double Type

### {[cotrTypesNum numberType typeNumber doubleType typeDouble]}

```
double
```

## C++ Interpolate String

### {[cotrInterpolate interpolate variableExpansion variableSubstitution stringPlaceholders stringInterpolation]}

```
std::string ${1:myString} = "${2:Your message here}";
```

## C++ Create Float Variable

### {[cotrVarNumAlt float variableFloat floatVariable]}

```
float ${1:myFloat} = ${2:value};
```

## C++ Function Named Args

### {[cotrFuncArgsNamed functionNamedArgs]}

```
// C++ does not support named arguments in the same way as some other languages.
```

## C++ Comment

### {[cotrComment comment note]}

```
// ${1:Your comment here}
```

## C++ Types

### {[cotrTypes types allTypes languageTypes builtInTypes dataTypes]}

```
$BLOCK_COMMENT_START
C++ is a statically typed language.

Types in C++ include:
- int: Integer
- float: Single-precision floating-point number
- double: Double-precision floating-point number
- char: Character
- bool: Boolean
- std::string: String class from the Standard Library
- int[10]: Array of integers with size 10
- std::vector<int>: Vector of integers from the Standard Library
- std::map<K, V>: Map (associative array) from the Standard Library
- struct MyStruct: Custom data structure with named fields
- enum MyEnum: Enumeration type
- void: Type representing the absence of a value
- auto: Type inferred by the compiler
- nullptr: Type of the null pointer
- decltype: Type specifier for the type of an expression

Read more here: https://learn.microsoft.com/en-us/cpp/cpp/fundamental-types-cpp?view=msvc-170
$BLOCK_COMMENT_END
```

## C++ Dynamic Type

### {[cotrTypesDynamic typesDynamic typesAny dynamicType anyType]}

```
std::any
```

## C++ Date Now

### {[cotrNow now currentTime dateNow]}

```
std::chrono::system_clock::now()
```

## C++ Class

### {[cotrClass class objectTemplate]}

```
class ${1:MyClass} {
  // Your code here
};
```

## C++ Create Boolean Variable

### {[cotrVarBool variableBool bool boolVariable createBool]}

```
bool ${1:myBool} = ${2:value};
```

## C++ Function Syntax

### {[cotrFuncSyntax functionSyntax functionDocs]}

```
// C++ Function Syntax
// Basic function: returnType functionName(parameters) { ... }
// Function with arguments: returnType functionName(arg1Type arg1, arg2Type arg2, ...) { ... }
// C++ does not support named arguments in the same way as some other languages.
```

## C++ Try Catch

### {[cotrTryCatch tryCatch]}

```
try {
  // Your code here
} catch (${1:exceptionType} ${2:exception}) {
  // Your code here
}
```

## C++ Ternary Operator

### {[cotrTernary ternary conditionalOperator]}

```
${1:condition} ? ${2:trueValue} : ${3:falseValue}
```

## C++ For...In Loop

### {[cotrForInLoop forIn]}

```
for (auto ${1:item} : ${2:iterable}) {
  // Your code here
}
```

## C++ Do...While Loop

### {[cotrDoWhileLoop doWhile]}

```
do {
  // Your code here
} while (${1:condition});
```

## C++ Mathematical Operators

### {[cotrOperators operators mathDocs]}

```
// C++ Mathematical Operators
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

## C++ Null Type

### {[cotrTypesNull nullType typesNull]}

```
nullptr
```

## C++ Create Variable

### {[cotrVar variable createVariable newVariable]}

```
${1:type} ${2:myVar} = ${3:value};
```

## C++ Create Constant

### {[cotrConst constant]}

```
const ${1:type} ${2:myConst} = ${3:value};
```

## C++ Print

### {[cotrPrint print log systemOut write consoleLog]}

```
#include <iostream>

std::cout << ${1:"Your message here"} << std::endl;
```

## C++ Create Multi-Line String Variable

### {[cotrVarStringMulti multiLineString varStringMulti stringVariableMulti createMultiLineString]}

```
std::string ${1:myString} = R"(${2:Your multi-line message here})";
```

## C++ Entry Point

### {[cotrEntry entry start startingPoint]}

```
// C++ Entry Point
// To compile and run this program, use: `g++ filename.cpp -o output && ./output`

#include <iostream>

int main() {
    std::cout << "Hello, World!" << std::endl;
    return 0;
}
```

## C++ Project Structure (High-Level)

### {[cotrStructure structure architecture]}

```
// Recommended High-Level C++ Project Structure:

// - src/
//   For Feature or Module-based Organization:
//   - rendering/
//     - Contains source code for rendering features.
//   - physics/
//     - Contains source code for physics features.
//   - networking/
//     - Contains source code for networking features.
//   For File Type-based Organization:
//   - cpp/
//     - Contains all .cpp implementation files.
//   - h/
//     - Contains all .h header files.
//   - Contains all source code.
// - include/
//   - Contains header files.
// - build/
//   - Output directory for compiled files.
// - lib/
//   - Contains external libraries (if not using a package manager).
// - test/
//   - Contains unit tests.

// Note:
// - This is a basic structure; adjust based on project complexity and preferences.
```

## C++ Type Comparison

### {[cotrTypeCompare compareTypes]}

```
// Check if two variables have the same type:
if (typeid(${1:variable1}) == typeid(${2:variable2})) {
  // Your code here
}
```

## C++ Boolean True

### {[cotrTypesBoolTrue true booleanTrue on]}

```
true
```

## C++ Map Type

### {[cotrTypesMap mapType typeMap hashmapType structType dictType typeDict typeScruct]}

```
std::map<${1:keyType}, ${2:valueType}>
```

## C++ Function Args

### {[cotrFuncArgs functionArgs functionWithArgs]}

```
// In C++, you can use default arguments in function definitions.
void ${2:myFunction}(${3:Type} ${4:arg1}, ${5:Type} ${6:arg2} = ${7:defaultValue}) {
    ${8:// Your code here}
}
```

## C++ This Type Check

### {[thisTypeCheck thisType getThisType]}

```
typeid($CLIPBOARD).name()
```

## C++ Date Type

### {[cotrTypesDate dateType typeDate timeType timestampType dateTimeType]}

```
#include <chrono>

std::chrono::system_clock::time_point
```

## C++ Variable Declaration Syntax

### {[cotrVarSyntax variableSyntax howToVariables letSyntax]}

```
// C++ Variable Declaration Syntax:

// - auto: (Scope: Block)
//   - Type is automatically inferred by the compiler.
//   - Preferred for most variable declarations.

// - type: (Scope: Block)
//   - Explicitly specify the variable's type.
//   - Use when auto deduction is not desired or not possible.

// - const: (Scope: Block)
//   - Cannot be reassigned or redeclared.
//   - Use for values that should remain constant.

// Note:
// - C++ does not have a direct equivalent to 'var' or 'let'.
// - Use 'auto' for most variable declarations.
// - Use 'const' for values that should not change.
```

## C++ Create Date Variable

### {[cotrVarDate dateVariable variableDate date]}

```
#include <chrono>

auto ${1:myDate} = std::chrono::system_clock::now();
```

## C++ Function

### {[cotrFunc function subprogram procedure subroutine method]}

```
void ${2:myFunction}(${3:parameters}) {
  ${4:// Your code here}
}
```

## C++ Integer Type

### {[cotrTypesInt intType typeInt]}

```
int
```

## C++ List Type

### {[cotrTypesList listType typeList typeArray]}

```
std::vector<${1:type}>
```

## C++ Create List Variable

### {[cotrVarList createList listVariable arrayVariable variableList variableArray list array]}

```
std::vector<${1:type}> ${2:myList} = {${3:values}};
```

## C++ Not Equal To

### {[cotrNotEqual notEqual doesNotEqual]}

```
!=
```

## C++ Create Map Variable

### {[cotrVarMap createMap createStruct variableMap variableStruct mapVariable structVariable dictVariable variableDict createDict]}

```
std::map<${1:keyType}, ${2:valueType}> ${3:myMap} = {
  {${4:key1}, ${5:value1}},
  {${6:key2}, ${7:value2}},
  // Add more key-value pairs here
};
```

## C++ Switch Statement

### {[cotrSwitch switch switchStatement select case]}

```
switch (${1:variable}) {
  case ${2:value1}:
    // Your code here
    break;
  case ${3:value2}:
    // Your code here
    break;
  default:
    // Your code here
}
```

## C++ Throw Exception

### {[cotrThrow throwError throwException]}

```
throw ${1:Exception('Your message here')};
```

## C++ Enum

### {[cotrEnum enum]}

```
enum class ${1:MyEnum} {
  ${2:value1},
  ${3:value2},
  // Add more values here
};
```

## C++ Static Variable

### {[cotrVarStatic staticVariable associatedConstant]}

```
static ${2:type} ${3:myStaticVar} = ${4:value};

// Access the static variable
// MyClass::${3:myStaticVar}
```

## C++ While Loop

### {[cotrWhileLoop whileLoop whileTrue]}

```
while (${1:condition}) {
  // Your code here
}
```

## C++ Lambda and Anonymous Function

### {[cotrFuncLambda cotrFuncAnon cotrLambda cotrFuncArrow anonFunc anonymous functionLiteral]}

```
auto ${1:myLambda} = [](${2:parameters}) -> ${3:returnType} {
  // Your code here
};

// Or without assigning to a variable:
[](${2:parameters}) -> ${3:returnType} {
  ${3:// Your code here}
}
```

## C++ Info

### {[cotrInfo languageInfo info]}

```
// Typing: Statically typed
// Paradigm: Multi-paradigm: procedural, object-oriented, functional, generic, imperative
// Compilation: Compiled
// Concurrency: Supports multi-threading
```

## C++ Boolean Operators

### {[cotrOperatorsBool booleanOperators logic]}

```
// C++ Boolean Operators
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

## C++ Float Type

### {[cotrTypesNumAlt floatType typeFloat]}

```
float
```

## C++ Boolean False

### {[cotrTypesBoolFalse false off booleanFalse]}

```
false
```

## C++ Create String Variable

### {[cotrVarString string stringVariable variableString text createString createText]}

```
std::string ${1:myString} = ${2:value};
```

## C++ If Statement

### {[cotrIf ifStatement]}

```
if (${1:condition}) {
  // Your code here
}
```


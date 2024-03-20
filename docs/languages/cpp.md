## C++ Throw Exception

### [cotrThrow](/snippets/cotrThrow)

```cpp
throw ${1:Exception('Your message here')};
```

## C++ Map Type

### [cotrTypesMap](/snippets/cotrTypesMap)

```cpp
std::map<${1:keyType}, ${2:valueType}>
```

## C++ Concatenate Strings

### [cotrConcat](/snippets/cotrConcat)

```cpp
std::string ${1:myString} = ${2:"Hello, "} + ${3:"world!"};
```

## C++ Function Syntax

### [cotrFuncSyntax](/snippets/cotrFuncSyntax)

```cpp
// C++ Function Syntax
// Basic function: returnType functionName(parameters) { ... }
// Function with arguments: returnType functionName(arg1Type arg1, arg2Type arg2, ...) { ... }
// C++ does not support named arguments in the same way as some other languages.
```

## C++ Create String Variable

### [cotrVarString](/snippets/cotrVarString)

```cpp
std::string ${1:myString} = ${2:value};
```

## C++ Static Variable

### [cotrVarStatic](/snippets/cotrVarStatic)

```cpp
static ${2:type} ${3:myStaticVar} = ${4:value};

// Access the static variable
// MyClass::${3:myStaticVar}
```

## C++ List Type

### [cotrTypesList](/snippets/cotrTypesList)

```cpp
std::vector<${1:type}>
```

## C++ Print

### [cotrPrint](/snippets/cotrPrint)

```cpp
#include <iostream>

std::cout << ${1:"Your message here"} << std::endl;
```

## C++ Dynamic Type

### [cotrTypesDynamic](/snippets/cotrTypesDynamic)

```cpp
std::any
```

## C++ Comment

### [cotrComment](/snippets/cotrComment)

```cpp
// ${1:Your comment here}
```

## C++ Project Structure (High-Level)

### [cotrStructure](/snippets/cotrStructure)

```cpp
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

## C++ Mathematical Operators

### [cotrOperators](/snippets/cotrOperators)

```cpp
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

## C++ Boolean Operators

### [cotrOperatorsBool](/snippets/cotrOperatorsBool)

```cpp
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

## C++ Create Float Variable

### [cotrVarNumAlt](/snippets/cotrVarNumAlt)

```cpp
float ${1:myFloat} = ${2:value};
```

## C++ Create Map Variable

### [cotrVarMap](/snippets/cotrVarMap)

```cpp
std::map<${1:keyType}, ${2:valueType}> ${3:myMap} = {
  {${4:key1}, ${5:value1}},
  {${6:key2}, ${7:value2}},
  // Add more key-value pairs here
};
```

## C++ While Loop

### [cotrWhileLoop](/snippets/cotrWhileLoop)

```cpp
while (${1:condition}) {
  // Your code here
}
```

## C++ Ternary Operator

### [cotrTernary](/snippets/cotrTernary)

```cpp
${1:condition} ? ${2:trueValue} : ${3:falseValue}
```

## C++ Type Conversion

### [cotrTypeConvert](/snippets/cotrTypeConvert)

```cpp
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

## C++ Boolean True

### [cotrTypesBoolTrue](/snippets/cotrTypesBoolTrue)

```cpp
true
```

## C++ Boolean False

### [cotrTypesBoolFalse](/snippets/cotrTypesBoolFalse)

```cpp
false
```

## C++ Type Check

### [cotrTypeCheck](/snippets/cotrTypeCheck)

```cpp
typeid(${1:variable})
```

## C++ Double Type

### [cotrTypesNum](/snippets/cotrTypesNum)

```cpp
double
```

## C++ Create Constant

### [cotrConst](/snippets/cotrConst)

```cpp
const ${1:type} ${2:myConst} = ${3:value};
```

## C++ Switch Statement

### [cotrSwitch](/snippets/cotrSwitch)

```cpp
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

## C++ Integer Type

### [cotrTypesInt](/snippets/cotrTypesInt)

```cpp
int
```

## C++ Boolean Type

### [cotrTypesBool](/snippets/cotrTypesBool)

```cpp
bool
```

## C++ Create Variable

### [cotrVar](/snippets/cotrVar)

```cpp
${1:type} ${2:myVar} = ${3:value};
```

## C++ If Else Statement

### [cotrIfElse](/snippets/cotrIfElse)

```cpp
if (${1:condition}) {
  // Your code here
} else if (${2:condition}) {
  // Your code here
} else {
  // Your code here
}
```

## C++ Character Type

### [cotrTypesChar](/snippets/cotrTypesChar)

```cpp
char
```

## C++ Create Date Variable

### [cotrVarDate](/snippets/cotrVarDate)

```cpp
#include <chrono>

auto ${1:myDate} = std::chrono::system_clock::now();
```

## C++ Multi-Line Comment

### [cotrCommentMulti](/snippets/cotrCommentMulti)

```cpp
/*
 * ${1:Your comment here}
 */
```

## C++ Function

### [cotrFunc](/snippets/cotrFunc)

```cpp
void ${2:myFunction}(${3:parameters}) {
  ${4:// Your code here}
}
```

## C++ Enum

### [cotrEnum](/snippets/cotrEnum)

```cpp
enum class ${1:MyEnum} {
  ${2:value1},
  ${3:value2},
  // Add more values here
};
```

## C++ Class

### [cotrClass](/snippets/cotrClass)

```cpp
class ${1:MyClass} {
  // Your code here
};
```

## C++ Create Double Variable

### [cotrVarNum](/snippets/cotrVarNum)

```cpp
double ${1:myDouble} = ${2:value};
```

## C++ Create Boolean Variable

### [cotrVarBool](/snippets/cotrVarBool)

```cpp
bool ${1:myBool} = ${2:value};
```

## C++ For Loop

### [cotrForLoop](/snippets/cotrForLoop)

```cpp
for (int ${1:i} = 0; $1 < ${2:10}; $1++) {
  // Your code here
}
```

## C++ Variable Declaration Syntax

### [cotrVarSyntax](/snippets/cotrVarSyntax)

```cpp
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

## C++ Entry Point

### [cotrEntry](/snippets/cotrEntry)

```cpp
// C++ Entry Point
// To compile and run this program, use: `g++ filename.cpp -o output && ./output`

#include <iostream>

int main() {
    std::cout << "Hello, World!" << std::endl;
    return 0;
}
```

## C++ Not Equal To

### [cotrNotEqual](/snippets/cotrNotEqual)

```cpp
!=
```

## C++ Type Comparison

### [cotrTypeCompare](/snippets/cotrTypeCompare)

```cpp
// Check if two variables have the same type:
if (typeid(${1:variable1}) == typeid(${2:variable2})) {
  // Your code here
}
```

## C++ Date Type

### [cotrTypesDate](/snippets/cotrTypesDate)

```cpp
#include <chrono>

std::chrono::system_clock::time_point
```

## C++ Generate List

### [cotrGenList](/snippets/cotrGenList)

```cpp
std::vector<${1:type}> ${2:listName}( ${3:size}, ${4:initialValue} );
```

## C++ Function Named Args

### [cotrFuncArgsNamed](/snippets/cotrFuncArgsNamed)

```cpp
// C++ does not support named arguments in the same way as some other languages.
```

## C++ Create Multi-Line String Variable

### [cotrVarStringMulti](/snippets/cotrVarStringMulti)

```cpp
std::string ${1:myString} = R"(${2:Your multi-line message here})";
```

## C++ Print Multi

### [cotrPrintMulti](/snippets/cotrPrintMulti)

```cpp
#include <iostream>

std::cout << ${1:"Line 1"} << std::endl
          << ${2:"Line 2"} << std::endl
          << ${3:"Line 3"} << std::endl;
```

## C++ Do...While Loop

### [cotrDoWhileLoop](/snippets/cotrDoWhileLoop)

```cpp
do {
  // Your code here
} while (${1:condition});
```

## C++ Float Type

### [cotrTypesNumAlt](/snippets/cotrTypesNumAlt)

```cpp
float
```

## C++ Interpolate String

### [cotrInterpolate](/snippets/cotrInterpolate)

```cpp
std::string ${1:myString} = "${2:Your message here}";
```

## C++ Create Typed Variable

### [cotrVarTyped](/snippets/cotrVarTyped)

```cpp
${1:Type} ${2:myVar} = $3;
```

## C++ For...In Loop

### [cotrForInLoop](/snippets/cotrForInLoop)

```cpp
for (auto ${1:item} : ${2:iterable}) {
  // Your code here
}
```

## C++ Info

### [cotrInfo](/snippets/cotrInfo)

```cpp
// Typing: Statically typed
// Paradigm: Multi-paradigm: procedural, object-oriented, functional, generic, imperative
// Compilation: Compiled
// Concurrency: Supports multi-threading
```

## C++ Types

### [cotrTypes](/snippets/cotrTypes)

```cpp
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

## C++ String Type

### [cotrTypesString](/snippets/cotrTypesString)

```cpp
std::string
```

## C++ Create List Variable

### [cotrVarList](/snippets/cotrVarList)

```cpp
std::vector<${1:type}> ${2:myList} = {${3:values}};
```

## C++ Create Nullable Variable

### [cotrVarNullable](/snippets/cotrVarNullable)

```cpp
std::optional<${1:Type}> ${2:myVar} = $3;
```

## C++ Lambda and Anonymous Function

### [cotrFuncLambda](/snippets/cotrFuncLambda)

```cpp
auto ${1:myLambda} = [](${2:parameters}) -> ${3:returnType} {
  // Your code here
};

// Or without assigning to a variable:
[](${2:parameters}) -> ${3:returnType} {
  ${3:// Your code here}
}
```

## C++ Try Catch

### [cotrTryCatch](/snippets/cotrTryCatch)

```cpp
try {
  // Your code here
} catch (${1:exceptionType} ${2:exception}) {
  // Your code here
}
```

## C++ Create Integer Variable

### [cotrVarInt](/snippets/cotrVarInt)

```cpp
int ${1:myInt} = ${2:value};
```

## C++ Generate Map

### [cotrGenMap](/snippets/cotrGenMap)

```cpp
// C++ does not have a built-in way to generate a map with a specific number of key-value pairs.
// You can use a loop or a custom function to achieve this.
```

## C++ Function Args

### [cotrFuncArgs](/snippets/cotrFuncArgs)

```cpp
// In C++, you can use default arguments in function definitions.
void ${2:myFunction}(${3:Type} ${4:arg1}, ${5:Type} ${6:arg2} = ${7:defaultValue}) {
    ${8:// Your code here}
}
```

## C++ If Statement

### [cotrIf](/snippets/cotrIf)

```cpp
if (${1:condition}) {
  // Your code here
}
```

## C++ Equal To

### [cotrEqual](/snippets/cotrEqual)

```cpp
==
```

## C++ Null Type

### [cotrTypesNull](/snippets/cotrTypesNull)

```cpp
nullptr
```

## C++ Date Now

### [cotrNow](/snippets/cotrNow)

```cpp
std::chrono::system_clock::now()
```


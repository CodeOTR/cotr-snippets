---
title: Cpp
description: Cpp snippets on the rocks.
---

## [cotrPrint](/snippets/cotrprint)

C++ Print

```cpp
#include <iostream>

std::cout << ${1:"Your message here"} << std::endl;
```

## [cotrIf](/snippets/cotrif)

C++ If Statement

```cpp
if (${1:condition}) {
  // Your code here
}
```

## [cotrTypesDynamic](/snippets/cotrtypesdynamic)

C++ Dynamic Type

```cpp
std::any
```

## [cotrVarNum](/snippets/cotrvarnum)

C++ Create Double Variable

```cpp
double ${1:myDouble} = ${2:value};
```

## [cotrVarList](/snippets/cotrvarlist)

C++ Create List Variable

```cpp
std::vector<${1:type}> ${2:myList} = {${3:values}};
```

## [cotrTypesNumAlt](/snippets/cotrtypesnumalt)

C++ Float Type

```cpp
float
```

## [cotrVarMap](/snippets/cotrvarmap)

C++ Create Map Variable

```cpp
std::map<${1:keyType}, ${2:valueType}> ${3:myMap} = {
  {${4:key1}, ${5:value1}},
  {${6:key2}, ${7:value2}},
  // Add more key-value pairs here
};
```

## [cotrIfElse](/snippets/cotrifelse)

C++ If Else Statement

```cpp
if (${1:condition}) {
  // Your code here
} else if (${2:condition}) {
  // Your code here
} else {
  // Your code here
}
```

## [cotrVarDate](/snippets/cotrvardate)

C++ Create Date Variable

```cpp
#include <chrono>

auto ${1:myDate} = std::chrono::system_clock::now();
```

## [cotrTypesDate](/snippets/cotrtypesdate)

C++ Date Type

```cpp
#include <chrono>

std::chrono::system_clock::time_point
```

## [cotrVarNullable](/snippets/cotrvarnullable)

C++ Create Nullable Variable

```cpp
std::optional<${1:Type}> ${2:myVar} = $3;
```

## [cotrVarInt](/snippets/cotrvarint)

C++ Create Integer Variable

```cpp
int ${1:myInt} = ${2:value};
```

## [cotrTypeCheck](/snippets/cotrtypecheck)

C++ Type Check

```cpp
typeid(${1:variable})
```

## [cotrDoWhileLoop](/snippets/cotrdowhileloop)

C++ Do...While Loop

```cpp
do {
  // Your code here
} while (${1:condition});
```

## [cotrTypesNull](/snippets/cotrtypesnull)

C++ Null Type

```cpp
nullptr
```

## [cotrForLoop](/snippets/cotrforloop)

C++ For Loop

```cpp
for (int ${1:i} = 0; $1 < ${2:10}; $1++) {
  // Your code here
}
```

## [cotrWhileLoop](/snippets/cotrwhileloop)

C++ While Loop

```cpp
while (${1:condition}) {
  // Your code here
}
```

## [cotrFuncLambda](/snippets/cotrfunclambda)

C++ Lambda and Anonymous Function

```cpp
auto ${1:myLambda} = [](${2:parameters}) -> ${3:returnType} {
  // Your code here
};

// Or without assigning to a variable:
[](${2:parameters}) -> ${3:returnType} {
  ${3:// Your code here}
}
```

## [cotrTryCatch](/snippets/cotrtrycatch)

C++ Try Catch

```cpp
try {
  // Your code here
} catch (${1:exceptionType} ${2:exception}) {
  // Your code here
}
```

## [cotrNotEqual](/snippets/cotrnotequal)

C++ Not Equal To

```cpp
!=
```

## [cotrTypes](/snippets/cotrtypes)

C++ Types

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

## [cotrTypesChar](/snippets/cotrtypeschar)

C++ Character Type

```cpp
char
```

## [cotrVarNumAlt](/snippets/cotrvarnumalt)

C++ Create Float Variable

```cpp
float ${1:myFloat} = ${2:value};
```

## [cotrFunc](/snippets/cotrfunc)

C++ Function

```cpp
void ${2:myFunction}(${3:parameters}) {
  ${4:// Your code here}
}
```

## [cotrFuncArgsNamed](/snippets/cotrfuncargsnamed)

C++ Function Named Args

```cpp
// C++ does not support named arguments in the same way as some other languages.
```

## [cotrTypesNum](/snippets/cotrtypesnum)

C++ Double Type

```cpp
double
```

## [cotrNow](/snippets/cotrnow)

C++ Date Now

```cpp
std::chrono::system_clock::now()
```

## [cotrVar](/snippets/cotrvar)

C++ Create Variable

```cpp
${1:type} ${2:myVar} = ${3:value};
```

## [cotrVarSyntax](/snippets/cotrvarsyntax)

C++ Variable Declaration Syntax

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

## [cotrVarTyped](/snippets/cotrvartyped)

C++ Create Typed Variable

```cpp
${1:Type} ${2:myVar} = $3;
```

## [cotrOperators](/snippets/cotroperators)

C++ Mathematical Operators

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

## [cotrTypesInt](/snippets/cotrtypesint)

C++ Integer Type

```cpp
int
```

## [cotrThrow](/snippets/cotrthrow)

C++ Throw Exception

```cpp
throw ${1:Exception('Your message here')};
```

## [cotrClass](/snippets/cotrclass)

C++ Class

```cpp
class ${1:MyClass} {
  // Your code here
};
```

## [cotrTypesBoolTrue](/snippets/cotrtypesbooltrue)

C++ Boolean True

```cpp
true
```

## [cotrTypesBoolFalse](/snippets/cotrtypesboolfalse)

C++ Boolean False

```cpp
false
```

## [cotrVarStatic](/snippets/cotrvarstatic)

C++ Static Variable

```cpp
static ${2:type} ${3:myStaticVar} = ${4:value};

// Access the static variable
// MyClass::${3:myStaticVar}
```

## [cotrVarBool](/snippets/cotrvarbool)

C++ Create Boolean Variable

```cpp
bool ${1:myBool} = ${2:value};
```

## [cotrForInLoop](/snippets/cotrforinloop)

C++ For...In Loop

```cpp
for (auto ${1:item} : ${2:iterable}) {
  // Your code here
}
```

## [cotrFuncArgs](/snippets/cotrfuncargs)

C++ Function Args

```cpp
// In C++, you can use default arguments in function definitions.
void ${2:myFunction}(${3:Type} ${4:arg1}, ${5:Type} ${6:arg2} = ${7:defaultValue}) {
    ${8:// Your code here}
}
```

## [cotrComment](/snippets/cotrcomment)

C++ Comment

```cpp
// ${1:Your comment here}
```

## [cotrInfo](/snippets/cotrinfo)

C++ Info

```cpp
// Typing: Statically typed
// Paradigm: Multi-paradigm: procedural, object-oriented, functional, generic, imperative
// Compilation: Compiled
// Concurrency: Supports multi-threading
```

## [cotrStructure](/snippets/cotrstructure)

C++ Project Structure (High-Level)

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

## [cotrTypeCompare](/snippets/cotrtypecompare)

C++ Type Comparison

```cpp
// Check if two variables have the same type:
if (typeid(${1:variable1}) == typeid(${2:variable2})) {
  // Your code here
}
```

## [cotrInterpolate](/snippets/cotrinterpolate)

C++ Interpolate String

```cpp
std::string ${1:myString} = "${2:Your message here}";
```

## [cotrConcat](/snippets/cotrconcat)

C++ Concatenate Strings

```cpp
std::string ${1:myString} = ${2:"Hello, "} + ${3:"world!"};
```

## [cotrVarStringMulti](/snippets/cotrvarstringmulti)

C++ Create Multi-Line String Variable

```cpp
std::string ${1:myString} = R"(${2:Your multi-line message here})";
```

## [cotrConst](/snippets/cotrconst)

C++ Create Constant

```cpp
const ${1:type} ${2:myConst} = ${3:value};
```

## [cotrFuncSyntax](/snippets/cotrfuncsyntax)

C++ Function Syntax

```cpp
// C++ Function Syntax
// Basic function: returnType functionName(parameters) { ... }
// Function with arguments: returnType functionName(arg1Type arg1, arg2Type arg2, ...) { ... }
// C++ does not support named arguments in the same way as some other languages.
```

## [cotrOperatorsBool](/snippets/cotroperatorsbool)

C++ Boolean Operators

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

## [cotrTypeConvert](/snippets/cotrtypeconvert)

C++ Type Conversion

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

## [cotrTypesMap](/snippets/cotrtypesmap)

C++ Map Type

```cpp
std::map<${1:keyType}, ${2:valueType}>
```

## [cotrTypesList](/snippets/cotrtypeslist)

C++ List Type

```cpp
std::vector<${1:type}>
```

## [cotrSwitch](/snippets/cotrswitch)

C++ Switch Statement

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

## [cotrTernary](/snippets/cotrternary)

C++ Ternary Operator

```cpp
${1:condition} ? ${2:trueValue} : ${3:falseValue}
```

## [cotrGenList](/snippets/cotrgenlist)

C++ Generate List

```cpp
std::vector<${1:type}> ${2:listName}( ${3:size}, ${4:initialValue} );
```

## [cotrPrintMulti](/snippets/cotrprintmulti)

C++ Print Multi

```cpp
#include <iostream>

std::cout << ${1:"Line 1"} << std::endl
          << ${2:"Line 2"} << std::endl
          << ${3:"Line 3"} << std::endl;
```

## [cotrCommentMulti](/snippets/cotrcommentmulti)

C++ Multi-Line Comment

```cpp
/*
 * ${1:Your comment here}
 */
```

## [cotrEntry](/snippets/cotrentry)

C++ Entry Point

```cpp
// C++ Entry Point
// To compile and run this program, use: `g++ filename.cpp -o output && ./output`

#include <iostream>

int main() {
    std::cout << "Hello, World!" << std::endl;
    return 0;
}
```

## [cotrTypesString](/snippets/cotrtypesstring)

C++ String Type

```cpp
std::string
```

## [cotrEnum](/snippets/cotrenum)

C++ Enum

```cpp
enum class ${1:MyEnum} {
  ${2:value1},
  ${3:value2},
  // Add more values here
};
```

## [cotrTypesBool](/snippets/cotrtypesbool)

C++ Boolean Type

```cpp
bool
```

## [cotrGenMap](/snippets/cotrgenmap)

C++ Generate Map

```cpp
// C++ does not have a built-in way to generate a map with a specific number of key-value pairs.
// You can use a loop or a custom function to achieve this.
```

## [cotrEqual](/snippets/cotrequal)

C++ Equal To

```cpp
==
```

## [cotrVarString](/snippets/cotrvarstring)

C++ Create String Variable

```cpp
std::string ${1:myString} = ${2:value};
```


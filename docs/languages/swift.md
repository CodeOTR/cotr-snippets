---
title: Swift
description: Swift snippets on the rocks.
---

## [cotrOperators](/snippets/cotroperators)

Swift Mathematical Operators

```swift
// Swift Mathematical Operators
// Addition: +
// Subtraction: -
// Multiplication: *
// Division: /
// Modulus (Remainder): %
// Exponentiation: **
// Increment: Use += 1
// Decrement: Use -= 1
// Assignment: =
// Addition assignment: +=
// Subtraction assignment: -=
// Multiplication assignment: *=
// Division assignment: /=
// Modulus assignment: %=
// Exponentiation assignment: **=
```

## [cotrTypesBoolTrue](/snippets/cotrtypesbooltrue)

Swift Boolean True

```swift
true
```

## [cotrTypesBoolFalse](/snippets/cotrtypesboolfalse)

Swift Boolean False

```swift
false
```

## [cotrConst](/snippets/cotrconst)

Swift Create Constant

```swift
let ${1:myConst} = $2;
```

## [cotrCommentMulti](/snippets/cotrcommentmulti)

Swift Multi-Line Comment

```swift
/*
 * ${1:Your comment here}
 */
```

## [cotrTypesDate](/snippets/cotrtypesdate)

Swift Date Type

```swift
Date
```

## [cotrVarNullable](/snippets/cotrvarnullable)

Swift Create Nullable Variable

```swift
var ${1:myVar}: ${2:Type}? = $3
```

## [cotrForLoop](/snippets/cotrforloop)

Swift For Loop

```swift
for ${1:i} in ${2:0..<10} {
  // Your code here
}
```

## [cotrIfElse](/snippets/cotrifelse)

Swift If Else Statement

```swift
if ${1:condition} {
  ${2:// Your code here}
} else if ${3:condition} {
  ${4:// Your code here}
} else {
  ${5:// Your code here}
}
```

## [cotrVarDate](/snippets/cotrvardate)

Swift Create Date Variable

```swift
let ${1:myDate} = Date()
```

## [cotrTypeConvert](/snippets/cotrtypeconvert)

Swift Type Conversion

```swift
// Swift Type Conversion:

// Swift emphasizes explicit type conversions for safety.

// Explicit conversions:
// - variable as? TargetType  // Safe cast (returns nil if conversion fails)
// - TargetType(variable)  // Forced cast (can crash if conversion fails)

// Note:
// - Use safe casts (as?) whenever possible.
// - Only use forced casts (TargetType()) when you are certain the conversion will succeed.
```

## [cotrTypesInt](/snippets/cotrtypesint)

Swift Integer Type

```swift
Int
```

## [cotrPrintMulti](/snippets/cotrprintmulti)

Swift Print Multi

```swift
print("""
${1:Line 1}
${2:Line 2}
${3:Line 3}
""")
```

## [cotrInfo](/snippets/cotrinfo)

Swift Info

```swift
Typing: Statically typed
Paradigm: Multi-paradigm: object-oriented, functional, imperative, block-structured
Compilation: Compiled
Concurrency: Supports multi-threading and concurrent programming with Grand Central Dispatch (GCD) and async/await
```

## [cotrEntry](/snippets/cotrentry)

Swift Entry Point

```swift
// Swift Entry Point
// To run this program, use: `swift filename.swift`

import Foundation

print("Hello, World!")
```

## [cotrTypesMap](/snippets/cotrtypesmap)

Swift Map Type

```swift
Dictionary<${1:KeyType}, ${2:ValueType}>
```

## [cotrVarString](/snippets/cotrvarstring)

Swift Create String Variable

```swift
var ${1:myString} = ${2:'Your string here'};
```

## [cotrTernary](/snippets/cotrternary)

Swift Ternary Operator

```swift
${1:condition} ? ${2:trueValue} : ${3:falseValue}
```

## [cotrEqual](/snippets/cotrequal)

Swift Equal To

```swift
==
```

## [cotrTypesList](/snippets/cotrtypeslist)

Swift List Type

```swift
Array<${1:Type}>
```

## [cotrGenMap](/snippets/cotrgenmap)

Swift Generate Dictionary

```swift
var ${1:myDictionary} = 
Dictionary(uniqueKeysWithValues: zip([${2:'key1'}, ${3:'key
2'}], [${4:'value1'}, ${5:'value2'}]));
```

## [cotrIf](/snippets/cotrif)

Swift If Statement

```swift
if ${1:condition} {
  ${2:// Your code here}
}
```

## [cotrStructure](/snippets/cotrstructure)

Swift Project Structure (High-Level)

```swift
// Recommended High-Level Swift Project Structure:

// - /Sources
//   - Contains the Swift source files.
//   - Organize by feature or functionality in different directories.

// - /Tests
//   - Contains Swift test files.
//   - Organize tests to mirror the structure of the /Sources directory.

// - Package.swift
//   - The manifest file for Swift Package Manager.

// - /Resources
//   - Non-code resources like images, data files, etc.

// - /Documentation
//   - Documentation files for the project.

// - /Scripts
//   - Utility scripts for building, running, etc.

// Note:
// - This structure is common for projects managed with Swift Package Manager.
// - For Xcode projects, the structure might be different, typically organized within an .xcodeproj file.
```

## [cotrTypesChar](/snippets/cotrtypeschar)

Swift Character Type

```swift
Character
```

## [cotrTypesAny](/snippets/cotrtypesany)

Swift Dynamic Type

```swift
Any
```

## [cotrLambda](/snippets/cotrlambda)

Swift Closure

```swift
let ${1:myClosure} = { (${2:parameters}) -> ${3:ReturnType} in
  ${4:return expression}
}
```

## [cotrTypeCheck](/snippets/cotrtypecheck)

Swift Type Check

```swift
type(of: ${1:variable})
```

## [cotrTypes](/snippets/cotrtypes)

Swift Types

```swift
$BLOCK_COMMENT_START
Swift is a statically typed language.

Types in Swift include:
- Int, UInt: Signed and unsigned integers
- Float, Double: Floating-point numbers
- Bool: Boolean
- String: Textual data
- Character: A single character
- Array<Element>: An ordered collection of elements
- Dictionary<Key, Value>: A collection of key-value pairs
- Set<Element>: An unordered collection of unique elements
- Optional<Type>: An optional value of Type
- Tuple: A group of values
- Enum: An enumeration
- Struct: A structure
- Class: A class
- Protocol: A protocol
- Closure: A closure or lambda function

Read more here: https://docs.swift.org/swift-book/documentation/the-swift-programming-language/types/
$BLOCK_COMMENT_END
```

## [cotrFunc](/snippets/cotrfunc)

Swift Function

```swift
func ${2:myFunction}(${3:parameters}) -> ${1:Void} {
    ${4:// Your code here}
}
```

## [cotrVarNum](/snippets/cotrvarnum)

Swift Create Double Variable

```swift
var ${1:myDouble} = ${2:0.0};
```

## [cotrWhileLoop](/snippets/cotrwhileloop)

Swift While Loop

```swift
while ${1:condition} {
  ${2:// Your code here}
}
```

## [cotrFuncArgs](/snippets/cotrfuncargs)

Swift Function Args

```swift
// In Swift, functions can have arguments with default values.
func ${2:myFunction}(${3:arg1}: ${4:Type1}, ${5:arg2}: ${6:Type2} = ${7:defaultValue}) -> ${1:Void} {
    ${8:// Your code here}
}
```

## [cotrFuncArgsNamed](/snippets/cotrfuncargsnamed)

Swift Function Named Args

```swift
func ${2:myFunction}(${3:arg1Name} ${3:arg1}: ${4:Type1}, ${5:arg2Name} ${5:arg2}: ${6:Type2}) -> ${1:Void} {
    ${7:// Your code here}
}
```

## [cotrComment](/snippets/cotrcomment)

Swift Comment

```swift
// ${1:Your comment here}
```

## [cotrVar](/snippets/cotrvar)

Swift Create Variable

```swift
var ${1:myVar} = $2;
```

## [cotrPrint](/snippets/cotrprint)

Swift Print

```swift
print(${1:"Your message here"})
```

## [cotrForInLoop](/snippets/cotrforinloop)

Swift For...In Loop

```swift
for ${1:item} in ${2:iterable} {
  ${3:// Your code here}
}
```

## [cotrNotEqual](/snippets/cotrnotequal)

Swift Not Equal To

```swift
!=
```

## [cotrTypesNum](/snippets/cotrtypesnum)

Swift Double Type

```swift
Double
```

## [cotrVarMap](/snippets/cotrvarmap)

Swift Create Dictionary Variable

```swift
var ${1:myDictionary} = [
  ${2:'key1'}: ${3:'value1'},
  ${4:'key2'}: ${5:'value2'}
];
```

## [cotrGenList](/snippets/cotrgenlist)

Swift Generate Array

```swift
var ${1:myArray} = Array(repeating: ${2:'item'}, count: ${3:5});
```

## [cotrClass](/snippets/cotrclass)

Swift Class

```swift
class ${1:MyClass} {
  ${2:// Your code here}
}
```

## [cotrOperatorsBool](/snippets/cotroperatorsbool)

Swift Boolean Operators

```swift
// Swift Boolean Operators
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

## [cotrTypesString](/snippets/cotrtypesstring)

Swift String Type

```swift
String
```

## [cotrFuncSyntax](/snippets/cotrfuncsyntax)

Swift Function Syntax

```swift
// Swift Function Syntax
// Basic function: func functionName(parameters) -> ReturnType { ... }
// Function with arguments: func functionName(arg1: Type1, arg2: Type2, ...) -> ReturnType { ... }
// Function with named arguments: func functionName(arg1Name arg1: Type1, arg2Name arg2: Type2, ...) -> ReturnType { ... }
```

## [cotrTryCatch](/snippets/cotrtrycatch)

Swift Try Catch

```swift
do {
  ${1:// Your code here}
} catch ${2:exception} {
  ${3:// Your code here}
}
```

## [cotrTypesNull](/snippets/cotrtypesnull)

Swift Null Type

```swift
nil
```

## [cotrVarNumAlt](/snippets/cotrvarnumalt)

Swift Create Float Variable

```swift
var ${1:myFloat} = ${2:0.0}f;
```

## [cotrVarList](/snippets/cotrvarlist)

Swift Create List Variable

```swift
var ${1:myArray} = [${2:'item1'}, ${3:'item2'}, ${4:'item3'}];
```

## [cotrThrow](/snippets/cotrthrow)

Swift Throw Exception

```swift
throw ${1:Error('Your message here')};
```

## [cotrTypeCompare](/snippets/cotrtypecompare)

Swift Type Comparison

```swift
// Check if two variables have the same type:
if type(of: ${1:variable1}) == type(of: ${2:variable2}) {
  // Your code here
}
```

## [cotrTypesNumAlt](/snippets/cotrtypesnumalt)

Swift Float Type

```swift
Float
```

## [cotrNow](/snippets/cotrnow)

Swift Date Now

```swift
Date()
```

## [cotrVarTyped](/snippets/cotrvartyped)

Swift Create Typed Variable

```swift
var ${1:myVar}: ${2:Type} = $3
```

## [cotrVarStringMulti](/snippets/cotrvarstringmulti)

Swift Create Multi-Line String Variable

```swift
var ${1:myString} = """
${2:Line 1}
${3:Line 2}
${4:Line 3}
""";
```

## [cotrVarStatic](/snippets/cotrvarstatic)

Swift Static Variable

```swift
static ${2:var} ${3:myStaticVar} = ${4:value};

// Access the static variable
// MyClass.${3:myStaticVar}
```

## [cotrSwitch](/snippets/cotrswitch)

Swift Switch Statement

```swift
switch ${1:variable} {
  case ${2:value1}:
    ${3:// Your code here}
    break
  case ${4:value2}:
    ${5:// Your code here}
    break
  default:
    ${6:// Your code here}
}
```

## [cotrEnum](/snippets/cotrenum)

Swift Enum

```swift
enum ${1:MyEnum} {
  ${2:value1},
  ${3:value2},
  // Add more values here
}
```

## [cotrTypesBool](/snippets/cotrtypesbool)

Swift Boolean Type

```swift
Bool
```

## [cotrVarSyntax](/snippets/cotrvarsyntax)

Variable Declaration Syntax

```swift
// Swift Variable Declaration Syntax:

// - var: (Scope: Block or Global)
//   - Declares a mutable variable.
//   - Use for variables that need to be reassigned.

// - let: (Scope: Block or Global)
//   - Declares an immutable variable.
//   - Preferred for values that should remain constant.

// Note:
// - Use 'let' by default for values that won't change.
// - Use 'var' only when you need to reassign the variable.
```

## [cotrVarInt](/snippets/cotrvarint)

Swift Create Integer Variable

```swift
var ${1:myInt} = ${2:0};
```

## [cotrFuncAnon](/snippets/cotrfuncanon)

Swift Anonymous Function

```swift
{ (${1:parameters}) -> ${2:ReturnType} in
    ${3:// Your code here}
}
```

## [cotrInterpolate](/snippets/cotrinterpolate)

Swift Interpolate String

```swift
"\(${1:variable})"
```

## [cotrConcat](/snippets/cotrconcat)

Swift Concatenate Strings

```swift
"${1:string1}" + "${2:string2}"
```

## [cotrVarBool](/snippets/cotrvarbool)

Swift Create Boolean Variable

```swift
var ${1:myBool} = ${2:true};
```


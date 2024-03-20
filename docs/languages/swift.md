## Swift Switch Statement

### [cotrSwitch](/snippets/cotrSwitch)

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

## Swift Multi-Line Comment

### [cotrCommentMulti](/snippets/cotrCommentMulti)

```swift
/*
 * ${1:Your comment here}
 */
```

## Swift List Type

### [cotrTypesList](/snippets/cotrTypesList)

```swift
Array<${1:Type}>
```

## Swift Dynamic Type

### [cotrTypesAny](/snippets/cotrTypesAny)

```swift
Any
```

## Swift Create Boolean Variable

### [cotrVarBool](/snippets/cotrVarBool)

```swift
var ${1:myBool} = ${2:true};
```

## Swift For...In Loop

### [cotrForInLoop](/snippets/cotrForInLoop)

```swift
for ${1:item} in ${2:iterable} {
  ${3:// Your code here}
}
```

## Swift Create List Variable

### [cotrVarList](/snippets/cotrVarList)

```swift
var ${1:myArray} = [${2:'item1'}, ${3:'item2'}, ${4:'item3'}];
```

## Swift Function Named Args

### [cotrFuncArgsNamed](/snippets/cotrFuncArgsNamed)

```swift
func ${2:myFunction}(${3:arg1Name} ${3:arg1}: ${4:Type1}, ${5:arg2Name} ${5:arg2}: ${6:Type2}) -> ${1:Void} {
    ${7:// Your code here}
}
```

## Swift Types

### [cotrTypes](/snippets/cotrTypes)

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

## Swift Double Type

### [cotrTypesNum](/snippets/cotrTypesNum)

```swift
Double
```

## Swift Date Type

### [cotrTypesDate](/snippets/cotrTypesDate)

```swift
Date
```

## Swift Concatenate Strings

### [cotrConcat](/snippets/cotrConcat)

```swift
"${1:string1}" + "${2:string2}"
```

## Swift Static Variable

### [cotrVarStatic](/snippets/cotrVarStatic)

```swift
static ${2:var} ${3:myStaticVar} = ${4:value};

// Access the static variable
// MyClass.${3:myStaticVar}
```

## Swift Generate Dictionary

### [cotrGenMap](/snippets/cotrGenMap)

```swift
var ${1:myDictionary} = 
Dictionary(uniqueKeysWithValues: zip([${2:'key1'}, ${3:'key
2'}], [${4:'value1'}, ${5:'value2'}]));
```

## Swift Entry Point

### [cotrEntry](/snippets/cotrEntry)

```swift
// Swift Entry Point
// To run this program, use: `swift filename.swift`

import Foundation

print("Hello, World!")
```

## Swift Comment

### [cotrComment](/snippets/cotrComment)

```swift
// ${1:Your comment here}
```

## Swift Anonymous Function

### [cotrFuncAnon](/snippets/cotrFuncAnon)

```swift
{ (${1:parameters}) -> ${2:ReturnType} in
    ${3:// Your code here}
}
```

## Swift Info

### [cotrInfo](/snippets/cotrInfo)

```swift
Typing: Statically typed
Paradigm: Multi-paradigm: object-oriented, functional, imperative, block-structured
Compilation: Compiled
Concurrency: Supports multi-threading and concurrent programming with Grand Central Dispatch (GCD) and async/await
```

## Swift Type Comparison

### [cotrTypeCompare](/snippets/cotrTypeCompare)

```swift
// Check if two variables have the same type:
if type(of: ${1:variable1}) == type(of: ${2:variable2}) {
  // Your code here
}
```

## Swift Create Multi-Line String Variable

### [cotrVarStringMulti](/snippets/cotrVarStringMulti)

```swift
var ${1:myString} = """
${2:Line 1}
${3:Line 2}
${4:Line 3}
""";
```

## Swift For Loop

### [cotrForLoop](/snippets/cotrForLoop)

```swift
for ${1:i} in ${2:0..<10} {
  // Your code here
}
```

## Swift Create Integer Variable

### [cotrVarInt](/snippets/cotrVarInt)

```swift
var ${1:myInt} = ${2:0};
```

## Swift Create Constant

### [cotrConst](/snippets/cotrConst)

```swift
let ${1:myConst} = $2;
```

## Swift Map Type

### [cotrTypesMap](/snippets/cotrTypesMap)

```swift
Dictionary<${1:KeyType}, ${2:ValueType}>
```

## Swift Character Type

### [cotrTypesChar](/snippets/cotrTypesChar)

```swift
Character
```

## Swift Create Float Variable

### [cotrVarNumAlt](/snippets/cotrVarNumAlt)

```swift
var ${1:myFloat} = ${2:0.0}f;
```

## Swift Ternary Operator

### [cotrTernary](/snippets/cotrTernary)

```swift
${1:condition} ? ${2:trueValue} : ${3:falseValue}
```

## Swift Project Structure (High-Level)

### [cotrStructure](/snippets/cotrStructure)

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

## Swift String Type

### [cotrTypesString](/snippets/cotrTypesString)

```swift
String
```

## Swift Class

### [cotrClass](/snippets/cotrClass)

```swift
class ${1:MyClass} {
  ${2:// Your code here}
}
```

## Swift If Statement

### [cotrIf](/snippets/cotrIf)

```swift
if ${1:condition} {
  ${2:// Your code here}
}
```

## Swift Not Equal To

### [cotrNotEqual](/snippets/cotrNotEqual)

```swift
!=
```

## Variable Declaration Syntax

### [cotrVarSyntax](/snippets/cotrVarSyntax)

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

## Swift While Loop

### [cotrWhileLoop](/snippets/cotrWhileLoop)

```swift
while ${1:condition} {
  ${2:// Your code here}
}
```

## Swift Function Args

### [cotrFuncArgs](/snippets/cotrFuncArgs)

```swift
// In Swift, functions can have arguments with default values.
func ${2:myFunction}(${3:arg1}: ${4:Type1}, ${5:arg2}: ${6:Type2} = ${7:defaultValue}) -> ${1:Void} {
    ${8:// Your code here}
}
```

## Swift Boolean Operators

### [cotrOperatorsBool](/snippets/cotrOperatorsBool)

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

## Swift Print

### [cotrPrint](/snippets/cotrPrint)

```swift
print(${1:"Your message here"})
```

## Swift Create Dictionary Variable

### [cotrVarMap](/snippets/cotrVarMap)

```swift
var ${1:myDictionary} = [
  ${2:'key1'}: ${3:'value1'},
  ${4:'key2'}: ${5:'value2'}
];
```

## Swift Closure

### [cotrLambda](/snippets/cotrLambda)

```swift
let ${1:myClosure} = { (${2:parameters}) -> ${3:ReturnType} in
  ${4:return expression}
}
```

## Swift Throw Exception

### [cotrThrow](/snippets/cotrThrow)

```swift
throw ${1:Error('Your message here')};
```

## Swift If Else Statement

### [cotrIfElse](/snippets/cotrIfElse)

```swift
if ${1:condition} {
  ${2:// Your code here}
} else if ${3:condition} {
  ${4:// Your code here}
} else {
  ${5:// Your code here}
}
```

## Swift Type Conversion

### [cotrTypeConvert](/snippets/cotrTypeConvert)

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

## Swift Float Type

### [cotrTypesNumAlt](/snippets/cotrTypesNumAlt)

```swift
Float
```

## Swift Create String Variable

### [cotrVarString](/snippets/cotrVarString)

```swift
var ${1:myString} = ${2:'Your string here'};
```

## Swift Create Double Variable

### [cotrVarNum](/snippets/cotrVarNum)

```swift
var ${1:myDouble} = ${2:0.0};
```

## Swift Generate Array

### [cotrGenList](/snippets/cotrGenList)

```swift
var ${1:myArray} = Array(repeating: ${2:'item'}, count: ${3:5});
```

## Swift Print Multi

### [cotrPrintMulti](/snippets/cotrPrintMulti)

```swift
print("""
${1:Line 1}
${2:Line 2}
${3:Line 3}
""")
```

## Swift Equal To

### [cotrEqual](/snippets/cotrEqual)

```swift
==
```

## Swift Boolean False

### [cotrTypesBoolFalse](/snippets/cotrTypesBoolFalse)

```swift
false
```

## Swift Interpolate String

### [cotrInterpolate](/snippets/cotrInterpolate)

```swift
"\(${1:variable})"
```

## Swift Integer Type

### [cotrTypesInt](/snippets/cotrTypesInt)

```swift
Int
```

## Swift Create Typed Variable

### [cotrVarTyped](/snippets/cotrVarTyped)

```swift
var ${1:myVar}: ${2:Type} = $3
```

## Swift Function

### [cotrFunc](/snippets/cotrFunc)

```swift
func ${2:myFunction}(${3:parameters}) -> ${1:Void} {
    ${4:// Your code here}
}
```

## Swift Enum

### [cotrEnum](/snippets/cotrEnum)

```swift
enum ${1:MyEnum} {
  ${2:value1},
  ${3:value2},
  // Add more values here
}
```

## Swift Create Variable

### [cotrVar](/snippets/cotrVar)

```swift
var ${1:myVar} = $2;
```

## Swift Create Date Variable

### [cotrVarDate](/snippets/cotrVarDate)

```swift
let ${1:myDate} = Date()
```

## Swift Mathematical Operators

### [cotrOperators](/snippets/cotrOperators)

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

## Swift Type Check

### [cotrTypeCheck](/snippets/cotrTypeCheck)

```swift
type(of: ${1:variable})
```

## Swift Boolean Type

### [cotrTypesBool](/snippets/cotrTypesBool)

```swift
Bool
```

## Swift Null Type

### [cotrTypesNull](/snippets/cotrTypesNull)

```swift
nil
```

## Swift Try Catch

### [cotrTryCatch](/snippets/cotrTryCatch)

```swift
do {
  ${1:// Your code here}
} catch ${2:exception} {
  ${3:// Your code here}
}
```

## Swift Boolean True

### [cotrTypesBoolTrue](/snippets/cotrTypesBoolTrue)

```swift
true
```

## Swift Date Now

### [cotrNow](/snippets/cotrNow)

```swift
Date()
```

## Swift Create Nullable Variable

### [cotrVarNullable](/snippets/cotrVarNullable)

```swift
var ${1:myVar}: ${2:Type}? = $3
```

## Swift Function Syntax

### [cotrFuncSyntax](/snippets/cotrFuncSyntax)

```swift
// Swift Function Syntax
// Basic function: func functionName(parameters) -> ReturnType { ... }
// Function with arguments: func functionName(arg1: Type1, arg2: Type2, ...) -> ReturnType { ... }
// Function with named arguments: func functionName(arg1Name arg1: Type1, arg2Name arg2: Type2, ...) -> ReturnType { ... }
```


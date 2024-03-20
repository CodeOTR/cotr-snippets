## Swift Create Integer Variable

### {[cotrVarInt integer int variableInt intVariable createInt]}

```
var ${1:myInt} = ${2:0};
```

## Swift Create Constant

### {[cotrConst constant]}

```
let ${1:myConst} = $2;
```

## Swift Print Multi

### {[cotrPrintMulti printMultiLine]}

```
print("""
${1:Line 1}
${2:Line 2}
${3:Line 3}
""")
```

## Swift Anonymous Function

### {[cotrFuncAnon anonFunc anonymous closure lambda functionLiteral cotrFuncLambda]}

```
{ (${1:parameters}) -> ${2:ReturnType} in
    ${3:// Your code here}
}
```

## Swift Dynamic Type

### {[cotrTypesAny dynamicType anyType typesDynamic typesAny]}

```
Any
```

## Swift Create List Variable

### {[cotrVarList createList listVariable arrayVariable variableList variableArray list array]}

```
var ${1:myArray} = [${2:'item1'}, ${3:'item2'}, ${4:'item3'}];
```

## Swift Throw Exception

### {[cotrThrow throwError throwException]}

```
throw ${1:Error('Your message here')};
```

## Swift Ternary Operator

### {[cotrTernary ternary conditionalOperator]}

```
${1:condition} ? ${2:trueValue} : ${3:falseValue}
```

## Swift Mathematical Operators

### {[cotrOperators operators mathDocs]}

```
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

## Swift String Type

### {[cotrTypesString stringType typeString textType typeText]}

```
String
```

## Swift Create Dictionary Variable

### {[cotrVarMap createMap createStruct variableMap variableStruct mapVariable structVariable dictVariable variableDict createDict]}

```
var ${1:myDictionary} = [
  ${2:'key1'}: ${3:'value1'},
  ${4:'key2'}: ${5:'value2'}
];
```

## Swift Enum

### {[cotrEnum enum]}

```
enum ${1:MyEnum} {
  ${2:value1},
  ${3:value2},
  // Add more values here
}
```

## Swift Generate Dictionary

### {[cotrGenMap generateMap]}

```
var ${1:myDictionary} = 
Dictionary(uniqueKeysWithValues: zip([${2:'key1'}, ${3:'key
2'}], [${4:'value1'}, ${5:'value2'}]));
```

## Swift Print

### {[cotrPrint print log systemOut write consoleLog]}

```
print(${1:"Your message here"})
```

## Swift Switch Statement

### {[cotrSwitch switch switchStatement select case]}

```
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

## Swift List Type

### {[cotrTypesList listType typeList typeArray]}

```
Array<${1:Type}>
```

## Swift Create Boolean Variable

### {[cotrVarBool variableBool bool boolVariable createBool]}

```
var ${1:myBool} = ${2:true};
```

## Swift Types

### {[cotrTypes types allTypes languageTypes builtInTypes dataTypes]}

```
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

## Swift Create Nullable Variable

### {[cotrVarNullable variableNullable nullableVariable]}

```
var ${1:myVar}: ${2:Type}? = $3
```

## Swift Create Double Variable

### {[cotrVarNum number float floatVariable variableFloat variableNumber numberVariable]}

```
var ${1:myDouble} = ${2:0.0};
```

## Swift Generate Array

### {[cotrGenList generateList listGen]}

```
var ${1:myArray} = Array(repeating: ${2:'item'}, count: ${3:5});
```

## Swift Integer Type

### {[cotrTypesInt intType typeInt]}

```
Int
```

## Swift Create Variable

### {[cotrVar variable createVariable newVariable]}

```
var ${1:myVar} = $2;
```

## Swift This Type Check

### {[thisTypeCheck thisType getThisType]}

```
type(of: $CLIPBOARD)
```

## Swift For Loop

### {[cotrForLoop forLoop forX]}

```
for ${1:i} in ${2:0..<10} {
  // Your code here
}
```

## Swift For...In Loop

### {[cotrForInLoop forIn]}

```
for ${1:item} in ${2:iterable} {
  ${3:// Your code here}
}
```

## Swift Comment

### {[cotrComment comment note]}

```
// ${1:Your comment here}
```

## Swift If Statement

### {[cotrIf ifStatement]}

```
if ${1:condition} {
  ${2:// Your code here}
}
```

## Swift Entry Point

### {[cotrEntry entry start startingPoint]}

```
// Swift Entry Point
// To run this program, use: `swift filename.swift`

import Foundation

print("Hello, World!")
```

## Swift Boolean Operators

### {[cotrOperatorsBool booleanOperators logic]}

```
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

## Swift Create Multi-Line String Variable

### {[cotrVarStringMulti multiLineString varStringMulti stringVariableMulti createMultiLineString]}

```
var ${1:myString} = """
${2:Line 1}
${3:Line 2}
${4:Line 3}
""";
```

## Swift Type Check

### {[cotrTypeCheck checkType getType typeOf]}

```
type(of: ${1:variable})
```

## Swift Function

### {[cotrFunc function subprogram procedure subroutine method]}

```
func ${2:myFunction}(${3:parameters}) -> ${1:Void} {
    ${4:// Your code here}
}
```

## Swift Null Type

### {[cotrTypesNull nullType typesNull]}

```
nil
```

## Swift Interpolate String

### {[cotrInterpolate interpolate variableExpansion variableSubstitution stringPlaceholders stringInterpolation]}

```
"\(${1:variable})"
```

## Swift Concatenate Strings

### {[cotrConcat concatenate combine]}

```
"${1:string1}" + "${2:string2}"
```

## Swift Try Catch

### {[cotrTryCatch tryCatch]}

```
do {
  ${1:// Your code here}
} catch ${2:exception} {
  ${3:// Your code here}
}
```

## Swift If Else Statement

### {[cotrIfElse ifElseStatement]}

```
if ${1:condition} {
  ${2:// Your code here}
} else if ${3:condition} {
  ${4:// Your code here}
} else {
  ${5:// Your code here}
}
```

## Swift Equal To

### {[cotrEqual equal]}

```
==
```

## Swift Type Comparison

### {[cotrTypeCompare compareTypes]}

```
// Check if two variables have the same type:
if type(of: ${1:variable1}) == type(of: ${2:variable2}) {
  // Your code here
}
```

## Swift Create Typed Variable

### {[cotrVarTyped typedVariable variableWithType]}

```
var ${1:myVar}: ${2:Type} = $3
```

## Swift Function Args

### {[cotrFuncArgs functionArgs functionWithArgs]}

```
// In Swift, functions can have arguments with default values.
func ${2:myFunction}(${3:arg1}: ${4:Type1}, ${5:arg2}: ${6:Type2} = ${7:defaultValue}) -> ${1:Void} {
    ${8:// Your code here}
}
```

## Swift Closure

### {[cotrLambda cotrClosure cotrFuncLambda cortFuncArrow]}

```
let ${1:myClosure} = { (${2:parameters}) -> ${3:ReturnType} in
  ${4:return expression}
}
```

## Swift Float Type

### {[cotrTypesNumAlt floatType typeFloat]}

```
Float
```

## Swift Date Type

### {[cotrTypesDate dateType typeDate timeType timestampType dateTimeType]}

```
Date
```

## Swift Character Type

### {[cotrTypesChar]}

```
Character
```

## Swift Create String Variable

### {[cotrVarString string stringVariable variableString text createString createText]}

```
var ${1:myString} = ${2:'Your string here'};
```

## Swift Create Float Variable

### {[cotrVarNumAlt float variableFloat floatVariable]}

```
var ${1:myFloat} = ${2:0.0}f;
```

## Swift Static Variable

### {[cotrVarStatic staticVariable associatedConstant]}

```
static ${2:var} ${3:myStaticVar} = ${4:value};

// Access the static variable
// MyClass.${3:myStaticVar}
```

## Swift Info

### {[cotrInfo languageInfo info]}

```
Typing: Statically typed
Paradigm: Multi-paradigm: object-oriented, functional, imperative, block-structured
Compilation: Compiled
Concurrency: Supports multi-threading and concurrent programming with Grand Central Dispatch (GCD) and async/await
```

## Swift Project Structure (High-Level)

### {[cotrStructure structure architecture]}

```
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

## Swift Boolean False

### {[cotrTypesBoolFalse false off booleanFalse]}

```
false
```

## Swift While Loop

### {[cotrWhileLoop whileLoop whileTrue]}

```
while ${1:condition} {
  ${2:// Your code here}
}
```

## Swift Function Named Args

### {[cotrFuncArgsNamed functionNamedArgs]}

```
func ${2:myFunction}(${3:arg1Name} ${3:arg1}: ${4:Type1}, ${5:arg2Name} ${5:arg2}: ${6:Type2}) -> ${1:Void} {
    ${7:// Your code here}
}
```

## Swift Function Syntax

### {[cotrFuncSyntax functionSyntax functionDocs]}

```
// Swift Function Syntax
// Basic function: func functionName(parameters) -> ReturnType { ... }
// Function with arguments: func functionName(arg1: Type1, arg2: Type2, ...) -> ReturnType { ... }
// Function with named arguments: func functionName(arg1Name arg1: Type1, arg2Name arg2: Type2, ...) -> ReturnType { ... }
```

## Swift Class

### {[cotrClass class objectTemplate]}

```
class ${1:MyClass} {
  ${2:// Your code here}
}
```

## Swift Type Conversion

### {[cotrTypeConvert cotrTypeCast cotrConvert cotrCast]}

```
// Swift Type Conversion:

// Swift emphasizes explicit type conversions for safety.

// Explicit conversions:
// - variable as? TargetType  // Safe cast (returns nil if conversion fails)
// - TargetType(variable)  // Forced cast (can crash if conversion fails)

// Note:
// - Use safe casts (as?) whenever possible.
// - Only use forced casts (TargetType()) when you are certain the conversion will succeed.
```

## Swift Boolean Type

### {[cotrTypesBool booleanType typeBool]}

```
Bool
```

## Swift Create Date Variable

### {[cotrVarDate dateVariable variableDate date]}

```
let ${1:myDate} = Date()
```

## Swift Not Equal To

### {[cotrNotEqual notEqual doesNotEqual]}

```
!=
```

## Swift Boolean True

### {[cotrTypesBoolTrue true booleanTrue on]}

```
true
```

## Swift Date Now

### {[cotrNow now currentTime dateNow]}

```
Date()
```

## Variable Declaration Syntax

### {[cotrVarSyntax variableSyntax howToVariables letSyntax]}

```
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

## Swift Multi-Line Comment

### {[cotrCommentMulti multiLineComment commentMultiLine blockComment]}

```
/*
 * ${1:Your comment here}
 */
```

## Swift Double Type

### {[cotrTypesNum numberType typeNumber doubleType typeDouble]}

```
Double
```

## Swift Map Type

### {[cotrTypesMap mapType typeMap hashmapType structType dictType typeDict typeScruct]}

```
Dictionary<${1:KeyType}, ${2:ValueType}>
```


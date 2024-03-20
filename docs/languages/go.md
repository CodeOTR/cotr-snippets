---
title: Go
description: Go snippets on the rocks.
---

## [cotrVarBool](/snippets/cotrvarbool)

Go Create Boolean Variable

```go
var ${1:variableName} bool = ${2:variableValue}
```

## [cotrGenList](/snippets/cotrgenlist)

Go Generate Array

```go
var ${1:arrayName} = []${2:arrayType}{
    ${3:value1},
    ${4:value2}
}
```

## [cotrTernary](/snippets/cotrternary)

Go Ternary Operator

```go
${1:condition} ? ${2:trueValue} : ${3:falseValue}
```

## [cotrPrintMulti](/snippets/cotrprintmulti)

Go Print Multi

```go
fmt.Println(`
${1:Line 1}
${2:Line 2}
${3:Line 3}
`)
```

## [cotrEntry](/snippets/cotrentry)

Go Entry Point

```go
// Go Entry Point
// To run this program, use: `go run filename.go`

package main

import "fmt"

func main() {
    fmt.Println("Hello, World!")
}
```

## [cotrTypesNum](/snippets/cotrtypesnum)

Go Float Type

```go
float64
```

## [cotrInterpolate](/snippets/cotrinterpolate)

Go Interpolate String

```go
`${1:string}`
```

## [cotrVarList](/snippets/cotrvarlist)

Go Create List Variable

```go
var ${1:variableName} = []${2:variableType}{
    ${3:value1},
    ${4:value2}
}
```

## [cotrConst](/snippets/cotrconst)

Go Create Constant

```go
const ${1:variableName} ${2:variableType} = ${3:variableValue}
```

## [cotrForRangeLoop](/snippets/cotrforrangeloop)

Go For...Range Loop

```go
for ${1:index}, ${2:value} := range ${3:iterable} {
    ${4:// Your code here}
}
```

## [cotrIfElse](/snippets/cotrifelse)

Go If Else Statement

```go
if ${1:condition} {
  ${2:// Your code here}
} else if ${3:condition} {
  ${4:// Your code here}
} else {
  ${5:// Your code here}
}
```

## [cotrTypeCompare](/snippets/cotrtypecompare)

Go Type Comparison

```go
// Check if two variables have the same type:
if reflect.TypeOf(${1:variable1}) == reflect.TypeOf(${2:variable2}) {
  // Your code here
}
```

## [cotrTypes](/snippets/cotrtypes)

Go Types

```go
$BLOCK_COMMENT_START
Go is a statically typed language.

Types in Go include:
- int, int8, int16, int32, int64: Signed integers
- uint, uint8, uint16, uint32, uint64: Unsigned integers
- float32, float64: Floating-point numbers
- complex64, complex128: Complex numbers
- byte: Alias for uint8
- rune: Alias for int32 (represents a Unicode code point)
- string: String
- bool: Boolean
- [10]int: Array of integers with fixed size 10
- []int: Slice of integers
- map[K]V: Map with key type K and value type V
- struct { Field1 int; Field2 string; }: Custom data structure with named fields
- interface{}: Interface type representing any type
- chan int: Channel for sending and receiving integers
- func(int) string: Function type taking an int and returning a string
- error: Interface type for error handling
$BLOCK_COMMENT_END
```

## [cotrTypesDateNow](/snippets/cotrtypesdatenow)

Go Date Now

```go
time.Now()
```

## [cotrConcat](/snippets/cotrconcat)

Go Concatenate Strings

```go
${1:string1} + ${2:string2}
```

## [cotrFuncArgs](/snippets/cotrfuncargs)

Go Function Args

```go
// In Go, functions do not support default argument values in definitions.
func ${2:MyFunction}(${3:arg1} ${4:type1}, ${5:arg2} ${6:type2}) ${1:void} {
    ${7:// Your code here}
}
```

## [cotrTypesInt](/snippets/cotrtypesint)

Go Integer Type

```go
int
```

## [cotrTypesList](/snippets/cotrtypeslist)

Go List Type

```go
[]${1:type}
```

## [cotrTypesDynamic](/snippets/cotrtypesdynamic)

Go Dynamic Type

```go
interface{}
```

## [cotrEnum](/snippets/cotrenum)

Go Iota

```go
const (
  ${1:variable1} = iota
  ${2:variable2}
  ${3:variable3}
  // Add more variables here
)
```

## [cotrTypeCheck](/snippets/cotrtypecheck)

Go Type Check

```go
fmt.Printf("%T", ${1:variable})
```

## [cotrVar](/snippets/cotrvar)

Go Create Variable

```go
var ${1:variableName} ${2:variableType} = ${3:variableValue}
```

## [cotrVarDate](/snippets/cotrvardate)

Go Create Date Variable

```go
// import "time"
var ${1:myDate} = time.Date(${2:year}, time.${3:Month}, ${4:day}, ${5:0}, ${6:0}, ${7:0}, ${8:0}, time.UTC)
```

## [cotrWhileLoop](/snippets/cotrwhileloop)

Go While Loop

```go
for ${1:condition} {
    ${2:// Your code here}
}
```

## [cotrFuncSyntax](/snippets/cotrfuncsyntax)

Go Function Syntax

```go
// Go Function Syntax
// Basic function: func FunctionName(parameters) returnType { ... }
// Function with arguments: func FunctionName(arg1 type1, arg2 type2, ...) returnType { ... }
// Note: Go does not support named arguments in function definitions.
```

## [cotrVarInt](/snippets/cotrvarint)

Go Create Integer Variable

```go
var ${1:variableName} int = ${2:variableValue}
```

## [cotrPrint](/snippets/cotrprint)

Go Print

```go
fmt.Println(${1:message})
```

## [cotrFuncAnon](/snippets/cotrfuncanon)

Go Anonymous Function

```go
var ${1:myFunc} = func(${2:parameters}) ${3:returnType} {
    ${4:// Your code here}
    return ${5:value}
}

// Usage
${1:myFunc}(${6:arguments})
```

## [cotrTypeConvert](/snippets/cotrtypeconvert)

Go Type Conversion

```go
// Go Type Conversion:

// Explicit conversions (using type assertion):
// - targetType(variable)  // Type assertion (can panic if conversion fails)

// Conversion functions:
// - strconv.Itoa(int)  // Converts int to string
// - strconv.Atoi(string)  // Converts string to int
// - ... (Various conversion functions in strconv and other packages)

// Note:
// - Be cautious with type assertions, as they can lead to panics if the conversion is not valid.
```

## [cotrTypesString](/snippets/cotrtypesstring)

Go String Type

```go
string
```

## [cotrTypesMap](/snippets/cotrtypesmap)

Go Map Type

```go
map[${1:keyType}]${2:valueType}
```

## [cotrTypesNull](/snippets/cotrtypesnull)

Go Null Type

```go
nil
```

## [cotrVarNullable](/snippets/cotrvarnullable)

Go Create Nullable Variable

```go
var ${1:myVar} *${2:Type} = $3
```

## [cotrTypesBoolFalse](/snippets/cotrtypesboolfalse)

Go Boolean False

```go
false
```

## [cotrStructure](/snippets/cotrstructure)

Go Project Structure (High-Level)

```go
// Recommended High-Level Go Project Structure:

// - cmd/
//   - Contains the main applications for the project.
//   - Each application has its own subdirectory.
//   - For example, if your project has two main applications, 'webserver' and 'datasync',
//     you might have cmd/webserver/ and cmd/datasync/ directories.

// - pkg/
//   - Contains library code that's ok to use by external applications.
//   - Other projects will import these libraries.

// - internal/
//   - Contains private application and library code.
//   - The code here is not intended to be used by other applications.

// - api/
//   - Contains the API definitions for the project.
//   - For example, OpenAPI/Swagger specs, Protocol Buffers files.

// - web/
//   - Contains web application specific components: static files, templates, etc.

// - scripts/
//   - Contains scripts that perform various build, install, analysis, etc operations.

// - configs/
//   - Contains configuration files.

// - deployments/
//   - Contains configuration and scripts for deploying the application.

// - test/
//   - Contains additional external test apps and test data.
//   - It might also include test utilities.

// Note:
// - This structure is particularly common in larger projects or projects that produce
//   multiple executables.
// - Smaller projects might have a simpler structure.
```

## [cotrVarMultiString](/snippets/cotrvarmultistring)

Go Create Multi-line String Variable

```go
var ${1:variableName} = `
${2:Line 1}
${3:Line 2}
${4:Line 3}
`
```

## [cotrSwitch](/snippets/cotrswitch)

Go Switch Statement

```go
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

## [cotrFuncArgsNamed](/snippets/cotrfuncargsnamed)

Go Function Named Args

```go
// Go does not support named arguments in function definitions.
```

## [cotrOperatorsBool](/snippets/cotroperatorsbool)

Go Boolean Operators

```go
// Go Boolean Operators:
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

## [cotrVarTyped](/snippets/cotrvartyped)

Go Create Typed Variable

```go
var ${1:myVar} ${2:Type} = $3
```

## [cotrVarString](/snippets/cotrvarstring)

Go Create String Variable

```go
var ${1:variableName} string = ${2:variableValue}
```

## [cotrInfo](/snippets/cotrinfo)

Go Info

```go
Typing: Statically typed
Paradigm: Multi-paradigm: procedural, concurrent
Compilation: Compiled
Concurrency: Built-in support for concurrency with goroutines and channels
```

## [cotrGenMap](/snippets/cotrgenmap)

Go Generate Map

```go
var ${1:mapName} = make(map[${2:keyType}]${3:valueType})
${1:mapName}[${4:key1}] = ${5:value1}
${1:mapName}[${6:key2}] = ${7:value2}
```

## [cotrThrow](/snippets/cotrthrow)

Go Throw Exception

```go
panic('Your message here')
```

## [cotrNotEqual](/snippets/cotrnotequal)

Go Not Equal To

```go
!=
```

## [cotrTypesBool](/snippets/cotrtypesbool)

Go Boolean Type

```go
bool
```

## [cotrTypesDate](/snippets/cotrtypesdate)

Go Date Type

```go
time.Time
```

## [cotrForLoop](/snippets/cotrforloop)

Go For Loop

```go
for ${1:i} := ${2:0}; $1 < ${3:10}; $1++ {
    ${4:// Your code here}
}
```

## [cotrCommentMulti](/snippets/cotrcommentmulti)

Go Multi-line Comment

```go
/*
 * ${1:comment}
 */
```

## [cotrTryCatch](/snippets/cotrtrycatch)

Go Try Catch

```go
defer func() {
  if r := recover(); r != nil {
    ${1:// Your code here}
  }
}()
${2:// Your code here}
```

## [cotrOperators](/snippets/cotroperators)

Go Mathematical Operators

```go
// Go Mathematical Operators:
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

## [cotrEqual](/snippets/cotrequal)

Go Equal To

```go
==
```

## [cotrVarSyntax](/snippets/cotrvarsyntax)

Go Variable Declaration Syntax

```go
// Go Variable Declaration Syntax:

// - var: (Scope: Block or Package)
//   - Explicitly declare the variable's type.
//   - Can be declared without initialization (zero value is assigned).

// - :=: (Scope: Block)
//   - Short variable declaration and type inference.
//   - Requires initialization.

// - const: (Scope: Package)
//   - Cannot be reassigned or redeclared.
//   - Use for values that should remain constant.

// Note:
// - Use 'var' for package-level variables or when explicit type declaration is desired.
// - Use ':=' for most variable declarations within blocks.
// - Use 'const' for values that are known at compile time.
```

## [cotrClass](/snippets/cotrclass)

Go Struct

```go
type ${1:MyStruct} struct {
  ${2:field1} ${3:type1}
  ${4:field2} ${5:type2}
  // Add more fields here
}
```

## [cotrVarMap](/snippets/cotrvarmap)

Go Create Map Variable

```go
var ${1:mapName} = map[${2:keyType}]${3:valueType}{
    ${4:key1}: ${5:value1},
    ${6:key2}: ${7:value2}
}
```

## [cotrFunc](/snippets/cotrfunc)

Go Function

```go
func ${2:MyFunction}(${3:parameters}) ${1:void} {
    ${4:// Your code here}
}
```

## [cotrIf](/snippets/cotrif)

Go If Statement

```go
if ${1:condition} {
  ${2:// Your code here}
}
```

## [cotrTypesBoolTrue](/snippets/cotrtypesbooltrue)

Go Boolean True

```go
true
```

## [cotrVarNum](/snippets/cotrvarnum)

Go Create Float Variable

```go
var ${1:variableName} float64 = ${2:variableValue}
```

## [cotrComment](/snippets/cotrcomment)

Go Comment

```go
// ${1:comment}
```


## Go Variable Declaration Syntax

### [cotrVarSyntax](/snippets/cotrVarSyntax)

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

## Go Project Structure (High-Level)

### [cotrStructure](/snippets/cotrStructure)

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

## Go Create Float Variable

### [cotrVarNum](/snippets/cotrVarNum)

```go
var ${1:variableName} float64 = ${2:variableValue}
```

## Go Ternary Operator

### [cotrTernary](/snippets/cotrTernary)

```go
${1:condition} ? ${2:trueValue} : ${3:falseValue}
```

## Go Date Type

### [cotrTypesDate](/snippets/cotrTypesDate)

```go
time.Time
```

## Go Date Now

### [cotrTypesDateNow](/snippets/cotrTypesDateNow)

```go
time.Now()
```

## Go For...Range Loop

### [cotrForRangeLoop](/snippets/cotrForRangeLoop)

```go
for ${1:index}, ${2:value} := range ${3:iterable} {
    ${4:// Your code here}
}
```

## Go Function Syntax

### [cotrFuncSyntax](/snippets/cotrFuncSyntax)

```go
// Go Function Syntax
// Basic function: func FunctionName(parameters) returnType { ... }
// Function with arguments: func FunctionName(arg1 type1, arg2 type2, ...) returnType { ... }
// Note: Go does not support named arguments in function definitions.
```

## Go Multi-line Comment

### [cotrCommentMulti](/snippets/cotrCommentMulti)

```go
/*
 * ${1:comment}
 */
```

## Go Struct

### [cotrClass](/snippets/cotrClass)

```go
type ${1:MyStruct} struct {
  ${2:field1} ${3:type1}
  ${4:field2} ${5:type2}
  // Add more fields here
}
```

## Go Types

### [cotrTypes](/snippets/cotrTypes)

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

## Go Float Type

### [cotrTypesNum](/snippets/cotrTypesNum)

```go
float64
```

## Go Function

### [cotrFunc](/snippets/cotrFunc)

```go
func ${2:MyFunction}(${3:parameters}) ${1:void} {
    ${4:// Your code here}
}
```

## Go Type Conversion

### [cotrTypeConvert](/snippets/cotrTypeConvert)

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

## Go Generate Array

### [cotrGenList](/snippets/cotrGenList)

```go
var ${1:arrayName} = []${2:arrayType}{
    ${3:value1},
    ${4:value2}
}
```

## Go Create Map Variable

### [cotrVarMap](/snippets/cotrVarMap)

```go
var ${1:mapName} = map[${2:keyType}]${3:valueType}{
    ${4:key1}: ${5:value1},
    ${6:key2}: ${7:value2}
}
```

## Go Create Constant

### [cotrConst](/snippets/cotrConst)

```go
const ${1:variableName} ${2:variableType} = ${3:variableValue}
```

## Go Print

### [cotrPrint](/snippets/cotrPrint)

```go
fmt.Println(${1:message})
```

## Go For Loop

### [cotrForLoop](/snippets/cotrForLoop)

```go
for ${1:i} := ${2:0}; $1 < ${3:10}; $1++ {
    ${4:// Your code here}
}
```

## Go Throw Exception

### [cotrThrow](/snippets/cotrThrow)

```go
panic('Your message here')
```

## Go Equal To

### [cotrEqual](/snippets/cotrEqual)

```go
==
```

## Go Create List Variable

### [cotrVarList](/snippets/cotrVarList)

```go
var ${1:variableName} = []${2:variableType}{
    ${3:value1},
    ${4:value2}
}
```

## Go Interpolate String

### [cotrInterpolate](/snippets/cotrInterpolate)

```go
`${1:string}`
```

## Go While Loop

### [cotrWhileLoop](/snippets/cotrWhileLoop)

```go
for ${1:condition} {
    ${2:// Your code here}
}
```

## Go Info

### [cotrInfo](/snippets/cotrInfo)

```go
Typing: Statically typed
Paradigm: Multi-paradigm: procedural, concurrent
Compilation: Compiled
Concurrency: Built-in support for concurrency with goroutines and channels
```

## Go Null Type

### [cotrTypesNull](/snippets/cotrTypesNull)

```go
nil
```

## Go Create Nullable Variable

### [cotrVarNullable](/snippets/cotrVarNullable)

```go
var ${1:myVar} *${2:Type} = $3
```

## Go Create Boolean Variable

### [cotrVarBool](/snippets/cotrVarBool)

```go
var ${1:variableName} bool = ${2:variableValue}
```

## Go Create Date Variable

### [cotrVarDate](/snippets/cotrVarDate)

```go
// import "time"
var ${1:myDate} = time.Date(${2:year}, time.${3:Month}, ${4:day}, ${5:0}, ${6:0}, ${7:0}, ${8:0}, time.UTC)
```

## Go Generate Map

### [cotrGenMap](/snippets/cotrGenMap)

```go
var ${1:mapName} = make(map[${2:keyType}]${3:valueType})
${1:mapName}[${4:key1}] = ${5:value1}
${1:mapName}[${6:key2}] = ${7:value2}
```

## Go Iota

### [cotrEnum](/snippets/cotrEnum)

```go
const (
  ${1:variable1} = iota
  ${2:variable2}
  ${3:variable3}
  // Add more variables here
)
```

## Go Boolean False

### [cotrTypesBoolFalse](/snippets/cotrTypesBoolFalse)

```go
false
```

## Go Map Type

### [cotrTypesMap](/snippets/cotrTypesMap)

```go
map[${1:keyType}]${2:valueType}
```

## Go Comment

### [cotrComment](/snippets/cotrComment)

```go
// ${1:comment}
```

## Go Switch Statement

### [cotrSwitch](/snippets/cotrSwitch)

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

## Go Type Check

### [cotrTypeCheck](/snippets/cotrTypeCheck)

```go
fmt.Printf("%T", ${1:variable})
```

## Go Create String Variable

### [cotrVarString](/snippets/cotrVarString)

```go
var ${1:variableName} string = ${2:variableValue}
```

## Go Print Multi

### [cotrPrintMulti](/snippets/cotrPrintMulti)

```go
fmt.Println(`
${1:Line 1}
${2:Line 2}
${3:Line 3}
`)
```

## Go If Statement

### [cotrIf](/snippets/cotrIf)

```go
if ${1:condition} {
  ${2:// Your code here}
}
```

## Go String Type

### [cotrTypesString](/snippets/cotrTypesString)

```go
string
```

## Go Boolean Type

### [cotrTypesBool](/snippets/cotrTypesBool)

```go
bool
```

## Go Not Equal To

### [cotrNotEqual](/snippets/cotrNotEqual)

```go
!=
```

## Go Boolean Operators

### [cotrOperatorsBool](/snippets/cotrOperatorsBool)

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

## Go Concatenate Strings

### [cotrConcat](/snippets/cotrConcat)

```go
${1:string1} + ${2:string2}
```

## Go Create Multi-line String Variable

### [cotrVarMultiString](/snippets/cotrVarMultiString)

```go
var ${1:variableName} = `
${2:Line 1}
${3:Line 2}
${4:Line 3}
`
```

## Go Try Catch

### [cotrTryCatch](/snippets/cotrTryCatch)

```go
defer func() {
  if r := recover(); r != nil {
    ${1:// Your code here}
  }
}()
${2:// Your code here}
```

## Go Mathematical Operators

### [cotrOperators](/snippets/cotrOperators)

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

## Go List Type

### [cotrTypesList](/snippets/cotrTypesList)

```go
[]${1:type}
```

## Go Dynamic Type

### [cotrTypesDynamic](/snippets/cotrTypesDynamic)

```go
interface{}
```

## Go Create Variable

### [cotrVar](/snippets/cotrVar)

```go
var ${1:variableName} ${2:variableType} = ${3:variableValue}
```

## Go Create Integer Variable

### [cotrVarInt](/snippets/cotrVarInt)

```go
var ${1:variableName} int = ${2:variableValue}
```

## Go Function Args

### [cotrFuncArgs](/snippets/cotrFuncArgs)

```go
// In Go, functions do not support default argument values in definitions.
func ${2:MyFunction}(${3:arg1} ${4:type1}, ${5:arg2} ${6:type2}) ${1:void} {
    ${7:// Your code here}
}
```

## Go Function Named Args

### [cotrFuncArgsNamed](/snippets/cotrFuncArgsNamed)

```go
// Go does not support named arguments in function definitions.
```

## Go Integer Type

### [cotrTypesInt](/snippets/cotrTypesInt)

```go
int
```

## Go Boolean True

### [cotrTypesBoolTrue](/snippets/cotrTypesBoolTrue)

```go
true
```

## Go Create Typed Variable

### [cotrVarTyped](/snippets/cotrVarTyped)

```go
var ${1:myVar} ${2:Type} = $3
```

## Go Anonymous Function

### [cotrFuncAnon](/snippets/cotrFuncAnon)

```go
var ${1:myFunc} = func(${2:parameters}) ${3:returnType} {
    ${4:// Your code here}
    return ${5:value}
}

// Usage
${1:myFunc}(${6:arguments})
```

## Go If Else Statement

### [cotrIfElse](/snippets/cotrIfElse)

```go
if ${1:condition} {
  ${2:// Your code here}
} else if ${3:condition} {
  ${4:// Your code here}
} else {
  ${5:// Your code here}
}
```

## Go Entry Point

### [cotrEntry](/snippets/cotrEntry)

```go
// Go Entry Point
// To run this program, use: `go run filename.go`

package main

import "fmt"

func main() {
    fmt.Println("Hello, World!")
}
```

## Go Type Comparison

### [cotrTypeCompare](/snippets/cotrTypeCompare)

```go
// Check if two variables have the same type:
if reflect.TypeOf(${1:variable1}) == reflect.TypeOf(${2:variable2}) {
  // Your code here
}
```


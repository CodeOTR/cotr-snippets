## Go Create Typed Variable

### {[cotrVarTyped typedVariable variableWithType]}

```
var ${1:myVar} ${2:Type} = $3
```

## Go Create String Variable

### {[cotrVarString string stringVariable variableString text createString createText]}

```
var ${1:variableName} string = ${2:variableValue}
```

## Go Throw Exception

### {[cotrThrow throwError throwException]}

```
panic('Your message here')
```

## Go Type Check

### {[cotrTypeCheck checkType getType typeOf]}

```
fmt.Printf("%T", ${1:variable})
```

## Go Float Type

### {[cotrTypesNum numberType typeNumber doubleType typeDouble]}

```
float64
```

## Go Dynamic Type

### {[cotrTypesDynamic typesDynamic typesAny dynamicType anyType]}

```
interface{}
```

## Go Create Variable

### {[cotrVar variable createVariable newVariable]}

```
var ${1:variableName} ${2:variableType} = ${3:variableValue}
```

## Go Create Nullable Variable

### {[cotrVarNullable variableNullable nullableVariable]}

```
var ${1:myVar} *${2:Type} = $3
```

## Go Function Syntax

### {[cotrFuncSyntax functionSyntax functionDocs]}

```
// Go Function Syntax
// Basic function: func FunctionName(parameters) returnType { ... }
// Function with arguments: func FunctionName(arg1 type1, arg2 type2, ...) returnType { ... }
// Note: Go does not support named arguments in function definitions.
```

## Go Function Named Args

### {[cotrFuncArgsNamed functionNamedArgs]}

```
// Go does not support named arguments in function definitions.
```

## Go Comment

### {[cotrComment comment note]}

```
// ${1:comment}
```

## Go Create Constant

### {[cotrConst constant]}

```
const ${1:variableName} ${2:variableType} = ${3:variableValue}
```

## Go Ternary Operator

### {[cotrTernary ternary conditionalOperator]}

```
${1:condition} ? ${2:trueValue} : ${3:falseValue}
```

## Go Create Float Variable

### {[cotrVarNum number float floatVariable variableFloat variableNumber numberVariable]}

```
var ${1:variableName} float64 = ${2:variableValue}
```

## Go If Else Statement

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

## Go Type Conversion

### {[cotrTypeConvert convert cast]}

```
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

## Go String Type

### {[cotrTypesString stringType typeString textType typeText]}

```
string
```

## Go Date Type

### {[cotrTypesDate dateType typeDate timeType timestampType dateTimeType]}

```
time.Time
```

## Go Create Date Variable

### {[cotrVarDate dateVariable variableDate date]}

```
// import "time"
var ${1:myDate} = time.Date(${2:year}, time.${3:Month}, ${4:day}, ${5:0}, ${6:0}, ${7:0}, ${8:0}, time.UTC)
```

## Go Create Map Variable

### {[cotrVarMap createMap createStruct variableMap variableStruct mapVariable structVariable dictVariable variableDict createDict]}

```
var ${1:mapName} = map[${2:keyType}]${3:valueType}{
    ${4:key1}: ${5:value1},
    ${6:key2}: ${7:value2}
}
```

## Go While Loop

### {[cotrWhileLoop whileLoop whileTrue]}

```
for ${1:condition} {
    ${2:// Your code here}
}
```

## Go Concatenate Strings

### {[cotrConcat concatenate combine]}

```
${1:string1} + ${2:string2}
```

## Go Create Integer Variable

### {[cotrVarInt integer int variableInt intVariable createInt]}

```
var ${1:variableName} int = ${2:variableValue}
```

## Go Create Boolean Variable

### {[cotrVarBool variableBool bool boolVariable createBool]}

```
var ${1:variableName} bool = ${2:variableValue}
```

## Go Equal To

### {[cotrEqual equal]}

```
==
```

## Go Boolean True

### {[cotrTypesBoolTrue true booleanTrue on]}

```
true
```

## Go Anonymous Function

### {[cotrFuncAnon anonFunc anonymous closure lambda functionLiteral cotrFuncLambda cotrFuncArrow]}

```
var ${1:myFunc} = func(${2:parameters}) ${3:returnType} {
    ${4:// Your code here}
    return ${5:value}
}

// Usage
${1:myFunc}(${6:arguments})
```

## Go Null Type

### {[cotrTypesNull nullType typesNull]}

```
nil
```

## Go Function Args

### {[cotrFuncArgs functionArgs functionWithArgs]}

```
// In Go, functions do not support default argument values in definitions.
func ${2:MyFunction}(${3:arg1} ${4:type1}, ${5:arg2} ${6:type2}) ${1:void} {
    ${7:// Your code here}
}
```

## Go Switch Statement

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

## Go Type Comparison

### {[cotrTypeCompare compareTypes]}

```
// Check if two variables have the same type:
if reflect.TypeOf(${1:variable1}) == reflect.TypeOf(${2:variable2}) {
  // Your code here
}
```

## Go Project Structure (High-Level)

### {[cotrStructure structure architecture]}

```
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

## Go For Loop

### {[cotrForLoop forLoop forX]}

```
for ${1:i} := ${2:0}; $1 < ${3:10}; $1++ {
    ${4:// Your code here}
}
```

## Go Generate Array

### {[cotrGenList generateList listGen]}

```
var ${1:arrayName} = []${2:arrayType}{
    ${3:value1},
    ${4:value2}
}
```

## Go Function

### {[cotrFunc function subprogram procedure subroutine method]}

```
func ${2:MyFunction}(${3:parameters}) ${1:void} {
    ${4:// Your code here}
}
```

## Go Integer Type

### {[cotrTypesInt intType typeInt]}

```
int
```

## Go List Type

### {[cotrTypesList listType typeList typeArray]}

```
[]${1:type}
```

## Go Interpolate String

### {[cotrInterpolate interpolate variableExpansion variableSubstitution stringPlaceholders stringInterpolation]}

```
`${1:string}`
```

## Go Print

### {[cotrPrint print log systemOut write consoleLog]}

```
fmt.Println(${1:message})
```

## Go Multi-line Comment

### {[cotrCommentMulti multiLineComment commentMultiLine blockComment]}

```
/*
 * ${1:comment}
 */
```

## Go Date Now

### {cotrTypesDateNow}

```
time.Now()
```

## Go Variable Declaration Syntax

### {[cotrVarSyntax variableSyntax howToVariables letSyntax]}

```
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

## Go Create List Variable

### {[cotrVarList createList listVariable arrayVariable variableList variableArray list array]}

```
var ${1:variableName} = []${2:variableType}{
    ${3:value1},
    ${4:value2}
}
```

## Go Map Type

### {[cotrTypesMap mapType typeMap hashmapType structType dictType typeDict typeScruct]}

```
map[${1:keyType}]${2:valueType}
```

## Go Create Multi-line String Variable

### {[cotrVarMultiString multiString variableMultiString multiStringVariable multilineText]}

```
var ${1:variableName} = `
${2:Line 1}
${3:Line 2}
${4:Line 3}
`
```

## Go For...Range Loop

### {cotrForRangeLoop}

```
for ${1:index}, ${2:value} := range ${3:iterable} {
    ${4:// Your code here}
}
```

## Go Entry Point

### {[cotrEntry entry start startingPoint]}

```
// Go Entry Point
// To run this program, use: `go run filename.go`

package main

import "fmt"

func main() {
    fmt.Println("Hello, World!")
}
```

## Go Mathematical Operators

### {[cotrOperators operators mathDocs]}

```
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

## Go Boolean Type

### {[cotrTypesBool booleanType typeBool]}

```
bool
```

## Go Struct

### {[cotrClass class objectTemplate]}

```
type ${1:MyStruct} struct {
  ${2:field1} ${3:type1}
  ${4:field2} ${5:type2}
  // Add more fields here
}
```

## Go Boolean Operators

### {[cotrOperatorsBool booleanOperators logic]}

```
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

## Go This Type Check

### {[thisTypeCheck thisType getThisType]}

```
reflect.TypeOf($CLIPBOARD).String()
```

## Go Try Catch

### {[cotrTryCatch tryCatch]}

```
defer func() {
  if r := recover(); r != nil {
    ${1:// Your code here}
  }
}()
${2:// Your code here}
```

## Go Print Multi

### {[cotrPrintMulti printMultiLine]}

```
fmt.Println(`
${1:Line 1}
${2:Line 2}
${3:Line 3}
`)
```

## Go Iota

### {[cotrEnum enum]}

```
const (
  ${1:variable1} = iota
  ${2:variable2}
  ${3:variable3}
  // Add more variables here
)
```

## Go If Statement

### {[cotrIf ifStatement]}

```
if ${1:condition} {
  ${2:// Your code here}
}
```

## Go Info

### {[cotrInfo languageInfo info]}

```
Typing: Statically typed
Paradigm: Multi-paradigm: procedural, concurrent
Compilation: Compiled
Concurrency: Built-in support for concurrency with goroutines and channels
```

## Go Not Equal To

### {[cotrNotEqual notEqual doesNotEqual]}

```
!=
```

## Go Generate Map

### {[cotrGenMap generateMap]}

```
var ${1:mapName} = make(map[${2:keyType}]${3:valueType})
${1:mapName}[${4:key1}] = ${5:value1}
${1:mapName}[${6:key2}] = ${7:value2}
```

## Go Types

### {[cotrTypes types allTypes languageTypes builtInTypes dataTypes]}

```
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

## Go Boolean False

### {[cotrTypesBoolFalse false off booleanFalse]}

```
false
```


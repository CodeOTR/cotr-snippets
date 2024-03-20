## PowerShell Types

### {[cotrTypes types allTypes languageTypes builtInTypes dataTypes]}

```
$BLOCK_COMMENT_START
PowerShell is a dynamically typed language.

Some common types in PowerShell include:
- [int]: Integer
- [double]: Double-precision floating-point number
- [string]: String
- [bool]: Boolean
- [array]: Array
- [hashtable]: Hash table (associative array)
- [datetime]: Date and time
- [PSCustomObject]: Custom object
- [System.Collections.Hashtable]: .NET Hashtable
- [System.Collections.Generic.List[T]]: .NET Generic List
- [System.Management.Automation.PSObject]: PowerShell object
$BLOCK_COMMENT_END
```

## PowerShell Boolean True

### {[cotrTypesBoolTrue true booleanTrue on]}

```
$true
```

## PowerShell Null Type

### {[cotrTypesNull cotrNull]}

```
$null
```

## PowerShell Create Date Variable

### {[cotrVarDate dateVariable variableDate date]}

```
$${1:myDate} = Get-Date -Year ${2:year} -Month ${3:month} -Day ${4:day}
```

## PowerShell Create Constant

### {[cotrConst constant]}

```
$${1:myConst} = $2
```

## PowerShell Interpolate String

### {[cotrInterpolate interpolate variableExpansion variableSubstitution stringPlaceholders stringInterpolation]}

```
"Your string here $${1:variable}"
```

## PowerShell Arrow Function

### {[cotrFuncArrow arrowFunction functionArrow]}

```
{${1:parameters} ->
    ${2:# Your code here}
}
```

## PowerShell Anonymous Function

### {[cotrFuncAnon anonFunc anonymous closure lambda functionLiteral cotrFuncLambda]}

```
{
    param(${1:parameters})
    ${2:# Your code here}
}
```

## PowerShell Throw Exception

### {[cotrThrow throwError throwException]}

```
throw '${1:Your message here}'
```

## PowerShell Double Type

### {[cotrTypesNum number numberType typeNumber double doubleType typeDouble]}

```
[double]
```

## PowerShell Create Multi-Line String Variable

### {[cotrVarStringMulti multiLineString varStringMulti stringVariableMulti createMultiLineString]}

```
$${1:myString} = @"
${2:Line 1}
${3:Line 2}
${4:Line 3}
"@;
```

## PowerShell Function

### {[cotrFunc function subprogram procedure subroutine method]}

```
function ${2:myFunction} {
  param (
    ${3:parameters}
  )

  ${4:# Your code here}
}
```

## PowerShell Multi-Line Comment

### {[cotrCommentMulti multiLineComment commentMultiLine blockComment]}

```
<#
${1:Your comment here}
#>
```

## PowerShell If Statement

### {[cotrIf ifStatement]}

```
if (${1:condition}) {
  # Your code here
}
```

## PowerShell Boolean Operators

### {[cotrOperatorsBool booleanOperators logic]}

```
# PowerShell Boolean Operators
# Logical AND: -and
# Logical OR: -or
# Logical NOT: -not
# Equality: -eq
# Inequality: -ne
# Greater than: -gt
# Less than: -lt
# Greater than or equal to: -ge
# Less than or equal to: -le
```

## PowerShell Type Check

### {[cotrTypeCheck checkType getType typeOf]}

```
${1:variable}.GetType()
```

## PowerShell Info

### {[cotrInfo languageInfo info]}

```
# Typing: Dynamically typed
# Paradigm: Object-oriented, imperative, scripting
# Compilation: Interpreted
# Concurrency: Supports multi-threading with the System.Threading namespace
```

## PowerShell Create Typed Variable

### {[cotrVarTyped typedVariable variableWithType]}

```
[${1:Type}] $${2:myVar} = $3
```

## PowerShell Integer Type

### {[cotrTypesInt intType typeInt]}

```
[int]
```

## PowerShell Boolean Type

### {[cotrTypesBool booleanType typeBool]}

```
[bool]
```

## PowerShell Create Integer Variable

### {[cotrVarInt integer int variableInt intVariable createInt]}

```
$${1:myInt} = ${2:0}
```

## PowerShell Try Catch

### {[cotrTryCatch tryCatch]}

```
try {
  # Your code here
} catch {
  # Your code here
}
```

## PowerShell Equal To

### {[cotrEqual equal]}

```
-eq
```

## PowerShell Type Conversion

### {[cotrTypeConvert cotrTypeCast cotrConvert cotrCast]}

```
# PowerShell Type Conversion:

# Explicit conversions:
# - [Type]variable  // Type casting (can throw an error if conversion fails)
# - variable.ToString()  // Converts to string
# - [int]variable  // Converts to integer
# - [double]variable  // Converts to double
# - ... (Various conversion methods and type accelerators)

# Note:
# - Be cautious with type casting, as it can lead to errors if the conversion is not valid.
```

## PowerShell String Type

### {[cotrTypesString stringType typeString textType typeText]}

```
[string]
```

## PowerShell Map Type

### {[cotrTypesMap mapType typeMap hashmapType structType dictType typeDict typeScruct]}

```
[hashtable]
```

## PowerShell For Loop

### {[cotrForLoop]}

```
for ($${1:i} = 0; $1 -lt ${2:10}; $1++) {
  # Your code here
}
```

## PowerShell Named Arguments Function

### {[cotrFuncArgsNamed functionNamedArgs]}

```
function ${2:MyFunction} {
    param(
        [Parameter(Mandatory)]
        [${3:type}] ${4:$arg1},
        [Parameter(Mandatory)]
        [${5:type}] ${6:$arg2}
    )
    ${7:# Your code here}
}
```

## PowerShell Ternary Operator

### {[cotrTernary ternary conditionalOperator]}

```
${1:condition} ? ${2:trueValue} : ${3:falseValue}
```

## PowerShell Generate List

### {[cotrGenList generateList listGen]}

```
1..${1:length} | ForEach-Object { ${2:'item'} + $_ }
```

## PowerShell Date Type

### {[cotrTypesDate dateType typeDate timeType timestampType dateTimeType]}

```
[datetime]
```

## PowerShell Function Syntax

### {[cotrFuncSyntax functionSyntax functionDocs]}

```
# PowerShell Function Syntax
# Basic function:
# function functionName {
#   param (
#     parameters
#   )
#   # Your code here
# }

# Function with arguments:
# function functionName {
#   param (
#     [Type] $arg1,
#     [Type] $arg2,
#     ...
#   )
#   # Your code here
# }
```

## PowerShell Entry Point

### {[cotrEntry entry start startingPoint]}

```
# PowerShell Entry Point
# To run this script, use: `powershell filename.ps1`

Write-Host 'Hello, World!'
```

## PowerShell Boolean False

### {[cotrTypesBoolFalse false off booleanFalse]}

```
$false
```

## PowerShell Create String Variable

### {[cotrVarString string stringVariable variableString text createString createText]}

```
$${1:myString} = "${2:Your string here}"
```

## PowerShell Class

### {[cotrClass class objectTemplate]}

```
class ${1:MyClass} {
  # Your code here
}
```

## PowerShell For Each Loop

### {[cotrForEachLoop cotrForIn]}

```
foreach ($${1:item} in ${2:iterable}) {
  # Your code here
}
```

## PowerShell Function Args

### {[cotrFuncArgs functionArgs functionWithArgs]}

```
# In PowerShell, functions can have arguments with default values.
function ${2:myFunction} {
  param (
    [${3:Type}] $${4:arg1},
    [${5:Type}] $${6:arg2} = ${7:defaultValue}
  )

  ${8:# Your code here}
}
```

## PowerShell Not Equal To

### {[cotrNotEqual notEqual doesNotEqual]}

```
-ne
```

## PowerShell Type Comparison

### {[cotrTypeCompare compareTypes]}

```
# Check if two variables have the same type:
if (${1:variable1}.GetType() -eq ${2:variable2}.GetType()) {
  # Your code here
}
```

## PowerShell Create Nullable Variable

### {[cotrVarNullable variableNullable nullableVariable]}

```
$${1:myVar} = $null
```

## PowerShell Create Boolean Variable

### {[cotrVarBool variableBool bool boolVariable createBool]}

```
$${1:myBool} = ${2:$true}
```

## PowerShell Print

### {[cotrPrint print log systemOut write consoleLog]}

```
Write-Host ${1:'Your message here'}
```

## PowerShell Switch Statement

### {[cotrSwitch switch switchStatement select case]}

```
switch (${1:variable}) {
  ${2:value1} {
    # Your code here
    break
  }
  ${3:value2} {
    # Your code here
    break
  }
  default {
    # Your code here
  }
}
```

## PowerShell Function Arguments

### {[cotrFuncArgs functionArgs functionWithArgs]}

```
# In PowerShell, functions can have arguments with default values.
function ${2:myFunction} {
  param (
    [${3:Type}] $${4:arg1},
    [${5:Type}] $${6:arg2} = ${7:defaultValue}
  )

  ${8:# Your code here}
}
```

## PowerShell Variable Declaration Syntax

### {[cotrVarSyntax variableSyntax howToVariables letSyntax]}

```
# PowerShell Variable Declaration Syntax:

# - $: (Scope: Global or Function)
#   - Variables start with a dollar sign.
#   - Can be reassigned and redeclared within their scope.
#   - Use with caution due to potential scoping issues.

# - const: (Scope: Global)
#   - Cannot be reassigned or redeclared.
#   - Use for values that should remain constant.

# Note:
# - PHP does not have a direct equivalent to 'let'.
# - Use '$' for most variable declarations.
# - Use 'const' for values that are known at compile time.
```

## PowerShell Date Now

### {[cotrNow now currentTime dateNow]}

```
Get-Date
```

## PowerShell Dynamic Type

### {[cotrTypesDynamic cotrDynamic]}

```
# PowerShell is a dynamically typed language.
```

## PowerShell Create Array Variable

### {[cotrVarList createList listVariable arrayVariable variableList variableArray list array]}

```
$${1:myArray} = @(${2:items})
```

## PowerShell Comment

### {[cotrComment comment note]}

```
# ${1:Your comment here}
```

## PowerShell Generate Map

### {[cotrGenMap generateMap]}

```
# PowerShell does not have a built-in way to generate a map with a specific number of key-value pairs.
# You can use a loop or a custom function to achieve this.
```

## PowerShell Static Variable

### {[cotrVarStatic staticVariable associatedConstant]}

```
# PowerShell does not have static variables in the same way as some other languages.
# You can use class variables or module variables to achieve similar functionality.
```

## PowerShell Mathematical Operators

### {[cotrOperators operators mathDocs]}

```
# PowerShell Mathematical Operators
# Addition: +
# Subtraction: -
# Multiplication: *
# Division: /
# Modulus (Remainder): %
# Exponentiation: Not directly supported, use [Math]::Pow(base, exponent)
# Increment: Use += 1
# Decrement: Use -= 1
# Assignment: =
# Addition assignment: +=
# Subtraction assignment: -=
# Multiplication assignment: *=
# Division assignment: /=
# Modulus assignment: %=
```

## PowerShell Create Variable

### {[cotrVar variable createVariable newVariable]}

```
$${1:myVar} = $2
```

## PowerShell Create Double Variable

### {[cotrVarNum number float floatVariable variableFloat variableNumber numberVariable]}

```
$${1:myDouble} = ${2:0.0}
```

## PowerShell Print Multi

### {[cotrPrintMulti printMultiLine]}

```
Write-Host @"
${1:Line 1}
${2:Line 2}
${3:Line 3}
"@;
```

## PowerShell While Loop

### {[cotrWhileLoop whileLoop whileTrue]}

```
while (${1:condition}) {
  # Your code here
}
```

## PowerShell This Type Check

### {[thisTypeCheck thisType getThisType]}

```
$CLIPBOARD.GetType().FullName
```

## PowerShell List Type

### {[cotrTypesList listType typeList typeArray]}

```
[array]
```

## PowerShell Concatenate Strings

### {[cotrConcat concatenate combine]}

```
"${1:string1}" + "${2:string2}"
```

## PowerShell Project Structure (High-Level)

### {[cotrStructure structure architecture]}

```
# Recommended High-Level PowerShell Project Structure:

# - /
#   - README.md: Documentation about the project.
#   - .ps1 files: Individual PowerShell script files.

# - /src
#   - Contains PowerShell modules or scripts organized by functionality.

# - /tests
#   - Contains Pester tests for testing your PowerShell scripts and modules.

# - /lib
#   - Optional: Contains third-party libraries or scripts used in the project.

# - /docs
#   - Optional: Additional documentation, help files, or related documents.

# - /tools
#   - Optional: Utility and helper scripts that assist with project tasks.

# - /output
#   - Optional: A location to store output files generated by scripts.

# Note:
# - Organize .ps1 script files and modules in the src folder for clarity.
# - Use descriptive names for script files to indicate their purpose or function.
```

## PowerShell Create Hash Table Variable

### {[cotrVarMap createMap createStruct variableMap variableStruct mapVariable structVariable dictVariable variableDict createDict]}

```
$${1:myHashTable} = @{
  ${2:key1} = ${3:value1}
  ${4:key2} = ${5:value2}
  # Add more key-value pairs here
}
```

## PowerShell If Else Statement

### {[cotrIfElse ifElseStatement]}

```
if (${1:condition}) {
  # Your code here
} else {
  # Your code here
}
```

## PowerShell Lambda Function (Script Block)

### {[cotrFuncLambda lambda functionLiteral]}

```
# PowerShell does not have a 'lambda' keyword.
# Instead, script blocks are used as anonymous functions.

$lambda = {
    param(${1:parameters})
    ${2:# Your code here}
}

# Usage
$result = $lambda.Invoke(${3:arguments})
Write-Host "Result: $result"
```


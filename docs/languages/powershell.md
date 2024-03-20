## PowerShell Boolean True

### [cotrTypesBoolTrue](/snippets/cotrTypesBoolTrue)

```powershell
$true
```

## PowerShell For Loop

### [cotrForLoop](/snippets/cotrForLoop)

```powershell
for ($${1:i} = 0; $1 -lt ${2:10}; $1++) {
  # Your code here
}
```

## PowerShell Create Variable

### [cotrVar](/snippets/cotrVar)

```powershell
$${1:myVar} = $2
```

## PowerShell Comment

### [cotrComment](/snippets/cotrComment)

```powershell
# ${1:Your comment here}
```

## PowerShell If Statement

### [cotrIf](/snippets/cotrIf)

```powershell
if (${1:condition}) {
  # Your code here
}
```

## PowerShell Info

### [cotrInfo](/snippets/cotrInfo)

```powershell
# Typing: Dynamically typed
# Paradigm: Object-oriented, imperative, scripting
# Compilation: Interpreted
# Concurrency: Supports multi-threading with the System.Threading namespace
```

## PowerShell Types

### [cotrTypes](/snippets/cotrTypes)

```powershell
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

## PowerShell Double Type

### [cotrTypesNum](/snippets/cotrTypesNum)

```powershell
[double]
```

## PowerShell Print

### [cotrPrint](/snippets/cotrPrint)

```powershell
Write-Host ${1:'Your message here'}
```

## PowerShell Date Type

### [cotrTypesDate](/snippets/cotrTypesDate)

```powershell
[datetime]
```

## PowerShell Date Now

### [cotrNow](/snippets/cotrNow)

```powershell
Get-Date
```

## PowerShell Concatenate Strings

### [cotrConcat](/snippets/cotrConcat)

```powershell
"${1:string1}" + "${2:string2}"
```

## PowerShell Generate Map

### [cotrGenMap](/snippets/cotrGenMap)

```powershell
# PowerShell does not have a built-in way to generate a map with a specific number of key-value pairs.
# You can use a loop or a custom function to achieve this.
```

## PowerShell Not Equal To

### [cotrNotEqual](/snippets/cotrNotEqual)

```powershell
-ne
```

## PowerShell Boolean Type

### [cotrTypesBool](/snippets/cotrTypesBool)

```powershell
[bool]
```

## PowerShell List Type

### [cotrTypesList](/snippets/cotrTypesList)

```powershell
[array]
```

## PowerShell For Each Loop

### [cotrForEachLoop](/snippets/cotrForEachLoop)

```powershell
foreach ($${1:item} in ${2:iterable}) {
  # Your code here
}
```

## PowerShell Mathematical Operators

### [cotrOperators](/snippets/cotrOperators)

```powershell
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

## PowerShell String Type

### [cotrTypesString](/snippets/cotrTypesString)

```powershell
[string]
```

## PowerShell Create Multi-Line String Variable

### [cotrVarStringMulti](/snippets/cotrVarStringMulti)

```powershell
$${1:myString} = @"
${2:Line 1}
${3:Line 2}
${4:Line 3}
"@;
```

## PowerShell Create Hash Table Variable

### [cotrVarMap](/snippets/cotrVarMap)

```powershell
$${1:myHashTable} = @{
  ${2:key1} = ${3:value1}
  ${4:key2} = ${5:value2}
  # Add more key-value pairs here
}
```

## PowerShell Switch Statement

### [cotrSwitch](/snippets/cotrSwitch)

```powershell
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

## PowerShell Function Syntax

### [cotrFuncSyntax](/snippets/cotrFuncSyntax)

```powershell
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

## PowerShell Variable Declaration Syntax

### [cotrVarSyntax](/snippets/cotrVarSyntax)

```powershell
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

## PowerShell Boolean Operators

### [cotrOperatorsBool](/snippets/cotrOperatorsBool)

```powershell
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

## PowerShell Null Type

### [cotrTypesNull](/snippets/cotrTypesNull)

```powershell
$null
```

## PowerShell Create String Variable

### [cotrVarString](/snippets/cotrVarString)

```powershell
$${1:myString} = "${2:Your string here}"
```

## PowerShell Create Array Variable

### [cotrVarList](/snippets/cotrVarList)

```powershell
$${1:myArray} = @(${2:items})
```

## PowerShell Project Structure (High-Level)

### [cotrStructure](/snippets/cotrStructure)

```powershell
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

## PowerShell Type Check

### [cotrTypeCheck](/snippets/cotrTypeCheck)

```powershell
${1:variable}.GetType()
```

## PowerShell Interpolate String

### [cotrInterpolate](/snippets/cotrInterpolate)

```powershell
"Your string here $${1:variable}"
```

## PowerShell Try Catch

### [cotrTryCatch](/snippets/cotrTryCatch)

```powershell
try {
  # Your code here
} catch {
  # Your code here
}
```

## PowerShell Lambda Function (Script Block)

### [cotrFuncLambda](/snippets/cotrFuncLambda)

```powershell
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

## PowerShell Create Integer Variable

### [cotrVarInt](/snippets/cotrVarInt)

```powershell
$${1:myInt} = ${2:0}
```

## PowerShell Function Arguments

### [cotrFuncArgs](/snippets/cotrFuncArgs)

```powershell
# In PowerShell, functions can have arguments with default values.
function ${2:myFunction} {
  param (
    [${3:Type}] $${4:arg1},
    [${5:Type}] $${6:arg2} = ${7:defaultValue}
  )

  ${8:# Your code here}
}
```

## PowerShell Generate List

### [cotrGenList](/snippets/cotrGenList)

```powershell
1..${1:length} | ForEach-Object { ${2:'item'} + $_ }
```

## PowerShell Static Variable

### [cotrVarStatic](/snippets/cotrVarStatic)

```powershell
# PowerShell does not have static variables in the same way as some other languages.
# You can use class variables or module variables to achieve similar functionality.
```

## PowerShell Equal To

### [cotrEqual](/snippets/cotrEqual)

```powershell
-eq
```

## PowerShell Integer Type

### [cotrTypesInt](/snippets/cotrTypesInt)

```powershell
[int]
```

## PowerShell Boolean False

### [cotrTypesBoolFalse](/snippets/cotrTypesBoolFalse)

```powershell
$false
```

## PowerShell Entry Point

### [cotrEntry](/snippets/cotrEntry)

```powershell
# PowerShell Entry Point
# To run this script, use: `powershell filename.ps1`

Write-Host 'Hello, World!'
```

## PowerShell Anonymous Function

### [cotrFuncAnon](/snippets/cotrFuncAnon)

```powershell
{
    param(${1:parameters})
    ${2:# Your code here}
}
```

## PowerShell Type Comparison

### [cotrTypeCompare](/snippets/cotrTypeCompare)

```powershell
# Check if two variables have the same type:
if (${1:variable1}.GetType() -eq ${2:variable2}.GetType()) {
  # Your code here
}
```

## PowerShell Create Nullable Variable

### [cotrVarNullable](/snippets/cotrVarNullable)

```powershell
$${1:myVar} = $null
```

## PowerShell Create Double Variable

### [cotrVarNum](/snippets/cotrVarNum)

```powershell
$${1:myDouble} = ${2:0.0}
```

## PowerShell Print Multi

### [cotrPrintMulti](/snippets/cotrPrintMulti)

```powershell
Write-Host @"
${1:Line 1}
${2:Line 2}
${3:Line 3}
"@;
```

## PowerShell Throw Exception

### [cotrThrow](/snippets/cotrThrow)

```powershell
throw '${1:Your message here}'
```

## PowerShell Ternary Operator

### [cotrTernary](/snippets/cotrTernary)

```powershell
${1:condition} ? ${2:trueValue} : ${3:falseValue}
```

## PowerShell Type Conversion

### [cotrTypeConvert](/snippets/cotrTypeConvert)

```powershell
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

## PowerShell Dynamic Type

### [cotrTypesDynamic](/snippets/cotrTypesDynamic)

```powershell
# PowerShell is a dynamically typed language.
```

## PowerShell Create Typed Variable

### [cotrVarTyped](/snippets/cotrVarTyped)

```powershell
[${1:Type}] $${2:myVar} = $3
```

## PowerShell Create Date Variable

### [cotrVarDate](/snippets/cotrVarDate)

```powershell
$${1:myDate} = Get-Date -Year ${2:year} -Month ${3:month} -Day ${4:day}
```

## PowerShell Map Type

### [cotrTypesMap](/snippets/cotrTypesMap)

```powershell
[hashtable]
```

## PowerShell While Loop

### [cotrWhileLoop](/snippets/cotrWhileLoop)

```powershell
while (${1:condition}) {
  # Your code here
}
```

## PowerShell Named Arguments Function

### [cotrFuncArgsNamed](/snippets/cotrFuncArgsNamed)

```powershell
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

## PowerShell Multi-Line Comment

### [cotrCommentMulti](/snippets/cotrCommentMulti)

```powershell
<#
${1:Your comment here}
#>
```

## PowerShell Class

### [cotrClass](/snippets/cotrClass)

```powershell
class ${1:MyClass} {
  # Your code here
}
```

## PowerShell If Else Statement

### [cotrIfElse](/snippets/cotrIfElse)

```powershell
if (${1:condition}) {
  # Your code here
} else {
  # Your code here
}
```

## PowerShell Create Constant

### [cotrConst](/snippets/cotrConst)

```powershell
$${1:myConst} = $2
```

## PowerShell Function

### [cotrFunc](/snippets/cotrFunc)

```powershell
function ${2:myFunction} {
  param (
    ${3:parameters}
  )

  ${4:# Your code here}
}
```

## PowerShell Function Args

### [cotrFuncArgs](/snippets/cotrFuncArgs)

```powershell
# In PowerShell, functions can have arguments with default values.
function ${2:myFunction} {
  param (
    [${3:Type}] $${4:arg1},
    [${5:Type}] $${6:arg2} = ${7:defaultValue}
  )

  ${8:# Your code here}
}
```

## PowerShell Arrow Function

### [cotrFuncArrow](/snippets/cotrFuncArrow)

```powershell
{${1:parameters} ->
    ${2:# Your code here}
}
```

## PowerShell Create Boolean Variable

### [cotrVarBool](/snippets/cotrVarBool)

```powershell
$${1:myBool} = ${2:$true}
```


---
title: Powershell
description: Powershell snippets on the rocks.
---

## [cotrWhileLoop](/snippets/cotrwhileloop)

PowerShell While Loop

```powershell
while (${1:condition}) {
  # Your code here
}
```

## [cotrEqual](/snippets/cotrequal)

PowerShell Equal To

```powershell
-eq
```

## [cotrNotEqual](/snippets/cotrnotequal)

PowerShell Not Equal To

```powershell
-ne
```

## [cotrTypesBoolTrue](/snippets/cotrtypesbooltrue)

PowerShell Boolean True

```powershell
$true
```

## [cotrVarStringMulti](/snippets/cotrvarstringmulti)

PowerShell Create Multi-Line String Variable

```powershell
$${1:myString} = @"
${2:Line 1}
${3:Line 2}
${4:Line 3}
"@;
```

## [cotrTypeCompare](/snippets/cotrtypecompare)

PowerShell Type Comparison

```powershell
# Check if two variables have the same type:
if (${1:variable1}.GetType() -eq ${2:variable2}.GetType()) {
  # Your code here
}
```

## [cotrTypes](/snippets/cotrtypes)

PowerShell Types

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

## [cotrTypesNum](/snippets/cotrtypesnum)

PowerShell Double Type

```powershell
[double]
```

## [cotrPrintMulti](/snippets/cotrprintmulti)

PowerShell Print Multi

```powershell
Write-Host @"
${1:Line 1}
${2:Line 2}
${3:Line 3}
"@;
```

## [cotrOperators](/snippets/cotroperators)

PowerShell Mathematical Operators

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

## [cotrVar](/snippets/cotrvar)

PowerShell Create Variable

```powershell
$${1:myVar} = $2
```

## [cotrConst](/snippets/cotrconst)

PowerShell Create Constant

```powershell
$${1:myConst} = $2
```

## [cotrInfo](/snippets/cotrinfo)

PowerShell Info

```powershell
# Typing: Dynamically typed
# Paradigm: Object-oriented, imperative, scripting
# Compilation: Interpreted
# Concurrency: Supports multi-threading with the System.Threading namespace
```

## [cotrConcat](/snippets/cotrconcat)

PowerShell Concatenate Strings

```powershell
"${1:string1}" + "${2:string2}"
```

## [cotrFuncLambda](/snippets/cotrfunclambda)

PowerShell Lambda Function (Script Block)

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

## [cotrFuncArrow](/snippets/cotrfuncarrow)

PowerShell Arrow Function

```powershell
{${1:parameters} ->
    ${2:# Your code here}
}
```

## [cotrVarBool](/snippets/cotrvarbool)

PowerShell Create Boolean Variable

```powershell
$${1:myBool} = ${2:$true}
```

## [cotrVarList](/snippets/cotrvarlist)

PowerShell Create Array Variable

```powershell
$${1:myArray} = @(${2:items})
```

## [cotrForLoop](/snippets/cotrforloop)

PowerShell For Loop

```powershell
for ($${1:i} = 0; $1 -lt ${2:10}; $1++) {
  # Your code here
}
```

## [cotrOperatorsBool](/snippets/cotroperatorsbool)

PowerShell Boolean Operators

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

## [cotrNow](/snippets/cotrnow)

PowerShell Date Now

```powershell
Get-Date
```

## [cotrIf](/snippets/cotrif)

PowerShell If Statement

```powershell
if (${1:condition}) {
  # Your code here
}
```

## [cotrFuncArgs](/snippets/cotrfuncargs)

PowerShell Function Args

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

## [cotrThrow](/snippets/cotrthrow)

PowerShell Throw Exception

```powershell
throw '${1:Your message here}'
```

## [cotrTernary](/snippets/cotrternary)

PowerShell Ternary Operator

```powershell
${1:condition} ? ${2:trueValue} : ${3:falseValue}
```

## [cotrFuncSyntax](/snippets/cotrfuncsyntax)

PowerShell Function Syntax

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

## [cotrStructure](/snippets/cotrstructure)

PowerShell Project Structure (High-Level)

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

## [cotrTypesDate](/snippets/cotrtypesdate)

PowerShell Date Type

```powershell
[datetime]
```

## [cotrVarNullable](/snippets/cotrvarnullable)

PowerShell Create Nullable Variable

```powershell
$${1:myVar} = $null
```

## [cotrVarDate](/snippets/cotrvardate)

PowerShell Create Date Variable

```powershell
$${1:myDate} = Get-Date -Year ${2:year} -Month ${3:month} -Day ${4:day}
```

## [cotrVarSyntax](/snippets/cotrvarsyntax)

PowerShell Variable Declaration Syntax

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

## [cotrFuncArgsNamed](/snippets/cotrfuncargsnamed)

PowerShell Named Arguments Function

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

## [cotrClass](/snippets/cotrclass)

PowerShell Class

```powershell
class ${1:MyClass} {
  # Your code here
}
```

## [cotrTypesString](/snippets/cotrtypesstring)

PowerShell String Type

```powershell
[string]
```

## [cotrForEachLoop](/snippets/cotrforeachloop)

PowerShell For Each Loop

```powershell
foreach ($${1:item} in ${2:iterable}) {
  # Your code here
}
```

## [cotrFunc](/snippets/cotrfunc)

PowerShell Function

```powershell
function ${2:myFunction} {
  param (
    ${3:parameters}
  )

  ${4:# Your code here}
}
```

## [cotrInterpolate](/snippets/cotrinterpolate)

PowerShell Interpolate String

```powershell
"Your string here $${1:variable}"
```

## [cotrVarMap](/snippets/cotrvarmap)

PowerShell Create Hash Table Variable

```powershell
$${1:myHashTable} = @{
  ${2:key1} = ${3:value1}
  ${4:key2} = ${5:value2}
  # Add more key-value pairs here
}
```

## [cotrFuncAnon](/snippets/cotrfuncanon)

PowerShell Anonymous Function

```powershell
{
    param(${1:parameters})
    ${2:# Your code here}
}
```

## [cotrTypesBool](/snippets/cotrtypesbool)

PowerShell Boolean Type

```powershell
[bool]
```

## [cotrTypesBoolFalse](/snippets/cotrtypesboolfalse)

PowerShell Boolean False

```powershell
$false
```

## [cotrTypesDynamic](/snippets/cotrtypesdynamic)

PowerShell Dynamic Type

```powershell
# PowerShell is a dynamically typed language.
```

## [cotrTypesInt](/snippets/cotrtypesint)

PowerShell Integer Type

```powershell
[int]
```

## [cotrVarNum](/snippets/cotrvarnum)

PowerShell Create Double Variable

```powershell
$${1:myDouble} = ${2:0.0}
```

## [cotrIfElse](/snippets/cotrifelse)

PowerShell If Else Statement

```powershell
if (${1:condition}) {
  # Your code here
} else {
  # Your code here
}
```

## [cotrVarStatic](/snippets/cotrvarstatic)

PowerShell Static Variable

```powershell
# PowerShell does not have static variables in the same way as some other languages.
# You can use class variables or module variables to achieve similar functionality.
```

## [cotrTypesList](/snippets/cotrtypeslist)

PowerShell List Type

```powershell
[array]
```

## [cotrTypesNull](/snippets/cotrtypesnull)

PowerShell Null Type

```powershell
$null
```

## [cotrVarTyped](/snippets/cotrvartyped)

PowerShell Create Typed Variable

```powershell
[${1:Type}] $${2:myVar} = $3
```

## [cotrFuncArgs](/snippets/cotrfuncargs)

PowerShell Function Arguments

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

## [cotrTypeCheck](/snippets/cotrtypecheck)

PowerShell Type Check

```powershell
${1:variable}.GetType()
```

## [cotrVarString](/snippets/cotrvarstring)

PowerShell Create String Variable

```powershell
$${1:myString} = "${2:Your string here}"
```

## [cotrVarInt](/snippets/cotrvarint)

PowerShell Create Integer Variable

```powershell
$${1:myInt} = ${2:0}
```

## [cotrSwitch](/snippets/cotrswitch)

PowerShell Switch Statement

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

## [cotrGenMap](/snippets/cotrgenmap)

PowerShell Generate Map

```powershell
# PowerShell does not have a built-in way to generate a map with a specific number of key-value pairs.
# You can use a loop or a custom function to achieve this.
```

## [cotrTypeConvert](/snippets/cotrtypeconvert)

PowerShell Type Conversion

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

## [cotrTypesMap](/snippets/cotrtypesmap)

PowerShell Map Type

```powershell
[hashtable]
```

## [cotrEntry](/snippets/cotrentry)

PowerShell Entry Point

```powershell
# PowerShell Entry Point
# To run this script, use: `powershell filename.ps1`

Write-Host 'Hello, World!'
```

## [cotrComment](/snippets/cotrcomment)

PowerShell Comment

```powershell
# ${1:Your comment here}
```

## [cotrGenList](/snippets/cotrgenlist)

PowerShell Generate List

```powershell
1..${1:length} | ForEach-Object { ${2:'item'} + $_ }
```

## [cotrPrint](/snippets/cotrprint)

PowerShell Print

```powershell
Write-Host ${1:'Your message here'}
```

## [cotrCommentMulti](/snippets/cotrcommentmulti)

PowerShell Multi-Line Comment

```powershell
<#
${1:Your comment here}
#>
```

## [cotrTryCatch](/snippets/cotrtrycatch)

PowerShell Try Catch

```powershell
try {
  # Your code here
} catch {
  # Your code here
}
```


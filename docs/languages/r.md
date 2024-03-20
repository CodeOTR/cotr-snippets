---
title: R
description: R snippets on the rocks.
---

## [cotrWhileLoop](/snippets/cotrwhileloop)

R While Loop

```r
while (${1:condition}) {
  # Your code here
}
```

## [cotrEntry](/snippets/cotrentry)

R Entry Point

```r
# R Entry Point
# To run this program, use: `Rscript filename.R`

# Your code here
```

## [cotrEqual](/snippets/cotrequal)

R Equal To

```r
==
```

## [cotrForLoop](/snippets/cotrforloop)

R For Loop

```r
for (${1:i} in ${2:1:10}) {
  # Your code here
}
```

## [cotrDynamic](/snippets/cotrdynamic)

R Dynamic Type

```r
# R is a dynamically typed language.
```

## [cotrVarTyped](/snippets/cotrvartyped)

R Create Typed Variable

```r
# Note: R is dynamically typed; explicit type annotations are not used.
${1:my_var} <- $2
```

## [cotrTernary](/snippets/cotrternary)

R Ternary Operator

```r
ifelse(${1:condition}, ${2:trueValue}, ${3:falseValue})
```

## [cotrOperators](/snippets/cotroperators)

R Mathematical Operators

```r
# R Mathematical Operators
# Addition: +
# Subtraction: -
# Multiplication: *
# Exponentiation: ^
# Division: /
# Modulus (Remainder): %%
# Integer Division: %/%
# Assignment: <- or =
# Addition assignment: +=
# Subtraction assignment: -=
# Multiplication assignment: *=
# Division assignment: /=
# Modulus assignment: %%=
# Exponentiation assignment: ^=
```

## [cotrTypesBoolTrue](/snippets/cotrtypesbooltrue)

R Boolean True

```r
TRUE
```

## [cotrFunc](/snippets/cotrfunc)

R Function

```r
${2:my_function} <- function(${3:parameters}) {
  ${4:# Your code here}
}
```

## [cotrConcat](/snippets/cotrconcat)

R Concatenate String

```r
paste(${1:"string1"}, ${2:"string2"}, sep = "")
```

## [cotrVarListAlt](/snippets/cotrvarlistalt)

R Create List Variable

```r
${1:my_list} <- list(${2:items})
```

## [cotrIfElse](/snippets/cotrifelse)

R If Else Statement

```r
if (${1:condition}) {
  # Your code here
} else {
  # Your code here
}
```

## [cotrFuncArgs](/snippets/cotrfuncargs)

R Function Args

```r
# In R, functions can have arguments with default values.
${2:my_function} <- function(${3:arg1}, ${4:arg2} = ${5:'defaultVal'}) {
  ${6:# Your code here}
}
```

## [cotrInterpolate](/snippets/cotrinterpolate)

R Interpolate String

```r
paste0("Your string here ", ${1:variable})
```

## [cotrVarDate](/snippets/cotrvardate)

R Create Date Variable

```r
${1:my_date} <- as.Date('${2:YYYY-MM-DD}')
```

## [cotrComment](/snippets/cotrcomment)

R Comment

```r
# ${1:Your comment here}
```

## [cotrNotEqual](/snippets/cotrnotequal)

R Not Equal To

```r
!=
```

## [cotrTypeCheck](/snippets/cotrtypecheck)

R Type Check

```r
class(${1:variable})
```

## [cotrOperatorsBool](/snippets/cotroperatorsbool)

R Boolean Operators

```r
# R Boolean Operators
# Logical AND: & or &&
# Logical OR: | or ||
# Logical NOT: !
# Equality: ==
# Inequality: !=
# Greater than: >
# Less than: <
# Greater than or equal to: >=
# Less than or equal to: <=
```

## [cotrTypesList](/snippets/cotrtypeslist)

R List Type

```r
list
```

## [cotrVarDouble](/snippets/cotrvardouble)

R Create Double Variable

```r
${1:my_double} <- ${2:0.0}
```

## [cotrPrintMulti](/snippets/cotrprintmulti)

R Print Multi

```r
cat(${1:"Line 1",
${2:"Line 2",
${3:"Line 3")
```

## [cotrForEachLoop](/snippets/cotrforeachloop)

R For Each Loop

```r
for (item in ${1:iterable}) {
  # Your code here
}
```

## [cotrIf](/snippets/cotrif)

R If Statement

```r
if (${1:condition}) {
  # Your code here
}
```

## [cotrThrow](/snippets/cotrthrow)

R Throw Exception

```r
stop(${1:'Your message here'})
```

## [cotrInfo](/snippets/cotrinfo)

R Info

```r
# Typing: Dynamically typed
# Paradigm: Multi-paradigm: functional, object-oriented, procedural, statistical
# Compilation: Interpreted
# Concurrency: Supports multi-threading with packages like 'parallel'
```

## [cotrNow](/snippets/cotrnow)

R Date Now

```r
Sys.Date()
```

## [cotrVarString](/snippets/cotrvarstring)

R Create String Variable

```r
${1:my_string} <- '${2:Your string here}'
```

## [cotrTypeCompare](/snippets/cotrtypecompare)

R Type Comparison

```r
# Check if two variables have the same type:
if (identical(class(${1:variable1}), class(${2:variable2}))) {
  # Your code here
}
```

## [cotrTypeConvert](/snippets/cotrtypeconvert)

R Type Conversion

```r
# R Type Conversion:

# Implicit conversions (R performs automatically):
# - Can be unpredictable, especially with loose equality (==).

# Explicit conversions:
# - as.integer(variable)  // Converts to integer
# - as.double(variable)  // Converts to double
# - as.character(variable)  // Converts to string
# - as.logical(variable)  // Converts to boolean
# - ... (Various conversion functions in base R and packages)

# Note:
# - Be aware of implicit conversions and use explicit conversions when necessary for clarity and control.
```

## [cotrTypesBoolFalse](/snippets/cotrtypesboolfalse)

R Boolean False

```r
FALSE
```

## [cotrVarBool](/snippets/cotrvarbool)

R Create Boolean Variable

```r
${1:my_bool} <- ${2:TRUE}
```

## [cotrTypesDate](/snippets/cotrtypesdate)

R Date Type

```r
Date
```

## [cotrVarList](/snippets/cotrvarlist)

R Create Array Variable

```r
${1:my_array} <- c(${2:items})
```

## [cotrTypesString](/snippets/cotrtypesstring)

R String Type

```r
character
```

## [cotrTypesBool](/snippets/cotrtypesbool)

R Boolean Type

```r
logical
```

## [cotrVarStringMulti](/snippets/cotrvarstringmulti)

R Create Multiline String Variable

```r
${1:my_string} <- paste0(
${2:"Line 1",
${3:"Line 2",
${4:"Line 3")
```

## [cotrTryCatch](/snippets/cotrtrycatch)

R Try Catch

```r
tryCatch({
  # Your code here
}, error = function(e) {
  # Your code here
})
```

## [cotrClass](/snippets/cotrclass)

R Class

```r
# R does not have a built-in class type. Use a list or vector instead.
```

## [cotrTypes](/snippets/cotrtypes)

R Types

```r
$BLOCK_COMMENT_START
R is a dynamically typed language.

Some common types in R include:
- numeric: Numeric data type (includes integers and floating-point numbers)
- character: String
- logical: Boolean
- vector: One-dimensional array
- list: Ordered collection of elements
- data.frame: Two-dimensional data structure
- matrix: Two-dimensional array
- factor: Categorical data
- NULL: Represents the absence of a value
- function: Function object
$BLOCK_COMMENT_END
```

## [cotrTypesInt](/snippets/cotrtypesint)

R Integer Type

```r
# R uses 'numeric' for both integers and floating-point numbers.
```

## [cotrTypesMap](/snippets/cotrtypesmap)

R Map Type

```r
# R does not have a built-in Map type. Use lists or data.frames for similar functionality.
```

## [cotrNull](/snippets/cotrnull)

R Null Type

```r
NULL
```

## [cotrVar](/snippets/cotrvar)

R Create Variable

```r
${1:my_var} <- $2
```

## [cotrVarInt](/snippets/cotrvarint)

R Create Integer Variable

```r
${1:my_int} <- ${2:0}
```

## [cotrCommentMulti](/snippets/cotrcommentmulti)

R Multi-Line Comment

```r
${1:comment}
```

## [cotrStructure](/snippets/cotrstructure)

R Project Structure (High-Level)

```r
# Recommended High-Level R Project Structure:

# - /
#   - README.md: Project description and instructions.
#   - .Rproj: RStudio project file.

# - R/
#   - Contains R script files (.R).
#   - Organize by feature or functionality, for example:
#     - data_preprocessing.R
#     - statistical_models.R
#     - visualization.R

# - data/
#   - Raw and processed data files.

# - docs/
#   - Documentation files, including analysis reports.

# - tests/
#   - Test scripts for your R functions.

# - man/
#   - Documentation for your functions, if you are building an R package.

# - vignettes/
#   - Longer form documentation, such as tutorials or extended use cases.

# Note:
# - This structure can be adapted based on the scale and needs of the project.
# - Use RStudio projects to manage workspace settings and project-specific options.
```

## [cotrTypesNum](/snippets/cotrtypesnum)

R Double Type

```r
# R uses 'numeric' for both integers and floating-point numbers.
```

## [cotrEnum](/snippets/cotrenum)

R Enum

```r
# R does not have a built-in enum type. Use a list or vector instead.
```

## [cotrConst](/snippets/cotrconst)

R Create Constant

```r
${1:MY_CONST} <- $2
```

## [cotrPrint](/snippets/cotrprint)

R Print

```r
print(${1:'Your message here'})
```


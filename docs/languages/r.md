## R Types

### [cotrTypes](/snippets/cotrTypes)

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

## R Boolean Type

### [cotrTypesBool](/snippets/cotrTypesBool)

```r
logical
```

## R For Loop

### [cotrForLoop](/snippets/cotrForLoop)

```r
for (${1:i} in ${2:1:10}) {
  # Your code here
}
```

## R While Loop

### [cotrWhileLoop](/snippets/cotrWhileLoop)

```r
while (${1:condition}) {
  # Your code here
}
```

## R Type Comparison

### [cotrTypeCompare](/snippets/cotrTypeCompare)

```r
# Check if two variables have the same type:
if (identical(class(${1:variable1}), class(${2:variable2}))) {
  # Your code here
}
```

## R Create Array Variable

### [cotrVarList](/snippets/cotrVarList)

```r
${1:my_array} <- c(${2:items})
```

## R For Each Loop

### [cotrForEachLoop](/snippets/cotrForEachLoop)

```r
for (item in ${1:iterable}) {
  # Your code here
}
```

## R Boolean False

### [cotrTypesBoolFalse](/snippets/cotrTypesBoolFalse)

```r
FALSE
```

## R Dynamic Type

### [cotrDynamic](/snippets/cotrDynamic)

```r
# R is a dynamically typed language.
```

## R Not Equal To

### [cotrNotEqual](/snippets/cotrNotEqual)

```r
!=
```

## R Type Conversion

### [cotrTypeConvert](/snippets/cotrTypeConvert)

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

## R Null Type

### [cotrNull](/snippets/cotrNull)

```r
NULL
```

## R Create String Variable

### [cotrVarString](/snippets/cotrVarString)

```r
${1:my_string} <- '${2:Your string here}'
```

## R Type Check

### [cotrTypeCheck](/snippets/cotrTypeCheck)

```r
class(${1:variable})
```

## R Function Args

### [cotrFuncArgs](/snippets/cotrFuncArgs)

```r
# In R, functions can have arguments with default values.
${2:my_function} <- function(${3:arg1}, ${4:arg2} = ${5:'defaultVal'}) {
  ${6:# Your code here}
}
```

## R If Statement

### [cotrIf](/snippets/cotrIf)

```r
if (${1:condition}) {
  # Your code here
}
```

## R Throw Exception

### [cotrThrow](/snippets/cotrThrow)

```r
stop(${1:'Your message here'})
```

## R Enum

### [cotrEnum](/snippets/cotrEnum)

```r
# R does not have a built-in enum type. Use a list or vector instead.
```

## R Multi-Line Comment

### [cotrCommentMulti](/snippets/cotrCommentMulti)

```r
${1:comment}
```

## R Create Constant

### [cotrConst](/snippets/cotrConst)

```r
${1:MY_CONST} <- $2
```

## R Date Type

### [cotrTypesDate](/snippets/cotrTypesDate)

```r
Date
```

## R List Type

### [cotrTypesList](/snippets/cotrTypesList)

```r
list
```

## R Concatenate String

### [cotrConcat](/snippets/cotrConcat)

```r
paste(${1:"string1"}, ${2:"string2"}, sep = "")
```

## R Create Date Variable

### [cotrVarDate](/snippets/cotrVarDate)

```r
${1:my_date} <- as.Date('${2:YYYY-MM-DD}')
```

## R Try Catch

### [cotrTryCatch](/snippets/cotrTryCatch)

```r
tryCatch({
  # Your code here
}, error = function(e) {
  # Your code here
})
```

## R String Type

### [cotrTypesString](/snippets/cotrTypesString)

```r
character
```

## R Info

### [cotrInfo](/snippets/cotrInfo)

```r
# Typing: Dynamically typed
# Paradigm: Multi-paradigm: functional, object-oriented, procedural, statistical
# Compilation: Interpreted
# Concurrency: Supports multi-threading with packages like 'parallel'
```

## R Class

### [cotrClass](/snippets/cotrClass)

```r
# R does not have a built-in class type. Use a list or vector instead.
```

## R Integer Type

### [cotrTypesInt](/snippets/cotrTypesInt)

```r
# R uses 'numeric' for both integers and floating-point numbers.
```

## R Create List Variable

### [cotrVarListAlt](/snippets/cotrVarListAlt)

```r
${1:my_list} <- list(${2:items})
```

## R Print

### [cotrPrint](/snippets/cotrPrint)

```r
print(${1:'Your message here'})
```

## R Print Multi

### [cotrPrintMulti](/snippets/cotrPrintMulti)

```r
cat(${1:"Line 1",
${2:"Line 2",
${3:"Line 3")
```

## R Equal To

### [cotrEqual](/snippets/cotrEqual)

```r
==
```

## R Create Variable

### [cotrVar](/snippets/cotrVar)

```r
${1:my_var} <- $2
```

## R Create Typed Variable

### [cotrVarTyped](/snippets/cotrVarTyped)

```r
# Note: R is dynamically typed; explicit type annotations are not used.
${1:my_var} <- $2
```

## R Create Boolean Variable

### [cotrVarBool](/snippets/cotrVarBool)

```r
${1:my_bool} <- ${2:TRUE}
```

## R If Else Statement

### [cotrIfElse](/snippets/cotrIfElse)

```r
if (${1:condition}) {
  # Your code here
} else {
  # Your code here
}
```

## R Ternary Operator

### [cotrTernary](/snippets/cotrTernary)

```r
ifelse(${1:condition}, ${2:trueValue}, ${3:falseValue})
```

## R Project Structure (High-Level)

### [cotrStructure](/snippets/cotrStructure)

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

## R Map Type

### [cotrTypesMap](/snippets/cotrTypesMap)

```r
# R does not have a built-in Map type. Use lists or data.frames for similar functionality.
```

## R Date Now

### [cotrNow](/snippets/cotrNow)

```r
Sys.Date()
```

## R Interpolate String

### [cotrInterpolate](/snippets/cotrInterpolate)

```r
paste0("Your string here ", ${1:variable})
```

## R Double Type

### [cotrTypesNum](/snippets/cotrTypesNum)

```r
# R uses 'numeric' for both integers and floating-point numbers.
```

## R Create Integer Variable

### [cotrVarInt](/snippets/cotrVarInt)

```r
${1:my_int} <- ${2:0}
```

## R Function

### [cotrFunc](/snippets/cotrFunc)

```r
${2:my_function} <- function(${3:parameters}) {
  ${4:# Your code here}
}
```

## R Boolean Operators

### [cotrOperatorsBool](/snippets/cotrOperatorsBool)

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

## R Comment

### [cotrComment](/snippets/cotrComment)

```r
# ${1:Your comment here}
```

## R Mathematical Operators

### [cotrOperators](/snippets/cotrOperators)

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

## R Boolean True

### [cotrTypesBoolTrue](/snippets/cotrTypesBoolTrue)

```r
TRUE
```

## R Create Multiline String Variable

### [cotrVarStringMulti](/snippets/cotrVarStringMulti)

```r
${1:my_string} <- paste0(
${2:"Line 1",
${3:"Line 2",
${4:"Line 3")
```

## R Create Double Variable

### [cotrVarDouble](/snippets/cotrVarDouble)

```r
${1:my_double} <- ${2:0.0}
```

## R Entry Point

### [cotrEntry](/snippets/cotrEntry)

```r
# R Entry Point
# To run this program, use: `Rscript filename.R`

# Your code here
```


## R Info

### {[cotrInfo languageInfo info]}

```
# Typing: Dynamically typed
# Paradigm: Multi-paradigm: functional, object-oriented, procedural, statistical
# Compilation: Interpreted
# Concurrency: Supports multi-threading with packages like 'parallel'
```

## R Type Comparison

### {[cotrTypeCompare compareTypes]}

```
# Check if two variables have the same type:
if (identical(class(${1:variable1}), class(${2:variable2}))) {
  # Your code here
}
```

## R For Loop

### {[cotrForLoop forLoop forX]}

```
for (${1:i} in ${2:1:10}) {
  # Your code here
}
```

## R Enum

### {[cotrEnum enum]}

```
# R does not have a built-in enum type. Use a list or vector instead.
```

## R String Type

### {[cotrTypesString stringType typeString textType typeText]}

```
character
```

## R If Else Statement

### {[cotrIfElse ifElseStatement]}

```
if (${1:condition}) {
  # Your code here
} else {
  # Your code here
}
```

## R List Type

### {[cotrTypesList listType typeList typeArray]}

```
list
```

## R Dynamic Type

### {[cotrDynamic dynamicType typeDynamic anyType typeAny]}

```
# R is a dynamically typed language.
```

## R Function Args

### {[cotrFuncArgs functionArgs functionWithArgs]}

```
# In R, functions can have arguments with default values.
${2:my_function} <- function(${3:arg1}, ${4:arg2} = ${5:'defaultVal'}) {
  ${6:# Your code here}
}
```

## R Equal To

### {[cotrEqual equal]}

```
==
```

## R Comment

### {[cotrComment comment note]}

```
# ${1:Your comment here}
```

## R Multi-Line Comment

### {[cotrCommentMulti multiLineComment commentMultiLine blockComment]}

```
${1:comment}
```

## R Type Conversion

### {[cotrTypeConvert cotrTypeCast cotrConvert cotrCast]}

```
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

## R Create Multiline String Variable

### {[cotrVarStringMulti multiLineString varStringMulti stringVariableMulti createMultiLineString]}

```
${1:my_string} <- paste0(
${2:"Line 1",
${3:"Line 2",
${4:"Line 3")
```

## R Create String Variable

### {[cotrVarString string stringVariable variableString text createString createText]}

```
${1:my_string} <- '${2:Your string here}'
```

## R Create List Variable

### {cotrVarListAlt}

```
${1:my_list} <- list(${2:items})
```

## R Create Date Variable

### {[cotrVarDate dateVariable variableDate date]}

```
${1:my_date} <- as.Date('${2:YYYY-MM-DD}')
```

## R For Each Loop

### {[cotrForEachLoop forEach]}

```
for (item in ${1:iterable}) {
  # Your code here
}
```

## R Mathematical Operators

### {[cotrOperators operators mathDocs]}

```
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

## R Boolean False

### {[cotrTypesBoolFalse false off booleanFalse]}

```
FALSE
```

## R Try Catch

### {[cotrTryCatch tryCatch]}

```
tryCatch({
  # Your code here
}, error = function(e) {
  # Your code here
})
```

## R Project Structure (High-Level)

### {[cotrStructure structure architecture]}

```
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

## R Boolean True

### {[cotrTypesBoolTrue true booleanTrue on]}

```
TRUE
```

## R Date Type

### {[cotrTypesDate dateType typeDate timeType timestampType dateTimeType]}

```
Date
```

## R Map Type

### {[cotrTypesMap mapType typeMap hashmapType structType dictType typeDict typeScruct]}

```
# R does not have a built-in Map type. Use lists or data.frames for similar functionality.
```

## R Create Typed Variable

### {[cotrVarTyped typedVariable variableWithType]}

```
# Note: R is dynamically typed; explicit type annotations are not used.
${1:my_var} <- $2
```

## R Create Boolean Variable

### {[cotrVarBool variableBool bool boolVariable createBool]}

```
${1:my_bool} <- ${2:TRUE}
```

## R Print

### {[cotrPrint print log systemOut write consoleLog]}

```
print(${1:'Your message here'})
```

## R While Loop

### {[cotrWhileLoop whileLoop whileTrue]}

```
while (${1:condition}) {
  # Your code here
}
```

## R Not Equal To

### {[cotrNotEqual notEqual doesNotEqual]}

```
!=
```

## R Types

### {[cotrTypes types allTypes languageTypes builtInTypes dataTypes]}

```
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

## R Null Type

### {[cotrNull null nil none nothing option]}

```
NULL
```

## R Create Array Variable

### {[cotrVarList createList listVariable arrayVariable variableList variableArray list array]}

```
${1:my_array} <- c(${2:items})
```

## R Date Now

### {[cotrNow now currentTime dateNow]}

```
Sys.Date()
```

## R Interpolate String

### {[cotrInterpolate interpolate variableExpansion variableSubstitution stringPlaceholders stringInterpolation]}

```
paste0("Your string here ", ${1:variable})
```

## R Ternary Operator

### {[cotrTernary ternary conditionalOperator]}

```
ifelse(${1:condition}, ${2:trueValue}, ${3:falseValue})
```

## R Entry Point

### {[cotrEntry entry start startingPoint]}

```
# R Entry Point
# To run this program, use: `Rscript filename.R`

# Your code here
```

## R Boolean Operators

### {[cotrOperatorsBool booleanOperators logic]}

```
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

## R Type Check

### {[cotrTypeCheck checkType getType typeOf]}

```
class(${1:variable})
```

## R Integer Type

### {[cotrTypesInt intType typeInt]}

```
# R uses 'numeric' for both integers and floating-point numbers.
```

## R Boolean Type

### {[cotrTypesBool booleanType typeBool]}

```
logical
```

## R Create Variable

### {[cotrVar variable createVariable newVariable]}

```
${1:my_var} <- $2
```

## R Concatenate String

### {[cotrConcat concatenate combine]}

```
paste(${1:"string1"}, ${2:"string2"}, sep = "")
```

## R Create Constant

### {[cotrConst constant]}

```
${1:MY_CONST} <- $2
```

## R Function

### {[cotrFunc function subprogram procedure subroutine method]}

```
${2:my_function} <- function(${3:parameters}) {
  ${4:# Your code here}
}
```

## R Throw Exception

### {[cotrThrow throwError throwException]}

```
stop(${1:'Your message here'})
```

## R Class

### {[cotrClass class objectTemplate]}

```
# R does not have a built-in class type. Use a list or vector instead.
```

## R This Type Check

### {[thisTypeCheck thisType getThisType]}

```
class($CLIPBOARD)
```

## R Print Multi

### {[cotrPrintMulti printMultiLine]}

```
cat(${1:"Line 1",
${2:"Line 2",
${3:"Line 3")
```

## R Double Type

### {[cotrTypesNum numberType typeNumber doubleType typeDouble]}

```
# R uses 'numeric' for both integers and floating-point numbers.
```

## R Create Integer Variable

### {[cotrVarInt integer int variableInt intVariable createInt]}

```
${1:my_int} <- ${2:0}
```

## R Create Double Variable

### {[cotrVarDouble double doubleVariable variableDouble createDouble]}

```
${1:my_double} <- ${2:0.0}
```

## R If Statement

### {[cotrIf ifStatement]}

```
if (${1:condition}) {
  # Your code here
}
```


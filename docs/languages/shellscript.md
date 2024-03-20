---
title: Shellscript
description: Shellscript snippets on the rocks.
---

## [cotrTypesBoolFalse](/snippets/cotrtypesboolfalse)

Bash Boolean False

```shellscript
# Bash represents false as 0.
```

## [cotrVarString](/snippets/cotrvarstring)

Bash Create String Variable

```shellscript
# Assign a string value:
${1:myString}=${2:'myValue'}
```

## [cotrVar](/snippets/cotrvar)

Bash Variable

```shellscript
${1:myVar}=${2:value}
```

## [cotrIf](/snippets/cotrif)

Bash If Statement

```shellscript
if [ ${1:condition} ]; then
  ${2:// Your code here}
fi
```

## [cotrTypeCompare](/snippets/cotrtypecompare)

Bash Type Comparison

```shellscript
# Bash doesn't have direct type comparison, but you can use file or grep for basic checks.
```

## [cotrStructure](/snippets/cotrstructure)

Bash Project Structure (High-Level)

```shellscript
# Recommended High-Level Bash Project Structure:

# - bin/
#   - Contains executable scripts.
# - lib/
#   - Contains reusable functions and libraries.
# - src/
#   - Contains source code for scripts.
# - test/
#   - Contains unit tests.

# Note:
# - This is a basic structure; adjust based on project complexity and preferences.
```

## [cotrStructureFeatures](/snippets/cotrstructurefeatures)

Bash Project Structure (Feature/Module)

```shellscript
# Organize source code by feature or module within src/:

# - src/
#   - rendering/
#     - Contains scripts for rendering features.
#   - physics/
#     - Contains scripts for physics features.
#   - networking/
#     - Contains scripts for networking features.
#   - ... (Organize by feature or module)

# Note:
# - This approach promotes modularity and is suitable for larger projects.
```

## [cotrTypeConvert](/snippets/cotrtypeconvert)

Bash Type Conversion

```shellscript
# Bash is dynamically typed, so explicit conversion is often not needed.
# However, you can use tools like awk or bc for specific conversions.
```

## [cotrTypes](/snippets/cotrtypes)

Bash Types

```shellscript
# Bash is dynamically typed, but common data types include:
- string: Textual data
- integer: Numeric data (whole numbers)
- float: Numeric data (decimals)
- array: Ordered collection of values
- associative array: Key-value pairs
```

## [cotrVarStatic](/snippets/cotrvarstatic)

Bash Static Variable

```shellscript
# Bash doesn't have static variables in the same way as some other languages.
```

## [cotrInfo](/snippets/cotrinfo)

Bash Info

```shellscript
Typing: Dynamically typed
Paradigm: Imperative
Compilation: Interpreted
Concurrency: No
```

## [cotrConst](/snippets/cotrconst)

Bash Constant

```shellscript
# Bash uses readonly variables for constants:
readonly ${1:myConst}=${2:value}
```

## [cotrFuncArrow](/snippets/cotrfuncarrow)

Bash Arrow Function

```shellscript
# Bash doesn't have arrow functions.
```

## [cotrTypesBool](/snippets/cotrtypesbool)

Bash Boolean Type

```shellscript
# Bash uses 0 for false and non-zero values for true.
```

## [cotrCommentMulti](/snippets/cotrcommentmulti)

Bash Multi-Line Comment

```shellscript
: <<'END'
${1:Your comment here}
${2:Your comment here}
${3:Your comment here}
END
```

## [cotrFunc](/snippets/cotrfunc)

Bash Function

```shellscript
${2:myFunction}() {
  ${3:// Your code here}
}
```

## [cotrOperators](/snippets/cotroperators)

Bash Mathematical Operators

```shellscript
# Bash Mathematical Operators:
- Addition: +
- Subtraction: -
- Multiplication: *
- Division: /
- Modulus (Remainder): %
- Exponentiation: **
- Increment: ((var++)) or ((var+=1))
- Decrement: ((var--)) or ((var-=1))
- Assignment: =
- Addition assignment: +=
- Subtraction assignment: -=
- Multiplication assignment: *=
- Division assignment: /=
- Modulus assignment: %=
- Exponentiation assignment: **=
```

## [cotrRead](/snippets/cotrread)

Bash Read Input

```shellscript
read -p '${1:Prompt: }' ${2:varName}
```

## [cotrTypeCheck](/snippets/cotrtypecheck)

Bash Type Check

```shellscript
# Bash is dynamically typed, but you can use file or grep for basic checks:
file ${1:variable} | grep -q '${2:type}'
```

## [cotrTypesInt](/snippets/cotrtypesint)

Bash Integer Type

```shellscript
# Bash treats integers as numeric values without decimals.
```

## [cotrPrint](/snippets/cotrprint)

Bash Print

```shellscript
echo ${1:'Your message here'}
```

## [cotrFuncLambda](/snippets/cotrfunclambda)

Bash Lambda

```shellscript
# Bash doesn't have lambda functions.
```

## [cotrTypesDynamic](/snippets/cotrtypesdynamic)

Bash Dynamic Type

```shellscript
# Bash is dynamically typed; variables can hold different types of values.
```

## [cotrTypesList](/snippets/cotrtypeslist)

Bash List Type

```shellscript
# Bash uses arrays for lists:
myList=(item1 item2 item3)
```

## [cotrVarBool](/snippets/cotrvarbool)

Bash Create Boolean Variable

```shellscript
# Bash uses 0 for false and non-zero values for true:
${1:myBoolean}=${2:0}
```

## [cotrIfElse](/snippets/cotrifelse)

Bash If Else Statement

```shellscript
if [ ${1:condition} ]; then
  ${2:// Your code here}
else
  ${3:// Your code here}
fi
```

## [cotrConcat](/snippets/cotrconcat)

Bash Concatenate Strings

```shellscript
# Bash uses string juxtaposition for concatenation:
${1:var1}${2:var2}
```

## [cotrFuncArgsNamed](/snippets/cotrfuncargsnamed)

Bash Function Named Args

```shellscript
# Bash doesn't directly support named arguments, but you can simulate them using associative arrays or options parsing.
```

## [cotrGenList](/snippets/cotrgenlist)

Bash Generate List

```shellscript
# Bash doesn't have built-in list generation, but you can use loops or command substitution:
${1:myList}=( $(for i in {1..${2:10}}; do echo item$i; done) )
```

## [cotrNotEqual](/snippets/cotrnotequal)

Bash Not Equal To

```shellscript
# Bash uses '!=' for string inequality and '-ne' for numeric inequality:
[ ${1:var1} != ${2:var2} ]
```

## [cotrSwitch](/snippets/cotrswitch)

Bash Switch Statement

```shellscript
case ${1:variable} in
  ${2:pattern1})
    ${3:// Your code here}
    ;;
  ${4:pattern2})
    ${5:// Your code here}
    ;;
  *)
    ${6:// Your code here}
    ;;
esac
```

## [cotrOperatorsBool](/snippets/cotroperatorsbool)

Bash Boolean Operators

```shellscript
# Bash Boolean Operators:
- Logical AND: &&
- Logical OR: ||
- Logical NOT: !
- Equality: ==
- Inequality: !=
- Greater than: -gt
- Less than: -lt
- Greater than or equal to: -ge
- Less than or equal to: -le
```

## [cotrThrow](/snippets/cotrthrow)

Bash Throw Exception

```shellscript
# Bash doesn't have exceptions, but you can exit with an error message:
echo "Error: ${1:Your message here}" >&2; exit 1
```

## [cotrVarNum](/snippets/cotrvarnum)

Bash Create Number Variable

```shellscript
# Assign a numeric value:
${1:myNumber}=${2:10}
```

## [cotrVarMap](/snippets/cotrvarmap)

Bash Create Map Variable

```shellscript
# Create an associative array (map):
declare -A ${1:myMap}
${1:myMap}[${2:key1}]=${3:value1}
${1:myMap}[${4:key2}]=${5:value2}
```

## [cotrVarStringMulti](/snippets/cotrvarstringmulti)

Bash Create Multi-Line String Variable

```shellscript
# Use a here document for multi-line strings:
${1:myString}<<EOF
${2:Line 1}
${3:Line 2}
${4:Line 3}
EOF
```

## [cotrVarTyped](/snippets/cotrvartyped)

Bash Create Typed Variable

```shellscript
# Bash is dynamically typed, so variables don't have explicit types.
```

## [cotrShebang](/snippets/cotrshebang)

Bash Shebang

```shellscript
#!/bin/bash
```

## [cotrTryCatch](/snippets/cotrtrycatch)

Bash Try Catch

```shellscript
# Bash doesn't have try/catch, but you can use set -e and trap ERR:
set -e; trap 'echo "Error: ${1:Your message here}" >&2; exit 1' ERR; ${2:// Your code here}
```

## [cotrTypesString](/snippets/cotrtypesstring)

Bash String Type

```shellscript
# Bash represents strings as sequences of characters.
```

## [cotrVarDate](/snippets/cotrvardate)

Bash Create Date Variable

```shellscript
# Bash doesn't have a dedicated date type, but you can store date strings:
${1:myDate}=\$(date)
```

## [cotrVarList](/snippets/cotrvarlist)

Bash Create List Variable

```shellscript
# Create an array (list):
${1:myList}=( ${2:item1} ${3:item2} ${4:item3} )
```

## [cotrGenMap](/snippets/cotrgenmap)

Bash Generate Map

```shellscript
# Bash doesn't have built-in map generation, but you can use associative arrays:
declare -A ${1:myMap}; for i in {1..${2:10}}; do myMap[key$i]=value$i; done
```

## [cotrPrintMulti](/snippets/cotrprintmulti)

Bash Print Multi

```shellscript
# Use echo with -e for multi-line output:
echo -e "${1:Line 1}\n${2:Line 2}\n${3:Line 3}"
```

## [cotrTypesMap](/snippets/cotrtypesmap)

Bash Map Type

```shellscript
# Bash uses associative arrays for maps:
declare -A myMap; myMap[key1]=value1; myMap[key2]=value2
```

## [cotrFuncArgs](/snippets/cotrfuncargs)

Bash Function Args

```shellscript
${2:myFunction}() {
  local ${3:arg1}=${4:\$1}
  local ${5:arg2}=${6:\$2}
  ${7:// Your code here}
}
```

## [cotrNow](/snippets/cotrnow)

Bash Date Now

```shellscript
# Get the current date and time:
now=$(date)
```

## [cotrVarNullable](/snippets/cotrvarnullable)

Bash Create Nullable Variable

```shellscript
# Bash doesn't have null, but you can use an empty string or a special value:
${1:myVar}=${2:''}
```

## [cotrVarSyntax](/snippets/cotrvarsyntax)

Bash Variable Declaration Syntax

```shellscript
# Bash Variable Declaration Syntax:

# - varName=value: Assigns a value to a variable.
# - declare varName: Declares a variable without assigning a value.
# - readonly varName=value: Creates a read-only variable (constant).
```

## [cotrComment](/snippets/cotrcomment)

Bash Comment

```shellscript
# ${1:Your comment here}
```

## [cotrEntry](/snippets/cotrentry)

Bash Entry Point

```shellscript
# Bash scripts typically start with the shebang line:
#!/bin/bash
```

## [cotrFuncAnon](/snippets/cotrfuncanon)

Bash Anonymous Function

```shellscript
# Bash doesn't have true anonymous functions, but you can use function expressions:
${1:myFunction}() { ${2:// Your code here} }
```

## [cotrCase](/snippets/cotrcase)

Bash Case Statement

```shellscript
case ${1:variable} in
  ${2:pattern1})
    ${3:// Your code here}
    ;;
  ${4:pattern2})
    ${5:// Your code here}
    ;;
  *)
    ${6:// Your code here}
    ;;
esac
```

## [cotrStructureFiles](/snippets/cotrstructurefiles)

Bash Project Structure (File Type)

```shellscript
# Organize source code by file type within src/:

# - src/
#   - utils/
#     - Contains utility functions.
#   - data/
#     - Contains data processing scripts.
#   - tasks/
#     - Contains scripts for specific tasks.
#   - ... (Organize by file type)

# Note:
# - This approach can be helpful for smaller projects or specific use cases.
```

## [cotrTernary](/snippets/cotrternary)

Bash Ternary Operator

```shellscript
# Bash doesn't have a ternary operator, but you can use an if statement:
${1:condition} && ${2:trueValue} || ${3:falseValue}
```

## [cotrTypesDate](/snippets/cotrtypesdate)

Bash Date Type

```shellscript
# Bash doesn't have a dedicated date type, but you can use the 'date' command for date manipulation.
```

## [cotrTypesNum](/snippets/cotrtypesnum)

Bash Number Type

```shellscript
# Bash treats numbers as either integers or floating-point values.
```

## [cotrWhileLoop](/snippets/cotrwhileloop)

Bash While Loop

```shellscript
while [ ${1:condition} ]; do
  ${2:// Your code here}
done
```

## [cotrFuncSyntax](/snippets/cotrfuncsyntax)

Bash Function Syntax

```shellscript
# Bash Function Syntax:
function ${1:functionName} {
  ${2:// Your code here}
}
```

## [cotrTypesBoolTrue](/snippets/cotrtypesbooltrue)

Bash Boolean True

```shellscript
# Bash represents true as any non-zero value.
```

## [cotrInterpolate](/snippets/cotrinterpolate)

Bash Interpolate String

```shellscript
# Bash uses double quotes for variable interpolation:
echo "Hello, ${1:name}!"
```

## [cotrTypesNull](/snippets/cotrtypesnull)

Bash Null Type

```shellscript
# Bash doesn't have a dedicated null type, but you can use an empty string or a special value like 'null' to represent null.
```

## [cotrForLoop](/snippets/cotrforloop)

Bash For Loop

```shellscript
for ${1:i} in ${2:list}; do
  ${3:// Your code here}
done
```

## [cotrEqual](/snippets/cotrequal)

Bash Equal To

```shellscript
# Bash uses '==' for string equality and '-eq' for numeric equality:
[ ${1:var1} == ${2:var2} ]
```

## [cotrForIn](/snippets/cotrforin)

Bash For...In Loop

```shellscript
for ${1:item} in ${2:list}; do
  ${3:// Your code here}
done
```


---
title: Python
description: Python snippets on the rocks.
---

## [cotrTypeCompare](/snippets/cotrtypecompare)

Python Type Comparison

```python
# Check if two variables have the same type:
if type(${1:variable1}) is type(${2:variable2}):
  # Your code here
```

## [cotrTypesString](/snippets/cotrtypesstring)

Python String Type

```python
str
```

## [cotrOperators](/snippets/cotroperators)

Python Mathematical Operators

```python
# Python Mathematical Operators
# Addition: +
# Subtraction: -
# Multiplication: *
# Division: /
# Modulus (Remainder): %
# Exponentiation: **
# Floor Division: //
# Increment: Not supported in Python
# Decrement: Not supported in Python
# Assignment: =
# Addition assignment: +=
# Subtraction assignment: -=
# Multiplication assignment: *=
# Division assignment: /=
# Modulus assignment: %=
# Exponentiation assignment: **=
# Floor Division assignment: //=
```

## [cotrTypesBool](/snippets/cotrtypesbool)

Python Boolean Type

```python
bool
```

## [cotrTypesList](/snippets/cotrtypeslist)

Python List Type

```python
list
```

## [cotrVarMap](/snippets/cotrvarmap)

Python Create Dictionary Variable

```python
${1:myDict} = {
    '${2:key1}': ${3:value1},
    '${4:key2}': ${5:value2}
}
```

## [cotrIfElse](/snippets/cotrifelse)

Python If Else Statement

```python
if ${1:condition}:
  # Your code here
else:
  # Your code here
```

## [cotrTypesInt](/snippets/cotrtypesint)

Python Integer Type

```python
int
```

## [cotrVarNum](/snippets/cotrvarnum)

Python Create Integer Variable

```python
${1:myInt} = ${2:0}
```

## [cotrVarNumAlt](/snippets/cotrvarnumalt)

Python Create Float Variable

```python
${1:myFloat} = ${2:0.0}
```

## [cotrComment](/snippets/cotrcomment)

Python Comment

```python
# ${1:Your comment here}
```

## [cotrCommentMulti](/snippets/cotrcommentmulti)

Python Multi-Line Comment

```python
'''
${1:Your comment here}
'''
```

## [cotrIf](/snippets/cotrif)

Python If Statement

```python
if ${1:condition}:
  # Your code here
```

## [cotrTypeCheck](/snippets/cotrtypecheck)

Python Type Check

```python
type(${1:variable})
```

## [cotrTypes](/snippets/cotrtypes)

Python Types

```python
$BLOCK_COMMENT_START
Python is a dynamically typed language.

Some common types in Python include:
- int: Integer
- float: Floating-point number
- complex: Complex number
- str: String
- bool: Boolean
- list: List
- tuple: Tuple
- set: Set
- dict: Dictionary
- NoneType: Represents the absence of a value
- bytes: Byte sequence
- bytearray: Mutable byte sequence
- memoryview: Memory view object
- range: Range object
- frozenset: Immutable set
- object: Base class for all Python classes
- function: Function object
- type: Type object
- class: Custom class defined by the user
- module: Module object
- file: File object
- Exception: Base class for all exceptions
$BLOCK_COMMENT_END
```

## [cotrTypesNum](/snippets/cotrtypesnum)

Python Float Type

```python
float
```

## [cotrTypesDate](/snippets/cotrtypesdate)

Python Date Type

```python
from datetime import datetime
```

## [cotrTypesMap](/snippets/cotrtypesmap)

Python Dictionary Type

```python
dict
```

## [cotrVarDate](/snippets/cotrvardate)

Python Create Date Variable

```python
from datetime import datetime

my_date = datetime(${1:year}, ${2:month}, ${3:day})
```

## [cotrForLoop](/snippets/cotrforloop)

Python For Loop

```python
for ${1:i} in range(${2:10}):
  # Your code here
```

## [cotrEnum](/snippets/cotrenum)

Python Enum

```python
class ${1:MyEnum}(Enum):
  ${2:value1} = ${3:1}
  ${4:value2} = ${5:2}
  # Add more values here
```

## [cotrEqual](/snippets/cotrequal)

Python Equal To

```python
==
```

## [cotrPrint](/snippets/cotrprint)

Python Print

```python
print(${1:'Your message here'})
```

## [cotrThrow](/snippets/cotrthrow)

Python Throw Exception

```python
raise ${1:Exception('Your message here')}
```

## [cotrNotEqual](/snippets/cotrnotequal)

Python Not Equal To

```python
!=
```

## [cotrNow](/snippets/cotrnow)

Python Date Now

```python
from datetime import datetime

now = datetime.now()
```

## [cotrForInLoop](/snippets/cotrforinloop)

Python For...In Loop

```python
for ${1:item} in ${2:iterable}:
  # Your code here
```

## [cotrFunc](/snippets/cotrfunc)

Python Function

```python
def ${2:my_function}(${3:parameters}):
    ${4:# Your code here}

```

## [cotrEntry](/snippets/cotrentry)

Python Entry Point

```python
# Python Entry Point
# To run this program, use: `python filename.py`

if __name__ == '__main__':
    # Your code here

```

## [cotrTypeConvert](/snippets/cotrtypeconvert)

Python Type Conversion

```python
# Python Type Conversion:

# Implicit conversions (Python performs automatically):
# - Can be unpredictable, especially with loose equality (==).

# Explicit conversions:
# - int(variable)  // Converts to integer
# - float(variable)  // Converts to float
# - str(variable)  // Converts to string
# - bool(variable)  // Converts to boolean

# Note:
# - Be aware of implicit conversions and use explicit conversions when necessary for clarity and control.
```

## [cotrTypesDynamic](/snippets/cotrtypesdynamic)

Python Dynamic Type

```python
Any # Note: Python is dynamically typed. Use the Typing module to specify types.
```

## [cotrVarList](/snippets/cotrvarlist)

Python Create List Variable

```python
${1:myList} = [${2:1}, ${3:2}, ${4:3}]
```

## [cotrFuncArrow](/snippets/cotrfuncarrow)

Python Arrow Function

```python
${2:my_function} = lambda ${3:parameters}: ${4:// Your code here}
```

## [cotrFuncSyntax](/snippets/cotrfuncsyntax)

Python Function Syntax

```python
# Python Function Syntax
# Basic function: def function_name(parameters): ...
# Function with arguments: def function_name(arg1, arg2, ...): ...
# Function with named arguments: def function_name(*, arg1=value1, arg2=value2, ...): ...
```

## [cotrClass](/snippets/cotrclass)

Python Class

```python
class ${1:MyClass}:
  # Your code here
```

## [cotrInfo](/snippets/cotrinfo)

Python Info

```python
Typing: Dynamically typed. Use the Typing module to specify types.
Paradigm: Multi-paradigm: object-oriented, imperative, functional, procedural, reflective
Compilation: Interpreted
Concurrency: Supports multi-threading and asynchronous programming with asyncio
```

## [cotrVar](/snippets/cotrvar)

Python Create Variable

```python
${1:myVar} = ${2:value}
```

## [cotrVarBool](/snippets/cotrvarbool)

Python Create Boolean Variable

```python
${1:myBool} = ${2:True}
```

## [cotrTypesBoolFalse](/snippets/cotrtypesboolfalse)

Python Boolean False

```python
False
```

## [cotrInterpolate](/snippets/cotrinterpolate)

Python Interpolate String

```python
f"${1:Your message here}"
```

## [cotrConcat](/snippets/cotrconcat)

Python Concatenate String

```python
"${1:Your message here}" + "${2:Another message}"
```

## [cotrPrintMulti](/snippets/cotrprintmulti)

Python Print Multi

```python
print('''
${1:Line 1}
${2:Line 2}
${3:Line 3}
''')
```

## [cotrTypesBoolTrue](/snippets/cotrtypesbooltrue)

Python Boolean True

```python
True
```

## [cotrVarNullable](/snippets/cotrvarnullable)

Python Create Nullable Variable

```python
${1:my_var} = None  # Variable can be set to None.
```

## [cotrTernary](/snippets/cotrternary)

Python Ternary Operator

```python
${1:trueValue} if ${2:condition} else ${3:falseValue}
```

## [cotrNull](/snippets/cotrnull)

Python Null Type

```python
None
```

## [cotrVarTyped](/snippets/cotrvartyped)

Python Create Typed Variable

```python
${1:my_var} = $2  # Note: Python is dynamically typed.
```

## [cotrConst](/snippets/cotrconst)

Python Create Constant

```python
${1:MY_CONST} = ${2:value}
```

## [cotrFuncArgs](/snippets/cotrfuncargs)

Python Function Args

```python
# In Python, functions can have arguments with default values.
def ${2:my_function}(${3:arg1}, ${4:arg2}=${5:'defaultVal'}):
    ${6:# Your code here}

```

## [cotrVarStringMulti](/snippets/cotrvarstringmulti)

Python Create Multi-Line String Variable

```python
${1:myString} = '''
${2:Line 1}
${3:Line 2}
${4:Line 3}
'''
```

## [cotrFuncArgsNamed](/snippets/cotrfuncargsnamed)

Python Function Named Args

```python
def ${2:my_function}(*, ${3:arg1}=${4:value1}, ${5:arg2}=${6:value2}):
    ${7:# Your code here}

```

## [cotrTryCatch](/snippets/cotrtrycatch)

Python Try Except

```python
try:
  # Your code here
except ${1:Exception} as ${2:e}:
  # Your code here
```

## [cotrStructure](/snippets/cotrstructure)

Python Project Structure (High-Level)

```python
# Recommended High-Level Python Project Structure:

# - /
#   - README.md: Project description and instructions.
#   - setup.py: Package and dependency configuration.
#   - requirements.txt: List of dependencies for pip.
#   - .env: Environment-specific configurations.

# - src/
#   - Contains all the source code of the project.
#   - /package_name/
#     - __init__.py: Makes Python treat directories as containing packages.
#     - main.py: Entry point of the application.
#     - /module1/
#     - /module2/

# - tests/
#   - Contains test files.
#   - /unit/
#   - /integration/

# - docs/
#   - Documentation files for the project.

# - data/
#   - Data files used in the project (if applicable).

# - scripts/
#   - Utility scripts for deployment, setup, etc.

# Note:
# - This structure is adaptable and can be modified according to the project's needs.
# - Use virtual environments to isolate project-specific dependencies.
```

## [cotrOperatorsBool](/snippets/cotroperatorsbool)

Python Boolean Operators

```python
# Python Boolean Operators
# Logical AND: and
# Logical OR: or
# Logical NOT: not
# Equality: ==
# Inequality: !=
# Greater than: >
# Less than: <
# Greater than or equal to: >=
# Less than or equal to: <=
```

## [cotrVarSyntax](/snippets/cotrvarsyntax)

Variable Declaration Syntax

```python
# Python Variable Declaration Syntax:

# - Python is dynamically typed, so there is no explicit type declaration.
# - Variables are created when you first assign a value to them.
# - Variables can be reassigned to different types.

# Note:
# - Python does not have direct equivalents to 'var', 'let', or 'const'.
# - Use descriptive variable names to improve code readability.
```

## [cotrVarString](/snippets/cotrvarstring)

Python Create String Variable

```python
${1:myString} = ${2:''}
```

## [cotrWhileLoop](/snippets/cotrwhileloop)

Python While Loop

```python
while ${1:condition}:
  # Your code here
```


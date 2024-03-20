## Python If Else Statement

### [cotrIfElse](/snippets/cotrIfElse)

```python
if ${1:condition}:
  # Your code here
else:
  # Your code here
```

## Python Function

### [cotrFunc](/snippets/cotrFunc)

```python
def ${2:my_function}(${3:parameters}):
    ${4:# Your code here}

```

## Python Boolean False

### [cotrTypesBoolFalse](/snippets/cotrTypesBoolFalse)

```python
False
```

## Python Interpolate String

### [cotrInterpolate](/snippets/cotrInterpolate)

```python
f"${1:Your message here}"
```

## Variable Declaration Syntax

### [cotrVarSyntax](/snippets/cotrVarSyntax)

```python
# Python Variable Declaration Syntax:

# - Python is dynamically typed, so there is no explicit type declaration.
# - Variables are created when you first assign a value to them.
# - Variables can be reassigned to different types.

# Note:
# - Python does not have direct equivalents to 'var', 'let', or 'const'.
# - Use descriptive variable names to improve code readability.
```

## Python Date Now

### [cotrNow](/snippets/cotrNow)

```python
from datetime import datetime

now = datetime.now()
```

## Python Concatenate String

### [cotrConcat](/snippets/cotrConcat)

```python
"${1:Your message here}" + "${2:Another message}"
```

## Python Create Float Variable

### [cotrVarNumAlt](/snippets/cotrVarNumAlt)

```python
${1:myFloat} = ${2:0.0}
```

## Python Create List Variable

### [cotrVarList](/snippets/cotrVarList)

```python
${1:myList} = [${2:1}, ${3:2}, ${4:3}]
```

## Python While Loop

### [cotrWhileLoop](/snippets/cotrWhileLoop)

```python
while ${1:condition}:
  # Your code here
```

## Python Ternary Operator

### [cotrTernary](/snippets/cotrTernary)

```python
${1:trueValue} if ${2:condition} else ${3:falseValue}
```

## Python Class

### [cotrClass](/snippets/cotrClass)

```python
class ${1:MyClass}:
  # Your code here
```

## Python Types

### [cotrTypes](/snippets/cotrTypes)

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

## Python Create Nullable Variable

### [cotrVarNullable](/snippets/cotrVarNullable)

```python
${1:my_var} = None  # Variable can be set to None.
```

## Python Create Boolean Variable

### [cotrVarBool](/snippets/cotrVarBool)

```python
${1:myBool} = ${2:True}
```

## Python Create Dictionary Variable

### [cotrVarMap](/snippets/cotrVarMap)

```python
${1:myDict} = {
    '${2:key1}': ${3:value1},
    '${4:key2}': ${5:value2}
}
```

## Python Throw Exception

### [cotrThrow](/snippets/cotrThrow)

```python
raise ${1:Exception('Your message here')}
```

## Python Entry Point

### [cotrEntry](/snippets/cotrEntry)

```python
# Python Entry Point
# To run this program, use: `python filename.py`

if __name__ == '__main__':
    # Your code here

```

## Python Print

### [cotrPrint](/snippets/cotrPrint)

```python
print(${1:'Your message here'})
```

## Python Mathematical Operators

### [cotrOperators](/snippets/cotrOperators)

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

## Python Dictionary Type

### [cotrTypesMap](/snippets/cotrTypesMap)

```python
dict
```

## Python For...In Loop

### [cotrForInLoop](/snippets/cotrForInLoop)

```python
for ${1:item} in ${2:iterable}:
  # Your code here
```

## Python Type Comparison

### [cotrTypeCompare](/snippets/cotrTypeCompare)

```python
# Check if two variables have the same type:
if type(${1:variable1}) is type(${2:variable2}):
  # Your code here
```

## Python String Type

### [cotrTypesString](/snippets/cotrTypesString)

```python
str
```

## Python Float Type

### [cotrTypesNum](/snippets/cotrTypesNum)

```python
float
```

## Python Function Named Args

### [cotrFuncArgsNamed](/snippets/cotrFuncArgsNamed)

```python
def ${2:my_function}(*, ${3:arg1}=${4:value1}, ${5:arg2}=${6:value2}):
    ${7:# Your code here}

```

## Python Multi-Line Comment

### [cotrCommentMulti](/snippets/cotrCommentMulti)

```python
'''
${1:Your comment here}
'''
```

## Python Type Check

### [cotrTypeCheck](/snippets/cotrTypeCheck)

```python
type(${1:variable})
```

## Python Integer Type

### [cotrTypesInt](/snippets/cotrTypesInt)

```python
int
```

## Python Boolean Type

### [cotrTypesBool](/snippets/cotrTypesBool)

```python
bool
```

## Python Enum

### [cotrEnum](/snippets/cotrEnum)

```python
class ${1:MyEnum}(Enum):
  ${2:value1} = ${3:1}
  ${4:value2} = ${5:2}
  # Add more values here
```

## Python Create Constant

### [cotrConst](/snippets/cotrConst)

```python
${1:MY_CONST} = ${2:value}
```

## Python Function Args

### [cotrFuncArgs](/snippets/cotrFuncArgs)

```python
# In Python, functions can have arguments with default values.
def ${2:my_function}(${3:arg1}, ${4:arg2}=${5:'defaultVal'}):
    ${6:# Your code here}

```

## Python Boolean True

### [cotrTypesBoolTrue](/snippets/cotrTypesBoolTrue)

```python
True
```

## Python Create Integer Variable

### [cotrVarNum](/snippets/cotrVarNum)

```python
${1:myInt} = ${2:0}
```

## Python Arrow Function

### [cotrFuncArrow](/snippets/cotrFuncArrow)

```python
${2:my_function} = lambda ${3:parameters}: ${4:// Your code here}
```

## Python Type Conversion

### [cotrTypeConvert](/snippets/cotrTypeConvert)

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

## Python List Type

### [cotrTypesList](/snippets/cotrTypesList)

```python
list
```

## Python Create Date Variable

### [cotrVarDate](/snippets/cotrVarDate)

```python
from datetime import datetime

my_date = datetime(${1:year}, ${2:month}, ${3:day})
```

## Python If Statement

### [cotrIf](/snippets/cotrIf)

```python
if ${1:condition}:
  # Your code here
```

## Python Comment

### [cotrComment](/snippets/cotrComment)

```python
# ${1:Your comment here}
```

## Python Info

### [cotrInfo](/snippets/cotrInfo)

```python
Typing: Dynamically typed. Use the Typing module to specify types.
Paradigm: Multi-paradigm: object-oriented, imperative, functional, procedural, reflective
Compilation: Interpreted
Concurrency: Supports multi-threading and asynchronous programming with asyncio
```

## Python Boolean Operators

### [cotrOperatorsBool](/snippets/cotrOperatorsBool)

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

## Python Create String Variable

### [cotrVarString](/snippets/cotrVarString)

```python
${1:myString} = ${2:''}
```

## Python Function Syntax

### [cotrFuncSyntax](/snippets/cotrFuncSyntax)

```python
# Python Function Syntax
# Basic function: def function_name(parameters): ...
# Function with arguments: def function_name(arg1, arg2, ...): ...
# Function with named arguments: def function_name(*, arg1=value1, arg2=value2, ...): ...
```

## Python Not Equal To

### [cotrNotEqual](/snippets/cotrNotEqual)

```python
!=
```

## Python Dynamic Type

### [cotrTypesDynamic](/snippets/cotrTypesDynamic)

```python
Any # Note: Python is dynamically typed. Use the Typing module to specify types.
```

## Python Print Multi

### [cotrPrintMulti](/snippets/cotrPrintMulti)

```python
print('''
${1:Line 1}
${2:Line 2}
${3:Line 3}
''')
```

## Python For Loop

### [cotrForLoop](/snippets/cotrForLoop)

```python
for ${1:i} in range(${2:10}):
  # Your code here
```

## Python Null Type

### [cotrNull](/snippets/cotrNull)

```python
None
```

## Python Equal To

### [cotrEqual](/snippets/cotrEqual)

```python
==
```

## Python Create Variable

### [cotrVar](/snippets/cotrVar)

```python
${1:myVar} = ${2:value}
```

## Python Create Typed Variable

### [cotrVarTyped](/snippets/cotrVarTyped)

```python
${1:my_var} = $2  # Note: Python is dynamically typed.
```

## Python Project Structure (High-Level)

### [cotrStructure](/snippets/cotrStructure)

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

## Python Create Multi-Line String Variable

### [cotrVarStringMulti](/snippets/cotrVarStringMulti)

```python
${1:myString} = '''
${2:Line 1}
${3:Line 2}
${4:Line 3}
'''
```

## Python Try Except

### [cotrTryCatch](/snippets/cotrTryCatch)

```python
try:
  # Your code here
except ${1:Exception} as ${2:e}:
  # Your code here
```

## Python Date Type

### [cotrTypesDate](/snippets/cotrTypesDate)

```python
from datetime import datetime
```


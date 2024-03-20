## Python Dictionary Type

### {[cotrTypesMap mapType typeMap hashmapType structType dictType typeDict typeScruct]}

```
dict
```

## Python Try Except

### {[cotrTryCatch tryCatch]}

```
try:
  # Your code here
except ${1:Exception} as ${2:e}:
  # Your code here
```

## Variable Declaration Syntax

### {[cotrVarSyntax variableSyntax howToVariables letSyntax]}

```
# Python Variable Declaration Syntax:

# - Python is dynamically typed, so there is no explicit type declaration.
# - Variables are created when you first assign a value to them.
# - Variables can be reassigned to different types.

# Note:
# - Python does not have direct equivalents to 'var', 'let', or 'const'.
# - Use descriptive variable names to improve code readability.
```

## Python Create Nullable Variable

### {[cotrVarNullable variableNullable nullableVariable]}

```
${1:my_var} = None  # Variable can be set to None.
```

## Python Create Constant

### {[cotrConst constant]}

```
${1:MY_CONST} = ${2:value}
```

## Python For...In Loop

### {[cotrForInLoop forIn]}

```
for ${1:item} in ${2:iterable}:
  # Your code here
```

## Python Function Args

### {[cotrFuncArgs functionArgs functionWithArgs]}

```
# In Python, functions can have arguments with default values.
def ${2:my_function}(${3:arg1}, ${4:arg2}=${5:'defaultVal'}):
    ${6:# Your code here}

```

## Python Arrow Function

### {[cotrFuncArrow arrowFunc]}

```
${2:my_function} = lambda ${3:parameters}: ${4:// Your code here}
```

## Python Comment

### {[cotrComment comment note]}

```
# ${1:Your comment here}
```

## Python Ternary Operator

### {[cotrTernary ternary conditionalOperator]}

```
${1:trueValue} if ${2:condition} else ${3:falseValue}
```

## Python Multi-Line Comment

### {[cotrCommentMulti multiLineComment commentMultiLine blockComment]}

```
'''
${1:Your comment here}
'''
```

## Python Type Check

### {[cotrTypeCheck checkType getType typeOf]}

```
type(${1:variable})
```

## Python String Type

### {[cotrTypesString stringType typeString textType typeText]}

```
str
```

## Python Create Typed Variable

### {[cotrVarTyped typedVariable variableWithType]}

```
${1:my_var} = $2  # Note: Python is dynamically typed.
```

## Python Create String Variable

### {[cotrVarString string stringVariable variableString text createString createText]}

```
${1:myString} = ${2:''}
```

## Python If Statement

### {[cotrIf ifStatement]}

```
if ${1:condition}:
  # Your code here
```

## Python Create Integer Variable

### {[cotrVarNum number float floatVariable variableFloat variableNumber numberVariable]}

```
${1:myInt} = ${2:0}
```

## Python Create Boolean Variable

### {[cotrVarBool variableBool bool boolVariable createBool]}

```
${1:myBool} = ${2:True}
```

## Python Create List Variable

### {[cotrVarList createList listVariable arrayVariable variableList variableArray list array]}

```
${1:myList} = [${2:1}, ${3:2}, ${4:3}]
```

## Python Throw Exception

### {[cotrThrow throwError throwException]}

```
raise ${1:Exception('Your message here')}
```

## Python This Type Check

### {[thisTypeCheck thisType getThisType]}

```
type($CLIPBOARD).__name__
```

## Python Float Type

### {[cotrTypesNum numberType typeNumber doubleType typeDouble]}

```
float
```

## Python Boolean Type

### {[cotrTypesBool booleanType typeBool]}

```
bool
```

## Python If Else Statement

### {[cotrIfElse ifElseStatement]}

```
if ${1:condition}:
  # Your code here
else:
  # Your code here
```

## Python Info

### {[cotrInfo languageInfo info]}

```
Typing: Dynamically typed. Use the Typing module to specify types.
Paradigm: Multi-paradigm: object-oriented, imperative, functional, procedural, reflective
Compilation: Interpreted
Concurrency: Supports multi-threading and asynchronous programming with asyncio
```

## Python Interpolate String

### {[cotrInterpolate interpolate variableExpansion variableSubstitution stringPlaceholders stringInterpolation]}

```
f"${1:Your message here}"
```

## Python Date Type

### {[cotrTypesDate dateType typeDate timeType timestampType dateTimeType]}

```
from datetime import datetime
```

## Python Date Now

### {[cotrNow now currentTime dateNow]}

```
from datetime import datetime

now = datetime.now()
```

## Python Print

### {[cotrPrint print log systemOut write consoleLog]}

```
print(${1:'Your message here'})
```

## Python For Loop

### {[cotrForLoop forLoop forX]}

```
for ${1:i} in range(${2:10}):
  # Your code here
```

## Python Enum

### {[cotrEnum enum]}

```
class ${1:MyEnum}(Enum):
  ${2:value1} = ${3:1}
  ${4:value2} = ${5:2}
  # Add more values here
```

## Python Entry Point

### {[cotrEntry entry start startingPoint]}

```
# Python Entry Point
# To run this program, use: `python filename.py`

if __name__ == '__main__':
    # Your code here

```

## Python Types

### {[cotrTypes types allTypes languageTypes builtInTypes dataTypes]}

```
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

## Python List Type

### {[cotrTypesList listType typeList typeArray]}

```
list
```

## Python Concatenate String

### {[cotrConcat concatenate combine]}

```
"${1:Your message here}" + "${2:Another message}"
```

## Python Print Multi

### {[cotrPrintMulti printMultiLine]}

```
print('''
${1:Line 1}
${2:Line 2}
${3:Line 3}
''')
```

## Python Boolean Operators

### {[cotrOperatorsBool booleanOperators logic]}

```
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

## Python Function Named Args

### {[cotrFuncArgsNamed functionNamedArgs]}

```
def ${2:my_function}(*, ${3:arg1}=${4:value1}, ${5:arg2}=${6:value2}):
    ${7:# Your code here}

```

## Python Mathematical Operators

### {[cotrOperators operators mathDocs]}

```
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

## Python Not Equal To

### {[cotrNotEqual notEqual doesNotEqual]}

```
!=
```

## Python Type Comparison

### {[cotrTypeCompare compareTypes]}

```
# Check if two variables have the same type:
if type(${1:variable1}) is type(${2:variable2}):
  # Your code here
```

## Python Create Variable

### {[cotrVar variable createVariable newVariable]}

```
${1:myVar} = ${2:value}
```

## Python Create Date Variable

### {[cotrVarDate dateVariable variableDate date]}

```
from datetime import datetime

my_date = datetime(${1:year}, ${2:month}, ${3:day})
```

## Python Create Dictionary Variable

### {[cotrVarMap createMap createStruct variableMap variableStruct mapVariable structVariable dictVariable variableDict createDict]}

```
${1:myDict} = {
    '${2:key1}': ${3:value1},
    '${4:key2}': ${5:value2}
}
```

## Python Project Structure (High-Level)

### {[cotrStructure structure architecture]}

```
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

## Python Type Conversion

### {[cotrTypeConvert cotrTypeCast cotrConvert cotrCast]}

```
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

## Python Boolean False

### {[cotrTypesBoolFalse false off booleanFalse]}

```
False
```

## Python Class

### {[cotrClass class objectTemplate]}

```
class ${1:MyClass}:
  # Your code here
```

## Python Equal To

### {[cotrEqual equal]}

```
==
```

## Python Integer Type

### {[cotrTypesInt intType typeInt]}

```
int
```

## Python Boolean True

### {[cotrTypesBoolTrue true booleanTrue on]}

```
True
```

## Python Null Type

### {[cotrNull null nil none nothing option]}

```
None
```

## Python Create Multi-Line String Variable

### {[cotrVarStringMulti multiLineString varStringMulti stringVariableMulti createMultiLineString]}

```
${1:myString} = '''
${2:Line 1}
${3:Line 2}
${4:Line 3}
'''
```

## Python While Loop

### {[cotrWhileLoop whileLoop whileTrue]}

```
while ${1:condition}:
  # Your code here
```

## Python Function Syntax

### {[cotrFuncSyntax functionSyntax functionDocs]}

```
# Python Function Syntax
# Basic function: def function_name(parameters): ...
# Function with arguments: def function_name(arg1, arg2, ...): ...
# Function with named arguments: def function_name(*, arg1=value1, arg2=value2, ...): ...
```

## Python Create Float Variable

### {[cotrVarNumAlt float variableFloat floatVariable]}

```
${1:myFloat} = ${2:0.0}
```

## Python Function

### {[cotrFunc function subprogram procedure subroutine method]}

```
def ${2:my_function}(${3:parameters}):
    ${4:# Your code here}

```

## Python Dynamic Type

### {[cotrTypesDynamic typesDynamic typesAny dynamicType anyType]}

```
Any # Note: Python is dynamically typed. Use the Typing module to specify types.
```


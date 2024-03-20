## Ruby Function Named Args

### {[cotrFuncArgsNamed functionNamedArgs]}

```
def ${2:my_function}(${3:arg1}: ${4:value1}, ${5:arg2}: ${6:value2})
  ${7:# Your code here}
end
```

## Variable Declaration Syntax

### {[cotrVarSyntax variableSyntax howToVariables letSyntax]}

```
# Ruby Variable Declaration Syntax:

# - Ruby is dynamically typed, so there is no explicit type declaration.
# - Variables are created when you first assign a value to them.
# - Variables can be reassigned to different types.

# Note:
# - Ruby does not have direct equivalents to 'var', 'let', or 'const'.
# - Use descriptive variable names to improve code readability.
```

## Ruby Concatenate Strings

### {[cotrConcat concatenate combine]}

```
"${1:string1}" + "${2:string2}"
```

## Ruby Boolean True

### {[cotrTypesBoolTrue true booleanTrue on]}

```
true
```

## Ruby Date Type

### {[cotrTypesDate dateType typeDate timeType timestampType dateTimeType]}

```
require 'date'

Date
```

## Ruby Create Variable

### {[cotrVar variable createVariable newVariable]}

```
${1:my_var} = $2
```

## Ruby Create Float Variable

### {[cotrVarNum number float floatVariable variableFloat variableNumber numberVariable]}

```
${1:my_float} = ${2:0.0}
```

## Ruby Create Constant

### {[cotrConst constant]}

```
${1:MY_CONST} = $2
```

## Ruby Try Catch

### {[cotrTryCatch tryCatch]}

```
begin
  ${1:# Your code here}
rescue => ${2:exception}
  ${3:# Your code here}
end
```

## Ruby Info

### {[cotrInfo languageInfo info]}

```
Typing: Dynamically typed
Paradigm: Multi-paradigm: object-oriented, imperative, functional, reflective
Compilation: Interpreted
Concurrency: Supports multi-threading and concurrent programming with fibers
```

## Ruby Types

### {[cotrTypes types allTypes languageTypes builtInTypes dataTypes]}

```
$BLOCK_COMMENT_START
Ruby is a dynamically typed language.

Some common types in Ruby include:
- Integer: Integer
- Float: Floating-point number
- String: String
- Symbol: Symbol
- Array: Array
- Hash: Hash (associative array)
- Range: Range
- Regexp: Regular expression
- TrueClass, FalseClass: Boolean values
- NilClass: Represents the absence of a value
- Proc: Block of code (lambda, proc)
- Method: Method object
- Class, Module: Class and module objects
- Time: Time object
- File: File object
- IO: Input/output stream
- Exception: Base class for exceptions
$BLOCK_COMMENT_END
```

## Ruby If Else Statement

### {[cotrIfElse ifElseStatement]}

```
if ${1:condition}
  ${2:# Your code here}
elsif ${3:condition}
  ${4:# Your code here}
else
  ${5:# Your code here}
end
```

## Ruby Type Check

### {[cotrTypeCheck checkType getType typeOf]}

```
${1:variable}.class
```

## Ruby Create Integer Variable

### {[cotrVarInt integer int variableInt intVariable createInt]}

```
${1:my_int} = ${2:0}
```

## Ruby Not Equal To

### {[cotrNotEqual notEqual doesNotEqual]}

```
!=
```

## Ruby Boolean Operators

### {[cotrOperatorsBool booleanOperators logic]}

```
# Ruby Boolean Operators
# Logical AND: && or and
# Logical OR: || or or
# Logical NOT: ! or not
# Equality: ==
# Inequality: !=
# Greater than: >
# Less than: <
# Greater than or equal to: >=
# Less than or equal to: <=
```

## Ruby Map Type

### {[cotrTypesMap mapType typeMap hashmapType structType dictType typeDict typeScruct]}

```
Hash
```

## Ruby List Type

### {[cotrTypesList listType typeList typeArray]}

```
Array
```

## Ruby Comment

### {[cotrComment comment note]}

```
# ${1:Your comment here}
```

## Ruby Mathematical Operators

### {[cotrOperators operators mathDocs]}

```
# Ruby Mathematical Operators
# Addition: +
# Subtraction: -
# Multiplication: *
# Division: /
# Modulus (Remainder): %
# Exponentiation: **
# Increment: Use += 1
# Decrement: Use -= 1
# Assignment: =
# Addition assignment: +=
# Subtraction assignment: -=
# Multiplication assignment: *=
# Division assignment: /=
# Modulus assignment: %=
# Exponentiation assignment: **=
```

## Ruby Boolean False

### {[cotrTypesBoolFalse false off booleanFalse]}

```
false
```

## Ruby Create Date Variable

### {[cotrVarDate dateVariable variableDate date]}

```
${1:my_date} = Date.new(${2:year}, ${3:month}, ${4:day})
```

## Ruby Case Statement

### {[cotrSwitch switch switchStatement select case]}

```
case ${1:variable}
when ${2:value1}
  # Your code here
when ${4:value2}
  # Your code here
else
  # Your code here
end
```

## Ruby Lambda Function

### {[cotrFuncLambda cotrLambda cotrFuncArrow]}

```
${2:my_function} = ->(${3:parameters}) {
  ${4:# Your code here}
}
```

## Ruby For...In Loop

### {[cotrForInLoop forIn]}

```
${1:iterable}.each do |item|
  # Your code here
end
```

## Ruby Function Syntax

### {[cotrFuncSyntax functionSyntax functionDocs]}

```
# Ruby Function Syntax
# Basic function: def function_name(parameters) ... end
# Function with arguments: def function_name(arg1, arg2, ...) ... end
# Function with named arguments: def function_name(arg1: value1, arg2: value2, ...) ... end
```

## Ruby Integer Type

### {[cotrTypesInt intType typeInt]}

```
Integer
```

## Ruby Dynamic Type

### {[cotrDynamic dynamicType typeDynamic anyType typeAny]}

```
# Ruby is a dynamically typed language.
```

## Ruby Create Multiline String Variable

### {[cotrVarStringMulti multiLineString varStringMulti stringVariableMulti createMultiLineString]}

```
${1:my_string} = <<~HEREDOC
${2:Your string here}
HEREDOC
```

## Ruby Print

### {[cotrPrint print log systemOut write consoleLog]}

```
puts ${1:'Your message here'}
```

## Ruby Multi-Line Comment

### {[cotrCommentMulti multiLineComment commentMultiLine blockComment]}

```
=begin
${1:Your comment here}
=end
```

## Ruby Project Structure (High-Level)

### {[cotrStructure structure architecture]}

```
# Recommended High-Level Ruby Project Structure:

# - /
#   - Gemfile: Defines project dependencies.
#   - Rakefile: Provides automated tasks like database migrations, running tests, etc.
#   - config.ru: Rack configuration file for Rack-based applications.

# - app/
#   - Contains the main application code.
#   - models/: Contains the models for an MVC framework.
#   - controllers/: Contains the controllers for an MVC framework.
#   - views/: Contains the views for an MVC framework.

# - config/
#   - Configuration files for the application.

# - db/
#   - Database related files, like migrations and seeds.

# - lib/
#   - Library code that can be reused in other projects.

# - public/
#   - Static files like images, stylesheets, and JavaScript files.

# - test/ or spec/
#   - Test files, following the naming convention of the testing framework (e.g., RSpec uses `spec`).

# Note:
# - This structure can vary, especially with different frameworks like Rails, Sinatra, etc.
# - Ensure that the project structure aligns with the conventions of the used framework.
```

## Ruby Type Comparison

### {[cotrTypeCompare compareTypes]}

```
# Check if two variables have the same type:
if ${1:variable1}.class == ${2:variable2}.class
  # Your code here
end
```

## Ruby Null Type

### {[cotrNull null nil none nothing option]}

```
nil
```

## Ruby Create Hash Variable

### {[cotrVarMap createMap createStruct variableMap variableStruct mapVariable structVariable dictVariable variableDict createDict]}

```
${1:my_hash} = {
  ${2:key1}: ${3:value1},
  ${4:key2}: ${5:value2},
  # Add more key-value pairs here
}
```

## Ruby While Loop

### {[cotrWhileLoop whileLoop whileTrue]}

```
while ${1:condition} do
  # Your code here
end
```

## Ruby Throw Exception

### {[cotrThrow throwError throwException]}

```
raise ${1:'Your message here'}
```

## Ruby Enum (with Symbols)

### {[cotrEnum enum]}

```
${1:MyEnum} = [:${2:value1}, :${3:value2}]
# Access: ${1:MyEnum}[0] # :${2:value1}
```

## Ruby This Type Check

### {[thisTypeCheck thisType getThisType]}

```
$CLIPBOARD.class
```

## Ruby String Type

### {[cotrTypesString stringType typeString textType typeText]}

```
String
```

## Ruby Print Multi

### {[cotrPrintMulti printMultiLine]}

```
puts ${1:"""Line 1}
${2:Line 2}
${3:Line 3}"""}
```

## Ruby For Loop

### {[cotrForLoop forLoop forX]}

```
${1:10}.times do |${2:i}|
  # Your code here
end
```

## Ruby If Statement

### {[cotrIf ifStatement]}

```
if ${1:condition}
  ${2:# Your code here}
end
```

## Ruby Type Conversion

### {[cotrTypeConvert cotrTypeCast cotrConvert cotrCast]}

```
# Ruby Type Conversion:

# Implicit conversions (Ruby performs automatically):
# - Can be unpredictable, especially with loose equality (==).

# Explicit conversions:
# - variable.to_i  // Converts to integer
# - variable.to_f  // Converts to float
# - variable.to_s  // Converts to string
# - !!variable  // Converts to boolean

# Note:
# - Be aware of implicit conversions and use explicit conversions when necessary for clarity and control.
```

## Ruby Create Typed Variable

### {[cotrVarTyped typedVariable variableWithType]}

```
# Note: Ruby is dynamically typed; explicit type annotations are not used.
${1:my_var} = $2
```

## Ruby Date Now

### {[cotrNow now currentTime dateNow]}

```
require 'date'

Date.today
```

## Ruby Float Type

### {[cotrTypesNumAlt cotrTypesFloat]}

```
Float
```

## Ruby Character Type

### {[cotrTypesChar]}

```
# Ruby does not have a separate char type; use String instead.
```

## Ruby Boolean Type

### {[cotrTypesBool booleanType typeBool]}

```
# Ruby uses true and false for boolean values.
```

## Ruby Create Array Variable

### {[cotrVarList createList listVariable arrayVariable variableList variableArray list array]}

```
${1:my_array} = [
  ${2:'item1'},
  ${3:'item2'},
  # Add more items here
]
```

## Ruby Function Args

### {[cotrFuncArgs functionArgs functionWithArgs]}

```
# In Ruby, functions can have arguments with default values.
def ${2:my_function}(${3:arg1}, ${4:arg2}=${5:'defaultVal'})
  ${6:# Your code here}
end
```

## Ruby Anonymous Function

### {[cotrFuncAnon anonFunc anonymous closure lambda functionLiteral cotrFuncLambda]}

```
lambda { |${1:parameters}|
  ${2:# Your code here}
}
```

## Ruby Ternary Operator

### {[cotrTernary ternary conditionalOperator]}

```
${1:condition} ? ${2:true_value} : ${3:false_value}
```

## Ruby Equal To

### {[cotrEqual equal]}

```
==
```

## Ruby Double Type

### {[cotrTypesNum cotrTypesDouble]}

```
double
```

## Ruby Static Variable

### {[cotrVarStatic staticVariable associatedConstant]}

```
@@${1:my_static_var} = ${2:value}

# Access the class variable
# MyClass.class_variable_get(:@@${1:my_static_var})
```

## Ruby Generate Array

### {[cotrGenList generateList listGen]}

```
${1:my_array} = Array.new(${2:length}) { |i| ${3:'item'} + i.to_s }
```

## Ruby Interpolate String

### {[cotrInterpolate interpolate variableExpansion variableSubstitution stringPlaceholders stringInterpolation]}

```
"Your string here \#{${1:variable}}"
```

## Ruby Create Boolean Variable

### {[cotrVarBool variableBool bool boolVariable createBool]}

```
${1:my_bool} = ${2:true}
```

## Ruby Entry Point

### {[cotrEntry entry start startingPoint]}

```
# Ruby Entry Point
# To run this program, use: `ruby filename.rb`

puts 'Hello, World!'
```

## Ruby Create String Variable

### {[cotrVarString string stringVariable variableString text createString createText]}

```
${1:my_string} = ${2:'Your string here'}
```

## Ruby Function

### {[cotrFunc function subprogram procedure subroutine method]}

```
def ${2:my_function}(${3:parameters})
  ${4:# Your code here}
end
```

## Ruby Class

### {[cotrClass class objectTemplate]}

```
class ${1:MyClass}
  ${2:# Your code here}
end
```


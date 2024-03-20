## Ruby Float Type

### [cotrTypesNumAlt](/snippets/cotrTypesNumAlt)

```ruby
Float
```

## Ruby Boolean Type

### [cotrTypesBool](/snippets/cotrTypesBool)

```ruby
# Ruby uses true and false for boolean values.
```

## Ruby Date Now

### [cotrNow](/snippets/cotrNow)

```ruby
require 'date'

Date.today
```

## Ruby Double Type

### [cotrTypesNum](/snippets/cotrTypesNum)

```ruby
double
```

## Ruby Map Type

### [cotrTypesMap](/snippets/cotrTypesMap)

```ruby
Hash
```

## Ruby Equal To

### [cotrEqual](/snippets/cotrEqual)

```ruby
==
```

## Ruby Create Multiline String Variable

### [cotrVarStringMulti](/snippets/cotrVarStringMulti)

```ruby
${1:my_string} = <<~HEREDOC
${2:Your string here}
HEREDOC
```

## Ruby Static Variable

### [cotrVarStatic](/snippets/cotrVarStatic)

```ruby
@@${1:my_static_var} = ${2:value}

# Access the class variable
# MyClass.class_variable_get(:@@${1:my_static_var})
```

## Ruby Function Syntax

### [cotrFuncSyntax](/snippets/cotrFuncSyntax)

```ruby
# Ruby Function Syntax
# Basic function: def function_name(parameters) ... end
# Function with arguments: def function_name(arg1, arg2, ...) ... end
# Function with named arguments: def function_name(arg1: value1, arg2: value2, ...) ... end
```

## Ruby Multi-Line Comment

### [cotrCommentMulti](/snippets/cotrCommentMulti)

```ruby
=begin
${1:Your comment here}
=end
```

## Ruby Date Type

### [cotrTypesDate](/snippets/cotrTypesDate)

```ruby
require 'date'

Date
```

## Ruby For...In Loop

### [cotrForInLoop](/snippets/cotrForInLoop)

```ruby
${1:iterable}.each do |item|
  # Your code here
end
```

## Ruby Function Args

### [cotrFuncArgs](/snippets/cotrFuncArgs)

```ruby
# In Ruby, functions can have arguments with default values.
def ${2:my_function}(${3:arg1}, ${4:arg2}=${5:'defaultVal'})
  ${6:# Your code here}
end
```

## Ruby Comment

### [cotrComment](/snippets/cotrComment)

```ruby
# ${1:Your comment here}
```

## Ruby If Statement

### [cotrIf](/snippets/cotrIf)

```ruby
if ${1:condition}
  ${2:# Your code here}
end
```

## Ruby Project Structure (High-Level)

### [cotrStructure](/snippets/cotrStructure)

```ruby
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

### [cotrTypeCompare](/snippets/cotrTypeCompare)

```ruby
# Check if two variables have the same type:
if ${1:variable1}.class == ${2:variable2}.class
  # Your code here
end
```

## Ruby Function

### [cotrFunc](/snippets/cotrFunc)

```ruby
def ${2:my_function}(${3:parameters})
  ${4:# Your code here}
end
```

## Ruby Anonymous Function

### [cotrFuncAnon](/snippets/cotrFuncAnon)

```ruby
lambda { |${1:parameters}|
  ${2:# Your code here}
}
```

## Ruby Ternary Operator

### [cotrTernary](/snippets/cotrTernary)

```ruby
${1:condition} ? ${2:true_value} : ${3:false_value}
```

## Ruby Print

### [cotrPrint](/snippets/cotrPrint)

```ruby
puts ${1:'Your message here'}
```

## Ruby While Loop

### [cotrWhileLoop](/snippets/cotrWhileLoop)

```ruby
while ${1:condition} do
  # Your code here
end
```

## Ruby Try Catch

### [cotrTryCatch](/snippets/cotrTryCatch)

```ruby
begin
  ${1:# Your code here}
rescue => ${2:exception}
  ${3:# Your code here}
end
```

## Ruby Type Conversion

### [cotrTypeConvert](/snippets/cotrTypeConvert)

```ruby
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

## Ruby Types

### [cotrTypes](/snippets/cotrTypes)

```ruby
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

## Ruby Create Typed Variable

### [cotrVarTyped](/snippets/cotrVarTyped)

```ruby
# Note: Ruby is dynamically typed; explicit type annotations are not used.
${1:my_var} = $2
```

## Ruby Interpolate String

### [cotrInterpolate](/snippets/cotrInterpolate)

```ruby
"Your string here \#{${1:variable}}"
```

## Ruby Create Date Variable

### [cotrVarDate](/snippets/cotrVarDate)

```ruby
${1:my_date} = Date.new(${2:year}, ${3:month}, ${4:day})
```

## Ruby Boolean True

### [cotrTypesBoolTrue](/snippets/cotrTypesBoolTrue)

```ruby
true
```

## Ruby Generate Array

### [cotrGenList](/snippets/cotrGenList)

```ruby
${1:my_array} = Array.new(${2:length}) { |i| ${3:'item'} + i.to_s }
```

## Ruby Function Named Args

### [cotrFuncArgsNamed](/snippets/cotrFuncArgsNamed)

```ruby
def ${2:my_function}(${3:arg1}: ${4:value1}, ${5:arg2}: ${6:value2})
  ${7:# Your code here}
end
```

## Ruby Lambda Function

### [cotrFuncLambda](/snippets/cotrFuncLambda)

```ruby
${2:my_function} = ->(${3:parameters}) {
  ${4:# Your code here}
}
```

## Ruby Throw Exception

### [cotrThrow](/snippets/cotrThrow)

```ruby
raise ${1:'Your message here'}
```

## Ruby Print Multi

### [cotrPrintMulti](/snippets/cotrPrintMulti)

```ruby
puts ${1:"""Line 1}
${2:Line 2}
${3:Line 3}"""}
```

## Ruby Enum (with Symbols)

### [cotrEnum](/snippets/cotrEnum)

```ruby
${1:MyEnum} = [:${2:value1}, :${3:value2}]
# Access: ${1:MyEnum}[0] # :${2:value1}
```

## Ruby Class

### [cotrClass](/snippets/cotrClass)

```ruby
class ${1:MyClass}
  ${2:# Your code here}
end
```

## Ruby String Type

### [cotrTypesString](/snippets/cotrTypesString)

```ruby
String
```

## Ruby List Type

### [cotrTypesList](/snippets/cotrTypesList)

```ruby
Array
```

## Ruby For Loop

### [cotrForLoop](/snippets/cotrForLoop)

```ruby
${1:10}.times do |${2:i}|
  # Your code here
end
```

## Ruby Boolean Operators

### [cotrOperatorsBool](/snippets/cotrOperatorsBool)

```ruby
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

## Ruby Type Check

### [cotrTypeCheck](/snippets/cotrTypeCheck)

```ruby
${1:variable}.class
```

## Ruby Create Float Variable

### [cotrVarNum](/snippets/cotrVarNum)

```ruby
${1:my_float} = ${2:0.0}
```

## Ruby Create Boolean Variable

### [cotrVarBool](/snippets/cotrVarBool)

```ruby
${1:my_bool} = ${2:true}
```

## Ruby Create Array Variable

### [cotrVarList](/snippets/cotrVarList)

```ruby
${1:my_array} = [
  ${2:'item1'},
  ${3:'item2'},
  # Add more items here
]
```

## Ruby Entry Point

### [cotrEntry](/snippets/cotrEntry)

```ruby
# Ruby Entry Point
# To run this program, use: `ruby filename.rb`

puts 'Hello, World!'
```

## Ruby Not Equal To

### [cotrNotEqual](/snippets/cotrNotEqual)

```ruby
!=
```

## Ruby Boolean False

### [cotrTypesBoolFalse](/snippets/cotrTypesBoolFalse)

```ruby
false
```

## Ruby Dynamic Type

### [cotrDynamic](/snippets/cotrDynamic)

```ruby
# Ruby is a dynamically typed language.
```

## Ruby Create Hash Variable

### [cotrVarMap](/snippets/cotrVarMap)

```ruby
${1:my_hash} = {
  ${2:key1}: ${3:value1},
  ${4:key2}: ${5:value2},
  # Add more key-value pairs here
}
```

## Ruby Create Variable

### [cotrVar](/snippets/cotrVar)

```ruby
${1:my_var} = $2
```

## Ruby Concatenate Strings

### [cotrConcat](/snippets/cotrConcat)

```ruby
"${1:string1}" + "${2:string2}"
```

## Ruby Create Constant

### [cotrConst](/snippets/cotrConst)

```ruby
${1:MY_CONST} = $2
```

## Ruby Integer Type

### [cotrTypesInt](/snippets/cotrTypesInt)

```ruby
Integer
```

## Variable Declaration Syntax

### [cotrVarSyntax](/snippets/cotrVarSyntax)

```ruby
# Ruby Variable Declaration Syntax:

# - Ruby is dynamically typed, so there is no explicit type declaration.
# - Variables are created when you first assign a value to them.
# - Variables can be reassigned to different types.

# Note:
# - Ruby does not have direct equivalents to 'var', 'let', or 'const'.
# - Use descriptive variable names to improve code readability.
```

## Ruby If Else Statement

### [cotrIfElse](/snippets/cotrIfElse)

```ruby
if ${1:condition}
  ${2:# Your code here}
elsif ${3:condition}
  ${4:# Your code here}
else
  ${5:# Your code here}
end
```

## Ruby Info

### [cotrInfo](/snippets/cotrInfo)

```ruby
Typing: Dynamically typed
Paradigm: Multi-paradigm: object-oriented, imperative, functional, reflective
Compilation: Interpreted
Concurrency: Supports multi-threading and concurrent programming with fibers
```

## Ruby Character Type

### [cotrTypesChar](/snippets/cotrTypesChar)

```ruby
# Ruby does not have a separate char type; use String instead.
```

## Ruby Null Type

### [cotrNull](/snippets/cotrNull)

```ruby
nil
```

## Ruby Create String Variable

### [cotrVarString](/snippets/cotrVarString)

```ruby
${1:my_string} = ${2:'Your string here'}
```

## Ruby Create Integer Variable

### [cotrVarInt](/snippets/cotrVarInt)

```ruby
${1:my_int} = ${2:0}
```

## Ruby Mathematical Operators

### [cotrOperators](/snippets/cotrOperators)

```ruby
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

## Ruby Case Statement

### [cotrSwitch](/snippets/cotrSwitch)

```ruby
case ${1:variable}
when ${2:value1}
  # Your code here
when ${4:value2}
  # Your code here
else
  # Your code here
end
```


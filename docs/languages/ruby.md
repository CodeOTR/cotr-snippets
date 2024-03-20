---
title: Ruby
description: Ruby snippets on the rocks.
---

## [cotrTypesBoolTrue](/snippets/cotrtypesbooltrue)

Ruby Boolean True

```ruby
true
```

## [cotrVarString](/snippets/cotrvarstring)

Ruby Create String Variable

```ruby
${1:my_string} = ${2:'Your string here'}
```

## [cotrVarNum](/snippets/cotrvarnum)

Ruby Create Float Variable

```ruby
${1:my_float} = ${2:0.0}
```

## [cotrSwitch](/snippets/cotrswitch)

Ruby Case Statement

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

## [cotrEqual](/snippets/cotrequal)

Ruby Equal To

```ruby
==
```

## [cotrVarStatic](/snippets/cotrvarstatic)

Ruby Static Variable

```ruby
@@${1:my_static_var} = ${2:value}

# Access the class variable
# MyClass.class_variable_get(:@@${1:my_static_var})
```

## [cotrTypesInt](/snippets/cotrtypesint)

Ruby Integer Type

```ruby
Integer
```

## [cotrConst](/snippets/cotrconst)

Ruby Create Constant

```ruby
${1:MY_CONST} = $2
```

## [cotrTypesNum](/snippets/cotrtypesnum)

Ruby Double Type

```ruby
double
```

## [cotrTypesBoolFalse](/snippets/cotrtypesboolfalse)

Ruby Boolean False

```ruby
false
```

## [cotrVarMap](/snippets/cotrvarmap)

Ruby Create Hash Variable

```ruby
${1:my_hash} = {
  ${2:key1}: ${3:value1},
  ${4:key2}: ${5:value2},
  # Add more key-value pairs here
}
```

## [cotrEntry](/snippets/cotrentry)

Ruby Entry Point

```ruby
# Ruby Entry Point
# To run this program, use: `ruby filename.rb`

puts 'Hello, World!'
```

## [cotrStructure](/snippets/cotrstructure)

Ruby Project Structure (High-Level)

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

## [cotrTypes](/snippets/cotrtypes)

Ruby Types

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

## [cotrTypesList](/snippets/cotrtypeslist)

Ruby List Type

```ruby
Array
```

## [cotrInterpolate](/snippets/cotrinterpolate)

Ruby Interpolate String

```ruby
"Your string here \#{${1:variable}}"
```

## [cotrTypesBool](/snippets/cotrtypesbool)

Ruby Boolean Type

```ruby
# Ruby uses true and false for boolean values.
```

## [cotrPrint](/snippets/cotrprint)

Ruby Print

```ruby
puts ${1:'Your message here'}
```

## [cotrThrow](/snippets/cotrthrow)

Ruby Throw Exception

```ruby
raise ${1:'Your message here'}
```

## [cotrOperators](/snippets/cotroperators)

Ruby Mathematical Operators

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

## [cotrDynamic](/snippets/cotrdynamic)

Ruby Dynamic Type

```ruby
# Ruby is a dynamically typed language.
```

## [cotrVarSyntax](/snippets/cotrvarsyntax)

Variable Declaration Syntax

```ruby
# Ruby Variable Declaration Syntax:

# - Ruby is dynamically typed, so there is no explicit type declaration.
# - Variables are created when you first assign a value to them.
# - Variables can be reassigned to different types.

# Note:
# - Ruby does not have direct equivalents to 'var', 'let', or 'const'.
# - Use descriptive variable names to improve code readability.
```

## [cotrConcat](/snippets/cotrconcat)

Ruby Concatenate Strings

```ruby
"${1:string1}" + "${2:string2}"
```

## [cotrVarStringMulti](/snippets/cotrvarstringmulti)

Ruby Create Multiline String Variable

```ruby
${1:my_string} = <<~HEREDOC
${2:Your string here}
HEREDOC
```

## [cotrFuncSyntax](/snippets/cotrfuncsyntax)

Ruby Function Syntax

```ruby
# Ruby Function Syntax
# Basic function: def function_name(parameters) ... end
# Function with arguments: def function_name(arg1, arg2, ...) ... end
# Function with named arguments: def function_name(arg1: value1, arg2: value2, ...) ... end
```

## [cotrClass](/snippets/cotrclass)

Ruby Class

```ruby
class ${1:MyClass}
  ${2:# Your code here}
end
```

## [cotrTypeCompare](/snippets/cotrtypecompare)

Ruby Type Comparison

```ruby
# Check if two variables have the same type:
if ${1:variable1}.class == ${2:variable2}.class
  # Your code here
end
```

## [cotrTypesDate](/snippets/cotrtypesdate)

Ruby Date Type

```ruby
require 'date'

Date
```

## [cotrNull](/snippets/cotrnull)

Ruby Null Type

```ruby
nil
```

## [cotrVarList](/snippets/cotrvarlist)

Ruby Create Array Variable

```ruby
${1:my_array} = [
  ${2:'item1'},
  ${3:'item2'},
  # Add more items here
]
```

## [cotrGenList](/snippets/cotrgenlist)

Ruby Generate Array

```ruby
${1:my_array} = Array.new(${2:length}) { |i| ${3:'item'} + i.to_s }
```

## [cotrFuncAnon](/snippets/cotrfuncanon)

Ruby Anonymous Function

```ruby
lambda { |${1:parameters}|
  ${2:# Your code here}
}
```

## [cotrTypesString](/snippets/cotrtypesstring)

Ruby String Type

```ruby
String
```

## [cotrTypesMap](/snippets/cotrtypesmap)

Ruby Map Type

```ruby
Hash
```

## [cotrFuncLambda](/snippets/cotrfunclambda)

Ruby Lambda Function

```ruby
${2:my_function} = ->(${3:parameters}) {
  ${4:# Your code here}
}
```

## [cotrNow](/snippets/cotrnow)

Ruby Date Now

```ruby
require 'date'

Date.today
```

## [cotrVar](/snippets/cotrvar)

Ruby Create Variable

```ruby
${1:my_var} = $2
```

## [cotrVarDate](/snippets/cotrvardate)

Ruby Create Date Variable

```ruby
${1:my_date} = Date.new(${2:year}, ${3:month}, ${4:day})
```

## [cotrForLoop](/snippets/cotrforloop)

Ruby For Loop

```ruby
${1:10}.times do |${2:i}|
  # Your code here
end
```

## [cotrFunc](/snippets/cotrfunc)

Ruby Function

```ruby
def ${2:my_function}(${3:parameters})
  ${4:# Your code here}
end
```

## [cotrComment](/snippets/cotrcomment)

Ruby Comment

```ruby
# ${1:Your comment here}
```

## [cotrTypeConvert](/snippets/cotrtypeconvert)

Ruby Type Conversion

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

## [cotrTypesChar](/snippets/cotrtypeschar)

Ruby Character Type

```ruby
# Ruby does not have a separate char type; use String instead.
```

## [cotrVarTyped](/snippets/cotrvartyped)

Ruby Create Typed Variable

```ruby
# Note: Ruby is dynamically typed; explicit type annotations are not used.
${1:my_var} = $2
```

## [cotrTryCatch](/snippets/cotrtrycatch)

Ruby Try Catch

```ruby
begin
  ${1:# Your code here}
rescue => ${2:exception}
  ${3:# Your code here}
end
```

## [cotrIf](/snippets/cotrif)

Ruby If Statement

```ruby
if ${1:condition}
  ${2:# Your code here}
end
```

## [cotrTernary](/snippets/cotrternary)

Ruby Ternary Operator

```ruby
${1:condition} ? ${2:true_value} : ${3:false_value}
```

## [cotrInfo](/snippets/cotrinfo)

Ruby Info

```ruby
Typing: Dynamically typed
Paradigm: Multi-paradigm: object-oriented, imperative, functional, reflective
Compilation: Interpreted
Concurrency: Supports multi-threading and concurrent programming with fibers
```

## [cotrNotEqual](/snippets/cotrnotequal)

Ruby Not Equal To

```ruby
!=
```

## [cotrTypeCheck](/snippets/cotrtypecheck)

Ruby Type Check

```ruby
${1:variable}.class
```

## [cotrTypesNumAlt](/snippets/cotrtypesnumalt)

Ruby Float Type

```ruby
Float
```

## [cotrVarInt](/snippets/cotrvarint)

Ruby Create Integer Variable

```ruby
${1:my_int} = ${2:0}
```

## [cotrVarBool](/snippets/cotrvarbool)

Ruby Create Boolean Variable

```ruby
${1:my_bool} = ${2:true}
```

## [cotrForInLoop](/snippets/cotrforinloop)

Ruby For...In Loop

```ruby
${1:iterable}.each do |item|
  # Your code here
end
```

## [cotrFuncArgsNamed](/snippets/cotrfuncargsnamed)

Ruby Function Named Args

```ruby
def ${2:my_function}(${3:arg1}: ${4:value1}, ${5:arg2}: ${6:value2})
  ${7:# Your code here}
end
```

## [cotrIfElse](/snippets/cotrifelse)

Ruby If Else Statement

```ruby
if ${1:condition}
  ${2:# Your code here}
elsif ${3:condition}
  ${4:# Your code here}
else
  ${5:# Your code here}
end
```

## [cotrOperatorsBool](/snippets/cotroperatorsbool)

Ruby Boolean Operators

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

## [cotrPrintMulti](/snippets/cotrprintmulti)

Ruby Print Multi

```ruby
puts ${1:"""Line 1}
${2:Line 2}
${3:Line 3}"""}
```

## [cotrWhileLoop](/snippets/cotrwhileloop)

Ruby While Loop

```ruby
while ${1:condition} do
  # Your code here
end
```

## [cotrFuncArgs](/snippets/cotrfuncargs)

Ruby Function Args

```ruby
# In Ruby, functions can have arguments with default values.
def ${2:my_function}(${3:arg1}, ${4:arg2}=${5:'defaultVal'})
  ${6:# Your code here}
end
```

## [cotrCommentMulti](/snippets/cotrcommentmulti)

Ruby Multi-Line Comment

```ruby
=begin
${1:Your comment here}
=end
```

## [cotrEnum](/snippets/cotrenum)

Ruby Enum (with Symbols)

```ruby
${1:MyEnum} = [:${2:value1}, :${3:value2}]
# Access: ${1:MyEnum}[0] # :${2:value1}
```


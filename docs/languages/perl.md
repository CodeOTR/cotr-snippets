## Perl Throw Exception

### [cotrThrow](/snippets/cotrThrow)

```perl
die '${1:Your message here}';
```

## Perl Entry Point

### [cotrEntry](/snippets/cotrEntry)

```perl
# Perl Entry Point
# To run this program, use: `perl filename.pl`

use strict;
use warnings;

print "Hello, World!\n";
```

## Perl Mathematical Operators

### [cotrOperators](/snippets/cotrOperators)

```perl
# Perl Mathematical Operators
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

## Perl Type Check

### [cotrTypeCheck](/snippets/cotrTypeCheck)

```perl
ref ${1:variable}
```

## Perl Create String Variable

### [cotrVarString](/snippets/cotrVarString)

```perl
my $${1:myString} = "${2:Your string here}";
```

## Perl Create Float Variable

### [cotrVarNum](/snippets/cotrVarNum)

```perl
my $${1:myFloat} = ${2:0.0};
```

## Perl Multi-Line Comment

### [cotrCommentMulti](/snippets/cotrCommentMulti)

```perl
=begin
${1:Your comment here}
=end
```

## Perl Anonymous Function

### [cotrFuncAnon](/snippets/cotrFuncAnon)

```perl
lambda { |${1:parameters}|
  # Your code here
}
```

## Perl Not Equal To

### [cotrNotEqual](/snippets/cotrNotEqual)

```perl
!=
```

## Perl Map Type

### [cotrTypesMap](/snippets/cotrTypesMap)

```perl
%hash
```

## Perl Dynamic Type

### [cotrTypesDynamic](/snippets/cotrTypesDynamic)

```perl
# Perl is a dynamically typed language.
```

## Perl Create Typed Variable

### [cotrVarTyped](/snippets/cotrVarTyped)

```perl
# Note: Perl is dynamically typed; explicit type annotations are not used.
my $${1:myVar} = $2;
```

## Perl Create Boolean Variable

### [cotrVarBool](/snippets/cotrVarBool)

```perl
my $${1:myBool} = ${2:1};
```

## Perl Function Args

### [cotrFuncArgs](/snippets/cotrFuncArgs)

```perl
# In Perl, you can use default arguments in function definitions.
sub ${2:myFunction} {
  my (${3:$arg1}, ${4:$arg2} = ${5:'defaultVal'}) = @_;

  ${6:# Your code here}
}
```

## Perl Generate Map

### [cotrGenMap](/snippets/cotrGenMap)

```perl
# Perl does not have a built-in way to generate a map (hash) with a specific number of key-value pairs.
# You can use a loop or a custom function to achieve this.
```

## Perl Project Structure (High-Level)

### [cotrStructure](/snippets/cotrStructure)

```perl
# Recommended High-Level Perl Project Structure:

# - lib/
#   - Contains Perl module files (`.pm`).
#   - Organize modules into directories, mirroring the module's namespace.

# - bin/
#   - Contains executable Perl scripts.

# - t/
#   - Contains test scripts written using Perl's testing frameworks (like Test::More).

# - docs/
#   - Documentation for the project.

# - scripts/
#   - Contains utility scripts that are not part of the main application logic.

# - data/
#   - Contains data files used by the application.

# Note:
# - This structure is flexible and can be adjusted based on the project's requirements.
# - Ensure that the `lib` directory is included in the `@INC` array or use the `use lib`
#   directive in scripts to include the library path.
```

## Perl Type Conversion

### [cotrTypeConvert](/snippets/cotrTypeConvert)

```perl
# Perl Type Conversion:

# Implicit conversions (Perl performs automatically):
# - Can be unpredictable, especially with loose equality (==).

# Explicit conversions:
# - int(variable)  // Converts to integer
# - 0 + variable  // Converts to number
# - "" . variable  // Converts to string

# Note:
# - Be aware of implicit conversions and use explicit conversions when necessary for clarity and control.
```

## Perl List Type

### [cotrTypesList](/snippets/cotrTypesList)

```perl
@array
```

## Perl Create Multi-Line String Variable

### [cotrVarStringMulti](/snippets/cotrVarStringMulti)

```perl
my $${1:myString} = <<'END_STRING';
${2:Line 1}
${3:Line 2}
${4:Line 3}
END_STRING
```

## Perl Create Array Variable

### [cotrVarList](/snippets/cotrVarList)

```perl
my @${1:myArray} = (${2:items});
```

## Perl Function

### [cotrFunc](/snippets/cotrFunc)

```perl
sub ${2:myFunction} {
  my (${3:parameters}) = @_;

  ${4:# Your code here}
}
```

## Perl Double Type

### [cotrTypesNum](/snippets/cotrTypesNum)

```perl
# Perl uses scalars for floating-point numbers.
```

## Perl Concatenate Strings

### [cotrConcat](/snippets/cotrConcat)

```perl
"${1:string1}" . "${2:string2}"
```

## Perl For Each Loop

### [cotrForEach](/snippets/cotrForEach)

```perl
foreach my $${1:item} (@${2:iterable}) {
  # Your code here
}
```

## Perl Type Comparison

### [cotrTypeCompare](/snippets/cotrTypeCompare)

```perl
# Check if two variables have the same type:
if (ref ${1:variable1} eq ref ${2:variable2}) {
  # Your code here
}
```

## Perl Date Type

### [cotrTypesDate](/snippets/cotrTypesDate)

```perl
use DateTime
```

## Perl Ternary Operator

### [cotrTernary](/snippets/cotrTernary)

```perl
${1:condition} ? ${2:trueValue} : ${3:falseValue}
```

## Perl Null Type

### [cotrTypesNull](/snippets/cotrTypesNull)

```perl
undef
```

## Perl Create Hash Variable

### [cotrVarMap](/snippets/cotrVarMap)

```perl
my %${1:myHash} = (${2:key} => ${3:value});
```

## Perl Generate List

### [cotrGenList](/snippets/cotrGenList)

```perl
my @${1:listName} = (${2:initialValue}) x ${3:length};
```

## Perl Boolean False

### [cotrTypesBoolFalse](/snippets/cotrTypesBoolFalse)

```perl
0
```

## Perl If Statement

### [cotrIf](/snippets/cotrIf)

```perl
if (${1:condition}) {
  # Your code here
}
```

## Perl Function Syntax

### [cotrFuncSyntax](/snippets/cotrFuncSyntax)

```perl
# Perl Function Syntax
# Basic function:
# sub functionName {
#   my ($parameters) = @_;
#   # Your code here
# }

# Function with arguments:
# sub functionName {
#   my ($arg1, $arg2, ...) = @_;
#   # Your code here
# }
```

## Perl Integer Type

### [cotrTypesInt](/snippets/cotrTypesInt)

```perl
# Perl uses scalars for integers.
```

## Perl Print Multi

### [cotrPrintMulti](/snippets/cotrPrintMulti)

```perl
print <<'END_STRING';
${1:Line 1}
${2:Line 2}
${3:Line 3}
END_STRING
```

## Perl For Loop

### [cotrForLoop](/snippets/cotrForLoop)

```perl
for (my $${1:i} = 0; $1 < ${2:10}; $1++) {
  # Your code here
}
```

## Perl If Else Statement

### [cotrIfElse](/snippets/cotrIfElse)

```perl
if (${1:condition}) {
  # Your code here
} else {
  # Your code here
}
```

## Perl Comment

### [cotrComment](/snippets/cotrComment)

```perl
# ${1:Your comment here}
```

## Perl Enum

### [cotrEnum](/snippets/cotrEnum)

```perl
# Perl does not have a built-in enum type. Use a list or hash instead.
```

## Perl Date Now

### [cotrNow](/snippets/cotrNow)

```perl
use DateTime

DateTime->now
```

## Perl Create Variable

### [cotrVar](/snippets/cotrVar)

```perl
my $${1:myVar} = $2;
```

## Perl Create Integer Variable

### [cotrVarInt](/snippets/cotrVarInt)

```perl
my $${1:myInt} = ${2:0};
```

## Perl Case Statement

### [cotrSwitch](/snippets/cotrSwitch)

```perl
case ${1:variable} {
when ${2:value1}
  # Your code here
when ${4:value2}
  # Your code here
else
  # Your code here
}
```

## Perl Class

### [cotrClass](/snippets/cotrClass)

```perl
package ${1:MyClass};

# Your code here
```

## Perl Types

### [cotrTypes](/snippets/cotrTypes)

```perl
$BLOCK_COMMENT_START
Perl is a dynamically typed language.

Some common types in Perl include:
- Scalar: Single value (numbers, strings, references)
- Array: Ordered list of scalars
- Hash: Unordered collection of key-value pairs
- Code: Subroutine reference
- Filehandle: File handle
- Regexp: Regular expression
- undef: Represents an undefined value
$BLOCK_COMMENT_END
```

## Perl Boolean Type

### [cotrTypesBool](/snippets/cotrTypesBool)

```perl
# Perl uses 1 and 0 for boolean values.
```

## Perl Arrow Function

### [cotrFuncArrow](/snippets/cotrFuncArrow)

```perl
${2:my_function} = ->(${3:parameters}) {
  ${4:# Your code here}
}
```

## Perl Equal To

### [cotrEqual](/snippets/cotrEqual)

```perl
==
```

## Perl Boolean True

### [cotrTypesBoolTrue](/snippets/cotrTypesBoolTrue)

```perl
1
```

## Perl Static Variable

### [cotrVarStatic](/snippets/cotrVarStatic)

```perl
our $${1:myStaticVar} = ${2:value};

# Perl does not have static variables in the traditional sense.
# Access the package variable
# $${1:myStaticVar}
```

## Perl While Loop

### [cotrWhileLoop](/snippets/cotrWhileLoop)

```perl
while (${1:condition}) {
  # Your code here
}
```

## Perl Boolean Operators

### [cotrOperatorsBool](/snippets/cotrOperatorsBool)

```perl
# Perl Boolean Operators
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

## Perl Create Nullable Variable

### [cotrVarNullable](/snippets/cotrVarNullable)

```perl
my $${1:myVar};  # Variable can be undefined (undef).
```

## Perl Interpolate String

### [cotrInterpolate](/snippets/cotrInterpolate)

```perl
"Your string here $${1:variable}"
```

## Perl Create Date Variable

### [cotrVarDate](/snippets/cotrVarDate)

```perl
my $${1:myDate} = DateTime->new( year => ${2:year}, month => ${3:month}, day => ${4:day} );
```

## Perl Create Constant

### [cotrConst](/snippets/cotrConst)

```perl
use constant ${1:MY_CONST} => $2;
```

## Perl Named Arguments (Alternative)

### [cotrFuncArgsNamed](/snippets/cotrFuncArgsNamed)

```perl
# Perl does not have named arguments in the traditional sense.
# You can use record syntax or higher-order functions to achieve similar functionality.
```

## Perl Info

### [cotrInfo](/snippets/cotrInfo)

```perl
# Typing: Dynamically typed
# Paradigm: Multi-paradigm: procedural, object-oriented, scripting
# Compilation: Interpreted
# Concurrency: Supports multi-threading with the threads module
```

## Perl String Type

### [cotrTypesString](/snippets/cotrTypesString)

```perl
# Perl uses scalars for strings.
```

## Perl Variable Declaration Syntax

### [cotrVarSyntax](/snippets/cotrVarSyntax)

```perl
# Perl Variable Declaration Syntax:

# - my: (Scope: Block)
#   - Declares a lexically scoped variable.
#   - Preferred for most variable declarations.

# - our: (Scope: Package)
#   - Declares a package-scoped variable.
#   - Use for variables that need to be shared across the package.

# - local: (Scope: Block)
#   - Declares a dynamically scoped variable.
#   - Use with caution due to potential scoping issues.

# Note:
# - Use 'my' for most variable declarations.
# - Use 'our' for package-level variables.
# - Avoid using 'local' unless you have a specific reason.
```

## Perl Print

### [cotrPrint](/snippets/cotrPrint)

```perl
print '${1:Your message here}\n';
```

## Perl Try Catch

### [cotrTryCatch](/snippets/cotrTryCatch)

```perl
eval {
  # Your code here
};
if ($@) {
  # Your code here
}
```


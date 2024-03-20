---
title: Perl
description: Perl snippets on the rocks.
---

## [cotrTypesString](/snippets/cotrtypesstring)

Perl String Type

```perl
# Perl uses scalars for strings.
```

## [cotrInterpolate](/snippets/cotrinterpolate)

Perl Interpolate String

```perl
"Your string here $${1:variable}"
```

## [cotrPrintMulti](/snippets/cotrprintmulti)

Perl Print Multi

```perl
print <<'END_STRING';
${1:Line 1}
${2:Line 2}
${3:Line 3}
END_STRING
```

## [cotrTryCatch](/snippets/cotrtrycatch)

Perl Try Catch

```perl
eval {
  # Your code here
};
if ($@) {
  # Your code here
}
```

## [cotrClass](/snippets/cotrclass)

Perl Class

```perl
package ${1:MyClass};

# Your code here
```

## [cotrComment](/snippets/cotrcomment)

Perl Comment

```perl
# ${1:Your comment here}
```

## [cotrOperatorsBool](/snippets/cotroperatorsbool)

Perl Boolean Operators

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

## [cotrTypeCheck](/snippets/cotrtypecheck)

Perl Type Check

```perl
ref ${1:variable}
```

## [cotrTypesDynamic](/snippets/cotrtypesdynamic)

Perl Dynamic Type

```perl
# Perl is a dynamically typed language.
```

## [cotrFuncArrow](/snippets/cotrfuncarrow)

Perl Arrow Function

```perl
${2:my_function} = ->(${3:parameters}) {
  ${4:# Your code here}
}
```

## [cotrTypesMap](/snippets/cotrtypesmap)

Perl Map Type

```perl
%hash
```

## [cotrPrint](/snippets/cotrprint)

Perl Print

```perl
print '${1:Your message here}\n';
```

## [cotrEnum](/snippets/cotrenum)

Perl Enum

```perl
# Perl does not have a built-in enum type. Use a list or hash instead.
```

## [cotrGenList](/snippets/cotrgenlist)

Perl Generate List

```perl
my @${1:listName} = (${2:initialValue}) x ${3:length};
```

## [cotrFuncAnon](/snippets/cotrfuncanon)

Perl Anonymous Function

```perl
lambda { |${1:parameters}|
  # Your code here
}
```

## [cotrNotEqual](/snippets/cotrnotequal)

Perl Not Equal To

```perl
!=
```

## [cotrTypesDate](/snippets/cotrtypesdate)

Perl Date Type

```perl
use DateTime
```

## [cotrVar](/snippets/cotrvar)

Perl Create Variable

```perl
my $${1:myVar} = $2;
```

## [cotrWhileLoop](/snippets/cotrwhileloop)

Perl While Loop

```perl
while (${1:condition}) {
  # Your code here
}
```

## [cotrFunc](/snippets/cotrfunc)

Perl Function

```perl
sub ${2:myFunction} {
  my (${3:parameters}) = @_;

  ${4:# Your code here}
}
```

## [cotrInfo](/snippets/cotrinfo)

Perl Info

```perl
# Typing: Dynamically typed
# Paradigm: Multi-paradigm: procedural, object-oriented, scripting
# Compilation: Interpreted
# Concurrency: Supports multi-threading with the threads module
```

## [cotrTypeCompare](/snippets/cotrtypecompare)

Perl Type Comparison

```perl
# Check if two variables have the same type:
if (ref ${1:variable1} eq ref ${2:variable2}) {
  # Your code here
}
```

## [cotrVarNullable](/snippets/cotrvarnullable)

Perl Create Nullable Variable

```perl
my $${1:myVar};  # Variable can be undefined (undef).
```

## [cotrVarStatic](/snippets/cotrvarstatic)

Perl Static Variable

```perl
our $${1:myStaticVar} = ${2:value};

# Perl does not have static variables in the traditional sense.
# Access the package variable
# $${1:myStaticVar}
```

## [cotrCommentMulti](/snippets/cotrcommentmulti)

Perl Multi-Line Comment

```perl
=begin
${1:Your comment here}
=end
```

## [cotrOperators](/snippets/cotroperators)

Perl Mathematical Operators

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

## [cotrVarInt](/snippets/cotrvarint)

Perl Create Integer Variable

```perl
my $${1:myInt} = ${2:0};
```

## [cotrSwitch](/snippets/cotrswitch)

Perl Case Statement

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

## [cotrFuncArgsNamed](/snippets/cotrfuncargsnamed)

Perl Named Arguments (Alternative)

```perl
# Perl does not have named arguments in the traditional sense.
# You can use record syntax or higher-order functions to achieve similar functionality.
```

## [cotrEntry](/snippets/cotrentry)

Perl Entry Point

```perl
# Perl Entry Point
# To run this program, use: `perl filename.pl`

use strict;
use warnings;

print "Hello, World!\n";
```

## [cotrTypesList](/snippets/cotrtypeslist)

Perl List Type

```perl
@array
```

## [cotrForLoop](/snippets/cotrforloop)

Perl For Loop

```perl
for (my $${1:i} = 0; $1 < ${2:10}; $1++) {
  # Your code here
}
```

## [cotrVarSyntax](/snippets/cotrvarsyntax)

Perl Variable Declaration Syntax

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

## [cotrVarString](/snippets/cotrvarstring)

Perl Create String Variable

```perl
my $${1:myString} = "${2:Your string here}";
```

## [cotrVarStringMulti](/snippets/cotrvarstringmulti)

Perl Create Multi-Line String Variable

```perl
my $${1:myString} = <<'END_STRING';
${2:Line 1}
${3:Line 2}
${4:Line 3}
END_STRING
```

## [cotrVarDate](/snippets/cotrvardate)

Perl Create Date Variable

```perl
my $${1:myDate} = DateTime->new( year => ${2:year}, month => ${3:month}, day => ${4:day} );
```

## [cotrIf](/snippets/cotrif)

Perl If Statement

```perl
if (${1:condition}) {
  # Your code here
}
```

## [cotrEqual](/snippets/cotrequal)

Perl Equal To

```perl
==
```

## [cotrTypesNum](/snippets/cotrtypesnum)

Perl Double Type

```perl
# Perl uses scalars for floating-point numbers.
```

## [cotrTypesNull](/snippets/cotrtypesnull)

Perl Null Type

```perl
undef
```

## [cotrVarTyped](/snippets/cotrvartyped)

Perl Create Typed Variable

```perl
# Note: Perl is dynamically typed; explicit type annotations are not used.
my $${1:myVar} = $2;
```

## [cotrVarMap](/snippets/cotrvarmap)

Perl Create Hash Variable

```perl
my %${1:myHash} = (${2:key} => ${3:value});
```

## [cotrIfElse](/snippets/cotrifelse)

Perl If Else Statement

```perl
if (${1:condition}) {
  # Your code here
} else {
  # Your code here
}
```

## [cotrStructure](/snippets/cotrstructure)

Perl Project Structure (High-Level)

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

## [cotrTypes](/snippets/cotrtypes)

Perl Types

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

## [cotrTypesBoolTrue](/snippets/cotrtypesbooltrue)

Perl Boolean True

```perl
1
```

## [cotrVarBool](/snippets/cotrvarbool)

Perl Create Boolean Variable

```perl
my $${1:myBool} = ${2:1};
```

## [cotrConst](/snippets/cotrconst)

Perl Create Constant

```perl
use constant ${1:MY_CONST} => $2;
```

## [cotrTypesInt](/snippets/cotrtypesint)

Perl Integer Type

```perl
# Perl uses scalars for integers.
```

## [cotrTypesBool](/snippets/cotrtypesbool)

Perl Boolean Type

```perl
# Perl uses 1 and 0 for boolean values.
```

## [cotrTypesBoolFalse](/snippets/cotrtypesboolfalse)

Perl Boolean False

```perl
0
```

## [cotrFuncSyntax](/snippets/cotrfuncsyntax)

Perl Function Syntax

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

## [cotrFuncArgs](/snippets/cotrfuncargs)

Perl Function Args

```perl
# In Perl, you can use default arguments in function definitions.
sub ${2:myFunction} {
  my (${3:$arg1}, ${4:$arg2} = ${5:'defaultVal'}) = @_;

  ${6:# Your code here}
}
```

## [cotrGenMap](/snippets/cotrgenmap)

Perl Generate Map

```perl
# Perl does not have a built-in way to generate a map (hash) with a specific number of key-value pairs.
# You can use a loop or a custom function to achieve this.
```

## [cotrTernary](/snippets/cotrternary)

Perl Ternary Operator

```perl
${1:condition} ? ${2:trueValue} : ${3:falseValue}
```

## [cotrThrow](/snippets/cotrthrow)

Perl Throw Exception

```perl
die '${1:Your message here}';
```

## [cotrNow](/snippets/cotrnow)

Perl Date Now

```perl
use DateTime

DateTime->now
```

## [cotrConcat](/snippets/cotrconcat)

Perl Concatenate Strings

```perl
"${1:string1}" . "${2:string2}"
```

## [cotrVarNum](/snippets/cotrvarnum)

Perl Create Float Variable

```perl
my $${1:myFloat} = ${2:0.0};
```

## [cotrVarList](/snippets/cotrvarlist)

Perl Create Array Variable

```perl
my @${1:myArray} = (${2:items});
```

## [cotrForEach](/snippets/cotrforeach)

Perl For Each Loop

```perl
foreach my $${1:item} (@${2:iterable}) {
  # Your code here
}
```

## [cotrTypeConvert](/snippets/cotrtypeconvert)

Perl Type Conversion

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


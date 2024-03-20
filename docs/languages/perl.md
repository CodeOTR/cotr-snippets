## Perl Type Conversion

### {[cotrTypeConvert cotrTypeCast cotrConvert cotrCast]}

```
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

## Perl Types

### {[cotrTypes types allTypes languageTypes builtInTypes dataTypes]}

```
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

## Perl Dynamic Type

### {[cotrTypesDynamic cotrDynamic]}

```
# Perl is a dynamically typed language.
```

## Perl Create Variable

### {[cotrVar variable createVariable newVariable]}

```
my $${1:myVar} = $2;
```

## Perl Comment

### {[cotrComment comment note]}

```
# ${1:Your comment here}
```

## Perl Type Check

### {[cotrTypeCheck checkType getType typeOf]}

```
ref ${1:variable}
```

## Perl Create Hash Variable

### {[cotrVarMap createMap createStruct variableMap variableStruct mapVariable structVariable dictVariable variableDict createDict]}

```
my %${1:myHash} = (${2:key} => ${3:value});
```

## Perl Function

### {[cotrFunc function subprogram procedure subroutine method]}

```
sub ${2:myFunction} {
  my (${3:parameters}) = @_;

  ${4:# Your code here}
}
```

## Perl Function Args

### {[cotrFuncArgs functionArgs functionWithArgs]}

```
# In Perl, you can use default arguments in function definitions.
sub ${2:myFunction} {
  my (${3:$arg1}, ${4:$arg2} = ${5:'defaultVal'}) = @_;

  ${6:# Your code here}
}
```

## Perl Boolean True

### {[cotrTypesBoolTrue true booleanTrue on]}

```
1
```

## Perl Print

### {[cotrPrint print log systemOut write consoleLog]}

```
print '${1:Your message here}\n';
```

## Perl Generate List

### {[cotrGenList generateList listGen]}

```
my @${1:listName} = (${2:initialValue}) x ${3:length};
```

## Perl Null Type

### {[cotrTypesNull cotrNull]}

```
undef
```

## Perl Anonymous Function

### {[cotrFuncAnon anonFunc anonymous closure lambda functionLiteral cotrFuncLambda]}

```
lambda { |${1:parameters}|
  # Your code here
}
```

## Perl Enum

### {[cotrEnum enum]}

```
# Perl does not have a built-in enum type. Use a list or hash instead.
```

## Perl Info

### {[cotrInfo languageInfo info]}

```
# Typing: Dynamically typed
# Paradigm: Multi-paradigm: procedural, object-oriented, scripting
# Compilation: Interpreted
# Concurrency: Supports multi-threading with the threads module
```

## Perl Entry Point

### {[cotrEntry entry start startingPoint]}

```
# Perl Entry Point
# To run this program, use: `perl filename.pl`

use strict;
use warnings;

print "Hello, World!\n";
```

## Perl Double Type

### {[cotrTypesNum numberType typeNumber doubleType typeDouble]}

```
# Perl uses scalars for floating-point numbers.
```

## Perl Boolean Type

### {[cotrTypesBool booleanType typeBool]}

```
# Perl uses 1 and 0 for boolean values.
```

## Perl For Each Loop

### {[cotrForEach cotrForIn]}

```
foreach my $${1:item} (@${2:iterable}) {
  # Your code here
}
```

## Perl Mathematical Operators

### {[cotrOperators operators mathDocs]}

```
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

## Perl Date Type

### {[cotrTypesDate dateType typeDate timeType timestampType dateTimeType]}

```
use DateTime
```

## Perl Static Variable

### {[cotrVarStatic staticVariable associatedConstant]}

```
our $${1:myStaticVar} = ${2:value};

# Perl does not have static variables in the traditional sense.
# Access the package variable
# $${1:myStaticVar}
```

## Perl Arrow Function

### {[cotrFuncArrow arrowFunction]}

```
${2:my_function} = ->(${3:parameters}) {
  ${4:# Your code here}
}
```

## Perl Not Equal To

### {[cotrNotEqual notEqual doesNotEqual]}

```
!=
```

## Perl Date Now

### {[cotrNow now currentTime dateNow]}

```
use DateTime

DateTime->now
```

## Perl Generate Map

### {[cotrGenMap generateMap]}

```
# Perl does not have a built-in way to generate a map (hash) with a specific number of key-value pairs.
# You can use a loop or a custom function to achieve this.
```

## Perl Project Structure (High-Level)

### {[cotrStructure structure architecture]}

```
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

## Perl Variable Declaration Syntax

### {[cotrVarSyntax variableSyntax howToVariables letSyntax]}

```
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

## Perl Integer Type

### {[cotrTypesInt intType typeInt]}

```
# Perl uses scalars for integers.
```

## Perl Create Integer Variable

### {[cotrVarInt integer int variableInt intVariable createInt]}

```
my $${1:myInt} = ${2:0};
```

## Perl Create Array Variable

### {[cotrVarList createList listVariable arrayVariable variableList variableArray list array]}

```
my @${1:myArray} = (${2:items});
```

## Perl Create Constant

### {[cotrConst constant]}

```
use constant ${1:MY_CONST} => $2;
```

## Perl Named Arguments (Alternative)

### {[cotrFuncArgsNamed functionNamedArgs]}

```
# Perl does not have named arguments in the traditional sense.
# You can use record syntax or higher-order functions to achieve similar functionality.
```

## Perl While Loop

### {[cotrWhileLoop whileLoop whileTrue]}

```
while (${1:condition}) {
  # Your code here
}
```

## Perl Function Syntax

### {[cotrFuncSyntax functionSyntax functionDocs]}

```
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

## Perl Equal To

### {[cotrEqual equal]}

```
==
```

## Perl Boolean Operators

### {[cotrOperatorsBool booleanOperators logic]}

```
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

## Perl Interpolate String

### {[cotrInterpolate interpolate variableExpansion variableSubstitution stringPlaceholders stringInterpolation]}

```
"Your string here $${1:variable}"
```

## Perl Create String Variable

### {[cotrVarString string stringVariable variableString text createString createText]}

```
my $${1:myString} = "${2:Your string here}";
```

## Perl Print Multi

### {[cotrPrintMulti printMultiLine]}

```
print <<'END_STRING';
${1:Line 1}
${2:Line 2}
${3:Line 3}
END_STRING
```

## Perl String Type

### {[cotrTypesString stringType typeString textType typeText]}

```
# Perl uses scalars for strings.
```

## Perl Create Typed Variable

### {[cotrVarTyped typedVariable variableWithType]}

```
# Note: Perl is dynamically typed; explicit type annotations are not used.
my $${1:myVar} = $2;
```

## Perl For Loop

### {[cotrForLoop forLoop forX]}

```
for (my $${1:i} = 0; $1 < ${2:10}; $1++) {
  # Your code here
}
```

## Perl Throw Exception

### {[cotrThrow throwError throwException]}

```
die '${1:Your message here}';
```

## Perl This Type Check

### {[thisTypeCheck thisType getThisType]}

```
ref($CLIPBOARD)
```

## Perl Map Type

### {[cotrTypesMap mapType typeMap hashmapType structType dictType typeDict typeScruct]}

```
%hash
```

## Perl Concatenate Strings

### {[cotrConcat concatenate combine]}

```
"${1:string1}" . "${2:string2}"
```

## Perl If Else Statement

### {[cotrIfElse ifElseStatement]}

```
if (${1:condition}) {
  # Your code here
} else {
  # Your code here
}
```

## Perl Try Catch

### {[cotrTryCatch tryCatch]}

```
eval {
  # Your code here
};
if ($@) {
  # Your code here
}
```

## Perl Class

### {[cotrClass class objectTemplate]}

```
package ${1:MyClass};

# Your code here
```

## Perl Boolean False

### {[cotrTypesBoolFalse false off booleanFalse]}

```
0
```

## Perl Create Nullable Variable

### {[cotrVarNullable variableNullable nullableVariable]}

```
my $${1:myVar};  # Variable can be undefined (undef).
```

## Perl Create Float Variable

### {[cotrVarNum number float floatVariable variableFloat variableNumber numberVariable]}

```
my $${1:myFloat} = ${2:0.0};
```

## Perl Create Boolean Variable

### {[cotrVarBool variableBool bool boolVariable createBool]}

```
my $${1:myBool} = ${2:1};
```

## Perl Create Date Variable

### {[cotrVarDate dateVariable variableDate date]}

```
my $${1:myDate} = DateTime->new( year => ${2:year}, month => ${3:month}, day => ${4:day} );
```

## Perl Case Statement

### {[cotrSwitch switch switchStatement select case]}

```
case ${1:variable} {
when ${2:value1}
  # Your code here
when ${4:value2}
  # Your code here
else
  # Your code here
}
```

## Perl Type Comparison

### {[cotrTypeCompare compareTypes]}

```
# Check if two variables have the same type:
if (ref ${1:variable1} eq ref ${2:variable2}) {
  # Your code here
}
```

## Perl Create Multi-Line String Variable

### {[cotrVarStringMulti multiLineString varStringMulti stringVariableMulti createMultiLineString]}

```
my $${1:myString} = <<'END_STRING';
${2:Line 1}
${3:Line 2}
${4:Line 3}
END_STRING
```

## Perl If Statement

### {[cotrIf ifStatement]}

```
if (${1:condition}) {
  # Your code here
}
```

## Perl Ternary Operator

### {[cotrTernary ternary conditionalOperator]}

```
${1:condition} ? ${2:trueValue} : ${3:falseValue}
```

## Perl List Type

### {[cotrTypesList listType typeList typeArray]}

```
@array
```

## Perl Multi-Line Comment

### {[cotrCommentMulti multiLineComment commentMultiLine blockComment]}

```
=begin
${1:Your comment here}
=end
```


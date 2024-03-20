---
title: Haskell
description: Haskell snippets on the rocks.
---

## [cotrVarDouble](/snippets/cotrvardouble)

Haskell Create Double Variable

```haskell
let ${1:myDouble} = ${2:0.0}
```

## [cotrVarList](/snippets/cotrvarlist)

Haskell Create List Variable

```haskell
let ${1:myList} = [${2:items}]
```

## [cotrFuncArgsNamed](/snippets/cotrfuncargsnamed)

Haskell Named Arguments (Alternative)

```haskell
-- Haskell does not have named arguments in the traditional sense.
-- You can use record syntax or higher-order functions to achieve similar functionality.
```

## [cotrTypesList](/snippets/cotrtypeslist)

Haskell List Type

```haskell
[a]
```

## [cotrVarSyntax](/snippets/cotrvarsyntax)

Haskell Variable Declaration Syntax

```haskell
-- Haskell Variable Declaration Syntax:

-- - let: (Scope: Block)
--   - Declares an immutable variable.
--   - Use for values that should not change.

-- - let (mut) varName = expression: (Scope: do block)
--   - Declares a mutable variable within a 'do' block.
--   - Use for variables that need to be reassigned.

-- Note:
-- - Haskell emphasizes immutability, so use 'let' by default.
-- - Use mutable variables with 'let (mut)' only when necessary within 'do' blocks.
```

## [cotrFuncSyntax](/snippets/cotrfuncsyntax)

Haskell Function Syntax

```haskell
-- Haskell Function Syntax:

-- Basic function:
-- functionName :: parameterTypes -> returnType
-- functionName parameters = expression

-- Function with arguments:
-- functionName arg1 arg2 ... = expression
```

## [cotrTypeConvert](/snippets/cotrtypeconvert)

Haskell Type Conversion

```haskell
-- Haskell emphasizes explicit type conversions for safety.

-- Explicit conversions:
-- - fromIntegral variable  // Converts numeric types (e.g., Int to Double)
-- - show variable  // Converts values to strings
-- - read variable  // Converts strings to values (unsafe)

-- Note:
-- - Be cautious with type conversions, especially 'read', as they can lead to errors if the conversion is not valid.
```

## [cotrVarNum](/snippets/cotrvarnum)

Haskell Number Variable

```haskell
let ${1:myNum} :: ${2:NumType} = $3
```

## [cotrVarStringMulti](/snippets/cotrvarstringmulti)

Haskell Create Multi-Line String Variable

```haskell
let ${1:myString} = """
${2:Line 1}
${3:Line 2}
${4:Line 3}
"""
```

## [cotrPrintMulti](/snippets/cotrprintmulti)

Haskell Print Multi

```haskell
putStrLn $ unlines [
  ${1:"Line 1"},
  ${2:"Line 2"},
  ${3:"Line 3"}
]
```

## [cotrCommentMulti](/snippets/cotrcommentmulti)

Haskell Multi-Line Comment

```haskell
{-
 ${1:Your comment here}
-}
```

## [cotrTypeCheck](/snippets/cotrtypecheck)

Haskell Type Check

```haskell
${1:variable} :: ${2:Type}
```

## [cotrTypesBool](/snippets/cotrtypesbool)

Haskell Boolean Type

```haskell
Bool
```

## [cotrVar](/snippets/cotrvar)

Haskell Create Variable

```haskell
let ${1:myVar} = $2
```

## [cotrVarString](/snippets/cotrvarstring)

Haskell Create String Variable

```haskell
let ${1:myString} = "${2:Your string here}"
```

## [cotrVarInt](/snippets/cotrvarint)

Haskell Create Integer Variable

```haskell
let ${1:myInt} = ${2:0}
```

## [cotrForEachLoop](/snippets/cotrforeachloop)

Haskell For Each Loop

```haskell
forM ${1:iterable} \${2:item} -> do
  -- Your code here
```

## [cotrFunc](/snippets/cotrfunc)

Haskell Function

```haskell
${1:functionName} :: ${2:parameterTypes} -> ${3:returnType}
${1:functionName} ${2:parameters} = ${4:expression}
```

## [cotrEqual](/snippets/cotrequal)

Haskell Equal To

```haskell
==
```

## [cotrNotEqual](/snippets/cotrnotequal)

Haskell Not Equal To

```haskell
/=
```

## [cotrInterpolate](/snippets/cotrinterpolate)

Haskell Interpolate String

```haskell
show ${1:variable}
```

## [cotrConcat](/snippets/cotrconcat)

Haskell Concatenate Strings

```haskell
${1:string1} ++ ${2:string2}
```

## [cotrVarDate](/snippets/cotrvardate)

Haskell Date Variable

```haskell
-- Use the 'time' package to create a date variable:

import Data.Time

let ${1:myDate} :: UTCTime = getCurrentTime
```

## [cotrComment](/snippets/cotrcomment)

Haskell Comment

```haskell
-- ${1:Your comment here}
```

## [cotrOperatorsBool](/snippets/cotroperatorsbool)

Haskell Boolean Operators

```haskell
-- Haskell Boolean Operators:

-- - && : Logical AND
-- - || : Logical OR
-- - not : Logical NOT
```

## [cotrTypesBoolFalse](/snippets/cotrtypesboolfalse)

Haskell Boolean False

```haskell
False
```

## [cotrGenList](/snippets/cotrgenlist)

Haskell Generate List

```haskell
[${1:start}..${2:end}]
```

## [cotrPrint](/snippets/cotrprint)

Haskell Print

```haskell
putStrLn ${1:'Your message here'}
```

## [cotrTernary](/snippets/cotrternary)

Haskell Ternary Operator (Alternative)

```haskell
-- Haskell does not have a ternary operator.
-- Use a case expression or an if-then-else expression instead:

let result = case ${1:condition} of
  True -> ${2:trueValue}
  False -> ${3:falseValue}
```

## [cotrThrow](/snippets/cotrthrow)

Haskell Throw Exception

```haskell
error "${1:Your error message here}"
```

## [cotrOperators](/snippets/cotroperators)

Haskell Mathematical Operators

```haskell
-- Haskell Mathematical Operators
-- Addition: +
-- Subtraction: -
-- Multiplication: *
-- Exponentiation: **
-- Division: /
-- Modulus (Remainder): mod
-- Integer Division: div
-- Assignment: =
-- Addition assignment: +=
-- Subtraction assignment: -=
-- Multiplication assignment: *=
-- Division assignment: /=
-- Modulus assignment: mod=
-- Integer Division assignment: div=
```

## [cotrTypesDate](/snippets/cotrtypesdate)

Haskell Date Type

```haskell
-- Haskell does not have a built-in Date type. Use the 'time' package for date and time operations.
```

## [cotrVarTyped](/snippets/cotrvartyped)

Haskell Create Typed Variable

```haskell
let ${1:myVar} :: ${2:Type} = $3
```

## [cotrIf](/snippets/cotrif)

Haskell If Statement

```haskell
if ${1:condition}
  then ${2:expression1}
  else ${3:expression2}
```

## [cotrVarBool](/snippets/cotrvarbool)

Haskell Create Boolean Variable

```haskell
let ${1:myBool} = ${2:True}
```

## [cotrForIn](/snippets/cotrforin)

Haskell For...In Loop (Alternative)

```haskell
-- Haskell does not have a direct for...in loop.
-- Use higher-order functions like 'map' or 'forM' instead:

forM ${1:iterable} \${2:item} -> do
  -- Your code here
```

## [cotrTypeCompare](/snippets/cotrtypecompare)

Haskell Type Comparison

```haskell
-- Haskell does not have a built-in function for comparing types directly.
-- You can use type classes or custom functions to achieve this.
```

## [cotrTypes](/snippets/cotrtypes)

Haskell Types

```haskell
$BLOCK_COMMENT_START
Haskell is a statically typed language with strong type inference.

Types in Haskell include:
- Int: Integer
- Integer: Arbitrary-precision integer
- Float: Single-precision floating-point number
- Double: Double-precision floating-point number
- Char: Character
- Bool: Boolean
- String: String
- [a]: List of type 'a'
- (a, b): Tuple with elements of types 'a' and 'b'
- Maybe a: Type representing a value of type 'a' or Nothing
- Either a b: Type representing a value of either type 'a' or type 'b'
- Function types (e.g., Int -> String): Types representing functions
- Data types: Custom data types defined using algebraic data types
- Type classes: Interfaces that define shared behavior for types
$BLOCK_COMMENT_END
```

## [cotrTypesMap](/snippets/cotrtypesmap)

Haskell Map Type

```haskell
Map k v
```

## [cotrVarStatic](/snippets/cotrvarstatic)

Haskell Static Variable (Alternative)

```haskell
-- Haskell does not have static variables in the same way as imperative languages.
-- You can use top-level definitions or modules to achieve similar functionality.
```

## [cotrFuncLambda](/snippets/cotrfunclambda)

Haskell Lambda Function

```haskell
\${1:parameters} -> ${2:expression}

-- Usage example
let ${3:myFunc} = \${1:parameters} -> ${2:expression}
in ${3:myFunc} ${4:arguments}
```

## [cotrInfo](/snippets/cotrinfo)

Haskell Info

```haskell
-- Typing: Statically typed, strong, inferred
-- Paradigm: Functional
-- Compilation: Compiled or interpreted
-- Concurrency: Supports concurrency with lightweight threads and software transactional memory
```

## [cotrStructure](/snippets/cotrstructure)

Haskell Project Structure (High-Level)

```haskell
// Recommended High-Level Haskell Project Structure:

// - src/
//   - Contains the source code of the application.
//   - Typically organized by functionality or module,
//     with a Main.hs file for the executable entry point.

// - app/
//   - Contains the main application entry point, often linking to the library in src/.

// - lib/
//   - If the project includes a library that should be separable from the main application,
//     its code goes here.

// - test/
//   - Contains the test suites, often using a framework like HUnit or QuickCheck.

// - bench/
//   - Contains benchmarking code, often using a framework like Criterion.

// - doc/
//   - Contains documentation files.

// - scripts/
//   - Contains utility scripts for tasks like building, running, or testing.

// Note:
// - This structure may vary based on the build tool (like Stack or Cabal) and
//   the complexity and needs of the project.
// - The 'app' directory is often used in Stack-based projects.
```

## [cotrTypesNull](/snippets/cotrtypesnull)

Haskell Null Type

```haskell
Nothing
```

## [cotrTypesBoolTrue](/snippets/cotrtypesbooltrue)

Haskell Boolean True

```haskell
True
```

## [cotrNow](/snippets/cotrnow)

Haskell Date Now

```haskell
-- Use the 'time' package to get the current date and time.
```

## [cotrTypesNumAlt](/snippets/cotrtypesnumalt)

Haskell Float Type

```haskell
Float
```

## [cotrConst](/snippets/cotrconst)

Haskell Create Constant

```haskell
-- Haskell does not have a 'const' keyword. Use 'let' for immutable values.
```

## [cotrIfElse](/snippets/cotrifelse)

Haskell If-Else Statement

```haskell
if ${1:condition}
  then ${2:expression1}
  else ${3:expression2}
```

## [cotrTryCatch](/snippets/cotrtrycatch)

Haskell Try-Catch 

```haskell
-- Haskell does not have a traditional try-catch mechanism.
-- Use the 'Either' or 'Maybe' types for error handling.
```

## [cotrEntry](/snippets/cotrentry)

Haskell Entry Point

```haskell
-- Haskell Entry Point
-- To run this program, use: `ghc filename.hs` or `runhaskell filename.hs`

main :: IO ()
main = do
  -- Your code here

```

## [cotrVarMap](/snippets/cotrvarmap)

Haskell Create Map Variable

```haskell
let ${1:myMap} = Map.fromList [(${2:key}, ${3:value})]
  -- Add more key-value pairs here
```

## [cotrTypesInt](/snippets/cotrtypesint)

Haskell Integer Type

```haskell
Int
```

## [cotrSwitch](/snippets/cotrswitch)

Haskell Case Expression

```haskell
case ${1:variable} of
  ${2:pattern1} -> ${3:expression1}
  ${4:pattern2} -> ${5:expression2}
  _ -> ${6:defaultExpression}
```

## [cotrFuncArgs](/snippets/cotrfuncargs)

Haskell Function Arguments

```haskell
-- Haskell functions typically use pattern matching to handle arguments.
-- Example:

myFunction :: Int -> Int -> Int
myFunction x y = x + y
```

## [cotrTypesDynamic](/snippets/cotrtypesdynamic)

Haskell Dynamic Type

```haskell
-- Haskell is statically typed, but you can use 'Any' for dynamic values.
```

## [cotrVarNullable](/snippets/cotrvarnullable)

Haskell Create Nullable Variable

```haskell
let ${1:myVar} :: Maybe ${2:Type} = Nothing
```

## [cotrGenMap](/snippets/cotrgenmap)

Haskell Generate Map

```haskell
-- Haskell does not have a built-in way to generate a map with a specific number of key-value pairs.
-- You can use a list comprehension or a custom function to achieve this.
```

## [cotrWhileLoop](/snippets/cotrwhileloop)

Haskell While Loop

```haskell
-- Haskell does not have a traditional while loop. Use recursion or higher-order functions like 'until'.
```

## [cotrTypesString](/snippets/cotrtypesstring)

Haskell String Type

```haskell
String
```

## [cotrTypesNum](/snippets/cotrtypesnum)

Haskell Double Type

```haskell
Double
```


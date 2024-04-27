---
title: Rust
description: Rust snippets on the rocks.
---

## [cotrGenList](/snippets/cotrgenlist)

Rust Generate Array

```rust
let ${1:myList} = [
  ${2:'item1'},
  ${3:'item2'},
  // Add more items here
];
```

## [cotrFunc](/snippets/cotrfunc)

Rust Function

```rust
fn ${2:my_function}(${3:parameters}) -> ${1:void} {
    ${4:// Your code here}
}
```

## [cotrEnum](/snippets/cotrenum)

Rust Enum

```rust
enum ${1:MyEnum} {
  ${2:Variant1},
  ${3:Variant2},
  // Add more variants here
}
```

## [cotrTypesBoolFalse](/snippets/cotrtypesboolfalse)

Rust Boolean False

```rust
false
```

## [cotrTypesChar](/snippets/cotrtypeschar)

Rust Character Type

```rust
char
```

## [cotrNull](/snippets/cotrnull)

Rust Null Type (Option)

```rust
None
```

## [cotrTypesIntAlt](/snippets/cotrtypesintalt)

Rust Integer Type (i64)

```rust
i64
```

## [cotrAny](/snippets/cotrany)

Rust Dynamic Type (Any)

```rust
dyn Any // There is no built-in Any type in Rust.
```

## [cotrNotEqual](/snippets/cotrnotequal)

Rust Not Equal To

```rust
!=
```

## [cotrTypeCheck](/snippets/cotrtypecheck)

Rust Type Check

```rust
${1:variable}.type()
```

## [cotrTypesInt](/snippets/cotrtypesint)

Rust Integer Type (i32)

```rust
i32
```

## [cotrTypesList](/snippets/cotrtypeslist)

Rust List Type

```rust
Vec<${1:Type}>
```

## [cotrPrintMulti](/snippets/cotrprintmulti)

Rust Print Multi

```rust
println!("{}
{}
{}",
${1:"Line 1"},
${2:"Line 2"},
${3:"Line 3"}
);
```

## [cotrFuncAnon](/snippets/cotrfuncanon)

Rust Anonymous Function

```rust
|${1:parameters}| -> ${2:ReturnType} {
    ${3:// Your code here}
}
```

## [cotrEqual](/snippets/cotrequal)

Rust Equal To

```rust
==
```

## [cotrTypesStringAlt](/snippets/cotrtypesstringalt)

Rust String Type (&str)

```rust
&str
```

## [cotrTypesBool](/snippets/cotrtypesbool)

Rust Boolean Type (bool)

```rust
bool
```

## [cotrComment](/snippets/cotrcomment)

Rust Comment

```rust
// ${1:comment}
```

## [cotrIfElse](/snippets/cotrifelse)

Rust If Else Statement

```rust
if ${1:condition} {
  ${2:// Your code here}
} else if ${3:condition} {
  ${4:// Your code here}
} else {
  ${5:// Your code here}
}
```

## [cotrOperatorsBool](/snippets/cotroperatorsbool)

Rust Boolean Operators

```rust
// Rust Boolean Operators
// Logical AND: &&
// Logical OR: ||
// Logical NOT: !
// Equality: ==
// Inequality: !=
// Greater than: >
// Less than: <
// Greater than or equal to: >=
// Less than or equal to: <=
```

## [cotrVarStringMulti](/snippets/cotrvarstringmulti)

Rust Create Multi-line String Variable

```rust
let ${1:myStr} = String::from(
  ${2:'Line 1'}
  ${3:'Line 2'}
  ${4:'Line 3'}
);
```

## [cotrForOfLoop](/snippets/cotrforofloop)

Rust For...Of Loop

```rust
for ${1:item} in ${2:iterable} {
  // Your code here
}
```

## [cotrVarList](/snippets/cotrvarlist)

Rust Create List Variable

```rust
let ${1:myList} = [
  ${2:'item1'},
  ${3:'item2'},
  // Add more items here
];
```

## [cotrFuncArgsNamed](/snippets/cotrfuncargsnamed)

Rust Function Named Args

```rust
// Note: Rust does not support named arguments in function definitions.
```

## [cotrInterpolate](/snippets/cotrinterpolate)

Rust Interpolate String

```rust
format!("${1:Your message here}")
```

## [cotrVar](/snippets/cotrvar)

Rust Create Variable

```rust
let ${1:myVar} = $2;
```

## [cotrVarNum](/snippets/cotrvarnum)

Rust Create Float Variable

```rust
let ${1:myFloat} = ${2:0.0};
```

## [cotrVarBool](/snippets/cotrvarbool)

Rust Create Boolean Variable

```rust
let ${1:myBool} = ${2:true};
```

## [cotrConst](/snippets/cotrconst)

Rust Create Constant

```rust
const ${1:myConst}: ${2:type} = $3;
```

## [cotrStructure](/snippets/cotrstructure)

Rust Project Structure (High-Level)

```rust
// Recommended High-Level Rust Project Structure:

// - Cargo.toml: The manifest file for Rust’s package manager, Cargo.
// - src/
//   - lib.rs: The entry point for library crates.
//   - main.rs: The entry point for binary crates (executable applications).
//   - /bin/: Additional binaries can be placed here as separate .rs files.
//   - /modules/: Organize code by feature in different modules (files or directories).

// - tests/
//   - Integration tests go here, in separate files or directories.

// - examples/
//   - Example programs demonstrating the use of the crate.

// - benches/
//   - Benchmarks go here, using the built-in benchmarking support in Rust.

// - target/
//   - Generated by Cargo, contains compilation artifacts and executables.

// - .cargo/
//   - Configuration for Cargo can be placed here.

// Note:
// - This structure supports both library and executable projects.
// - Use Cargo workspaces for multi-crate projects.
```

## [cotrTypesNum](/snippets/cotrtypesnum)

Rust Float Type (f32)

```rust
f32
```

## [cotrWhileLoop](/snippets/cotrwhileloop)

Rust While Loop

```rust
while ${1:condition} {
  // Your code here
}
```

## [cotrCommentMulti](/snippets/cotrcommentmulti)

Rust Multi-line Comment

```rust
/*
 * ${1:comment}
 */
```

## [cotrSwitch](/snippets/cotrswitch)

Rust Match Statement

```rust
match ${1:variable} {
  ${2:value1} => {
    // Your code here
  },
  ${3:value2} => {
    // Your code here
  },
  _ => {
    // Your code here
  }
}
```

## [cotrTypes](/snippets/cotrtypes)

Rust Types

```rust
$BLOCK_COMMENT_START
Rust is a statically typed language.

Types in Rust include:
- i8, i16, i32, i64, i128: Signed integers
- u8, u16, u32, u64, u128: Unsigned integers
- f32, f64: Floating-point numbers
- bool: Boolean
- char: Character
- str: String slice
- String: Heap-allocated string
- &[T]: Slice of type T
- Vec<T>: Vector of type T
- Option<T>: Optional value of type T
- Result<T, E>: Result of a computation that could be successful (T) or an error (E)
- Box<T>: Boxed (heap-allocated) type T
- Rc<T>: Reference-counted type T
- RefCell<T>: Mutable memory location with dynamically checked borrow rules
- HashMap<K, V>: Hash map with key type K and value type V
- Tuple (T1, T2, ...): Tuple with elements of different types
- Array [T; N]: Array with elements of type T and fixed size N
- Struct: Custom data type with named fields
- Enum: Custom data type with variants
$BLOCK_COMMENT_END
```

## [cotrVarSyntax](/snippets/cotrvarsyntax)

Variable Declaration Syntax

```rust
// Rust Variable Declaration Syntax:

// - let: (Scope: Block)
//   - Declares an immutable variable by default.
//   - Use for values that should not change.

// - let mut: (Scope: Block)
//   - Declares a mutable variable.
//   - Use for variables that need to be reassigned.

// - const: (Scope: Global)
//   - Declares a constant value.
//   - Must be initialized with a constant expression.

// Note:
// - Rust does not have a direct equivalent to 'var'.
// - Use 'let' for most variable declarations.
// - Use 'let mut' for variables that need to be reassigned.
// - Use 'const' for values that are known at compile time.
```

## [cotrVarDate](/snippets/cotrvardate)

Rust Create Date Variable

```rust
// Rust does not have a built-in Date type.
// Use the chrono crate to create a date variable.
use chrono::{DateTime, Utc};

let ${1:my_date}: DateTime<Utc> = Utc::now();
```

## [cotrInfo](/snippets/cotrinfo)

Rust Info

```rust
Typing: Statically typed
Paradigm: Multi-paradigm: imperative, functional, concurrent
Compilation: Compiled
Concurrency: Built-in support for concurrency with ownership and borrowing, and asynchronous programming with async/await
```

## [cotrTryCatch](/snippets/cotrtrycatch)

Rust Try Catch

```rust
let result = std::panic::catch_unwind(|| {
  ${1:// Your code here}
});
if let Err(err) = result {
  ${2:// Your code here}
}
```

## [cotrTypesDate](/snippets/cotrtypesdate)

Rust Date Type

```rust
// Rust does not have a built-in Date type.
// Use the chrono crate for date and time operations.
use chrono::{DateTime, Utc};
```

## [cotrConcat](/snippets/cotrconcat)

Rust Concatenate String

```rust
format!("${1:Your message here} ${2:and} ${3:more}")
```

## [cotrClosure](/snippets/cotrclosure)

Rust Closure

```rust
let ${1:my_closure} = |${2:parameters}| ${3:expression};
```

## [cotrEntry](/snippets/cotrentry)

Rust Entry Point

```rust
// Rust Entry Point
// To run this program, use: `cargo run`
// Note: This assumes you are using Cargo, Rust's package manager and build tool.

fn main() {
    println!("Hello, World!");
}
```

## [cotrOperators](/snippets/cotroperators)

Rust Mathematical Operators

```rust
// Rust Mathematical Operators
// Addition: +
// Subtraction: -
// Multiplication: *
// Division: /
// Modulus (Remainder): %
// Exponentiation: Not directly supported, use `f32::powi` or `f64::powf` for floating-point numbers
// Increment: Not directly supported, use `+= 1`
// Decrement: Not directly supported, use `-= 1`
// Assignment: =
// Addition assignment: +=
// Subtraction assignment: -=
// Multiplication assignment: *=
// Division assignment: /=
// Modulus assignment: %=
```

## [cotrFuncSyntax](/snippets/cotrfuncsyntax)

Rust Function Syntax

```rust
// Rust Function Syntax
// Basic function: fn function_name(parameters) -> return_type { ... }
// Function with arguments: fn function_name(arg1: type1, arg2: type2, ...) -> return_type { ... }
// Note: Rust does not support named arguments in function definitions.
```

## [cotrClass](/snippets/cotrclass)

Rust Struct

```rust
struct ${1:MyStruct} {
  ${2:field1}: ${3:type1},
  ${4:field2}: ${5:type2},
  // Add more fields here
}
```

## [cotrThrow](/snippets/cotrthrow)

Rust Throw Exception

```rust
panic!("Your message here")
```

## [cotrIf](/snippets/cotrif)

Rust If Statement

```rust
if ${1:condition} {
  ${2:// Your code here}
}
```

## [cotrTypesMap](/snippets/cotrtypesmap)

Rust Map Type

```rust
std::collections::HashMap<${1:KeyType}, ${2:ValueType}>
```

## [cotrVarMapAlt](/snippets/cotrvarmapalt)

Rust Create Map Variable (BTreeMap)

```rust
use std::collections::BTreeMap;

let ${1:myMap} = BTreeMap::new();
```

## [cotrPrint](/snippets/cotrprint)

Rust Print

```rust
println!("{${1:'Your message here'}}");
```

## [cotrVarTyped](/snippets/cotrvartyped)

Rust Create Typed Variable

```rust
let ${1:my_var}: ${2:Type} = $3;
```

## [cotrForLoop](/snippets/cotrforloop)

Rust For Loop

```rust
for ${1:i} in ${2:0..10} {
  // Your code here
}
```

## [cotrTypesString](/snippets/cotrtypesstring)

Rust String Type (String)

```rust
String
```

## [cotrTypesNumAlt](/snippets/cotrtypesnumalt)

Rust Float Type (f64)

```rust
f64
```

## [cotrNow](/snippets/cotrnow)

Rust Date Now

```rust
// Rust does not have a built-in Date type.
// Use the chrono crate to get the current date and time.
use chrono::Utc;

Utc::now()
```

## [cotrTypeCompare](/snippets/cotrtypecompare)

Rust Type Comparison

```rust
// Check if two variables have the same type:
if ${1:variable1}.type_id() == ${2:variable2}.type_id() {
  // Your code here
}
```

## [cotrVarInt](/snippets/cotrvarint)

 Rust Create Integer Variable

```rust
let ${1:myInt} = ${2:0};
```

## [cotrVarMap](/snippets/cotrvarmap)

Rust Create Map Variable (Hashmap)

```rust
use std::collections::HashMap;

let ${1:myMap} = HashMap::new();
```

## [cotrTypeConvert](/snippets/cotrtypeconvert)

Rust Type Conversion

```rust
// Rust Type Conversion:

// Rust emphasizes explicit type conversions for safety.

// Explicit conversions:
// - variable as TargetType  // Type casting (can panic if conversion fails)
// - TargetType::from(variable)  // Conversion methods (e.g., i32::from(f64))

// Note:
// - Be cautious with type casting, as it can lead to panics if the conversion is not valid.
```

## [cotrGenMap](/snippets/cotrgenmap)

Rust Generate Object Map

```rust
let ${1:myMap} = [
  ${2:'key1'}: ${3:'value1'},
  ${4:'key2'}: ${5:'value2'},
  // Add more key-value pairs here
];
```

## [cotrMutVar](/snippets/cotrmutvar)

Rust Create Mutable Variable

```rust
let mut ${1:myVar} = $2;
```

## [cotrFuncArgs](/snippets/cotrfuncargs)

Rust Function Args

```rust
// In Rust, default arguments are not supported but you can set default values using patterns like Option<T> or custom types.
fn ${2:my_function}(${3:arg1}: ${4:type1}, ${5:arg2}: Option<${6:type2}> = None) -> ${1:void} {
    ${7:// Your code here}
}
```

## [cotrTernary](/snippets/cotrternary)

Rust Ternary Operator

```rust
${1:condition} ? ${2:trueValue} : ${3:falseValue}
```

## [cotrTypesBoolTrue](/snippets/cotrtypesbooltrue)

Rust Boolean True

```rust
true
```

## [cotrVarNullable](/snippets/cotrvarnullable)

Rust Create Nullable Variable

```rust
let ${1:my_var}: Option<${2:Type}> = $3;
```

## [cotrVarString](/snippets/cotrvarstring)

Rust Create String Variable

```rust
let ${1:myStr} = String::from(${2:"myString"});
```

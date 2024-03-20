---
title: cotrTypes
description: The cotrTypes snippet.
---

Lists all types

**Aliases**:
- cotrTypes
- types
- allTypes
- languageTypes
- builtInTypes
- dataTypes

## cpp
```cpp
BLOCK_COMMENT_START
C++ is a statically typed language.

Types in C++ include:
- int: Integer
- float: Single-precision floating-point number
- double: Double-precision floating-point number
- char: Character
- bool: Boolean
- std::string: String class from the Standard Library
- int[10]: Array of integers with size 10
- std::vector<int>: Vector of integers from the Standard Library
- std::map<K, V>: Map (associative array) from the Standard Library
- struct MyStruct: Custom data structure with named fields
- enum MyEnum: Enumeration type
- void: Type representing the absence of a value
- auto: Type inferred by the compiler
- nullptr: Type of the null pointer
- decltype: Type specifier for the type of an expression

Read more here: https://learn.microsoft.com/en-us/cpp/cpp/fundamental-types-cpp?view=msvc-170
BLOCK_COMMENT_END
```

## csharp
```csharp
BLOCK_COMMENT_START
C# is a statically typed language.

Types in C# include:
- int: Integer
- float: Single-precision floating-point number
- double: Double-precision floating-point number
- char: Character
- bool: Boolean
- string: String
- int[]: Array of integers
- List<int>: List of integers
- Dictionary<K, V>: Dictionary with key type K and value type V
- struct MyStruct: Custom value type with named fields
- enum MyEnum: Enumeration type
- void: Type representing the absence of a value
- object: Base type of all other types
- dynamic: Type for dynamic binding
- var: Type inferred by the compiler
- Nullable<T>: Type representing a value of type T or null
- Tuple<T1, T2, ...>: Tuple with elements of different types
- Action, Func<T>: Delegate types for methods

Read more here: https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types
BLOCK_COMMENT_END
```

## dart
```dart
BLOCK_COMMENT_START
Dart is a statically typed language.

Types in Dart include:
- num: A number type that can be either an int or a double
- int: Integer
- BigInt: Arbitrary-precision integer
- double: Double-precision floating-point number
- String: A sequence of characters
- bool: Boolean
- List: A list of elements
- Map: A collection of key-value pairs
- Set: A collection of unique elements
- Runes: For expressing Unicode characters in a String
- Symbol: An opaque, dynamic representation of a string in Dart

Read more here: https://dart.dev/language/built-in-types
BLOCK_COMMENT_END
```

## go
```go
BLOCK_COMMENT_START
Go is a statically typed language.

Types in Go include:
- int, int8, int16, int32, int64: Signed integers
- uint, uint8, uint16, uint32, uint64: Unsigned integers
- float32, float64: Floating-point numbers
- complex64, complex128: Complex numbers
- byte: Alias for uint8
- rune: Alias for int32 (represents a Unicode code point)
- string: String
- bool: Boolean
- [10]int: Array of integers with fixed size 10
- []int: Slice of integers
- map[K]V: Map with key type K and value type V
- struct { Field1 int; Field2 string; }: Custom data structure with named fields
- interface{}: Interface type representing any type
- chan int: Channel for sending and receiving integers
- func(int) string: Function type taking an int and returning a string
- error: Interface type for error handling
BLOCK_COMMENT_END
```

## haskell
```haskell
BLOCK_COMMENT_START
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
BLOCK_COMMENT_END
```

## java
```java
BLOCK_COMMENT_START
Java is a statically typed language.

Types in Java include:
- int: Integer
- float: Single-precision floating-point number
- double: Double-precision floating-point number
- char: Character
- boolean: Boolean
- String: String
- int[]: Array of integers
- ArrayList<Integer>: List of integers
- HashMap<K, V>: Map with key type K and value type V
- MyCustomClass: Custom class with named fields
- enum MyEnum: Enumeration type
- void: Type representing the absence of a value
- Object: Base type of all other types
- List<T>: Interface for lists in the Collections framework
- Set<T>: Interface for sets in the Collections framework
- Map<K, V>: Interface for maps in the Collections framework
BLOCK_COMMENT_END
```

## javascript
```javascript
BLOCK_COMMENT_START
JavaScript is a dynamically typed language. It does not have static types.

Types in JavaScript include:
- Number: for both integers and floating-point numbers
- String: for text
- Boolean: for true/false values
- Object: for key-value pairs
- Array: for ordered lists
- Function: for executable functions
- Symbol: for unique identifiers
- null: for absence of value
- undefined: for uninitialized variables
BLOCK_COMMENT_END
```

## javascriptreact
```javascriptreact
BLOCK_COMMENT_START
JavaScript is a dynamically typed language. It does not have static types.

Types in JavaScript include:
- Number: for both integers and floating-point numbers
- String: for text
- Boolean: for true/false values
- Object: for key-value pairs
- Array: for ordered lists
- Function: for executable functions
- Symbol: for unique identifiers
- null: for absence of value
- undefined: for uninitialized variables
BLOCK_COMMENT_END
```

## kotlin
```kotlin
BLOCK_COMMENT_START
Kotlin is a statically typed language.

Types in Kotlin include:
- Int: Integer
- Double: Double-precision floating-point number
- Float: Single-precision floating-point number
- Char: Character
- Boolean: Boolean
- String: String
- Array<T>: Array of type T
- List<T>: List of type T
- Set<T>: Set of unique elements of type T
- Map<K, V>: Map with key type K and value type V
- Any: Base type of all non-nullable types
- Unit: Type with only one value - Unit (similar to void)
- Nothing: Type with no values - used for functions that never return
- Nullable types (e.g., Int?, String?): Types that can hold a value or null
- Function types (e.g., (Int, Int) -> Int): Types representing functions
- Data classes: Classes primarily used to hold data
- Sealed classes: Classes that restrict which other classes can inherit from them
- Enum classes: Enumeration classes
- Object: Singleton object
- Companion object: Object associated with a class
- Interface: Interface type

Read more here: https://kotlinlang.org/docs/basic-types.html
BLOCK_COMMENT_END
```

## perl
```perl
BLOCK_COMMENT_START
Perl is a dynamically typed language.

Some common types in Perl include:
- Scalar: Single value (numbers, strings, references)
- Array: Ordered list of scalars
- Hash: Unordered collection of key-value pairs
- Code: Subroutine reference
- Filehandle: File handle
- Regexp: Regular expression
- undef: Represents an undefined value
BLOCK_COMMENT_END
```

## php
```php
BLOCK_COMMENT_START
PHP is a dynamically typed language.

Types in PHP include:
- int: Integer
- float: Floating-point number
- string: A sequence of characters
- bool: Boolean
- array: An ordered map
- object: An instance of a class
- resource: Holds a reference to an external resource
- NULL: Represents a variable with no value
- callable: A type that can be called, such as a function or a method
- iterable: A type that can be iterated over, such as an array or an object implementing the Traversable interface
- mixed: Indicates that a parameter may accept multiple (but not all) types
- void: Indicates that a function does not return a value
- never: Indicates that a function does not return normally (it either throws an exception or terminates the script)
BLOCK_COMMENT_END
```

## powershell
```powershell
BLOCK_COMMENT_START
PowerShell is a dynamically typed language.

Some common types in PowerShell include:
- [int]: Integer
- [double]: Double-precision floating-point number
- [string]: String
- [bool]: Boolean
- [array]: Array
- [hashtable]: Hash table (associative array)
- [datetime]: Date and time
- [PSCustomObject]: Custom object
- [System.Collections.Hashtable]: .NET Hashtable
- [System.Collections.Generic.List[T]]: .NET Generic List
- [System.Management.Automation.PSObject]: PowerShell object
BLOCK_COMMENT_END
```

## python
```python
BLOCK_COMMENT_START
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
BLOCK_COMMENT_END
```

## r
```r
BLOCK_COMMENT_START
R is a dynamically typed language.

Some common types in R include:
- numeric: Numeric data type (includes integers and floating-point numbers)
- character: String
- logical: Boolean
- vector: One-dimensional array
- list: Ordered collection of elements
- data.frame: Two-dimensional data structure
- matrix: Two-dimensional array
- factor: Categorical data
- NULL: Represents the absence of a value
- function: Function object
BLOCK_COMMENT_END
```

## ruby
```ruby
BLOCK_COMMENT_START
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
BLOCK_COMMENT_END
```

## rust
```rust
BLOCK_COMMENT_START
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
BLOCK_COMMENT_END
```

## scala
```scala
BLOCK_COMMENT_START
Scala is a statically typed language.

Types in Scala include:
- Int: Integer
- Double: Double-precision floating-point number
- Float: Single-precision floating-point number
- Char: Character
- Boolean: Boolean
- String: String
- Array[T]: Array of type T
- List[T]: List of type T
- Set[T]: Set of unique elements of type T
- Map[K, V]: Map with key type K and value type V
- Any: Base type of all non-nullable types
- Unit: Type with only one value - Unit (similar to void)
- Nothing: Type with no values - used for functions that never return
- Option[T]: Type representing a value of type T or None
- Function types (e.g., (Int, Int) => Int): Types representing functions
- Case classes: Classes primarily used to hold data
- Sealed classes: Classes that restrict which other classes can inherit from them
- Enum classes: Enumeration classes
- Object: Singleton object
- Trait: Interface type
BLOCK_COMMENT_END
```

## shellscript
```shellscript
# Bash is dynamically typed, but common data types include:
- string: Textual data
- integer: Numeric data (whole numbers)
- float: Numeric data (decimals)
- array: Ordered collection of values
- associative array: Key-value pairs
```

## swift
```swift
BLOCK_COMMENT_START
Swift is a statically typed language.

Types in Swift include:
- Int, UInt: Signed and unsigned integers
- Float, Double: Floating-point numbers
- Bool: Boolean
- String: Textual data
- Character: A single character
- Array<Element>: An ordered collection of elements
- Dictionary<Key, Value>: A collection of key-value pairs
- Set<Element>: An unordered collection of unique elements
- Optional<Type>: An optional value of Type
- Tuple: A group of values
- Enum: An enumeration
- Struct: A structure
- Class: A class
- Protocol: A protocol
- Closure: A closure or lambda function

Read more here: https://docs.swift.org/swift-book/documentation/the-swift-programming-language/types/
BLOCK_COMMENT_END
```

## typescript
```typescript
BLOCK_COMMENT_START
TypeScript is a statically typed language.

Types in TypeScript include:
- number: Numeric data type
- string: Textual data type
- boolean: True or false value
- array: Array of values
- tuple: Fixed-length array of values
- enum: Enumeration of named values
- any: Any data type
- void: Absence of a value
- null: Null value
- undefined: Undefined value
- never: Represents values that never occur
- object: Non-primitive data type
BLOCK_COMMENT_END
```

## typescriptreact
```typescriptreact
BLOCK_COMMENT_START
Basic types in TypeScript:
- number: Numeric data type
- string: Textual data type
- boolean: True or false value
- array: Array of values
- tuple: Fixed-length array of values
- enum: Enumeration of named values
- any: Any data type
- void: Absence of a value
- null: Null value
- undefined: Undefined value
- never: Represents values that never occur
- object: Non-primitive data type
BLOCK_COMMENT_END
```


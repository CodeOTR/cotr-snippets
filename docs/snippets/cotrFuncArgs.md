---
title: cotrFuncArgs
description: The cotrFuncArgs snippet.
---

Creates a function with arguments

**Aliases**:
- cotrFuncArgs
- functionArgs
- functionWithArgs

## cpp
```cpp
// In C++, you can use default arguments in function definitions.
void myFunction(Type arg1, Type arg2 = defaultValue) {
    // Your code here
}
```

## csharp
```csharp
// In C#, functions can have arguments with default values.
public void MyFunction(type1 arg1, type2 arg2 = defaultValue)
{
    // Your code here
}
```

## dart
```dart
// In Dart, functions can have optional named or positional parameters with default values.
void myFunction(Type arg1, [Type arg2 = defaultValue]) {
  // Your code here
}
```

## go
```go
// In Go, functions do not support default argument values in definitions.
func MyFunction(arg1 type1, arg2 type2) void {
    // Your code here
}
```

## haskell
```haskell
-- Haskell functions typically use pattern matching to handle arguments.
-- Example:

myFunction :: Int -> Int -> Int
myFunction x y = x + y
```

## java
```java
// In Java, functions do not support default argument values in definitions.
// You can achieve similar functionality using method overloading.
public void myFunction(type1 arg1, type2 arg2) {
    // Your code here
}

// Overloaded method with default value for arg2
public void myFunction(type1 arg1) {
    type2 arg2 = defaultValue;
    myFunction(arg1, arg2);
}
```

## javascript
```javascript
// In JavaScript, functions can have arguments with default values.
function myFunction(arg1, arg2 = defaultValue) {
  // Your code here
}
```

## javascriptreact
```javascriptreact
// In JavaScript, functions can have arguments with default values.
function myFunction(arg1, arg2 = defaultValue) {
  // Your code here
}
```

## kotlin
```kotlin
// In Kotlin, functions can have arguments with default values.
fun myFunction(arg1: Type1, arg2: Type2 = defaultValue): Unit {
    // Your code here
}
```

## perl
```perl
# In Perl, you can use default arguments in function definitions.
sub myFunction {
  my arg1,arg2 = 'defaultVal') = @_;

  # Your code here
}
```

## php
```php
// In PHP, functions can have arguments with default values.
function myFunctionarg1,arg2 = 'defaultVal') {
  // Your code here
}
```

## powershell
```powershell
# In PowerShell, functions can have arguments with default values.
function myFunction {
  param (
    [Type]arg1,
    [Type]arg2 = defaultValue
  )

  # Your code here
}
```

## python
```python
# In Python, functions can have arguments with default values.
def my_function(arg1, arg2='defaultVal'):
    # Your code here

```

## r
```r
# In R, functions can have arguments with default values.
my_function <- function(arg1, arg2 = 'defaultVal') {
  # Your code here
}
```

## ruby
```ruby
# In Ruby, functions can have arguments with default values.
def my_function(arg1, arg2='defaultVal')
  # Your code here
end
```

## rust
```rust
// In Rust, default arguments are not supported but you can set default values using patterns like Option<T> or custom types.
fn my_function(arg1: type1, arg2: Option<type2> = None) -> void {
    // Your code here
}
```

## scala
```scala
// In Scala, functions can have arguments with default values.
def myFunction(arg1: Type1, arg2: Type2 = defaultValue): Unit = {
  // Your code here
}
```

## shellscript
```shellscript
myFunction() {
  local arg1=\$1
  local arg2=\$2
  // Your code here
}
```

## swift
```swift
// In Swift, functions can have arguments with default values.
func myFunction(arg1: Type1, arg2: Type2 = defaultValue) -> Void {
    // Your code here
}
```

## typescript
```typescript
// In TypeScript, functions can have arguments with default values.
function myFunction(arg1: type1, arg2: type2 = defaultValue): void {
  // Your code here
}
```

## typescriptreact
```typescriptreact
// In TypeScript, functions can have arguments with default values.
function myFunction(arg1: type1, arg2: type2 = defaultValue): void {
  // Your code here
}
```


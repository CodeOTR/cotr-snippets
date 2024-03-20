---
title: cotrTypeCompare
description: The cotrTypeCompare snippet.
---

Compares the types of two variables

**Aliases**:
- cotrTypeCompare
- compareTypes

## cpp
```cpp
// Check if two variables have the same type:
if (typeid(variable1) == typeid(variable2)) {
  // Your code here
}
```

## csharp
```csharp
// Check if two variables have the same type:
if (variable1.GetType() == variable2.GetType()) {
  // Your code here
}
```

## dart
```dart
// Check if two variables have the same type:
if (variable1.runtimeType == variable2.runtimeType) {
  // Your code here
}
```

## go
```go
// Check if two variables have the same type:
if reflect.TypeOf(variable1) == reflect.TypeOf(variable2) {
  // Your code here
}
```

## haskell
```haskell
-- Haskell does not have a built-in function for comparing types directly.
-- You can use type classes or custom functions to achieve this.
```

## java
```java
// Check if two variables have the same type:
if (variable1.getClass() == variable2.getClass()) {
  // Your code here
}
```

## javascript
```javascript
// Check if two variables have the same type:
if (typeof variable1 === typeof variable2) {
  // Your code here
}
```

## javascriptreact
```javascriptreact
// Check if two variables have the same type:
if (typeof variable1 === typeof variable2) {
  // Your code here
}
```

## kotlin
```kotlin
// Check if two variables have the same type:
if (variable1::class == variable2::class) {
  // Your code here
}
```

## perl
```perl
# Check if two variables have the same type:
if (ref variable1 eq ref variable2) {
  # Your code here
}
```

## php
```php
// Check if two variables have the same type:
if (gettype(variable1) === gettype(variable2)) {
  // Your code here
}
```

## powershell
```powershell
# Check if two variables have the same type:
if (variable1.GetType() -eq variable2.GetType()) {
  # Your code here
}
```

## python
```python
# Check if two variables have the same type:
if type(variable1) is type(variable2):
  # Your code here
```

## r
```r
# Check if two variables have the same type:
if (identical(class(variable1), class(variable2))) {
  # Your code here
}
```

## ruby
```ruby
# Check if two variables have the same type:
if variable1.class == variable2.class
  # Your code here
end
```

## rust
```rust
// Check if two variables have the same type:
if variable1.type_id() == variable2.type_id() {
  // Your code here
}
```

## scala
```scala
// Check if two variables have the same type:
if (variable1.getClass == variable2.getClass) {
  // Your code here
}
```

## shellscript
```shellscript
# Bash doesn't have direct type comparison, but you can use file or grep for basic checks.
```

## swift
```swift
// Check if two variables have the same type:
if type(of: variable1) == type(of: variable2) {
  // Your code here
}
```

## typescript
```typescript
// Check if two variables have the same type:
if (typeof variable1 === typeof variable2) {
  // Your code here
}
```

## typescriptreact
```typescriptreact
// Check if two variables have the same type:
if (typeof variable1 === typeof variable2) {
  // Your code here
}
```


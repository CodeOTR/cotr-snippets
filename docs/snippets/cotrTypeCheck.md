---
title: cotrTypeCheck
description: The cotrTypeCheck snippet.
---

Explains how to perform basic type checks

**Aliases**:
- cotrTypeCheck
- checkType
- getType
- typeOf

## cpp
```cpp
typeid(variable)
```

## csharp
```csharp
variable.GetType()
```

## dart
```dart
variable.runtimeType
```

## go
```go
fmt.Printf("%T", variable)
```

## haskell
```haskell
variable :: Type
```

## java
```java
variable.getClass()
```

## javascript
```javascript
typeof variable
```

## javascriptreact
```javascriptreact
typeof variable
```

## kotlin
```kotlin
variable::class
```

## perl
```perl
ref variable
```

## php
```php
gettype(variable)
```

## powershell
```powershell
variable.GetType()
```

## python
```python
type(variable)
```

## r
```r
class(variable)
```

## ruby
```ruby
variable.class
```

## rust
```rust
variable.type()
```

## scala
```scala
variable.getClass
```

## shellscript
```shellscript
# Bash is dynamically typed, but you can use file or grep for basic checks:
file variable | grep -q 'type'
```

## swift
```swift
type(of: variable)
```

## typescript
```typescript
typeof variable  // Note: This checks the runtime type.
```

## typescriptreact
```typescriptreact
typeof variable  // Note: This checks the runtime type.
```


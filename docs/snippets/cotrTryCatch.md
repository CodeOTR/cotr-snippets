---
title: cotrTryCatch
description: The cotrTryCatch snippet.
---

Creates a try...except block

**Aliases**:
- cotrTryCatch
- tryCatch

## cpp
```cpp
try {
  // Your code here
} catch (exceptionType exception) {
  // Your code here
}
```

## csharp
```csharp
try {
  // Your code here
} catch (Exception e) {
  // Your code here
}
```

## dart
```dart
try {
  // Your code here
} catch (exception) {
  // Your code here
}
```

## go
```go
defer func() {
  if r := recover(); r != nil {
    // Your code here
  }
}()
// Your code here
```

## haskell
```haskell
-- Haskell does not have a traditional try-catch mechanism.
-- Use the 'Either' or 'Maybe' types for error handling.
```

## java
```java
try {
  // Your code here
} catch (Exception e) {
  // Your code here
}
```

## javascript
```javascript
try {
  // Your code here
} catch (exception) {
  // Your code here
}
```

## javascriptreact
```javascriptreact
try {
  // Your code here
} catch (exception) {
  // Your code here
}
```

## kotlin
```kotlin
try {
  // Your code here
} catch (exception) {
  // Your code here
}
```

## perl
```perl
eval {
  # Your code here
};
if @) {
  # Your code here
}
```

## php
```php
try {
  // Your code here
} catch (Exceptione) {
  // Your code here
}
```

## powershell
```powershell
try {
  # Your code here
} catch {
  # Your code here
}
```

## python
```python
try:
  # Your code here
except Exception as e:
  # Your code here
```

## r
```r
tryCatch({
  # Your code here
}, error = function(e) {
  # Your code here
})
```

## ruby
```ruby
begin
  # Your code here
rescue => exception
  # Your code here
end
```

## rust
```rust
let result = std::panic::catch_unwind(|| {
  // Your code here
});
if let Err(err) = result {
  // Your code here
}
```

## shellscript
```shellscript
# Bash doesn't have try/catch, but you can use set -e and trap ERR:
set -e; trap 'echo "Error: Your message here" >&2; exit 1' ERR; // Your code here
```

## swift
```swift
do {
  // Your code here
} catch exception {
  // Your code here
}
```

## typescript
```typescript
try {
  // Your code here
} catch (exception) {
  // Your code here
}
```

## typescriptreact
```typescriptreact
try {
  // Your code here
} catch (exception) {
  // Your code here
}
```


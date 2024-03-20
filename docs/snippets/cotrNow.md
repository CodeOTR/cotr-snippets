---
title: cotrNow
description: The cotrNow snippet.
---

Gets the current date and time

**Aliases**:
- cotrNow
- now
- currentTime
- dateNow

## cpp
```cpp
std::chrono::system_clock::now()
```

## csharp
```csharp
DateTime.Now
```

## dart
```dart
DateTime.now()
```

## haskell
```haskell
-- Use the 'time' package to get the current date and time.
```

## java
```java
import java.time.LocalDate;

LocalDate now = LocalDate.now();
```

## javascript
```javascript
new Date()
```

## javascriptreact
```javascriptreact
new Date()
```

## kotlin
```kotlin
import java.time.LocalDate

val now: LocalDate = LocalDate.now()
```

## perl
```perl
use DateTime

DateTime->now
```

## powershell
```powershell
Get-Date
```

## python
```python
from datetime import datetime

now = datetime.now()
```

## r
```r
Sys.Date()
```

## ruby
```ruby
require 'date'

Date.today
```

## rust
```rust
// Rust does not have a built-in Date type.
// Use the chrono crate to get the current date and time.
use chrono::Utc;

Utc::now()
```

## scala
```scala
// Use java.time or ScalaTime to get the current date and time.
```

## shellscript
```shellscript
# Get the current date and time:
now(date)
```

## swift
```swift
Date()
```

## typescript
```typescript
new Date()
```

## typescriptreact
```typescriptreact
new Date()
```


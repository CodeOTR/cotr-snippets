---
title: cotrVarDate
description: The cotrVarDate snippet.
---

Creates a date variable

**Aliases**:
- cotrVarDate
- dateVariable
- variableDate
- date

## cpp
```cpp
#include <chrono>

auto myDate = std::chrono::system_clock::now();
```

## csharp
```csharp
DateTime myDate = new DateTime(year, month, day);
```

## dart
```dart
DateTime myDate = DateTime(year, month, day);
```

## go
```go
// import "time"
var myDate = time.Date(year, time.Month, day, 0, 0, 0, 0, time.UTC)
```

## haskell
```haskell
-- Use the 'time' package to create a date variable:

import Data.Time

let myDate :: UTCTime = getCurrentTime
```

## java
```java
import java.time.LocalDate;

LocalDate myDate = LocalDate.of(year, month, day);
```

## javascript
```javascript
let myDate = new Date(year, month - 1, day);
```

## javascriptreact
```javascriptreact
let myDate = new Date(year, month - 1, day);
```

## kotlin
```kotlin
import java.time.LocalDate

val myDate: LocalDate = LocalDate.of(year, month, day)
```

## perl
```perl
mymyDate = DateTime->new( year => year, month => month, day => day );
```

## php
```php
myDate = new DateTime('Y-m-d');
```

## powershell
```powershell
myDate = Get-Date -Year year -Month month -Day day
```

## python
```python
from datetime import datetime

my_date = datetime(year, month, day)
```

## r
```r
my_date <- as.Date('YYYY-MM-DD')
```

## ruby
```ruby
my_date = Date.new(year, month, day)
```

## rust
```rust
// Rust does not have a built-in Date type.
// Use the chrono crate to create a date variable.
use chrono::{DateTime, Utc};

let my_date: DateTime<Utc> = Utc::now();
```

## shellscript
```shellscript
# Bash doesn't have a dedicated date type, but you can store date strings:
myDate=\$(date)
```

## swift
```swift
let myDate = Date()
```

## typescript
```typescript
let myDate: Date = new Date(year, month - 1, day);
```

## typescriptreact
```typescriptreact
let myDate: Date = new Date(year, month - 1, day);
```


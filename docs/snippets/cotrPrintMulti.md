---
title: cotrPrintMulti
description: The cotrPrintMulti snippet.
---

Prints a multi-line message to the console

**Aliases**:
- cotrPrintMulti
- printMultiLine

## cpp
```cpp
#include <iostream>

std::cout << "Line 1" << std::endl
          << "Line 2" << std::endl
          << "Line 3" << std::endl;
```

## csharp
```csharp
Console.WriteLine(@"""
Line 1
Line 2
Line 3
""");
```

## dart
```dart
print('''
Line 1
Line 2
Line 3
''');
```

## go
```go
fmt.Println(`
Line 1
Line 2
Line 3
`)
```

## haskell
```haskell
putStrLn unlines [
  "Line 1",
  "Line 2",
  "Line 3"
]
```

## java
```java
System.out.println("Line 1" +
    "\nLine 2" +
    "\nLine 3");
```

## javascript
```javascript
console.log(`
Line 1
Line 2
Line 3
`);
```

## javascriptreact
```javascriptreact
console.log(`
Line 1
Line 2
Line 3
`);
```

## kotlin
```kotlin
println("""
Line 1
Line 2
Line 3
""")
```

## perl
```perl
print <<'END_STRING';
Line 1
Line 2
Line 3
END_STRING
```

## php
```php
echo <<<EOT
Line 1
Line 2
Line 3
EOT;
```

## powershell
```powershell
Write-Host @"
Line 1
Line 2
Line 3
"@;
```

## python
```python
print('''
Line 1
Line 2
Line 3
''')
```

## r
```r
cat{1:"Line 1",
{2:"Line 2",
{3:"Line 3")
```

## ruby
```ruby
puts """Line 1
Line 2
Line 3"""}
```

## rust
```rust
println!("{}
{}
{}",
"Line 1",
"Line 2",
"Line 3"
);
```

## scala
```scala
println("""
Line 1
Line 2
Line 3
""")
```

## shellscript
```shellscript
# Use echo with -e for multi-line output:
echo -e "Line 1\nLine 2\nLine 3"
```

## swift
```swift
print("""
Line 1
Line 2
Line 3
""")
```

## typescript
```typescript
console.log(`
Line 1
Line 2
Line 3
`);
```

## typescriptreact
```typescriptreact
console.log(`
Line 1
Line 2
Line 3
`);
```


---
title: cotrGenList
description: The cotrGenList snippet.
---

Generates a list (vector) of a specific size and initial value

**Aliases**:
- cotrGenList
- generateList
- listGen

## cpp
```cpp
std::vector<type> listName( size, initialValue );
```

## csharp
```csharp
var myList = Enumerable.Range(0, length).Select(i => 'item' + i.ToString()).ToList();
```

## dart
```dart
var myList = List.generate(length, (index) => 'item' + index.toString());
```

## go
```go
var arrayName = []arrayType{
    value1,
    value2
}
```

## haskell
```haskell
[start..end]
```

## java
```java
List<Type> myList = IntStream.range(0, length).mapToObj(i -> value).collect(Collectors.toList());
```

## javascript
```javascript
const myList = Array.from({ length: length }, (_, index) => 'item' + index);
```

## javascriptreact
```javascriptreact
const myList = Array.from({ length: length }, (_, index) => 'item' + index);
```

## kotlin
```kotlin
val myList = List(length) {
  'item' + it
}
```

## perl
```perl
my @listName = (initialValue) x length;
```

## php
```php
myArray = range(0, 10);
```

## powershell
```powershell
1..length | ForEach-Object { 'item' +_ }
```

## ruby
```ruby
my_array = Array.new(length) { |i| 'item' + i.to_s }
```

## rust
```rust
let myList = [
  'item1',
  'item2',
  // Add more items here
];
```

## shellscript
```shellscript
# Bash doesn't have built-in list generation, but you can use loops or command substitution:
myList=((for i in {1..10}; do echo itei; done) )
```

## swift
```swift
var myArray = Array(repeating: 'item', count: 5);
```

## typescript
```typescript
const myList = Array.from({ length: length }, (_, index) => 'item' + index);
```

## typescriptreact
```typescriptreact
const myList = Array.from({ length: length }, (_, index) => 'item' + index);
```


---
title: cotrGenMap
description: The cotrGenMap snippet.
---

Generates a dictionary of a specific length

**Aliases**:
- cotrGenMap
- generateMap

## cpp
```cpp
// C++ does not have a built-in way to generate a map with a specific number of key-value pairs.
// You can use a loop or a custom function to achieve this.
```

## csharp
```csharp
var myMap = Enumerable.Range(0, length).ToDictionary(i => i, i => 'item' + i.ToString());
```

## dart
```dart
var myMap = Map.fromIterable(List.generate(length, (index) => index),
  key: (item) => 'key' + item.toString(),
  value: (item) => 'value' + item.toString(),
);
```

## go
```go
var mapName = make(map[keyType]valueType)
mapName[key1] = value1
mapName[key2] = value2
```

## haskell
```haskell
-- Haskell does not have a built-in way to generate a map with a specific number of key-value pairs.
-- You can use a list comprehension or a custom function to achieve this.
```

## java
```java
Map<Key, Value> myMap = IntStream.range(0, length).boxed().collect(Collectors.toMap(i -> key, i -> value));
```

## javascript
```javascript
const myMap = Object.fromEntries(
  Array.from({ length: length }, (_, index) => [`ke{index}`, `valu{index}`])
);
```

## javascriptreact
```javascriptreact
const myMap = Object.fromEntries(
  Array.from({ length: length }, (_, index) => [`ke{index}`, `valu{index}`])
);
```

## kotlin
```kotlin
val myMap = (0 until length).associate {
  'key' + it to 'value' + it
}
```

## perl
```perl
# Perl does not have a built-in way to generate a map (hash) with a specific number of key-value pairs.
# You can use a loop or a custom function to achieve this.
```

## php
```php
myMap = array_combine(range(0, 10), range(0, 10));
```

## powershell
```powershell
# PowerShell does not have a built-in way to generate a map with a specific number of key-value pairs.
# You can use a loop or a custom function to achieve this.
```

## rust
```rust
let myMap = [
  'key1': 'value1',
  'key2': 'value2',
  // Add more key-value pairs here
];
```

## shellscript
```shellscript
# Bash doesn't have built-in map generation, but you can use associative arrays:
declare -A myMap; for i in {1..10}; do myMap[kei]=valui; done
```

## swift
```swift
var myDictionary = 
Dictionary(uniqueKeysWithValues: zip(['key1',{3:'key
2'}], ['value1', 'value2']));
```

## typescript
```typescript
const myMap = Object.fromEntries(
  Array.from({ length: length }, (_, index) => [`ke{index}`, `valu{index}`])
);
```

## typescriptreact
```typescriptreact
const myMap = Object.fromEntries(
  Array.from({ length: length }, (_, index) => [`ke{index}`, `valu{index}`])
);
```


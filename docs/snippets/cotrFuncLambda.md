---
title: cotrFuncLambda
description: The cotrFuncLambda snippet.
---

Creates a lambda function

**Aliases**:
- cotrFuncLambda
- cotrLambda
- cotrFuncArrow
- cotrFuncAnon
- anonFunc
- anonymous
- functionLiteral
- lambda
- arrowFunc
- closure

## cpp
```cpp
auto myLambda = [](parameters) -> returnType {
  // Your code here
};

// Or without assigning to a variable:
[](parameters) -> returnType {
  // Your code here
}
```

## csharp
```csharp
(parameters) => expression
```

## haskell
```haskell
\parameters -> expression

-- Usage example
let myFunc = \parameters -> expression
in myFunc arguments
```

## java
```java
(parameters) -> expression
```

## kotlin
```kotlin
val myLambda: (ParameterType) -> ReturnType = { parameters ->
  expression
}
```

## php
```php
function (parameters) => expression
```

## powershell
```powershell
# PowerShell does not have a 'lambda' keyword.
# Instead, script blocks are used as anonymous functions.

lambda = {
    param(parameters)
    # Your code here
}

# Usage
result =lambda.Invoke(arguments)
Write-Host "Result:result"
```

## ruby
```ruby
my_function = ->(parameters) {
  # Your code here
}
```

## scala
```scala
(parameters) => expression
```

## shellscript
```shellscript
# Bash doesn't have lambda functions.
```

## typescript
```typescript
const myLambda = (parameters) => expression;
```

## typescriptreact
```typescriptreact
const myLambda = (parameters) => expression;
```


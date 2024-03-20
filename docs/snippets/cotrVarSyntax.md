---
title: cotrVarSyntax
description: The cotrVarSyntax snippet.
---

Explains JavaScript variable declaration syntax

**Aliases**:
- cotrVarSyntax
- variableSyntax
- howToVariables
- letSyntax

## cpp
```cpp
// C++ Variable Declaration Syntax:

// - auto: (Scope: Block)
//   - Type is automatically inferred by the compiler.
//   - Preferred for most variable declarations.

// - type: (Scope: Block)
//   - Explicitly specify the variable's type.
//   - Use when auto deduction is not desired or not possible.

// - const: (Scope: Block)
//   - Cannot be reassigned or redeclared.
//   - Use for values that should remain constant.

// Note:
// - C++ does not have a direct equivalent to 'var' or 'let'.
// - Use 'auto' for most variable declarations.
// - Use 'const' for values that should not change.
```

## csharp
```csharp
// C# Variable Declaration Syntax:

// - var: (Scope: Block)
//   - Type is automatically inferred by the compiler.
//   - Preferred for most variable declarations.

// - type: (Scope: Block)
//   - Explicitly specify the variable's type.
//   - Use when var deduction is not desired or not possible.

// - const: (Scope: Block)
//   - Cannot be reassigned or redeclared.
//   - Use for values that should remain constant.

// Note:
// - C# does not have a direct equivalent to 'let'.
// - Use 'var' for most variable declarations.
// - Use 'const' for values that should not change.
```

## dart
```dart
// Dart Variable Declaration Syntax:

// - var: (Scope: Block)
//   - Type is automatically inferred by the compiler.
//   - Preferred for most variable declarations.

// - type: (Scope: Block)
//   - Explicitly specify the variable's type.
//   - Use when var deduction is not desired or not possible.

// - const: (Scope: Block)
//   - Cannot be reassigned or redeclared.
//   - Use for values that should remain constant.

// - final: (Scope: Block)
//   - Cannot be reassigned, but can be declared without initialization.
//   - Use for variables that will be assigned a value later but should not change after that.

// Note:
// - Use 'var' for most variable declarations.
// - Use 'const' for values that are known at compile time.
// - Use 'final' for variables that will be assigned later but should not change.
```

## go
```go
// Go Variable Declaration Syntax:

// - var: (Scope: Block or Package)
//   - Explicitly declare the variable's type.
//   - Can be declared without initialization (zero value is assigned).

// - :=: (Scope: Block)
//   - Short variable declaration and type inference.
//   - Requires initialization.

// - const: (Scope: Package)
//   - Cannot be reassigned or redeclared.
//   - Use for values that should remain constant.

// Note:
// - Use 'var' for package-level variables or when explicit type declaration is desired.
// - Use ':=' for most variable declarations within blocks.
// - Use 'const' for values that are known at compile time.
```

## haskell
```haskell
-- Haskell Variable Declaration Syntax:

-- - let: (Scope: Block)
--   - Declares an immutable variable.
--   - Use for values that should not change.

-- - let (mut) varName = expression: (Scope: do block)
--   - Declares a mutable variable within a 'do' block.
--   - Use for variables that need to be reassigned.

-- Note:
-- - Haskell emphasizes immutability, so use 'let' by default.
-- - Use mutable variables with 'let (mut)' only when necessary within 'do' blocks.
```

## java
```java
// Java Variable Declaration Syntax:

// - type: (Scope: Block or Class)
//   - Explicitly specify the variable's type.
//   - Can be declared without initialization (default value is assigned).

// - final: (Scope: Block or Class)
//   - Cannot be reassigned after initialization.
//   - Use for values that should remain constant.

// Note:
// - Java does not have a direct equivalent to 'var' or 'let'.
// - Use explicit type declaration for all variables.
// - Use 'final' for values that should not change.
```

## javascript
```javascript
// JavaScript Variable Declaration Syntax:

// - var: (Scope: Function or Global)
//   - Can be reassigned and redeclared within its scope.
//   - Use with caution due to potential scoping issues.

// - let: (Scope: Block)
//   - Can be reassigned but not redeclared within its scope.
//   - Preferred for variables that need to be reassigned.

// - const: (Scope: Block)
//   - Cannot be reassigned or redeclared.
//   - Use for values that should remain constant.

// Note:
// - Use 'let' for most variable declarations.
// - Use 'const' for values that should not change.
```

## javascriptreact
```javascriptreact
// JavaScript Variable Declaration Syntax:

// - var: (Scope: Function or Global)
//   - Can be reassigned and redeclared within its scope.
//   - Use with caution due to potential scoping issues.

// - let: (Scope: Block)
//   - Can be reassigned but not redeclared within its scope.
//   - Preferred for variables that need to be reassigned.

// - const: (Scope: Block)
//   - Cannot be reassigned or redeclared.
//   - Use for values that should remain constant.

// Note:
// - Use 'let' for most variable declarations.
// - Use 'const' for values that should not change.
```

## kotlin
```kotlin
// Kotlin Variable Declaration Syntax:

// - var: (Scope: Block or Class)
//   - Can be reassigned.
//   - Use for variables that need to be changed.

// - val: (Scope: Block or Class)
//   - Cannot be reassigned after initialization.
//   - Preferred for values that should remain constant.

// Note:
// - Use 'val' by default for values that won't change.
// - Use 'var' only when you need to reassign the variable.
```

## perl
```perl
# Perl Variable Declaration Syntax:

# - my: (Scope: Block)
#   - Declares a lexically scoped variable.
#   - Preferred for most variable declarations.

# - our: (Scope: Package)
#   - Declares a package-scoped variable.
#   - Use for variables that need to be shared across the package.

# - local: (Scope: Block)
#   - Declares a dynamically scoped variable.
#   - Use with caution due to potential scoping issues.

# Note:
# - Use 'my' for most variable declarations.
# - Use 'our' for package-level variables.
# - Avoid using 'local' unless you have a specific reason.
```

## php
```php
// PHP Variable Declaration Syntax:

// -: (Scope: Global or Function)
//   - Variables start with a dollar sign.
//   - Can be reassigned and redeclared within their scope.
//   - Use with caution due to potential scoping issues.

// - const: (Scope: Global)
//   - Cannot be reassigned or redeclared.
//   - Use for values that should remain constant.

// Note:
// - PHP does not have a direct equivalent to 'let'.
// - Use ' for most variable declarations.
// - Use 'const' for values that are known at compile time.
```

## powershell
```powershell
# PowerShell Variable Declaration Syntax:

# -: (Scope: Global or Function)
#   - Variables start with a dollar sign.
#   - Can be reassigned and redeclared within their scope.
#   - Use with caution due to potential scoping issues.

# - const: (Scope: Global)
#   - Cannot be reassigned or redeclared.
#   - Use for values that should remain constant.

# Note:
# - PHP does not have a direct equivalent to 'let'.
# - Use ' for most variable declarations.
# - Use 'const' for values that are known at compile time.
```

## python
```python
# Python Variable Declaration Syntax:

# - Python is dynamically typed, so there is no explicit type declaration.
# - Variables are created when you first assign a value to them.
# - Variables can be reassigned to different types.

# Note:
# - Python does not have direct equivalents to 'var', 'let', or 'const'.
# - Use descriptive variable names to improve code readability.
```

## ruby
```ruby
# Ruby Variable Declaration Syntax:

# - Ruby is dynamically typed, so there is no explicit type declaration.
# - Variables are created when you first assign a value to them.
# - Variables can be reassigned to different types.

# Note:
# - Ruby does not have direct equivalents to 'var', 'let', or 'const'.
# - Use descriptive variable names to improve code readability.
```

## rust
```rust
// Rust Variable Declaration Syntax:

// - let: (Scope: Block)
//   - Declares an immutable variable by default.
//   - Use for values that should not change.

// - let mut: (Scope: Block)
//   - Declares a mutable variable.
//   - Use for variables that need to be reassigned.

// - const: (Scope: Global)
//   - Declares a constant value.
//   - Must be initialized with a constant expression.

// Note:
// - Rust does not have a direct equivalent to 'var'.
// - Use 'let' for most variable declarations.
// - Use 'let mut' for variables that need to be reassigned.
// - Use 'const' for values that are known at compile time.
```

## scala
```scala
// Scala Variable Declaration Syntax:

// - var: (Scope: Block or Class)
//   - Can be reassigned.
//   - Use for variables that need to be changed.

// - val: (Scope: Block or Class)
//   - Cannot be reassigned after initialization.
//   - Preferred for values that should remain constant.

// Note:
// - Use 'val' by default for values that won't change.
// - Use 'var' only when you need to reassign the variable.
```

## shellscript
```shellscript
# Bash Variable Declaration Syntax:

# - varName=value: Assigns a value to a variable.
# - declare varName: Declares a variable without assigning a value.
# - readonly varName=value: Creates a read-only variable (constant).
```

## swift
```swift
// Swift Variable Declaration Syntax:

// - var: (Scope: Block or Global)
//   - Declares a mutable variable.
//   - Use for variables that need to be reassigned.

// - let: (Scope: Block or Global)
//   - Declares an immutable variable.
//   - Preferred for values that should remain constant.

// Note:
// - Use 'let' by default for values that won't change.
// - Use 'var' only when you need to reassign the variable.
```

## typescript
```typescript
// TypeScript Variable Declaration Syntax:

// - var: (Scope: Function or Global)
//   - Can be reassigned and redeclared within its scope.
//   - Use with caution due to potential scoping issues.

// - let: (Scope: Block)
//   - Can be reassigned but not redeclared within its scope.
//   - Preferred for variables that need to be reassigned.

// - const: (Scope: Block)
//   - Cannot be reassigned or redeclared.
//   - Use for values that should remain constant.

// Note:
// - Use 'let' for most variable declarations.
// - Use 'const' for values that should not change.
```

## typescriptreact
```typescriptreact
// TypeScript Variable Declaration Syntax:

// - var: (Scope: Function or Global)
//   - Can be reassigned and redeclared within its scope.
//   - Use with caution due to potential scoping issues.

// - let: (Scope: Block)
//   - Can be reassigned but not redeclared within its scope.
//   - Preferred for variables that need to be reassigned.

// - const: (Scope: Block)
//   - Cannot be reassigned or redeclared.
//   - Use for values that should remain constant.

// Note:
// - Use 'let' for most variable declarations.
// - Use 'const' for values that should not change.
```


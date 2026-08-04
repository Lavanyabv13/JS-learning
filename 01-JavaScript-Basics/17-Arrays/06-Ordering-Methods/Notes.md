# Array Ordering Methods

---

# Introduction

Ordering methods are used to change the order of elements in an array.

These methods allow us to:

- Sort elements alphabetically.
- Sort numbers in ascending or descending order.
- Reverse the order of elements.

Unlike search and transformation methods, **ordering methods modify the original array**.

---

# Ordering Methods Covered

- `sort()`
- `reverse()`

---

# 1. sort()

## Definition

The `sort()` method sorts the elements of an array.

By default, JavaScript sorts values **alphabetically (lexicographically)**.

---

## Syntax

```javascript
array.sort()

array.sort(compareFunction)
```

---

## Return Value

Returns the **same array** after sorting.

---

## Default Sorting

Strings are sorted alphabetically.

Numbers are also converted into strings before sorting.

Example:

```
100
20
5
50
```

Internally JavaScript compares

```
"100"
"20"
"5"
"50"
```

Alphabetically, which produces an incorrect numeric order.

---

# Numeric Sorting

## Ascending Order

```javascript
array.sort((a, b) => a - b)
```

### How it works

If

```
a - b < 0
```

Keep `a` before `b`.

If

```
a - b > 0
```

Move `b` before `a`.

If

```
a - b === 0
```

Keep the order unchanged.

---

## Descending Order

```javascript
array.sort((a, b) => b - a)
```

Largest values appear first.

---

# Sorting Objects

Objects can be sorted using numeric or string properties.

Numeric property

```javascript
users.sort((a, b) => a.age - b.age)
```

String property

```javascript
users.sort((a, b) => a.name.localeCompare(b.name))
```

---

## Important Points

- Modifies the original array.
- Returns the same array.
- Default sorting is alphabetical.
- Use compare functions for numeric sorting.
- Use `localeCompare()` for strings inside objects.

---

## QA / Playwright Use Cases

- Sort execution times.
- Sort test names.
- Sort users by ID.
- Sort reports.

---

# 2. reverse()

## Definition

The `reverse()` method reverses the current order of elements.

It **does not sort** the array.

---

## Syntax

```javascript
array.reverse()
```

---

## Return Value

Returns the same array after reversing it.

---

## Important Points

- Modifies the original array.
- Does not perform sorting.
- Simply reverses the existing order.

---

# Reverse Without Modifying Original Array

Using slice()

```javascript
array.slice().reverse()
```

Using spread operator

```javascript
[...array].reverse()
```

---

## QA / Playwright Use Cases

- Reverse browser execution order.
- Reverse test execution order.
- Display latest reports first.

---

# sort() vs reverse()

| sort() | reverse() |
|----------|------------|
| Sorts elements | Reverses elements |
| Alphabetical by default | No sorting |
| Uses compare function | No compare function |
| Modifies original array | Modifies original array |

---

# Which Methods Modify the Original Array?

Both.

- sort()
- reverse()

---

# Interview Questions

### 1. Does sort() modify the original array?

Yes.

---

### 2. Does reverse() modify the original array?

Yes.

---

### 3. Why doesn't sort() work correctly for numbers?

Because JavaScript converts numbers into strings and performs lexicographical sorting.

---

### 4. How do you sort numbers in ascending order?

```javascript
array.sort((a, b) => a - b)
```

---

### 5. How do you sort numbers in descending order?

```javascript
array.sort((a, b) => b - a)
```

---

### 6. How do you sort strings inside objects?

Using `localeCompare()`.

---

### 7. Does reverse() sort the array?

No.

---

### 8. How do you reverse an array without modifying the original?

```javascript
array.slice().reverse()

// or

[...array].reverse()
```

---

### 9. Which ordering methods modify the original array?

- sort()
- reverse()

---

### 10. Which is better?

```javascript
array.sort((a, b) => a - b).reverse()
```

or

```javascript
array.sort((a, b) => b - a)
```

Second approach is preferred.

---

# Summary

- sort() arranges elements.
- reverse() flips the current order.
- Both modify the original array.
- Use compare functions for numeric sorting.
- Use localeCompare() for string properties.
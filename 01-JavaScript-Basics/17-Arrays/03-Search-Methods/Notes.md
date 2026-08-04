# Array Search Methods

---

# Introduction

JavaScript provides several built-in methods to search elements inside an array.

These methods allow us to:

- Check whether an element exists.
- Find the first matching element.
- Find the index of an element.
- Access elements using positive or negative indexes.

Unlike methods such as `push()` or `splice()`, search methods **do not modify the original array**.

---

# Search Methods Covered

- `includes()`
- `indexOf()`
- `lastIndexOf()`
- `at()`
- `find()`
- `findIndex()`

---

# 1. includes()

## Definition

The `includes()` method checks whether an array contains a specified value.

It returns:

- `true` → if the value exists.
- `false` → if the value does not exist.

---

## Syntax

```javascript
array.includes(value)
```

---

## Return Value

Returns a Boolean.

- `true`
- `false`

---

## Important Points

- Searches using strict equality (`===`).
- Does not modify the original array.
- Stops searching once the value is found.
- Mainly used for checking existence.

---

## QA / Playwright Use Cases

- Check if a browser is supported.
- Verify whether a required role exists.
- Validate expected test status.

---

# 2. indexOf()

## Definition

Returns the index of the first occurrence of a value.

If the value is not found, it returns `-1`.

---

## Syntax

```javascript
array.indexOf(value)
```

---

## Return Value

- Index of first occurrence.
- `-1` if not found.

---

## Important Points

- Searches from left to right.
- Returns only the first match.
- Uses strict equality.
- Does not modify the original array.

---

## QA / Playwright Use Cases

- Find browser position.
- Find test case position.
- Verify whether a value exists using `!== -1`.

---

# 3. lastIndexOf()

## Definition

Returns the index of the last occurrence of a value.

If the value does not exist, it returns `-1`.

---

## Syntax

```javascript
array.lastIndexOf(value)
```

---

## Return Value

- Last matching index.
- `-1` if not found.

---

## Important Points

- Searches from right to left.
- Returns the last matching index.
- Does not modify the original array.

---

## QA / Playwright Use Cases

- Find the latest occurrence of a duplicate test.
- Locate repeated browser names.

---

# 4. at()

## Definition

Returns the element at the specified index.

Supports both positive and negative indexing.

---

## Syntax

```javascript
array.at(index)
```

---

## Positive Index

Starts from the beginning.

```
0 1 2 3
```

---

## Negative Index

Starts from the end.

```
-1 → Last element

-2 → Second last

-3 → Third last
```

---

## Return Value

Returns the element.

Returns `undefined` for an invalid index.

---

## Why use at()?

Before ES2022:

```javascript
arr[arr.length - 1]
```

Now:

```javascript
arr.at(-1)
```

Much cleaner and easier to read.

---

## Important Points

- Supports negative indexes.
- Does not modify the original array.
- Returns a single element.

---

## QA / Playwright Use Cases

- Get the latest test result.
- Access the last browser executed.
- Retrieve the last generated report.

---

# 5. find()

## Definition

Returns the **first element** that satisfies a condition.

Uses a callback function.

---

## Syntax

```javascript
array.find(callback)
```

---

## Return Value

- Matching element.
- `undefined` if not found.

---

## Important Points

- Stops after the first match.
- Mostly used with arrays of objects.
- Does not modify the original array.

---

## QA / Playwright Use Cases

- Find a failed test.
- Find a user by ID.
- Find a browser configuration.

---

# 6. findIndex()

## Definition

Returns the index of the first element that satisfies a condition.

---

## Syntax

```javascript
array.findIndex(callback)
```

---

## Return Value

- Matching index.
- `-1` if not found.

---

## Important Points

- Uses callback functions.
- Stops after the first match.
- Does not modify the original array.

---

## QA / Playwright Use Cases

- Find the index of a failed test.
- Locate a user in an object array.
- Update an object using its index.

---

# Search Methods Comparison

| Method | Returns | Searches By | Not Found |
|---------|----------|-------------|-----------|
| includes() | Boolean | Value | false |
| indexOf() | Index | Value | -1 |
| lastIndexOf() | Index | Value | -1 |
| at() | Element | Index | undefined |
| find() | Element | Condition | undefined |
| findIndex() | Index | Condition | -1 |

---

# Which Methods Modify the Original Array?

None.

All search methods are **non-mutating**.

---

# Interview Questions

### 1. Which array methods are used for searching?

- includes()
- indexOf()
- lastIndexOf()
- at()
- find()
- findIndex()

---

### 2. Difference between includes() and indexOf()?

- `includes()` returns `true` or `false`.
- `indexOf()` returns the index.

---

### 3. Difference between find() and findIndex()?

- `find()` returns the matching element.
- `findIndex()` returns its index.

---

### 4. Difference between indexOf() and find()?

- `indexOf()` searches for an exact primitive value.
- `find()` searches using a condition and is commonly used with objects.

---

### 5. What does at(-1) return?

The last element of the array.

---

### 6. Which search methods use callback functions?

- find()
- findIndex()

---

### 7. Which methods return Boolean values?

- includes()

---

### 8. Which search methods modify the original array?

None.

---

### 9. Which method should be used to check if a value exists?

`includes()`

---

### 10. Which method is most useful for arrays of objects?

`find()` and `findIndex()`

---

# Summary

- Search methods do not modify the original array.
- `includes()` checks existence.
- `indexOf()` returns the first matching index.
- `lastIndexOf()` returns the last matching index.
- `at()` supports positive and negative indexing.
- `find()` returns the first matching element.
- `findIndex()` returns the first matching index.
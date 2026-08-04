#  Array Transformation Methods

---

# Introduction

Transformation methods are used to **process or transform array elements**.

Unlike search methods, these methods usually create **new arrays** or **return a single calculated value**.

They are heavily used in:

- JavaScript
- TypeScript
- React
- Node.js
- Playwright Automation

---

# Transformation Methods Covered

- `filter()`
- `map()`
- `forEach()`
- `reduce()`

---

# 1. filter()

## Definition

The `filter()` method creates a **new array** containing **all elements** that satisfy a given condition.

Unlike `find()`, it does not stop after the first match.

---

## Syntax

```javascript
array.filter(callback)
```

---

## Return Value

Returns a **new array**.

- Matching elements → New array
- No match → Empty array `[]`

---

## Important Points

- Returns a new array.
- Does not modify the original array.
- Returns all matching elements.
- Iterates through the entire array.
- Returns an empty array if nothing matches.

---

## QA / Playwright Use Cases

- Get all failed test cases.
- Get all Chrome browser executions.
- Filter active users.
- Filter API responses.

---

# 2. map()

## Definition

The `map()` method executes a function for every element and returns a **new transformed array**.

It is mainly used to convert one form of data into another.

---

## Syntax

```javascript
array.map(callback)
```

---

## Return Value

Returns a **new array**.

The returned array always has the same number of elements as the original array.

---

## Important Points

- Returns a new array.
- Does not modify the original array.
- Executes for every element.
- Used for transformation.
- Output array length is always the same.

---

## QA / Playwright Use Cases

- Extract usernames.
- Extract browser names.
- Convert objects into IDs.
- Format report data.

---

# 3. forEach()

## Definition

The `forEach()` method executes a function once for every array element.

Unlike `map()`, it **does not return a new array**.

It is mainly used for performing actions.

---

## Syntax

```javascript
array.forEach(callback)
```

---

## Return Value

```text
undefined
```

---

## Important Points

- Returns undefined.
- Does not create a new array.
- Executes for every element.
- Used for logging, printing and updates.
- Cannot be stopped using `break`.

---

## QA / Playwright Use Cases

- Print test names.
- Print execution logs.
- Loop through browsers.
- Generate console reports.

---

# 4. reduce()

## Definition

The `reduce()` method reduces an array into **one single value**.

The final value may be:

- Number
- String
- Object
- Array

---

## Syntax

```javascript
array.reduce(callback, initialValue)
```

---

## Callback Parameters

```javascript
(accumulator, currentValue, index, array)
```

Normally we use:

- accumulator
- currentValue

---

## What is an Accumulator?

The accumulator stores the running result.

It keeps updating after every iteration until the final result is produced.

---

## Return Value

Returns one final value.

---

## Why use initialValue?

The initial value becomes the starting value of the accumulator.

Example:

```javascript
array.reduce(callback, 0)
```

Here the accumulator starts from **0**.

---

## Important Points

- Returns one value.
- Does not modify the original array.
- Commonly used for:
  - Sum
  - Product
  - Average
  - Count
  - Grouping
- Initial value is recommended.

---

## QA / Playwright Use Cases

- Calculate total execution time.
- Count failed tests.
- Count passed tests.
- Generate summary reports.

---

# Transformation Methods Comparison

| Method | Returns | Purpose |
|---------|----------|----------|
| filter() | New Array | Select matching elements |
| map() | New Array | Transform elements |
| forEach() | undefined | Perform actions |
| reduce() | Single Value | Combine array into one result |

---

# Which Methods Modify the Original Array?

None.

All transformation methods are **non-mutating**.

---

# Interview Questions

### 1. Difference between `filter()` and `find()`?

`filter()` returns **all matching elements**.

`find()` returns the **first matching element**.

---

### 2. Difference between `map()` and `forEach()`?

`map()` returns a new array.

`forEach()` returns `undefined`.

---

### 3. Difference between `map()` and `filter()`?

`map()` transforms every element.

`filter()` selects matching elements.

---

### 4. Difference between `reduce()` and `map()`?

`reduce()` returns one final value.

`map()` returns a new transformed array.

---

### 5. Which method returns `undefined`?

`forEach()`

---

### 6. Which method returns a Boolean?

None of these transformation methods.

---

### 7. Which method returns a new array?

- `filter()`
- `map()`

---

### 8. Which method returns one final value?

`reduce()`

---

### 9. Which method is commonly used for totals?

`reduce()`

---

### 10. Which transformation methods modify the original array?

None.

---

# Summary

- `filter()` selects matching elements.
- `map()` transforms every element.
- `forEach()` performs actions only.
- `reduce()` combines the array into one value.
- None of these methods modify the original array.
- These methods are heavily used in React, Node.js and Playwright automation.
#  Array Validation Methods

---

# Introduction

Validation methods are used to check whether array elements satisfy a condition.

Unlike transformation methods, validation methods return **Boolean values** (`true` or `false`).

These methods are commonly used for:

- Data validation
- Form validation
- API response verification
- Playwright test validation

---

# Validation Methods Covered

- every()
- some()

---

# 1. every()

## Definition

The `every()` method checks whether **every element** in an array satisfies a given condition.

It returns:

- `true` → If all elements satisfy the condition.
- `false` → If at least one element fails.

---

## Syntax

```javascript
array.every(callback)
```

---

## Return Value

Boolean

- true
- false

---

## Important Points

- Returns a Boolean.
- Stops immediately after finding the first failed element.
- Does not modify the original array.
- Used when every element must satisfy a condition.

---

## QA / Playwright Use Cases

- Verify all test cases passed.
- Check all browsers are supported.
- Validate all API responses are successful.

---

# 2. some()

## Definition

The `some()` method checks whether **at least one element** satisfies a condition.

It returns:

- true → If one or more elements satisfy the condition.
- false → If no element satisfies the condition.

---

## Syntax

```javascript
array.some(callback)
```

---

## Return Value

Boolean

- true
- false

---

## Important Points

- Returns a Boolean.
- Stops immediately after finding the first matching element.
- Does not modify the original array.
- Used when only one matching element is required.

---

## QA / Playwright Use Cases

- Check whether any test failed.
- Verify if any browser is unsupported.
- Detect failed API requests.

---

# every() vs some()

| every() | some() |
|-----------|----------|
| All elements must satisfy the condition | At least one element must satisfy the condition |
| Stops on first failure | Stops on first success |
| Returns true only if all pass | Returns true if any pass |

---

# Which Methods Modify the Original Array?

None.

Both methods are non-mutating.

---

# Interview Questions

### 1. What does every() return?

Boolean.

---

### 2. What does some() return?

Boolean.

---

### 3. Difference between every() and some()?

every() checks all elements.

some() checks whether at least one element satisfies the condition.

---

### 4. Does every() modify the original array?

No.

---

### 5. Does some() modify the original array?

No.

---

### 6. Which method stops after the first failed condition?

every()

---

### 7. Which method stops after the first successful condition?

some()

---

### 8. Which method is useful to check if all Playwright tests passed?

every()

---

### 9. Which method is useful to detect if any Playwright test failed?

some()

---

### 10. Which validation methods return Boolean values?

- every()
- some()

---

# Summary

- every() checks whether all elements satisfy a condition.
- some() checks whether at least one element satisfies a condition.
- Both return Boolean values.
- Neither modifies the original array.
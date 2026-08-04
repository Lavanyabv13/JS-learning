# JavaScript Array Methods Part 1

# Learning Objectives

Introduction to Array Methods
* `push()`
* `pop()`
* `shift()`
* `unshift()`
* `splice()`
* `slice()`
* `concat()`
* `join()`

---

# Introduction to Array Methods

JavaScript arrays come with many built-in methods that make working with data easier.

Instead of manually adding, removing, or updating elements, JavaScript provides ready-made methods.

Example:

```javascript
const browsers = ["Chrome", "Firefox"];

browsers.push("Edge");

console.log(browsers);
```

Output

```
["Chrome", "Firefox", "Edge"]
```

---

# Why Do We Need Array Methods?

Without array methods, managing arrays would require more code and be harder to read.

Array methods help us:

* Add data
* Remove data
* Update data
* Search data
* Copy arrays
* Merge arrays
* Transform arrays
* Filter arrays

---

# Method vs Property

### Property

A property stores information.

Example

```javascript
browsers.length
```

Returns

```
3
```

---

### Method

A method performs an action.

Example

```javascript
browsers.push("Safari");
```

---

# Array Method 1 – push()

## Definition

`push()` adds one or more elements to the **end** of an array.

It modifies the original array.

---

## Syntax

```javascript
array.push(element);
```

or

```javascript
array.push(element1, element2);
```

---

## Return Value

Returns the **new length** of the array.

---

## Example 1

```javascript
const fruits = ["Apple", "Banana"];

fruits.push("Orange");

console.log(fruits);
```

Output

```
["Apple", "Banana", "Orange"]
```

---

## Example 2

```javascript
const numbers = [10, 20];

const len = numbers.push(30);

console.log(numbers);
console.log(len);
```

Output

```
[10,20,30]

3
```

---

## Example 3

```javascript
const users = [];

users.push("Admin");

console.log(users);
```

Output

```
["Admin"]
```

---

## QA Example

```javascript
const browsers = ["Chrome", "Firefox"];

browsers.push("Edge");

console.log(browsers);
```

---

## Important Points

* Adds element at the end.
* Modifies original array.
* Can add multiple elements.
* Returns new array length.

---

# Array Method 2 – pop()

## Definition

Removes the **last element** from an array.

---

## Syntax

```javascript
array.pop();
```

---

## Return Value

Returns the removed element.

---

## Example 1

```javascript
const fruits = ["Apple", "Banana", "Orange"];

fruits.pop();

console.log(fruits);
```

Output

```
["Apple","Banana"]
```

---

## Example 2

```javascript
const fruits = ["Apple", "Banana", "Orange"];

const removed = fruits.pop();

console.log(removed);
```

Output

```
Orange
```

---

## Example 3

```javascript
const users = [];

console.log(users.pop());
```

Output

```
undefined
```

---

## QA Example

```javascript
const browsers = [
    "Chrome",
    "Firefox",
    "Edge"
];

const removed = browsers.pop();

console.log(removed);
console.log(browsers);
```

---

## Important Points

* Removes last element.
* Takes no arguments.
* Modifies original array.
* Returns removed element.
* Empty array returns `undefined`.

---

# Array Method 3 – shift()

## Definition

Removes the **first element** from an array.

All remaining elements shift one position left.

---

## Syntax

```javascript
array.shift();
```

---

## Return Value

Returns the removed first element.

---

## Example 1

```javascript
const browsers = [
    "Chrome",
    "Firefox",
    "Edge"
];

browsers.shift();

console.log(browsers);
```

Output

```
["Firefox","Edge"]
```

---

## Example 2

```javascript
const fruits = [
    "Apple",
    "Banana",
    "Orange"
];

const removed = fruits.shift();

console.log(removed);
```

Output

```
Apple
```

---

## Example 3

```javascript
const arr = [];

console.log(arr.shift());
```

Output

```
undefined
```

---

## QA Example

```javascript
const users = [
    "guest",
    "admin",
    "manager"
];

users.shift();

console.log(users);
```

Output

```
["admin","manager"]
```

---

## Important Points

* Removes first element.
* Returns removed element.
* Modifies original array.
* Remaining elements shift left.

---

# Array Method 4 – unshift()

## Definition

Adds one or more elements to the **beginning** of an array.

Existing elements shift right.

---

## Syntax

```javascript
array.unshift(element);
```

---

## Return Value

Returns the new length.

---

## Example 1

```javascript
const browsers = [
    "Firefox",
    "Edge"
];

browsers.unshift("Chrome");

console.log(browsers);
```

Output

```
["Chrome","Firefox","Edge"]
```

---

## Example 2

```javascript
const fruits = [
    "Orange"
];

fruits.unshift("Apple","Banana");

console.log(fruits);
```

Output

```
["Apple","Banana","Orange"]
```

---

## Example 3

```javascript
const users = [];

users.unshift("Admin");

console.log(users);
```

Output

```
["Admin"]
```

---

## QA Example

```javascript
const browsers = [
    "Firefox",
    "Edge"
];

browsers.unshift("Chrome");

console.log(browsers);
```

---

## Important Points

* Adds at beginning.
* Returns new length.
* Can add multiple elements.
* Modifies original array.

# Day 23 – JavaScript Array Methods Part 1 (Part 2)

---

# Array Method 5. splice()

## Definition

`splice()` is used to **add, remove, or replace** elements anywhere in an array.

It is one of the most powerful array methods.

---

## Syntax

```javascript
array.splice(startIndex, deleteCount, item1, item2, ...);
```

---

## Parameters

### `startIndex`

* Position where the operation starts.
* Array indexing starts from **0**.

### `deleteCount`

* Number of elements to remove.
* `0` means remove nothing.

### `item1, item2...`

* New elements to insert.
* Optional.

---

## Returns

* An array containing the removed elements.

---

## Modifies Original Array?

✅ Yes

---

## Operations Possible

### Remove Elements

Uses:

* `startIndex`
* `deleteCount`

---

### Add Elements

Uses:

* `deleteCount = 0`

---

### Replace Elements

Uses:

* `deleteCount > 0`
* Insert new elements.

---

## QA Use Cases

* Remove invalid users.
* Insert a browser at a specific position.
* Replace old URLs.
* Update execution order of test cases.

---

# Array Method 6. slice()

## Definition

Returns a **copy** of part of an array.

Unlike `splice()`, it **does not modify** the original array.

---

## Syntax

```javascript
array.slice(startIndex, endIndex);
```

---

## Parameters

### `startIndex`

* Included.

### `endIndex`

* Excluded.

---

## Returns

* A new array.

---

## Modifies Original Array?

❌ No

---

## Important

If `endIndex` is omitted:

Copies until the end of the array.

If no parameters are passed:

Creates a **shallow copy** of the entire array.

---

## QA Use Cases

* Backup test data.
* Copy browser lists.
* Create filtered execution lists.
* Preserve original datasets.

---

# splice() vs slice()

| splice()                 | slice()                        |
| ------------------------ | ------------------------------ |
| Modifies original array  | Does not modify original array |
| Add, Remove, Replace     | Copy only                      |
| Returns removed elements | Returns copied elements        |

---

# Array Method 7. concat()

## Definition

Combines two or more arrays into a **new array**.

---

## Syntax

```javascript
array1.concat(array2, array3);
```

---

## Returns

* A new merged array.

---

## Modifies Original Array?

❌ No

---

## Important

Can combine:

* Two arrays
* Three arrays
* Multiple arrays

---

## QA Use Cases

* Merge browser execution lists.
* Merge API datasets.
* Combine test cases.
* Merge environment configurations.

---

# Array Method 8. join()

## Definition

Converts an array into a string.

---

## Syntax

```javascript
array.join(separator);
```

---

## Returns

* A string.

---

## Default Separator

Comma

```text
,
```

---

## Common Separators

```text
" "
```

Space

```text
", "
```

Comma + Space

```text
" - "
```

Hyphen

```text
""
```

No separator

---

## Modifies Original Array?

❌ No

---

## QA Use Cases

* Create CSV values.
* Display browser names.
* Build log messages.
* Convert test results into readable text.

---

# concat() vs join()

| concat()                 | join()                   |
| ------------------------ | ------------------------ |
| Returns Array            | Returns String           |
| Merge Arrays             | Convert Array to String  |
| Original Array Unchanged | Original Array Unchanged |

---

# Complete Array Methods Comparison

| Method    | Purpose                | Returns          | Modifies Original |
| --------- | ---------------------- | ---------------- | ----------------- |
| push()    | Add at End             | New Length       | ✅ Yes             |
| pop()     | Remove from End        | Removed Element  | ✅ Yes             |
| shift()   | Remove from Beginning  | Removed Element  | ✅ Yes             |
| unshift() | Add at Beginning       | New Length       | ✅ Yes             |
| splice()  | Add / Remove / Replace | Removed Elements | ✅ Yes             |
| slice()   | Copy Portion           | New Array        | ❌ No              |
| concat()  | Merge Arrays           | New Array        | ❌ No              |
| join()    | Convert to String      | String           | ❌ No              |

---

# Common Interview Questions

## 1. What is the difference between a Property and a Method?

**Answer:**

A **Property** stores or returns information about an object.

Example:

```javascript
array.length
```

A **Method** performs an action on an object.

Example:

```javascript
array.push("Chrome");
```

**Difference:**

| Property           | Method                |
| ------------------ | --------------------- |
| Stores information | Performs an action    |
| No parentheses     | Uses parentheses `()` |

---

## 2. What happens when `pop()` is called on an empty array?

**Answer:**

It returns:

```text
undefined
```

No error is thrown.

---

## 3. What does empty `shift()` return?

**Answer:**

If the array is empty, it returns:

```text
undefined
```
---

## 4. What is the syntax of `splice()`?

**Answer:**

```javascript
array.splice(startIndex, deleteCount, item1, item2, ...);
```

---

## 5. How do you insert elements using `splice()` without deleting anything?

**Answer:**

Use:

```javascript
array.splice(index, 0, value);
```

Here, `deleteCount` is `0`, so nothing is removed.

---

## 6. Is the `endIndex` included in `slice()`?

**Answer:**

No.

The `endIndex` is **excluded**.

---

## 7. How do you create a shallow copy of an array?

**Answer:**

```javascript
const copy = array.slice();
```

---

## 8. What is the default separator used by `join()`?

**Answer:**

A comma:

```text
,
```

---

## 9. Which methods return a new array?

**Answer:**

The following methods return a **new array** without modifying the original array:

* `slice()`
* `concat()`

These methods leave the original array unchanged.

---

## 10. What is the difference between `concat()` and `push()`?

**Answer:**

| `concat()`                       | `push()`                        |
| -------------------------------- | ------------------------------- |
| Returns a new array              | Modifies the original array     |
| Used to merge arrays             | Used to add elements at the end |
| Original arrays remain unchanged | Original array is updated       |
| Returns the merged array         | Returns the new array length    |

---

## 11. Which array methods are most commonly used in Playwright automation?

**Answer:**

The most commonly used array methods in Playwright automation are:

* `push()` – Add browsers, users, or test data.
* `pop()` – Remove the last test case or browser.
* `shift()` – Process queue-based data.
* `unshift()` – Add high-priority test cases.
* `splice()` – Add, remove, or replace test data.
* `slice()` – Create copies of arrays for safe manipulation.
* `concat()` – Merge multiple datasets or browser lists.
* `join()` – Format logs, reports, or CSV values.
* `includes()` – Check whether a value exists.
* `find()` – Locate a specific object in an array.
* `filter()` – Select matching records.
* `map()` – Transform array data.
* `sort()` – Sort test data.
* `reverse()` – Reverse the execution order when required.

These methods are frequently used while working with Playwright, API testing, data-driven testing, and JavaScript automation projects.

---

## 12. Which array methods modify the original array?

**Answer:**

* ✅ `push()`
* ✅ `pop()`
* ✅ `shift()`
* ✅ `unshift()`
* ✅ `splice()`

---

## 13. Which array methods do **not** modify the original array?

**Answer:**

* ✅ `slice()`
* ✅ `concat()`
* ✅ `join()`

---

# Interview Tip

A very common interview question is:

> **Which array methods modify the original array, and which return a new array?**

Answer is differences between **`splice()` vs `slice()`** and **`push()` vs `unshift()`**, 

---

# Key Takeaways

* `splice()` → Add, Remove, Replace (Modifies original)
* `slice()` → Copy array (Does not modify)
* `concat()` → Merge arrays
* `join()` → Convert array to string
* `splice()` is one of the most frequently asked JavaScript interview topics.
* `slice()` is commonly used to create a shallow copy.
* `concat()` is useful for merging datasets.
* `join()` is useful for formatting output and logs.

---
# Negative Indexing with `slice()`

## Definition

Unlike normal array indexing, `slice()` supports **negative indexes**.

Negative indexes count from the **end** of the array.

---

## Negative Index Table

Consider the array:

```text
["A", "B", "C", "D", "E"]
```

| Positive Index | 0  | 1  | 2  | 3  | 4  |
| -------------- | -- | -- | -- | -- | -- |
| Value          | A  | B  | C  | D  | E  |
| Negative Index | -5 | -4 | -3 | -2 | -1 |

---

## How Negative Indexing Works

JavaScript converts negative indexes as follows:

```text
Actual Index = Array Length + Negative Index
```

Example:

For an array of length **5**:

* `-1` → `5 + (-1)` → `4`
* `-2` → `5 + (-2)` → `3`
* `-3` → `5 + (-3)` → `2`

---

## Important Points

* `slice()` supports negative indexes.
* The **start index is included**.
* The **end index is excluded**, even when negative.
* Negative indexes count from the end of the array.

---

## Interview Questions

### 1. Does `slice()` support negative indexes?

**Answer:**

Yes.

Negative indexes count from the end of the array.

---

### 2. Does normal array indexing support negative indexes?

**Answer:**

No.

```javascript
arr[-1]
```

returns `undefined`.

---

### 3. Which JavaScript array methods support negative indexing?

**Answer:**

* `slice()`
* `at()`

---

## Key Takeaways

* Negative indexes start from the end of the array.
* `-1` represents the last element.
* `slice()` supports negative indexing.
* Normal array indexing (`arr[-1]`) does **not** support negative indexing.

# Day 25 – JavaScript: Array Copying & References

## Objective
* Primitive and reference data types.
* JavaScript references arrays and objects.
* Stack and Heap memory model.
* Explain why assigning one array to another does not create a copy.
* Compare arrays using `===`.
* Copy arrays using different methods.
* Shallow copy and its limitations.
* Deep copy and when to use it.
* Use `structuredClone()` and understand JSON cloning limitations.
* Spread Operator to copy, merge, and add array/object data.
* Rest Operator to collect values.

---

# Primitive vs Reference Data Types

## Definition

JavaScript values can broadly be understood as **primitive values** and **reference values**.

### Primitive Data Types

Primitive values represent a single value.

### Types of Primitive Data

1. String
2. Number
3. BigInt
4. Boolean
5. Undefined
6. Null
7. Symbol

### Example 1 – Primitive Values

```javascript
let name = "Rahul";
let age = 25;
let isActive = true;
let value = undefined;
let data = null;
```

A useful mental model is:

```text
Variable → Actual Value
```

---

## Reference Data Types

Objects and arrays are reference types.

### Examples

```javascript
const numbers = [10, 20, 30];

const user = {
    name: "Rahul",
    age: 25
};
```

A useful mental model is:

```text
Variable → Reference → Object/Array
```

### Why are arrays reference types?

An array is an object containing multiple values. When we assign an array to another variable, JavaScript does not automatically create another independent array.

---

# Stack and Heap Memory

## Stack Memory

The stack is commonly used to represent local variable storage and references.

Example:

```javascript
let age = 25;
```

Conceptually:

```text
Stack
age → 25
```

---

## Heap Memory

Objects and arrays are conceptually stored in heap memory.

Example:

```javascript
const numbers = [10, 20, 30];
```

Conceptually:

```text
Stack                 Heap

numbers ───────────→ [10, 20, 30]
```

The stack/heap model is a useful learning model; actual JavaScript engine implementations can differ.

---

# Array References

## Assigning One Array to Another

### Example 1

```javascript
let arr1 = [10, 20, 30];

let arr2 = arr1;
```

This does **not** create a new array.

Both variables refer to the same array.

```text
arr1 ──┐
       ├──→ [10, 20, 30]
arr2 ──┘
```

---

## Changing One Array

### Example 2

```javascript
let arr1 = [10, 20, 30];

let arr2 = arr1;

arr2.push(40);

console.log(arr1);
console.log(arr2);
```

Output:

```text
[10, 20, 30, 40]
[10, 20, 30, 40]
```

Why?

Because both variables refer to the same array.

---

# Reference Comparison

## Example 3 – Same Reference

```javascript
const arr1 = [1, 2, 3];

const arr2 = arr1;

console.log(arr1 === arr2);
```

Output:

```text
true
```

Both variables point to the same array.

---

## Example 4 – Different Arrays

```javascript
const arr1 = [1, 2, 3];

const arr2 = [1, 2, 3];

console.log(arr1 === arr2);
```

Output:

```text
false
```

Although their contents are identical, they are two different array objects.

### Important Rule

For objects and arrays, `===` checks whether both variables refer to the **same object**, not whether their contents are identical.

---

# Ways to Copy an Array

There are several common ways to create a new outer array.

## 1. `slice()`

### Example 5

```javascript
const arr = [10, 20, 30];

const copy = arr.slice();

console.log(arr === copy);
```

Output:

```text
false
```

---

## 2. Spread Operator

### Example 6

```javascript
const arr = [10, 20, 30];

const copy = [...arr];

console.log(arr === copy);
```

Output:

```text
false
```

---

## 3. `Array.from()`

### Example 7

```javascript
const arr = [10, 20, 30];

const copy = Array.from(arr);
```

This creates a new array.

---

## 4. `concat()`

### Example 8

```javascript
const arr = [10, 20, 30];

const copy = [].concat(arr);
```

This also creates a new array.

---

## Array Copying Methods – Comparison

| Method         | New Outer Array | Shallow Copy |
| -------------- | --------------- | ------------ |
| `slice()`      | Yes             | Yes          |
| Spread `...`   | Yes             | Yes          |
| `Array.from()` | Yes             | Yes          |
| `concat()`     | Yes             | Yes          |

### Important

This:

```javascript
const copy = arr;
```

is **not an array copy**.

It copies the reference.

---

# Shallow Copy

## Definition

A **shallow copy** creates a new outer array or object, but nested objects or arrays can still share references with the original.

---

## Primitive Values in a Shallow Copy

### Example 9

```javascript
const arr1 = [10, 20, 30];

const arr2 = [...arr1];

arr2.push(40);

console.log(arr1);
console.log(arr2);
```

Output:

```text
[10, 20, 30]
[10, 20, 30, 40]
```

The outer arrays are independent.

---

## Nested Object Problem

### Example 10

```javascript
const user1 = {
    name: "Rahul",
    address: {
        city: "Jaipur"
    }
};

const user2 = { ...user1 };

user2.address.city = "Delhi";

console.log(user1.address.city);
```

Output:

```text
Delhi
```

Why?

The outer object was copied, but the nested `address` object is still shared.

Conceptually:

```text
user1 ──→ address ──→ { city: "Jaipur" }
                         ↑
user2 ──→ address ───────┘
```

### Important Rule

> **Shallow copy = new outer object + potentially shared nested references.**

---

# Deep Copy

## Definition

A **deep copy** creates an independent copy of the data, including nested objects and arrays.

Changes to nested data in the copy do not affect the original.

---

# `structuredClone()`

## Example 11

```javascript
const user1 = {
    name: "Rahul",
    address: {
        city: "Jaipur"
    }
};

const user2 = structuredClone(user1);

user2.address.city = "Delhi";

console.log(user1.address.city);
```

Output:

```text
Jaipur
```

The nested object was copied independently.

### Preferred Modern Approach

When supported and appropriate:

```javascript
const copy = structuredClone(original);
```

---

# JSON Deep Copy

Another commonly used technique is:

## Example 12

```javascript
const copy = JSON.parse(
    JSON.stringify(original)
);
```

It can work for simple JSON-compatible data.

However, it is **not a universal deep-copy solution**.

---

## Limitations of JSON Cloning

JSON cloning can cause problems with:

1. `undefined`
2. Functions
3. `Symbol`
4. `BigInt`
5. `Date`
6. `Map`
7. `Set`
8. Circular references

Therefore:

> Prefer `structuredClone()` when it is suitable for the data and environment.

---

# Spread Operator (`...`)

## Definition

The **Spread Operator** expands the contents of an iterable or the properties of an object.

### Memory Trick

> **Spread = Expand**

---

## Copy an Array

### Example 13

```javascript
const numbers = [10, 20, 30];

const copy = [...numbers];
```

---

## Add Elements

### Example 14

```javascript
const numbers = [10, 20, 30];

const result = [...numbers, 40];
```

Result:

```text
[10, 20, 30, 40]
```

Add at the beginning:

```javascript
const result = [5, ...numbers];
```

Result:

```text
[5, 10, 20, 30]
```

---

## Merge Arrays

### Example 15

```javascript
const fruits = ["Apple", "Banana"];

const vegetables = ["Carrot", "Potato"];

const food = [...fruits, ...vegetables];
```

Result:

```text
["Apple", "Banana", "Carrot", "Potato"]
```

---

## Copy an Object

### Example 16

```javascript
const user = {
    name: "Rahul",
    age: 25
};

const copy = { ...user };
```

A new outer object is created.

---

## Merge Objects

### Example 17

```javascript
const userDetails = {
    name: "Rahul"
};

const userAddress = {
    city: "Jaipur"
};

const user = {
    ...userDetails,
    ...userAddress
};
```

Result:

```javascript
{
    name: "Rahul",
    city: "Jaipur"
}
```

---

## Duplicate Object Properties

### Example 18

```javascript
const user1 = {
    name: "Rahul"
};

const user2 = {
    name: "Amit"
};

const result = {
    ...user1,
    ...user2
};
```

Result:

```javascript
{
    name: "Amit"
}
```

The later property overrides the earlier one.

---

## Spread and Shallow Copy

Spread creates a **shallow copy**, not a deep copy.

```javascript
const copy = { ...original };
```

and:

```javascript
const copy = [...original];
```

only copy the outer level.

---

# Rest Operator (`...`)

## Definition

The **Rest Operator** collects multiple values into a single array or collects remaining properties during destructuring.

### Memory Trick

> **Rest = Collect**

---

## Rest in Function Parameters

### Example 19

```javascript
function add(...numbers) {
    console.log(numbers);
}

add(10, 20, 30);
```

Output:

```text
[10, 20, 30]
```

The arguments are collected into an array.

---

## Rest with Normal Parameters

### Example 20

```javascript
function student(name, ...subjects) {
    console.log(name);
    console.log(subjects);
}

student(
    "Rahul",
    "JavaScript",
    "Playwright",
    "API Testing"
);
```

Output:

```text
Rahul
["JavaScript", "Playwright", "API Testing"]
```

---

## Rest Parameter Rule

Rest must be the **last parameter**.

Correct:

```javascript
function test(a, b, ...rest) {
}
```

Incorrect:

```javascript
function test(...rest, a) {
}
```

---

## Rest in Array Destructuring

### Example 21

```javascript
const numbers = [10, 20, 30, 40];

const [first, ...remaining] = numbers;
```

Result:

```text
first     → 10
remaining → [20, 30, 40]
```

---

## Rest in Object Destructuring

### Example 22

```javascript
const user = {
    name: "Rahul",
    age: 25,
    city: "Jaipur"
};

const { name, ...details } = user;
```

Result:

```text
name → Rahul

details → {
    age: 25,
    city: "Jaipur"
}
```

---

# Spread vs Rest

Both use:

```javascript
...
```

But their jobs are different.

| Spread                         | Rest                             |
| ------------------------------ | -------------------------------- |
| Expands                        | Collects                         |
| Collection → individual values | Multiple values → collection     |
| Used for copying               | Used for collecting              |
| Used for merging               | Used in parameters/destructuring |

### Example

Spread:

```javascript
const copy = [...arr];
```

Rest:

```javascript
const [first, ...rest] = arr;
```

### Easy Rule

> **Spread spreads things out. Rest gathers the remaining things together.**

---

# Important Interview Questions

## 1. What is the difference between primitive and reference data types?

Primitive values represent individual values, while objects and arrays are reference types whose variables refer to objects stored elsewhere in memory.

---

## 2. Why does changing `arr2` also change `arr1`?

Because:

```javascript
const arr2 = arr1;
```

copies the reference, not the array itself.

Both variables refer to the same array.

---

## 3. Why does `[1, 2, 3] === [1, 2, 3]` return `false`?

Because these are two different array objects.

`===` compares their references, not their contents.

---

## 4. What is a shallow copy?

A shallow copy creates a new outer object or array, while nested objects or arrays can still share references.

---

## 5. What is a deep copy?

A deep copy creates independent copies of nested objects and arrays as well.

---

## 6. What is the difference between shallow and deep copy?

```text
Shallow:
New outer level
Shared nested references possible

Deep:
New outer level
Independent nested data
```

---

## 7. What is the preferred modern way to deep clone suitable JavaScript data?

```javascript
structuredClone()
```

---

## 8. What are the limitations of JSON cloning?

`JSON.parse(JSON.stringify())` does not correctly preserve all JavaScript data types and has problems with values such as functions, `undefined`, `Symbol`, `BigInt`, `Date`, `Map`, `Set`, and circular references.

---

## 9. What does the Spread Operator do?

It expands elements of an iterable or properties of an object.

Example:

```javascript
const copy = [...arr];
```

---

## 10. Does Spread create a deep copy?

No.

Spread creates a **shallow copy**.

---

## 11. What does the Rest Operator do?

It collects multiple values into an array or remaining properties into an object.

Example:

```javascript
function test(...values) {
}
```

---

## 12. What is the difference between Spread and Rest?

> **Spread expands; Rest collects.**

---

## 13. Can a Rest parameter appear before another parameter?

No.

The Rest parameter must be the last parameter.

---

## 14. What happens when the same property appears twice while spreading objects?

The later property overwrites the earlier property.

```javascript
const result = {
    ...obj1,
    ...obj2
};
```

If both contain the same key, `obj2` wins.

---

## 15. Is `const copy = original` a copy?

No.

It creates another reference to the same object or array.

---

# Quick Interview Revision

```text
arr2 = arr1
        ↓
Same reference

arr2 = [...arr1]
        ↓
New outer array
        ↓
Shallow copy

structuredClone(arr1)
        ↓
Deep copy

...array
        ↓
Spread / expand

...rest
        ↓
Rest / collect
```

---

# Summary

1. **Primitive values** represent individual values.
2. **Arrays and objects are reference types.**
3. Assigning an array to another variable copies the **reference**, not the array.
4. `===` checks whether two reference variables point to the same object.
5. `slice()`, Spread, `Array.from()`, and `concat()` can create new outer arrays.
6. These copying techniques create **shallow copies**.
7. Shallow copies can still share nested objects.
8. A **deep copy** independently copies nested data.
9. `structuredClone()` is a modern deep-cloning option for supported data.
10. JSON cloning has important limitations.
11. **Spread (`...`) expands** arrays/objects.
12. **Rest (`...`) collects** values/properties.
13. Rest parameters must be placed at the end.
14. Spread and Rest use the same syntax but have different purposes.

> **Reference points to the same data, shallow copy copies the outer level, deep copy copies nested data, Spread expands, and Rest collects.**

# JavaScript Data Types

---

# What is Data?

Data is any information that can be stored, processed, and used by a computer.

Examples:
- "Lavanya"
- 28
- true
- 50000

---

# What is a Data Type?

A Data Type specifies the type of value stored in a variable.

Example:

```javascript
let name = "Lavanya";
```

Here,

- Variable Name → name
- Value → "Lavanya"
- Data Type → String

---

# Why Data Types?

Data Types help JavaScript understand:

- How to store the value
- How to process the value
- Which operations can be performed on the value

Example:

```javascript
25 + 5
```

Output

```
30
```

```javascript
"25" + "5"
```

Output

```
255
```

---

# JavaScript Data Types

JavaScript Data Types are divided into two categories.

## Primitive Data Types

Primitive Data Types store a single value.

- String
- Number
- Boolean
- Undefined
- Null
- BigInt
- Symbol

## Non-Primitive Data Types

Non-Primitive Data Types store multiple values or complex data.

- Object
- Array
- Function

---

# 1. String

Definition:

A String stores text enclosed in single or double quotes.

Example:

```javascript
let name = "Lavanya";
```

---

# 2. Number

Definition:

A Number stores numeric values.

Example:

```javascript
let age = 28;
```

---

# 3. Boolean

Definition:

A Boolean stores only two values:

- true
- false

Example:

```javascript
let isWorking = true;
```

---

# 4. Undefined

Definition:

Undefined is automatically assigned by JavaScript when a variable is declared but no value is assigned.

Example:

```javascript
let city;
```

Output:

```
undefined
```

---

# 5. Null

Definition:

Null is intentionally assigned by the programmer to represent an empty value.

Example:

```javascript
let passport = null;
```

---

# 6. BigInt

Definition:

BigInt stores very large integer values.

Example:

```javascript
let population = 8000000000n;
```

---

# 7. Symbol

Definition:

Symbol creates unique identifiers.

Example:

```javascript
let id = Symbol();
```

---

# Non-Primitive Data Types (Overview)

## Object

Stores related data as key-value pairs.

Example:

```javascript
let employee = {
  name: "Lavanya",
  age: 28
};
```

---

## Array

Stores multiple values in a single variable.

Example:

```javascript
let browsers = ["Chrome", "Firefox", "Edge"];
```

---

## Function

A reusable block of code that performs a specific task.

Example:

```javascript
function greet() {
  console.log("Hello");
}
```

---

# Difference: Undefined vs Null

| Undefined | Null |
|------------|------|
| Assigned automatically by JavaScript | Assigned intentionally by the programmer |
| Variable declared but not assigned | Represents an intentional empty value |

---

# Difference: Primitive vs Non-Primitive

| Primitive | Non-Primitive |
|------------|---------------|
| Stores one value | Stores multiple values |
| Simple | Complex |
| Example: String | Example: Object |

---

# Interview Questions

### What is a Data Type?

A Data Type specifies the kind of value a variable can store.

---

### How many Primitive Data Types are there?

There are 7 Primitive Data Types.

- String
- Number
- Boolean
- Undefined
- Null
- BigInt
- Symbol

---

### Difference between String and Number?

```
"28" → String
28 → Number
```

---

### Difference between Undefined and Null?

Undefined is automatically assigned by JavaScript.

Null is intentionally assigned by the programmer.

---

### What is Boolean?

Boolean stores only two values:

- true
- false

---

### Can BigInt store decimal values?

No.

BigInt stores only integer values.

---

# Key Points

✅ Primitive stores one value.

✅ Non-Primitive stores multiple values.

✅ Quotes indicate String.

✅ Numbers are written without quotes.

✅ Boolean values are true or false.

✅ Undefined is assigned automatically.

✅ Null is assigned intentionally.

✅ BigInt uses 'n' at the end.

✅ Every Symbol is unique.

---


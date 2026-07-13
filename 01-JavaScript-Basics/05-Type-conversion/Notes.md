
# Type Conversion & typeof Operator

## 🎯 Objective

Learn how JavaScript converts one data type to another and how to identify a variable's data type using the `typeof` operator.

---

# What is Type Conversion?

Type Conversion is the process of converting one data type into another.

Example:

String → Number

Number → String

Boolean → Number

---

# Types of Type Conversion

There are two types:

1. Implicit Type Conversion (Automatic)
2. Explicit Type Conversion (Manual)

---

# 1. Implicit Type Conversion

JavaScript automatically converts one data type into another when required.

Example:

```javascript
"5" + 2
```

Output:

```
52
```

Reason:

The `+` operator converts the Number into a String and joins them.

---

Example:

```javascript
"10" - 5
```

Output:

```
5
```

Reason:

The `-` operator converts both operands into Numbers before subtraction.

---

## Important Rules

| Operator | Behaviour |
|----------|-----------|
| + | String Concatenation (if one operand is a string) |
| - | Converts to Number |
| * | Converts to Number |
| / | Converts to Number |

---

# What is Concatenation?

Concatenation means joining two or more strings.

Example:

```javascript
"Hello " + "Lavanya"
```

Output:

```
Hello Lavanya
```

---

# 2. Explicit Type Conversion

The programmer manually converts one data type into another.

## Number()

Converts String into Number.

Example:

```javascript
Number("25")
```

Output:

```
25
```

---

## String()

Converts Number into String.

Example:

```javascript
String(25)
```

Output:

```
"25"
```

---

## Boolean()

Converts values into Boolean.

Examples:

```javascript
Boolean(1)
```

Output:

```
true
```

```javascript
Boolean(0)
```

Output:

```
false
```

```javascript
Boolean("JavaScript")
```

Output:

```
true
```

```javascript
Boolean("")
```

Output:

```
false
```

---

# typeof Operator

Definition:

`typeof` returns the data type of a variable or value.

Examples:

```javascript
typeof "Lavanya"
```

Output:

```
string
```

```javascript
typeof 28
```

Output:

```
number
```

```javascript
typeof true
```

Output:

```
boolean
```

```javascript
typeof undefined
```

Output:

```
undefined
```

```javascript
typeof Symbol()
```

Output:

```
symbol
```

```javascript
typeof 8000000000n
```

Output:

```
bigint
```

---

# Special Interview Question

```javascript
typeof null
```

Output:

```
object
```

Reason:

This is a historical bug in JavaScript that has been kept for backward compatibility.

---

# Real Automation QA Usage

Scenario:

Price is read from the UI.

```javascript
let price = "500";
```

Wrong:

```javascript
price + 100
```

Output:

```
500100
```

Correct:

```javascript
Number(price) + 100
```

Output:

```
600
```

---

# Interview Questions

### What is Type Conversion?

Converting one data type into another.

---

### Types of Type Conversion?

- Implicit
- Explicit

---

### Difference between Implicit and Explicit?

Implicit → Automatic conversion by JavaScript.

Explicit → Manual conversion by the programmer.

---

### What is typeof?

An operator that returns the data type of a variable or value.

---

### Why does typeof null return object?

Because of a historical bug in JavaScript.

---

# Key Points

✅ Type Conversion changes one data type into another.

✅ Implicit conversion is automatic.

✅ Explicit conversion is manual.

✅ Number() converts to Number.

✅ String() converts to String.

✅ Boolean() converts to Boolean.

✅ typeof returns the data type.

✅ typeof null returns object.

---
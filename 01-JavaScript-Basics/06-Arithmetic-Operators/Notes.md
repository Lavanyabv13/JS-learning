# Arithmetic Operators

## Objective

Learn Arithmetic Operators, Increment, Decrement, and Operator Precedence used in JavaScript and Automation Testing.

---

# What is an Operator?

Definition:

An operator is a symbol that performs an operation on one or more operands (values or variables).

Example:

```javascript
10 + 20
```

- 10 → Operand
- 20 → Operand
- + → Operator

---

# Arithmetic Operators

| Operator | Name | Example | Output |
|----------|------|---------|--------|
| + | Addition | 10 + 5 | 15 |
| - | Subtraction | 10 - 5 | 5 |
| * | Multiplication | 10 * 5 | 50 |
| / | Division | 10 / 5 | 2 |
| % | Modulus (Remainder) | 10 % 3 | 1 |
| ** | Exponent (Power) | 2 ** 3 | 8 |

---

## Addition (+)

Adds two operands.

Example:

```javascript
10 + 20
```

Output:

```
30
```

---

## Subtraction (-)

Subtracts the second operand from the first.

Example:

```javascript
20 - 5
```

Output:

```
15
```

---

## Multiplication (*)

Multiplies two operands.

Example:

```javascript
5 * 6
```

Output:

```
30
```

---

## Division (/)

Divides the first operand by the second.

Example:

```javascript
20 / 4
```

Output:

```
5
```

---

## Modulus (%)

Returns the remainder after division.

Example:

```javascript
10 % 3
```

Output:

```
1
```

### Uses of Modulus

- Check Even Number

```javascript
number % 2 == 0
```

- Check Odd Number

```javascript
number % 2 != 0
```

---

## Exponent (**)

Raises a number to a power.

Example:

```javascript
2 ** 3
```

Output:

```
8
```

Another Example:

```javascript
3 ** 4
```

Output:

```
81
```

---

# Increment (++)

Definition:

The Increment operator increases the value of a variable by 1.

Example:

```javascript
let count = 5;

count++;

console.log(count);
```

Output:

```
6
```

Shortcut for:

```javascript
count = count + 1;
```

---

# Decrement (--)

Definition:

The Decrement operator decreases the value of a variable by 1.

Example:

```javascript
let count = 5;

count--;

console.log(count);
```

Output:

```
4
```

Shortcut for:

```javascript
count = count - 1;
```

---

# Difference between ++ and --

| ++ | -- |
|----|----|
| Increases value by 1 | Decreases value by 1 |
| Shortcut for x = x + 1 | Shortcut for x = x - 1 |

---

# Operator Precedence (BODMAS)

Definition:

Operator precedence is the order in which JavaScript evaluates operators.

Order:

1. Parentheses ()
2. Exponent **
3. Multiplication (*), Division (/), Modulus (%)
4. Addition (+), Subtraction (-)

---

Example 1

```javascript
10 + 2 * 5
```

Output:

```
20
```

Reason:

```
2 × 5 = 10

10 + 10 = 20
```

---

Example 2

```javascript
(10 + 2) * 5
```

Output:

```
60
```

Reason:

```
10 + 2 = 12

12 × 5 = 60
```

---

# Real Automation QA Examples

## Calculate Total Price

```javascript
let price = 500;
let quantity = 3;

let total = price * quantity;

console.log(total);
```

Output:

```
1500
```

---

## Check Even or Odd Order ID

```javascript
let orderId = 1024;

console.log(orderId % 2);
```

Output:

```
0
```

Meaning:

Even Order ID

---

## Retry Counter

```javascript
let retry = 0;

retry++;

console.log(retry);
```

Output:

```
1
```

---

# Interview Questions

## What is an Operator?

A symbol that performs an operation on one or more operands.

---

## Difference between / and % ?

/ → Returns Quotient

% → Returns Remainder

---

## What is Increment?

Increases the value by 1 using ++.

---

## What is Decrement?

Decreases the value by 1 using --.

---

## What is Operator Precedence?

The order in which JavaScript evaluates operators.

---

## Why are () important?

Parentheses () are used to control the order of execution. JavaScript evaluates the expression inside parentheses first before applying other operators.

---

# Key Points

✅ Operators perform operations on operands.

✅ Arithmetic operators are +, -, *, /, %, **.

✅ % returns remainder.

✅ ** returns power.

✅ ++ increases value by 1.

✅ -- decreases value by 1.

✅ Parentheses () have the highest priority.

✅ JavaScript follows operator precedence (BODMAS).

---
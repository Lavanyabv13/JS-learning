# JavaScript Arrays

## Learning Objectives

- Understand what an Array is.
- Create Arrays.
- Access Array Elements.
- Update Array Elements.
- Use the length property.
- Iterate Arrays using for and for...of.
- Understand real-world Automation QA examples.

---

# What is an Array?

An Array is a JavaScript data structure used to store multiple values inside a single variable.

Example:

```javascript
const browsers = ["Chrome", "Firefox", "Edge"];
```

---

# Why Arrays?

Instead of:

```javascript
let browser1 = "Chrome";
let browser2 = "Firefox";
let browser3 = "Edge";
```

Use:

```javascript
const browsers = ["Chrome", "Firefox", "Edge"];
```

Advantages:

- Cleaner code
- Easy maintenance
- Less duplication
- Easy looping

---

# Array Characteristics

- Stores multiple values
- Ordered collection
- Zero-indexed
- Mutable
- Can store any data type

---

# Creating Arrays

## Array Literal (Recommended)

```javascript
const fruits = ["Apple", "Banana", "Orange"];
```

## Array Constructor

```javascript
const fruits = new Array("Apple", "Banana", "Orange");
```

## Empty Array

```javascript
const users = [];
```

---

# Accessing Elements

Syntax

```javascript
array[index]
```

Example

```javascript
const fruits = ["Apple", "Banana", "Orange"];

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
```

Output

```
Apple
Banana
Orange
```

Invalid index

```javascript
console.log(fruits[5]);
```

Output

```
undefined
```

Last element

```javascript
fruits[fruits.length - 1]
```

---

# Updating Elements

Syntax

```javascript
array[index] = newValue;
```

Example

```javascript
const browsers = ["Chrome", "Firefox", "Edge"];

browsers[1] = "Safari";
```

Output

```
["Chrome","Safari","Edge"]
```

---

# length Property

Returns total number of elements.

```javascript
const users = ["Admin", "Manager"];

console.log(users.length);
```

Output

```
2
```

Last element

```javascript
users[users.length - 1]
```

---

# Iterating Arrays

## for Loop

```javascript
for (let i = 0; i < browsers.length; i++) {
    console.log(browsers[i]);
}
```

## for...of Loop

```javascript
for (const browser of browsers) {
    console.log(browser);
}
```

Difference

| for | for...of |
|------|-----------|
| Gives index and value | Gives only value |
| Best when index is needed | Best when only values are needed |

---

# Real QA Examples

- Browser names
- Test users
- Product list
- URLs
- API response
- Dropdown values
- Web table rows

Example

```javascript
const browsers = ["Chrome","Firefox","Edge"];

for (const browser of browsers) {
    console.log(browser);
}
```

---

# Interview Questions

1. What is an Array?

2. Why are Arrays used?

3. What is an Index?

4. What happens if an invalid index is accessed?

5. Difference between for and for...of?

6. What does length return?

7. How do you access the last element?

8. How do you update an array element?

9. Which is the preferred way to create arrays?

10. Where are arrays used in Automation Testing?

---

# Key Takeaways

- Arrays store multiple values.
- Arrays are zero-indexed.
- Arrays are mutable.
- Use [] to create arrays.
- length gives total elements.
- Use for when index is required.
- Use for...of when only values are required.
- Arrays are heavily used in Playwright Automation.
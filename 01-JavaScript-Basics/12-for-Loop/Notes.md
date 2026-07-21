# for Loop

## 🎯 Objective

Learn what a `for` loop is, understand its syntax and execution flow, and know where it is used in Automation Testing.

---

# What is a for Loop?

A `for` loop is a control statement used to execute a block of code repeatedly until a specified condition becomes false.

It is used when we know how many times a task needs to be repeated.

---

# Why do we use a for Loop?

- To execute code multiple times.
- To reduce repetitive code.
- To improve readability.
- To make programs shorter and easier to maintain.
- To automate repetitive tasks.

---

# Syntax

A `for` loop consists of three parts:

1. Initialization
2. Condition
3. Increment / Decrement

---

# Initialization

- Executes only once.
- Creates and initializes the loop variable.
- Marks the starting point of the loop.

---

# Condition

- Checked before every iteration.
- If the condition is `true`, the loop continues.
- If the condition is `false`, the loop stops.

---

# Increment / Decrement

- Updates the loop variable after each iteration.
- Helps the loop move toward its stopping condition.
- Prevents infinite loops.

---

# Flow of Execution

Initialization

↓

Condition

↓

Execute Code

↓

Increment / Decrement

↓

Condition Again

↓

Repeat until the condition becomes false.

---

# Infinite Loop

An infinite loop occurs when the condition never becomes false.

Example:

- Condition is always `true`.
- Increment/Decrement is missing.
- Condition is written incorrectly.

Infinite loops should generally be avoided because the program may never stop.

---

# Real-Time Uses of for Loop

- Printing numbers
- Repeating calculations
- Processing arrays (later topic)
- Reading multiple records
- Executing repetitive tasks

---

# Automation QA Uses

A `for` loop is commonly used for:

- Running multiple test cases.
- Clicking multiple buttons or links.
- Validating lists of products.
- Checking web table rows.
- Filling forms with multiple sets of test data.
- Executing repetitive browser actions.

---

# Advantages of for Loop

- Reduces duplicate code.
- Easy to understand.
- Saves development time.
- Improves maintainability.
- Makes automation scripts cleaner.

---

# Interview Questions

## What is a for Loop?

A `for` loop is a control statement used to execute a block of code repeatedly until a specified condition becomes false.

---

## What are the three parts of a for Loop?

- Initialization
- Condition
- Increment / Decrement

---

## Which part executes only once?

Initialization.

---

## Which part controls the execution of the loop?

Condition.

---

## Why is increment/decrement important?

It updates the loop variable after every iteration so that the loop can eventually stop. Without it, the loop may become infinite.

---

## Why are for Loops important in Automation Testing?

They automate repetitive tasks such as executing multiple test cases, validating lists of elements, processing table rows, and reducing duplicate code.

---

# Key Points

- A `for` loop repeats a block of code.
- Initialization executes only once.
- Condition is checked before every iteration.
- Increment/Decrement updates the loop variable.
- `for` loops are best used when the number of iterations is known.
- `for` loops are widely used in Playwright, Selenium, and other automation frameworks.

---
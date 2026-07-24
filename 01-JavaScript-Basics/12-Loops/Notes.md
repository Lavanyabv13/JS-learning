# JavaScript Loops

## 🎯 Learning Objectives

* Understand what loops are.
* Learn the `for`, `while`, and `do...while` loops.
* Understand their syntax and execution flow.
* Know when to use each loop.
* Learn real-world Automation QA use cases.

---

# What is a Loop?

A loop is a control statement used to execute a block of code repeatedly until a specified condition becomes false.

## Why do we use Loops?

* Execute code multiple times.
* Reduce repetitive code.
* Improve readability.
* Save development time.
* Automate repetitive tasks.

---

# Types of Loops

1. `for` Loop
2. `while` Loop
3. `do...while` Loop

---

# for Loop

## Definition

A `for` loop is a control statement used when we know how many times a task needs to be repeated.

---

## Syntax

```javascript
for (initialization; condition; update) {
    // code
}
```

---

## Components

### Initialization

* Executes only once.
* Creates and initializes the loop variable.
* Marks the starting point of the loop.

### Condition

* Checked before every iteration.
* If the condition is `true`, the loop continues.
* If the condition is `false`, the loop stops.

### Increment / Decrement

* Updates the loop variable after every iteration.
* Moves the loop toward its stopping condition.
* Prevents infinite loops.

---

## Flow of Execution

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

## Uses

* Print numbers
* Multiplication tables
* Repeating calculations
* Execute fixed number of test cases
* Process arrays (later topic)

---

## Automation QA Uses

* Execute multiple test cases.
* Click multiple buttons or links.
* Validate product lists.
* Check web table rows.
* Fill forms with multiple sets of test data.
* Execute repetitive browser actions.

---

# while Loop

## Definition

A `while` loop is a control statement used when the **number of iterations is unknown**. It executes the code while the condition is true.

---

## Syntax

```javascript
initialization;

while (condition) {
    // code
    update;
}
```

---

## Components

* Initialization
* Condition
* Update (Increment / Decrement)

---

## Key Points

* Condition is checked before execution.
* May execute zero or more times.
* It is an **entry-controlled loop**.

---

## Uses

* Wait for page load.
* Wait for an element to become visible.
* Wait for an API response.
* Wait for a file download.

---

## Automation QA Uses

* Wait until page loads.
* Wait for element visibility.
* Wait for API response.
* Wait for file download.

---

# do...while Loop

## Definition

A `do...while` loop is a control statement that executes the code first, then checks the condition. It continues until the condition becomes false.

---

## Syntax

```javascript
initialization;

do {
    // code
    update;
} while (condition);
```

> **Note:** A semicolon (`;`) is required after `while(condition)`.

---

## Components

* Initialization
* Code Execution
* Update
* Condition

---

## Key Points

* Executes before checking the condition.
* Executes at least one time.
* It is an **exit-controlled loop**.

---

## Uses

* Retry login.
* Retry failed API requests.
* Execute code that must run at least once.

---

## Automation QA Uses

* Retry login until successful.
* Retry failed API requests.
* Password/PIN validation.
* Retry failed automation steps.

---

# Difference Between `for`, `while`, and `do...while`

| Feature           | `for`                         | `while`                         | `do...while`                    |
| ----------------- | ----------------------------- | ------------------------------- | ------------------------------- |
| Best Used When    | Number of iterations is known | Number of iterations is unknown | Code must execute at least once |
| Condition Check   | Before execution              | Before execution                | After execution                 |
| Minimum Execution | 0 times                       | 0 times                         | 1 time                          |
| Loop Type         | Entry-controlled              | Entry-controlled                | Exit-controlled                 |
| Initialization    | Inside loop                   | Before loop                     | Before loop                     |
| Update            | Inside loop                   | Inside loop body                | Inside loop body                |

---

# Infinite Loop

An infinite loop occurs when the condition never becomes false.

### Common Reasons

* Condition is always `true`.
* Increment/Decrement is missing.
* Incorrect condition.

Infinite loops should generally be avoided because the program may never stop.

---

# Advantages of Loops

* Reduce duplicate code.
* Improve readability.
* Save development time.
* Improve maintainability.
* Make automation scripts cleaner.

---

# Interview Questions

## What is a Loop?

A loop is a control statement used to execute a block of code repeatedly until a specified condition becomes false.

---

## What is a `for` loop?

A `for` loop is used when the number of iterations is known.

---

## What is a `while` loop?

A `while` loop is used when the number of iterations is unknown and the condition is checked before execution.

---

## What is a `do...while` loop?

A `do...while` loop is used when the code must execute at least once because the condition is checked after execution.

---

## What are the three parts of a `for` loop?

* Initialization
* Condition
* Increment / Decrement

---

## Which part executes only once?

Initialization.

---

## Which part controls loop execution?

Condition.

---

## Why is Increment/Decrement important?

It updates the loop variable after every iteration so the loop can eventually stop. Without it, the loop may become infinite.

---

## What is an Infinite Loop?

An infinite loop is a loop that keeps executing because its condition never becomes false.

---

## Entry-Controlled vs Exit-Controlled Loops

### Entry-Controlled

The condition is checked before executing the code.

**Examples:** `for`, `while`

### Exit-Controlled

The condition is checked after executing the code.

**Example:** `do...while`

---

# Automation QA Examples

## `for` Loop

* Execute multiple test cases.
* Validate product lists.
* Check web table rows.
* Iterate through test data.

## `while` Loop

* Wait for page load.
* Wait for element visibility.
* Wait for API response.
* Wait for file download.

## `do...while` Loop

* Retry login.
* Retry failed API requests.
* Password/PIN validation.
* Retry failed automation steps.

---

# Quick Revision

* **Loop** → Executes code repeatedly.
* **for** → Known number of iterations.
* **while** → Unknown number of iterations.
* **do...while** → Executes at least once.
* **for** and **while** → Entry-controlled loops.
* **do...while** → Exit-controlled loop.
* **Infinite Loop** → Condition never becomes false.

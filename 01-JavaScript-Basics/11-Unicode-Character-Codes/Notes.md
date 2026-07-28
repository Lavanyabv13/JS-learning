# Unicode

## Definition
Unicode is a universal character encoding standard that assigns a unique code to characters from almost every language, symbols, and emojis.

JavaScript uses Unicode to represent strings.

---

## Why Unicode?

ASCII supports only English characters.

Unicode supports:
- English
- Hindi
- Kannada
- Tamil
- Chinese
- Japanese
- Emojis 😊
- Currency symbols (₹, $, €)

---

## ASCII vs Unicode

| ASCII | Unicode |
|--------|----------|
| 128 characters | Supports characters from almost every language |
| English only | Worldwide languages and emojis |
| Older standard | Modern standard |

---

## JavaScript Methods

### Character to Code

Syntax:
"A".charCodeAt(0)

Example:
console.log("A".charCodeAt(0));

Output:
65

---

### Code to Character

Syntax:
String.fromCharCode(65)

Example:
console.log(String.fromCharCode(65));

Output:
A

---

## Common Values

A → 65
Z → 90

a → 97
z → 122

0 → 48
9 → 57

Space → 32

---

## Interview Questions

Q. What is Unicode?

Answer:
Unicode is a universal character encoding standard that assigns unique numeric values to characters from almost every language.

Q. What is the difference between ASCII and Unicode?

Answer:
ASCII supports only English characters.
Unicode supports almost all languages, symbols, and emojis.

Q. Does JavaScript use ASCII or Unicode?

Answer:
JavaScript uses Unicode.

---

## QA Perspective

Unicode is useful while testing:

• International applications
• User names in different languages
• Currency symbols
• Emojis
• Input validation



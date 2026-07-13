//Type Conversion

//Implicit Conversion


//1. "+" operator converts number to string
let a = 5;
let b = "10";
let c = a + b;
console.log(c);
//output: 510
// This is because the "+" operator converts the number 5 to a string "5" and then concatenates it with the string "10", resulting in the string "510".

//2. "-" operator converts string to number
let d = "20";
let e = 5;
let f = d - e;
console.log(f);
//output: 15
// This is because the "-" operator converts the string "20" to a number 20 and then subtracts 5 from it, resulting in the number 15.

//3. "*" operator converts string to number
let g = "5";
let h = 2;
let i = g * h;
console.log(i);
//output: 10
// This is because the "*" operator converts the string "5" to a number 5 and then multiplies it by 2, resulting in the number 10.

//4. "/" operator converts string to number
let j = "10";
let k = 2;
let l = j / k;
console.log(l);
//output: 5
// This is because the "/" operator converts the string "10" to a number 10 and then divides it by 2, resulting in the number 5.

//Explicit Conversion

//1. String() function converts number to string
let m = 100;
let n = String(m);
console.log(n);
//output: "100"
// This is because the String() function converts the number 100 to a string "100".

//2. Number() function converts string to number
let o = "200";
let p = Number(o);
console.log(p);
//output: 200
// This is because the Number() function converts the string "200" to a number 200.

//3. Boolean() function converts string to boolean
//Non-empty string will be converted to true
let q = "true";
let r = Boolean(q);
console.log(r);
//output: true
// This is because the Boolean() function converts the string "true" to a boolean true. Any non-empty string will be converted to true, while an empty string will be converted to false.

//Empty string will be converted to false
let s = "";
let t = Boolean(s);
console.log(t);
//output: false
// This is because the Boolean() function converts the empty string "" to a boolean false. Any non-empty string will be converted to true, while an empty string will be converted to false.

//typeof operator

//1. String
let u = "Lavanya";
console.log(typeof u);
//output: string

//2. Number
let v = 28;
console.log(typeof v);
//output: number

//3. Boolean
let w = true;
console.log(typeof w);
//output: boolean

//4. undefined
let x;
console.log(typeof x);
//output: undefined

//5. BigInt
let y = 1234567890123456789012345678901234567890n;
console.log(typeof y);
//output: bigint

//6. Symbol
let z = Symbol("Naresh");
console.log(typeof z);
//output: symbol

//7. Null
let aa = null;
console.log(typeof aa);
//output: object
// This is because null is considered an object in JavaScript, due to historical bug.

//Assessment

//Example 1:
typeof "100"
//output: string

//Example 2:
typeof Number("100")
//output: number

//Example 3:
typeof Boolean("")
//output: boolean
//typeof returns the data type not the value.

//Example 4:
typeof (10 - "5")
//output: number



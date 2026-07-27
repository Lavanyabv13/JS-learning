// Unicode

//1.Character → Unicode value

console.log("The Unicode value of A:", "A".charCodeAt(0));
console.log("The Unicode value of Z:", "Z".charCodeAt(0));
console.log("The Unicode value of a:", "a".charCodeAt(0));
console.log("The Unicode value of z:", "z".charCodeAt(0));
console.log("The Unicode value of 0(zero):",'0'.charCodeAt(0));
console.log("The Unicode value of 9:", "9".charCodeAt(0));
console.log("The Unicode value of space:", " ".charCodeAt(0));

/* OUTPUT:
The Unicode value of A: 65
The Unicode value of Z: 90
The Unicode value of a: 97
The Unicode value of z: 122
The Unicode value of 0(zero): 48
The Unicode value of 9: 57
The Unicode value of space: 32 */


//2.Unicode value → Character

console.log("The Character of value of 65 is:", String.fromCharCode(65));
console.log("The Character of value of 97 is:", String.fromCharCode(97));
console.log("The Character of value of 8377 is:", String.fromCharCode(8377));

/* Output
The Character of value of 65 is: A
The Character of value of 97 is: a
The Character of value of 8377 is: ₹ */

// Store characters

let letter = "L";
console.log(letter);
console.log(letter.charCodeAt(0));

// Output
// L
// 76


// Store Unicode value

let code = 66;

console.log(String.fromCharCode(code));

// Output
// B


// QA Example

//1. Validate the input Character is Uppercase or lowercase letter

//Uppercase letter identification
let ch1 = "APPLE"; 
//In strings Character index is A=0, P=1, P=2, L=3, E=4
if (ch1.charCodeAt(4) >= 65 && ch1.charCodeAt(4) <= 90) {
    console.log("The 4th Letter is  Uppercase");
} else {
    console.log("The 4th letters is Lowercase");
}

//Lowercase letter identification
let ch2 = "aPPLE"; 
//In strings Character index is a=0, P=1, P=2, L=3, E=4
if (ch2.charCodeAt(0) >= 65 && ch2.charCodeAt(0) <= 90) {
    console.log("The 1st letter is Uppercase");
} else {
    console.log("The 1st letter is Lowercase");
}
//Output:
//The 4th Letter is  Uppercase
//The 1st letter is Lowercase


//2. Print Alphabets A to Z (Uppercase)

let alphabet = 65; //65 bcz the A unicode value is 65 and Z is 90
console.log("Print Alphabets A to Z (Uppercase)");
do {
    console.log(String.fromCharCode(alphabet));
    alphabet++;
}
while (alphabet <= 90);

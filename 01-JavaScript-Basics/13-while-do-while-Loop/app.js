//while Loop statement

/*Syntax:

let initilization;
while (condition) {
 //code
update   
}  */

//1. Print Numbers from 1 to 10
console.log("Print Numbers from 1 to 10 using while loop");

let a = 1;
while (a <= 10) {
console.log(a);
a++;
}

//2.Print Numbers from 10 to 1
console.log("Print Numbers from 10 to 1 using while loop");

let b = 10;
while (b >= 1) {
console.log(b);
b--;
}

//3.Print Even Numbers (2 to 10)
console.log("Print Even Numbers (2 to 10)");
//Method 1:
console.log("Method 1:");
let c = 2;
while (c <= 10) {
    console.log(c);
c += 2;
} 

//Method 2: Using if
console.log("Method 2 (using if):");
let e = 1;

while (e <= 10) {

    if (e % 2 === 0) {
        console.log(e);
    }

    e++;
}

//4.Print Odd Numbers (1 to 9)
console.log("Print Even Numbers (1 to 9)");
//Method 1:
console.log("Method 1:");
let f = 1;
while (f <= 9) {
    console.log(f);
    f += 2;
}

//Method 2: Using if
console.log("Method 2 (using if):");

let d = 1;

while (d <= 10) {

    if (d % 2 !== 0) {
        console.log(d);
    }

    d++;
}

//4.Print Multiplication Table of 5
console.log("Print Multiplication Table of 5");
let g = 1;
while (g <= 10) {
    console.log("5 X", g, "=", (5*g));
    g++;
}
//for Loop condtional statement.

//Printing Numbers using for loop.

//1.Print numbers in Ascending orders (1-10).
console.log("Print numbers in Ascending orders (1-10)");

for (let i=1; i<=10; i++) {
    console.log(i);
}

//2.Print numbers in descending orders (10-1).
console.log("Print numbers in Desecending orders (10-1)");

for (let j=10; j>=1; j--) {
    console.log(j);
}

//3.Print even numbers.

//Method 1
console.log("Method 1: Print even numbers (1-20)");
for (let k=2; k<=20; k += 2) {
    console.log(k);
}

//Method 2 - (Using if)
console.log("Method 2: Print even numbers (1-20)");
for (let m=1; m<=20; m++) {
    if (m % 2 == 0) {
    console.log(m);
    }
}


//4.Print odd numbers.

//Method 1
console.log("Method 1: Print odd numbers (1-20)");
for (let l=1; l<=20; l+=2) {
    console.log(l);
}

//Method 2 - (Using if)
console.log("Method 2: Print odd numbers (1-20)");
for (let n=1; n<=20; n++) {
    if (n % 2 !== 0) {
    console.log(n); 
}
}

//Multiplication 

// 1.Table of 5
console.log("Table of 5");
for (let q = 1; q <= 10; q++) {
    console.log("5 x " + q + " = " + (5 * q));
}

//QA Examples

//1. Repeat Login Test 5 Times
for (let a = 1; a <= 5; a++) {
    console.log("Executing Login Test " + a);
}

//2. Validate 10 Products
for (let b = 1; b <= 10; b++) {
    console.log("Validating Product " + b);
}

//3. Execute Test Cases
for (let c = 1; c <= 3; c++) {
    console.log("Running Test Case " + c);
}

//4.Print whether each result is even or odd for mulitples of 3

const num = 3;
for (let d = 1; d <= 10; d++) {
    let result = num * d;

    if (result % 2 === 0) {
        console.log("3 X", d, "=", (3*d), "where", `${result} is Even`);
    } else {
        console.log("3 X", d, "=", (3*d), "where",`${result} is Odd`);
    }
}
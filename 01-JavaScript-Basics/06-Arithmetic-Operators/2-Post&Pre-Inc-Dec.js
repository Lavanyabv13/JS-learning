//Pre & Post Increment/Decrement

//Pre Increment (++x)
let a = 5;
console.log("Pre Increment:", ++a);
console.log("Value of a:", a); 
//Output:
// Pre Increment: 6
//    Value of a: 6

//Post-Increment (x++)
let b=5;
console.log("Post Increment:", b++);
console.log("Value of b:", b); 
//Output:
//Post Increment: 5
//    Value of b: 6

//Pre-Decrement (--x)
let c=5;
console.log("Pre Decrement:", --c);
console.log("Value of c:", c); 
//Output:
//Pre Decrement: 4
//    Value of c: 4

// Post-Decrement (x--)
let d=5;
console.log("Post Decrement:", d--);
console.log("Value of d:", d); 
//Output:
//Post Decrement: 5
//    Value of d: 4

//QA Examples

//1. Multiple Increment Example

let count = 1;
console.log(count++); // 1
console.log(count++); // 2
console.log(count);   // 3

//2. Loop Counter Example

console.log("Executing Test Cases");

for (let i = 1; i <= 5; i++) {
    console.log("Executing Test Case:", i);
}
//Output:
//Executing Test Cases
//Executing Test Case: 1
//Executing Test Case: 2
//Executing Test Case: 3
//Executing Test Case: 4
//Executing Test Case: 5

//3. Retry Counter Example

console.log("Retry Login");

let attempt = 1;

while (attempt <= 3) {
    console.log("Login Attempt:", attempt);
    attempt++;
}

/*Output:
Retry Login
Login Attempt: 1
Login Attempt: 2
Login Attempt: 3 */

//4. Countdown Example
console.log("Countdown");

let seconds = 5;

while (seconds > 0) {
    console.log(seconds);
    seconds--;
}
console.log("Done!");

/*Output:
Countdown
5
4
3
2
1
Done!  */

//5. Pagination
console.log("Checking Pages");

let page = 10;
while (page>=0) {
    console.log("Checking page:", page);
    page--;
}

/*
Checking Pages
Checking page: 10
Checking page: 9
Checking page: 8
Checking page: 7
Checking page: 6
Checking page: 5
Checking page: 4
Checking page: 3
Checking page: 2
Checking page: 1
Checking page: 0    */


// Scope Chain & Hoisting

//  Scope Chain 

const appName = "Shopping App";

function dashboard() {

    let role = "QA";

    function profile() {

        console.log(appName);
        console.log(role);

    }

    profile();

}

dashboard();

//Hoisting

//1.var Hoisting 

console.log(a);

var a = 10;



// 2. let Hoisting 

// Uncomment to observe ReferenceError
// console.log(b);
// let b = 20;

// 3. const Hoisting 

// Uncomment to observe ReferenceError
// console.log(c);
// const c = 30;

//4. Function Declaration 
greet();

function greet() {
    console.log("Hello");
}

// 5. Arrow Function 

// Uncomment to observe ReferenceError
// hello();
const hello = () => {
    console.log("Welcome");
};
hello();

//6. var vs let 

if (true) {
    var x = 100;
}

console.log(x); // var ignores the {}

if (true) {
    let y = 200;
    console.log(y);
}

// console.log(y); >>>> let respects the {}

//7. const

const baseURL = "https://demo.com";

console.log(baseURL);

//8. let 
let retryCount = 0;
retryCount++;
retryCount++;
console.log(retryCount);
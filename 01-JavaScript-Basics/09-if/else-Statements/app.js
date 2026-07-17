//if/else Statements

//**********if Statement*************

//Example:1, When condition is true
let ageofA = 30;
if(ageofA>=21) {
    console.log("Valid age for approval");
}
//Output: Valid age for approval

//Example:1, When condition is false
let ageofB = 15;
if(ageofB>=21) {
    console.log("Valid age for approval");
}
//Output: No Output

//**********if...else*************

//Example:1, When 1st condition is true
let marks1 = 50;
if(marks1>=45) {
    console.log("Pass");
} else {
    console.log("fail");
}
//Output: Pass

//Example:2, When 1st condition is false
let marks2 = 30;
if(marks2>=45) {
    console.log("Pass");
} else {
    console.log("Fail");
}
//Output: Fail

//**********else if*************

//Example:1,
let score = 70;
if(score>=90) {
    console.log("Grade A");
} 
else if (score>=85) {
    console.log("Grade B");
}
else if (score>=60) {
    console.log("Grade c");
}
else {
    console.log("Fail");   
}
 
//**********Nested if*************

//Example 1: 

let isIDValid = true;
let ispwMatched = false;

if(isIDValid) {
    if(isIDValid && ispwMatched) {
        console.log("Valid User");
    }
    else {
        console.log("Invalid user");
    }
}


/*
PRACTICE ON BELOW EXAMPLES


// Example 1 - if

let age = 20;

if (age >= 18) {
    console.log("Eligible to Vote");
}

// ----------------------------

// Example 2 - if...else

let marks = 30;

if (marks >= 35) {
    console.log("Pass");
} else {
    console.log("Fail");
}

// ----------------------------

// Example 3 - else if

let score = 82;

if (score >= 90) {
    console.log("Grade A");
}
else if (score >= 75) {
    console.log("Grade B");
}
else if (score >= 50) {
    console.log("Grade C");
}
else {
    console.log("Fail");
}

// ----------------------------

// Example 4 - Nested if

let isLoggedIn = true;
let isAdmin = true;

if (isLoggedIn) {

    if (isAdmin) {
        console.log("Welcome Admin");
    }

}

// ----------------------------

// Example 5 - Login Validation

let usernameCorrect = true;
let passwordCorrect = false;

if (usernameCorrect && passwordCorrect) {
    console.log("Login Successful");
} else {
    console.log("Login Failed");
}

// ----------------------------

// Example 6 - API Validation

let statusCode = 200;

if (statusCode === 200) {
    console.log("API Test Passed");
} else {
    console.log("API Test Failed");
}

// ----------------------------

// Example 7 - Discount Eligibility

let isMember = true;
let purchaseAmount = 1500;

if (isMember && purchaseAmount >= 1000) {
    console.log("Discount Applied");
} else {
    console.log("Discount Not Applicable");
}

// ----------------------------

// Example 8 - User Role Validation

let loggedIn = true;
let role = "Admin";

if (loggedIn) {

    if (role === "Admin") {
        console.log("Open Admin Dashboard");
    } else {
        console.log("Open User Dashboard");
    }

} */

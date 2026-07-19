//Mini Login Validation:

let userName ="admin";
let passWord ="admin13";

//use if...else statement

if (userName === "admin") {
    if (passWord === "admin13") {
    console.log("Login Successful");
    }
    else {
    console.log("Invalid Password");
    }
}
else {
console.log("Username is Invalid");
}


//use else if statement

if (userName === "admin" && passWord === "admin123") {
console.log("Login Successful");
}
else if (userName === "admin" && passWord === "123456") {
    console.log("Invalid Password");
}
else if (userName === "user" && passWord === "admin123") {
    console.log("Invalid Username");
}
else if (userName === "user" && passWord === "123456") {
console.log("Login Failed");
}
else {
    console.log("Please enter the right credentials")
}
/*Username validation is important because it verifies that the user exists before checking the password.
This avoids unnecessary password validation for invalid usernames and improves security and efficiency.

We validate the username first to confirm the user exists. Only then do we validate the password.
This improves security, avoids unnecessary password checks, and makes the authentication process more efficient.*/
//switch_Statement

/*Syntax:
switch(expression) {

    case Value1:
    //code
    break;

    case Value2:
    //code
    break;

    default:
    //code
} */

//Example 1: When the expression value matches the case value
//Browser Selection:

let browser = "Edge";

switch(browser) {

    case "Chrome":
    console.log("Launching Chrome");
    break;

    case "Firefox":
    console.log("Launching Firefox");
    break;

    case "Edge":
    console.log("Launching Edge");
    break;

    default:
    console.log("Browser unsupported");
}
//Output: Launching Edge

//Example 2: When the expression value doesn't matches the case value
//Handeling days:

let day = 0;
switch(day) {
    case 1:
        console.log("Working day on Monday");
        break;

    case 2:
        console.log("Working day on Tuesday");
        break;

    case 3:
        console.log("Working day on Wednesday");
        break;

    default:
        console.log("No days are matched");
}
//Output: No days are matched


//Example 2: When the expression value  matches but no "break" statements
//Payment Method:

let paymentBy = "card";
switch(paymentBy) {
    case "UPI":
        console.log("Pay by UPI");

    case "card":
        console.log("Pay by card");

    case "cash":
        console.log("Pay by cash");
        
    default:
        console.log("No pay option found");
}
/*Output: Pay by card
Pay by cash
No pay option found */


//---------------------------------------------------------------------------------------------

//QA examples

//1.API status code handeling

let statusCode = 404;

switch (statusCode) {

    case 200:
        console.log("API Passed");
        break;

    case 201:
        console.log("Resource Created");
        break;

    case 404:
        console.log("Resource Not Found");
        break;

    case 500:
        console.log("Internal Server Error");
        break;

    default:
        console.log("Unknown Status Code");
}
//output: Resource Not Found



//2.User role validation

let role = "Admin";

switch (role) {

    case "Admin":
        console.log("Open Admin Dashboard");
        break;

    case "Manager":
        console.log("Open Manager Dashboard");
        break;

    case "User":
        console.log("Open User Dashboard");
        break;

    default:
        console.log("Invalid Role");
}
//Output: Open Admin Dashboard



//3.Environment Selection
 
let environment = "QA";

switch (environment) {

    case "QA":
        console.log("Connecting to QA Environment");
        break;

    case "UAT":
        console.log("Connecting to UAT Environment");
        break;

    case "PROD":
        console.log("Connecting to Production Environment");
        break;

    default:
        console.log("Invalid Environment");
}

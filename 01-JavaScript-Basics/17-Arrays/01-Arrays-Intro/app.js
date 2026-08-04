// Arrays

//1. Creating Arrays
const browsers = ["Chrome", "Edge", "Firefox"];
console.log(browsers);
// [ 'Chrome', 'Edge', 'Firefox' ]

const fruits = ["Apple", "Banana"];
console.log(fruits);
// [ 'Apple', 'Banana' ]

//2. Empty array
const users = [];
console.log(users);
//[]

//3. Accessing Elements

//Access within avaiable index or elements
console.log(browsers[0]); //Chrome
console.log(browsers[1]); //Edge
console.log(browsers[2]); //Firefox

//Accessing when index or elements doen't exist
console.log(browsers[5]); //undefined

//Accessing last element dynamically
console.log(browsers[browsers.length-1]);  //Firefox

//4. Updating Elements

//Updating 1st elements
browsers[0] = "Google";
console.log(browsers);
//[ 'Google', 'Edge', 'Firefox' ]

//Updating 2nd element
fruits[1] = "Orange";
console.log(fruits);
// [ 'Apple', 'Orange' ]

//Updating, if Index doesn't exist
fruits[4] = "Grapes";
console.log(fruits);
//[ 'Apple', 'Orange', <2 empty items>, 'Grapes' ]

//Update last element dynamically

browsers[browsers.length-1] = "Safari";
console.log(browsers);
//[ 'Google', 'Edge', 'Safari' ]

//5. Array Length Property

//To find array length
console.log(browsers.length); //3
console.log(fruits.length); //5

//To find Empty array length
console.log(users.length); //0

//To find length of last element dynamically
console.log(browsers.length-1); //2

//Access last element using length property
console.log(fruits[fruits.length-1]); //Grapes

//Using array.length in loops
for (let i = 0; i < browsers.length; i++) {
console.log(browsers[i]);
}
/*
Google
Edge
Safari
*/

//Add elements and Print the length
console.log(browsers); //[ 'Google', 'Edge', 'Safari' ]
browsers.push("Chrome");
console.log(browsers); // [ 'Google', 'Edge', 'Safari', 'Chrome' ]
console.log(browsers.length); //4

//6. Iteration Arrays

//Using for loop
for (let i = 0; i < browsers.length; i++) {
console.log(browsers[i]);
}
/*Google
Edge
Safari
Chrome*/

//using for...of
for(const newBrowsers of browsers) { //declaring a new variable named newBrowsers, which hides the array named browsers.
   console.log(newBrowsers);
}
/*Google
Edge
Safari
Chrome*/

// QA Example:

// Multiple Users Testing
const usersOfLETRS = [ "admin", "District users", "Campus users", "Teachers"];
for(user of usersOfLETRS){
    console.log("Testing with user:", user);
}
/*Testing with user: admin
Testing with user: District users
Testing with user: Campus users
Testing with user: Teachers */

//Dropdown Values
const countriesName = ["India", "USA", "Canada", "Australia"];
for(country of countriesName) {
    console.log("Living in country:", country);
}
/*Living in country: India
Living in country: USA
Living in country: Canada
Living in country: Australia */





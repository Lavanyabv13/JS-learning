//Arrays Methods

//-------------- 1. push() -----------------

//Example 1 – Add One Element
const browsers = ["Chrome", "Firefox", "Edge"];
browsers.push("Opera");
console.log(browsers); //Output: [ 'Chrome', 'Firefox', 'Edge', 'Opera' ]

//Example 2 – Add Multiple Elements
const browsers1 = ["Chrome", "Firefox", "Edge"];
browsers1.push("Opera", "Safari");
console.log(browsers1); //Output: [ 'Chrome', 'Firefox', 'Edge', 'Opera', 'Safari' ]

//Example 3 – Store the Return Value
const browsers2 = ["Chrome", "Firefox", "Edge"];
const newLength = browsers2.push("Opera");
console.log(browsers2); //Output: [ 'Chrome', 'Firefox', 'Edge', 'Opera' ]
console.log(newLength); //Output: 4

//Example 4 - Empty Array
const browsers3 = [];
const newLength1 = browsers3.push("Chrome");
console.log(browsers3); //Output: [ 'Chrome' ]

//-------------- 2. pop() -----------------

//Example 1 – Remove Last Element
const fruits = ["Apple", "Banana", "Mango"];
fruits.pop();
console.log(fruits); //Output: [ 'Apple', 'Banana' ]

//Example 2 – Store the Return Value
const fruits1 = ["Apple", "Banana", "Mango"];
const removedElement = fruits1.pop();
console.log(fruits1); //Output: [ 'Apple', 'Banana' ]
console.log(removedElement); //Output: Mango

//Example 3 – Empty Array
const fruits2 = [];
const removedElement1 = fruits2.pop();
console.log(fruits2); //Output: []
console.log(removedElement1); //Output: undefined

//Example 4 – Multiple pop() Calls
const fruits3 = ["Apple", "Banana", "Mango"];
fruits3.pop();
fruits3.pop();
console.log(fruits3); //Output: [ 'Apple' ]

//-------------- 3. shift() -----------------

//Example 1 – Remove First Element
const colors = ["Red", "Green", "Blue"];
colors.shift();
console.log(colors); //Output: [ 'Green', 'Blue' ]

//Example 2 – Store the Return Value
const colors1 = ["Red", "Green", "Blue"];
const removedColor = colors1.shift();
console.log(colors1); //Output: [ 'Green', 'Blue' ]
console.log(removedColor); //Output: Red

//Example 3 – Empty Array
const colors2 = [];
const removedColor1 = colors2.shift();
console.log(colors2); //Output: []
console.log(removedColor1); //Output: undefined

//Example 4 – Multiple shift() Calls
const colors3 = ["Red", "Green", "Blue"];
colors3.shift();
colors3.shift();
console.log(colors3); //Output: [ 'Blue' ] 

//-------------- 4. unshift() -----------------

//Example 1 – Add One Element
const animals = ["Dog", "Cat"];
animals.unshift("Elephant");
console.log(animals); //Output: [ 'Elephant', 'Dog', 'Cat' ]

//Example 2 – Add Multiple Elements
const animals1 = ["Dog", "Cat"];
animals1.unshift("Elephant", "Lion");
console.log(animals1); //Output: [ 'Elephant', 'Lion', 'Dog', 'Cat' ]

//Example 3 – Store the Return Value
const animals2 = ["Dog", "Cat"];
const newLength2 = animals2.unshift("Elephant");
console.log(animals2); //Output: [ 'Elephant', 'Dog', 'Cat' ]
console.log(newLength2); //Output: 3

//Example 4 – Empty Array
const animals3 = [];
const newLength3 = animals3.unshift("Dog");
console.log(animals3); //Output: [ 'Dog' ]

//Example 5 – Multiple unshift() Calls
const animals4 = ["Dog", "Cat"];
animals4.unshift("Elephant");
animals4.unshift("Lion");
console.log(animals4); //Output: [ 'Lion', 'Elephant', 'Dog', 'Cat' ]

//Example 6 – unshift() with Different Data Types
const mixedArray = [1, "Hello", true];
mixedArray.unshift(3.14);
console.log(mixedArray); //Output: [ 3.14, 1, 'Hello', true ]

//Example 7 – unshift() with Nested Arrays
const nestedArray = [[1, 2], [3, 4]];
nestedArray.unshift([5, 6]);
console.log(nestedArray); //Output: [ [ 5, 6 ], [ 1, 2 ], [ 3, 4 ] ]

//-------------- 5. Splice() -----------------

//Example 1 – Remove Elements
const numbers = [1, 2, 3, 4, 5];
numbers.splice(2, 2); // Removes 2 elements starting from index 2
console.log(numbers); //Output: [ 1, 2, 5 ]

//Example 2 – Add Elements
const numbers1 = [1, 2, 5];
numbers1.splice(2, 0, 3, 4); // Adds 3 and 4 at index 2
console.log(numbers1); //Output: [ 1, 2, 3, 4, 5 ]

//Example 3 – Replace Elements
const numbers2 = [1, 2, 3, 4, 5];
numbers2.splice(1, 2, 6, 7); // Replaces 2 elements starting from index 1 with 6 and 7
console.log(numbers2); //Output: [ 1, 6, 7, 4, 5 ]

//Example 4 – Store the Removed Elements
const numbers3 = [1, 2, 3, 4, 5];
const removedElements = numbers3.splice(2, 2);
console.log(numbers3); //Output: [ 1, 2, 5 ]
console.log(removedElements); //Output: [ 3, 4 ]

//Example 5 – Empty Array
const numbers4 = [];
numbers4.splice(0, 0, 1, 2, 3);
console.log(numbers4); //Output: [ 1, 2, 3 ]

//Example 6 – Multiple splice() Calls
const numbers5 = [1, 2, 3, 4, 5];
numbers5.splice(1, 2); // Removes 2 elements starting from index 1
numbers5.splice(2, 0, 6, 7); // Adds 6 and 7 at index 2
console.log(numbers5); //Output: [ 1, 4, 6, 7, 5 ]

//Example 7 – splice() with Different Data Types
const mixedArray1 = [1, "Hello", true];
mixedArray1.splice(1, 1, 3.14);
console.log(mixedArray1); //Output: [ 1, 3.14, true ]

//-------------- 6. Slice() -----------------

//Example 1 – Extract Elements
const letters = ["A", "B", "C", "D", "E"];
const slicedLetters = letters.slice(1, 4); // Extracts elements from index 1 to 3
console.log(slicedLetters); //Output: [ 'B', 'C', 'D' ] 

//Example 2 – Extract Elements with Negative Index
const letters1 = ["A", "B", "C", "D", "E"];
const slicedLetters1 = letters1.slice(-3, -1); // Extracts elements from index -3 to -2
console.log(slicedLetters1); //Output: [ 'C', 'D' ]

//Example 3 – Extract Elements from Start
const letters2 = ["A", "B", "C", "D", "E"];
const slicedLetters2 = letters2.slice(0, 3); // Extracts elements from index 0 to 2
console.log(slicedLetters2); //Output: [ 'A', 'B', 'C' ]

//Example 4 – Extract Elements to End
const letters3 = ["A", "B", "C", "D", "E"];
const slicedLetters3 = letters3.slice(2);
console.log(slicedLetters3); //Output: [ 'C', 'D', 'E' ]

//Example 5 – Store the Extracted Elements
const letters4 = ["A", "B", "C", "D", "E"];
const slicedLetters4 = letters4.slice(1, 4);
console.log(letters4); //Output: [ 'A', 'B', 'C', 'D', 'E' ]
console.log(slicedLetters4); //Output: [ 'B', 'C', 'D' ]

//Example 6 – Empty Array
const letters5 = [];
const slicedLetters5 = letters5.slice(0, 3);
console.log(slicedLetters5); //Output: []

//Example 7 – Multiple slice() Calls
const letters6 = ["A", "B", "C", "D", "E"];
const slicedLetters6 = letters6.slice(1, 4);
const slicedLetters7 = letters6.slice(2);
console.log(slicedLetters6); //Output: [ 'B', 'C', 'D' ]
console.log(slicedLetters7); //Output: [ 'C', 'D', 'E' ]

//Example 8 – slice() with Different Data Types
const mixedArray2 = [1, "Hello", true];
const slicedMixedArray = mixedArray2.slice(1, 3);
console.log(slicedMixedArray); //Output: [ 'Hello', true ]

//-------------- 7. Concat() -----------------

//Example 1 – Concatenate Two Arrays
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const concatenatedArray = array1.concat(array2);
console.log(concatenatedArray); //Output: [ 1, 2, 3, 4, 5, 6 ]

//Example 2 – Concatenate Multiple Arrays
const array3 = [1, 2];
const array4 = [3, 4];
const array5 = [5, 6];
const concatenatedArray1 = array3.concat(array4, array5);
console.log(concatenatedArray1); //Output: [ 1, 2, 3, 4, 5, 6 ]

//Example 3 – Concatenate with Non-Array Values
const array6 = [1, 2];
const concatenatedArray2 = array6.concat(3, 4);
console.log(concatenatedArray2); //Output: [ 1, 2, 3, 4 ]

//Example 4 – Concatenate Nested Arrays
const array7 = [1, 2];
const array8 = [[3, 4], [5, 6]];
const concatenatedArray3 = array7.concat(array8);
console.log(concatenatedArray3); //Output: [ 1, 2, [ 3, 4 ], [ 5, 6 ] ]

//Example 5 – Store the Concatenated Array
const array9 = [1, 2];
const array10 = [3, 4];
const concatenatedArray4 = array9.concat(array10);
console.log(array9); //Output: [ 1, 2 ]
console.log(array10); //Output: [ 3, 4 ]
console.log(concatenatedArray4); //Output: [ 1, 2, 3, 4 ]

//Example 6 – Empty Array
const array11 = [];
const array12 = [1, 2, 3];
const concatenatedArray5 = array11.concat(array12);
console.log(concatenatedArray5); //Output: [ 1, 2, 3 ]

//Example 7 – Multiple concat() Calls
const array13 = [1];
const array14 = [2];
const array15 = [3];
const concatenatedArray6 = array13.concat(array14).concat(array15);
console.log(concatenatedArray6); //Output: [ 1, 2, 3 ]

//Example 8 – concat() with Different Data Types
const mixedArray3 = [1, "Hello"];
const concatenatedMixedArray = mixedArray3.concat(true, 3.14);
console.log(concatenatedMixedArray); //Output: [ 1, 'Hello', true, 3.14 ]


//-------------- 8. Join() -----------------

//Example 1 – Join Elements with Default Separator
const words = ["Hello", "World"];
const joinedWords = words.join();
console.log(joinedWords); //Output: Hello,World

//Example 2 – Join Elements with Space Separator
const words1 = ["Hello", "World"];
const joinedWords1 = words1.join(" ");
console.log(joinedWords1); //Output: Hello World

//Example 3 – Join Elements with Empty Separator
const words2 = ["Hello", "World"];
const joinedWords2 = words2.join("");
console.log(joinedWords2); //Output: HelloWorld

//Example 4 – Join Elements with "-" Hyphen Separator
const words3 = ["Hello", "World"];
const joinedWords3 = words3.join("-");
console.log(joinedWords3); //Output: Hello-World

//Example 5 – Join Elements with "|" bar Separator
const words4 = ["Hello", "World"];
const joinedWords4 = words4.join("|");
console.log(joinedWords4); //Output: Hello|World


//QA Examples

//1. Add Urls
const urls = ["www.google.com"];
urls.push("www.github.com");
console.log(urls); //Output: [ 'www.google.com', 'www.github.com' ]

//2. Remove Last products
const products = ["Iron Box", "Washing Machine", "Refrigerator"];
products.pop();
console.log(products); //Output: [ 'Iron Box', 'Washing Machine' ]

//3. Remove First Element
const countries = ["India", "USA", "UK"];
countries.shift();
console.log(countries); //Output: [ 'USA', 'UK' ]

//4. Add First Element
const cities = ["New York", "Los Angeles"];
cities.unshift("Chicago");
console.log(cities); //Output: [ 'Chicago', 'New York', 'Los Angeles' ]

//5. Remove & Add Elements
const users = ["Alice", "Bob", "Charlie", "David"];
users.splice(1, 2, "Eve", "Frank"); // Removes 2 elements starting from index 1 and adds "Eve" and "Frank"
console.log(users); //Output: [ 'Alice', 'Eve', 'Frank', 'David' ]

//6. Extract Elements
const numbers6 = [10, 20, 30, 40, 50];
const extractedNumbers = numbers6.slice(1, 4); // Extracts elements from index 1 to 3
console.log(extractedNumbers); //Output: [ 20, 30, 40 ]

//7. Concatenate Arrays
const chrometests = [ "Login", "Search", "Logout"];
const firefoxtests = ["Login", "Add to Cart", "Checkout"];
const alltests = chrometests.concat(firefoxtests);
console.log(alltests); //Output: [ 'Login', 'Search', 'Logout', 'Login', 'Add to Cart', 'Checkout' ]

//8. join() Elements
const fruits4 = ["Apple", "Banana", "Mango"];
const joinedFruits = fruits4.join(", ");
const joinedFruits1 = fruits4.join(" - ");
const joinedFruits2 = fruits4.join("|");
const joinedFruits3 = fruits4.join("");
const joinedFruits4 = fruits4.join(" ");
console.log(joinedFruits); //Output: Apple, Banana, Mango
console.log(joinedFruits1); //Output: Apple - Banana - Mango
console.log(joinedFruits2); //Output: Apple|Banana|Mango
console.log(joinedFruits3); //Output: AppleBananaMango
console.log(joinedFruits4); //Output: Apple Banana Mango






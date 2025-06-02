//Conditional statements
// Example of an if-else statement
let age = 20;
if (age >= 18) {
    console.log("You are eligible to vote.");
} else {
    console.log("You are a minor.");
}
// conditional operators
let num = (5 > 3) ? "Five is greater than three." : "Three is greater than five.";
console.log(num);

//Array
let fruits = ["Apple", "Banana", "Cherry"];
// Accessing elements in an array
console.log(fruits[0]); // Output: Apple
console.log(fruits[1]); // Output: Banana
console.log(fruits[2]); // Output: Cherry

// Adding an element to the array   
fruits.push("Date");
console.log(fruits); // Output: ["Apple", "Banana", "Cherry", "Date"]   
// Removing the last element from the array
fruits.pop();
console.log(fruits); // Output: ["Apple", "Banana", "Cherry"]
// Looping through an array
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
// Using forEach to loop through an array
fruits.forEach(function(fruit) {
    console.log(fruit);
});
// Using map to create a new array with modified elements
let upperCaseFruits = fruits.map(function(fruit) {
    return fruit.toUpperCase();
});
console.log(upperCaseFruits); // Output: ["APPLE", "BANANA", "CHERRY"]


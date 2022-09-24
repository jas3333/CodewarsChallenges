// Create a function that gives a personalized greeting...
// Function takes two parameters: name, owner
const greet = (name, owner) => name === owner ? "Hello boss" : "Hello guest";

console.log(greet("Ollie", "Ollie"));
console.log(greet("Theo", "Ollie"));

"use strict";
const friends = ["Michael", "Steven", "Jay"];
console.log(friends);

// push method
friends.push("Antu");
console.log(friends);

// unshift method
friends.unshift("John");
console.log(friends);

// pop method
const popped = friends.pop();
console.log(popped);
console.log(friends);

// shift method
const shifted = friends.shift();
console.log(shifted);
console.log(friends);

// indexOf method
console.log(friends.indexOf("Steven"));

// includes method
console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));

if (friends.includes("Steven")) {
    console.log(`You have a friend called Steven`);
}

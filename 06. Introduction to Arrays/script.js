"use strict";
const friends = ["Michael", "Steven", "Bob"];
console.log(friends);

// Accessing array value
console.log(friends[0]);
console.log(friends[2]);

// Array property
console.log(friends.length);
console.log(friends[friends.length - 1]);

// Mutating array value
friends[2] = "Jay";
console.log(friends);

const firstName = "Ephraim";
const eph = [firstName, "S", 2037 - 1988, "Web-Dev", friends];
console.log(eph);
console.log(eph.length);

// Exercise
const calcAge = function (birthYear) {
    return 2037 - birthYear;
};

const years = [1990, 1967, 2002, 2010, 2018];

// console.log(calcAge(years[0]));
// console.log(calcAge(years[1]));
// console.log(calcAge(years[years.length - 1]));

const ages = [
    calcAge(years[0]),
    calcAge(years[1]),
    calcAge(years[years.length - 1]),
];
console.log(ages);

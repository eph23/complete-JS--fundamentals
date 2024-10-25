"use strict";

// Function Declaration
function calcAgeDeclaration(birthYear) {
    return 2037 - birthYear;
}

const ageDeclaration = calcAgeDeclaration(1988);
console.log("Age from Function Declaration", ageDeclaration);

// Function Expression
const calcAgeExpression = function (birthYear) {
    return 2037 - birthYear;
};

const ageExpression = calcAgeExpression(1988);
console.log("Age from Function Expression", ageExpression);

// Arrow Function
// Simple form of arrow function implicit

const calcAgeArrow = (birthYear) => 2037 - birthYear;

const ageArrow = calcAgeArrow(1988);
console.log("Age from Arrow Function", ageArrow);

// Arrow function
const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;

    return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1988, "Ephraim"));
console.log(yearsUntilRetirement(1980, "Bob"));

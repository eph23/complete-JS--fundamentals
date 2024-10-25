"use strict";
const calcAge = function (birthYear) {
    return 2037 - birthYear;
};

const YearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        return `${firstName} will retires in ${retirement}-years`;
    } else {
        return `${firstName} has already retired`;
    }
};

console.log(YearsUntilRetirement(1988, "Ephraim"));
console.log(YearsUntilRetirement(1970, "Mike"));

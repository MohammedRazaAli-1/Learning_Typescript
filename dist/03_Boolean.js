"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//1) 
let bool1 = true;
console.log(bool1);
//2) 
let bool2;
bool2 = false;
console.log(bool2);
//3)
let bool3 = true;
console.log(bool3);
//4)
function booleanCondition(b1, b2) {
    if (b1 = b2 = false) {
        return false;
    }
    else {
        return true;
    }
}
console.log(booleanCondition(true, false));
//5) 
let myarr = [true, false, true];
console.log(myarr);
// problem1 : Check if number is even or odd
let mynumber = 15645849111;
if (mynumber % 2 == 0) {
    console.log(true);
}
else {
    console.log(false);
}
// check number is -ve , +ve or zero 
function checkNumber(num) {
    if (num > 0) {
        return true;
    }
    else if (num < 0) {
        return false;
    }
    else {
        return 0;
    }
}
let mycheck = checkNumber(-2198);
if (mycheck == true) {
    console.log("number is +ve");
}
else if (mycheck == false) {
    console.log("number is -ve ");
}
else if (mycheck == 0) {
    console.log("number is 0");
}
// Find largest of 3 numbers
function largestOfThree(n1, n2, n3) {
    if (n1 >= n2 && n1 >= n3) {
        return n1;
    }
    else if (n2 >= n1 && n2 >= n3) {
        return n2;
    }
    else {
        return n3;
    }
}
let large = largestOfThree(21, 22, 33);
console.log(large);
//Check if year is leap year
function checkYearLeap(year) {
    if (year % 400 == 0) {
        return true;
    }
    else {
        return false;
    }
}
let thisYear = checkYearLeap(2027);
if (thisYear == true) {
    console.log("this year is leap year ");
}
else if (thisYear == false) {
    console.log("this year is not leap year");
}
//Check if a number is prime
function checkPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
}
console.log(checkPrime(83));
//  Check if string contains a number
function checkStrNumber(str) {
    let p4numcheck = /\d/;
    if (p4numcheck.test(str) == true) {
        return true;
    }
    else {
        return false;
    }
}
let check = checkStrNumber("hello raza");
console.log(`it is ${check} that string contains number `);
//Count uppercase letters in string
function countUpper(str) {
    let split = str.split("");
    let pattern = /[A-Z]/;
    let count = 0;
    for (let i = 0; i < split.length; i++) {
        if (split[i] >= 'A' && split[i] <= 'Z') {
            count = count + 1;
        }
    }
    return count;
}
console.log(countUpper("asfDeFhHIjKLL"));
// Remove duplicate characters
function RemoveDuplicate(str) {
    let newstr = [];
    let splitted = str.split("");
    for (let i = 0; i < splitted.length; i++) {
        if (!(newstr.includes(splitted[i]))) {
            newstr.push(splitted[i]);
        }
    }
    let newstr1 = newstr.join("");
    return newstr1;
}
console.log(RemoveDuplicate("programming"));
// Check if string is palindrome (without using reverse)
function checkPalindrome(str) {
    let newstr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newstr += str[i];
    }
    if (str === newstr) {
        return true;
    }
    else {
        return false;
    }
}
console.log(checkPalindrome("abba"));
//Find first non-repeating character
//"aabbcde" → "c"
function firstNonRepeating(str) {
    for (let char of str) {
        if (str.indexOf(char) === str.lastIndexOf(char)) {
            return char;
        }
    }
    return "";
}
console.log(firstNonRepeating("abcdeabccd"));

"use strict";
// ways to declare number data type to variable 
Object.defineProperty(exports, "__esModule", { value: true });
// 1) explicit 
let number1 = 10;
console.log(number1);
//2) type inference ( gets type auto. based on value assigned )
let number2 = 20;
console.log(number2);
let number3;
number3 = 30;
console.log(number3);
//3) declare firs assign later : 
let number4;
number4 = 40;
console.log(number4);
//4) number in function : 
function addTwoNum(n1, n2) {
    return (n1 + n2);
}
console.log(addTwoNum(5, 10));
// 5) number in array : 
let myNumarray = [1, 2, 3, 4, 5];
console.log(myNumarray);
// important : All numbers are number type , Ex:
let number6 = 10.5;
console.log(number6);
let number7 = -65;
console.log(number7);
// special value : 
let numberNaN = NaN;
console.log(numberNaN);
let numberInfinity = Infinity;
console.log(numberInfinity);
/*Question 1
Create:
num1 = 10
num2 = 20
Print sum */
let num1 = 10;
let num2 = 20;
console.log(`addition of ${num1} + ${num2} is ${num1 + num2}`);
/*
Question 2
Create:
marks = 85
Increase it by 5 and print */
let marks = 85;
marks += 5;
console.log(marks);
/*Question 3
Create function:
addNumbers(a, b)
Return sum */
function addNumbers(a, b) {
    return (a + b);
}
console.log(addNumbers(17, 18));
/* Question 4
Find square of a number
Example:
Input: 5
Output: 25 */
let numberforSquare = 7;
let square = numberforSquare * numberforSquare;
console.log(square);
/*
Problem 5
Convert minutes to seconds
Example:
Input: 5
Output: 300 */
let minutes = 15;
let seconds = minutes * 60;
console.log(seconds);

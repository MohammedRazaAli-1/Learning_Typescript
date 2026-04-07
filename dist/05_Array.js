"use strict";
// in ts we create array with its type 
//ex1)
Object.defineProperty(exports, "__esModule", { value: true });
let array1 = [1, 2, 3, 4, 5];
console.log(array1);
let array2 = ["a", "b", "c", "d"];
console.log(array2);
// typ inference ( takes type according to value assigned)
let array3 = [1, 2, 3, 4];
// array3.push("5") // gives error
array3.push(5); // no error
console.log(array3);
// array of obje in Typescript 
let array4 = [
    { name: "raza", age: 21 },
    { name: "tushar", age: 21 },
    { name: "ali", age: 22 }
];
console.log(array4);
// push in array 
array4.push({ name: "omkar", age: 22 });
console.log(array4);
//pop in array : 
array4.pop();
console.log(array4);
// map on array 
array4.map((value, index) => {
    console.log(` name  : ${value.name} , age ${value.age} at index ${index}`);
});
//filter on array : 
let array5 = array1.reduce((acc, curr) => acc + curr, 0);
console.log(array5);
// includes 
if (array2.includes("a")) {
    console.log(true);
}
//ReadOnly array : 
let array6 = [1, 2, 3];
//array6.push(4)// gives error because we can not modify readonly array 
// union typed array 
let array7 = [1, 2, 3, "a", "b"];
console.log(array7);
let arr = []; // it becomes "any" data type , so becomes buggy array 
//problem 1 : Create array of numbers and add 2 new values using push
let arrayP1 = [1, 2, 3, 4, 5];
arrayP1.push(6);
arrayP1.push(7);
console.log(arrayP1);
// problem 2 : Create array of strings and convert all to uppercase using map
let arrayP2 = ["a", "b", "c", "D"];
let arrayP2Solution = arrayP2.map((value) => value.toUpperCase());
console.log(arrayP2Solution);
// problem 3 : Filter only even numbers from array
let arrayP3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let arrayP3Solution = arrayP3.filter(value => value % 2 === 0);
console.log(arrayP3Solution);
let arrayP4 = [
    { name: "raza", age: 21 },
    { name: "mazhar", age: 33 }
];
console.log(arrayP4);
// problem5 : Find sum of all numbers in array
function sumOfArray(arr) {
    let total = 0;
    arr.filter(value => total += value);
    return total;
}
let arrayP5 = sumOfArray([1, 2, 3, 4, 5, 6, 7, 8]);
console.log(arrayP5);
// problem 6 : Find maximum number
function MaxInArray(arr) {
    let max = 0;
    arr.reduce((prev, curr) => {
        if (prev > max) {
            max = prev;
        }
        if (curr > max) {
            max = curr;
        }
    });
    return max;
}
console.log(MaxInArray([55, 12, 33, 44]));
// problem 7 : Remove duplicates from array
function RemoveDuplicate(arr) {
    let newarr = [];
    for (let i = 0; i < arr.length; i++) {
        if (!(newarr.includes(arr[i]))) {
            newarr.push(arr[i]);
        }
    }
    return newarr;
}
console.log(RemoveDuplicate([1, 2, 3, 4, 5, 4, 3, 1, 1, 6, 4, 7, 9]));
// problem 8 : Find second largest number
function secMaxInArray(arr) {
    let newarr = arr.sort();
    let secHighest = newarr[newarr.length - 2];
    return secHighest;
}
console.log(secMaxInArray([1, 4, 3, 6, 2, 9]));

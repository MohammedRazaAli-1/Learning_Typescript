"use strict";
//  Character Classes: "What" are you looking for
Object.defineProperty(exports, "__esModule", { value: true });
// \d : Matches any digit (0-9).
// \w : Matches any word character (letters, numbers, and underscores).
// \s : Matches any whitespace (spaces, tabs, newlines).
// .  : The wildcard. Matches any single character except a newline.
// [abc] : A custom set. Matches only 'a', 'b', or 'c'.
// [a-z] : A range. Matches any lowercase letter from a to z.
//  Quantifiers: "How many" of them
//  * : Zero or more times.
//  + : One or more times (at least one must be there).
//  ? : Zero or one (makes the character optional).
//  {3}: Exactly three times.
//  {2,5}: Between 2 and 5 times.
//   Anchors: "Where" in the text?
//   ^ : The start of a string or line.
//   $ : The end of a string or line.
//   \b: A word boundary (e.g., the space between words).
// ex1 check any word in string  using / word / 
let str = "hello i am string";
let pattern = /string/;
//test returns true or false 
if (pattern.test(str)) {
    console.log(true);
}
else {
    console.log(false);
}
//match returns an array with full information 
console.log(str.match(pattern));
//ex2) 
let str2 = "System log: critical error detected";
let pattern4str2 = /error/;
console.log(pattern4str2.test(str2));
//ex3) 
let str3 = "I love to write clean code";
let pattern4str3 = /code/;
console.log(pattern4str3.test(str3));
// example of finding number form string 
let str4 = "Agent 007";
let pattern4str4 = /\w\w\w\w\w\s\d\d\d/;
console.log(pattern4str4.test(str4));
console.log(str4.match(pattern4str4));
// Problem 2.1:Write a regex pattern to find the first digit in this string:
// let str = "User ID: 5829"
let str5 = "User ID: 5829";
let pattern4str5 = /\d/;
let arr45 = str5.match(pattern4str5);
console.log(`character ${arr45[0]} is found at index ${arr45.index}`);
//Write a regex pattern to find the first space in this string:
// let str = "Hello World"
let str6 = "Hello World";
let pattern4str6 = /\s/;
let store6 = str6.match(pattern4str6);
console.log(`character ${store6[0]} is found at index ${store6.index}`);
// now  if we have to search full word as long as they are
// example 1234 if /d/ then we get only 1 but if we did /d+/ if will give 1234
let newstr = "hello 12345";
let pattern4newstr = /\d+/;
let arr = newstr.match(pattern4newstr);
console.log(arr);
console.log(`numbers ${arr[0]} is available in string ${arr?.input} at index ${arr?.index}`);
//Write a regex to find the full number 100 in:
// let str = "Progress: 100%"
let newstr2 = "Progress: 100%";
let patternfor2 = /\d+/;
let newstr2arr = newstr2.match(patternfor2);
console.log(`number ${newstr2arr[0]} is found in string ${newstr2arr?.input} at index ${newstr2arr?.index}`);
//Write a regex to find all the letters Error in:
// let str = "Error: System failure"
let newstr3 = "Error: System failure";
let pattern4newstr3 = /\w+/;
let arr4p4 = newstr3.match(pattern4newstr3);
console.log(`word ${arr4p4[0]} found in string ${arr4p4?.input} at index ${arr4p4?.index}`);
// check at start of string use ^ 
// check at end of string  use $
let stringg1 = "100 apple ";
let p4stringg1 = /^\d+/;
let a4stringg1 = stringg1.match(p4stringg1);
// console.log(a4stringg1);
console.log(`number ${a4stringg1[0]} found in string ${a4stringg1?.input} at index ${a4stringg1?.index} `);
let stringg2 = "raza ke mark is 234";
let p4stringg2 = /\d+$/;
let a4stringg2 = stringg2.match(p4stringg2);
console.log(`number ${a4stringg2[0]} found in string ${a4stringg2?.input} at index ${a4stringg2?.index} `);
// Write a regex to find the word Admin only if it is at the start of the string:
// let str = "Admin: Access granted"
let stringg3 = "Admin: Access granted";
let p4stringg3 = /^\w+/;
let a4stringg3 = stringg3.match(p4stringg3);
console.log(`word ${a4stringg3[0]} is found at beginning of string ${a4stringg3?.input} at index ${a4stringg3?.index}`);
// Write a regex to find the word done only if it is at the end of the string:
// let str = "The task is done"
let stringg4 = "The task is done";
let p4stringg4 = /\w+$/;
let a4stringg4 = stringg4.match(p4stringg4);
console.log(` word ${a4stringg4[0]} is present at end of ${a4stringg4?.input} at index ${a4stringg4?.index}`);
// Write a regex to find either the word Pass or the word Fail in this string:
// let str = "Status: Pass"
let stringg5 = "status : fail";
let p4stringg5 = /(pass|fail)$/;
let a4stringg5 = stringg5.match(p4stringg5);
console.log(` word ${a4stringg5[0]} is present at end of ${a4stringg5?.input} at index ${a4stringg5?.index}`);
// Write a regex to match a file extension that is either .jpg or .png at the end of a string:
// let str = "image.png"
let stringg6 = "img .png";
let p4stringg6 = /\.(jpg|png)$/;
let a4stringg6 = stringg6.match(p4stringg6);
console.log(` word ${a4stringg6[0]} is present at end of ${a4stringg6?.input} at index ${a4stringg6?.index}`);
// character set[]
let stringg7 = "Hello world";
let p4stringg7 = /^[hH]/;
let a4stringg7 = stringg7.match(p4stringg7);
console.log(a4stringg7);
console.log(` word ${a4stringg7[0]} is present in  ${a4stringg7?.input} at index ${a4stringg7?.index}`);
//Problem 6.1:Write a regex to find a vowel (a, e, i, o, or u) in the word:
// let str = "apple"
// (Just find the first one for now).
let stringg8 = "Hello world";
let p4stringg8 = /[aeiouAEIOU]/g;
let a4stringg8 = stringg8.match(p4stringg8);
console.log(a4stringg8);
console.log(` word ${a4stringg8} is present in  ${a4stringg8?.input} at index ${a4stringg8?.index}`);
//Write a regex to find any non-digit character 
// (anything that is NOT 0-9) using the [^ ] 
let stringg9 = "100%";
let p4stringg9 = /[^1234567890]/;
let a4stringg9 = stringg9.match(p4stringg9);
console.log(` word ${a4stringg9[0]} is present in  ${a4stringg9?.input} at index ${a4stringg9?.index}`);

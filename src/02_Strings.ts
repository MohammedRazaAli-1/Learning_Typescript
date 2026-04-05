//ways to declare string types : 
//1) 
let string1 : string = "hello"
console.log(string1);


//2) 
let string2  = "hello world "
console.log(string2);


//3) 
let string3 : string
string3 = "hello , my name is TS"
console.log(string3);


//4)
let mystrfunction = (name:string ) :string =>{
    return(`hello ${name}`)
}
console.log(mystrfunction("TypeScript"));

//5)
let mystrarray :string[] = ["a" , "b" , "c" , "d"]
console.log(mystrarray);

console.log(string3.length)
console.log(string3.toUpperCase());
console.log(string3.toLowerCase());
console.log(string3.includes("TS"));
console.log(string3.split("").reverse().join(""));

// accessiblility and mutability : 

console.log(string3[string3.length -2])
string3 = "hello , my name is JS"
console.log(string3[string3.length -2])


/* Problem 1 — Length of String 
Return length of given string

Example:
Input: "Raza"
Output: 4
Task:
Create function:
getLength(str: string): number
 */

function getLength (str : string) : number | string {
    if(str === ""){
        return("can not find length of empty string ")
    }else{
        return (str.length)
    }
}

console.log(getLength("hello"));
console.log(getLength(""));


/* problem 2 : Convert to Uppercase
Convert full string to uppercase
Example:
Input: "hello"
Output: "HELLO"
Task:
toUpper(str: string): string */

function toUpper(str : string):string{
    if(str != ""){
        return str.toUpperCase()
    }else{
        return("enter valid string ")
    }
}

console.log(toUpper("hello"));
console.log(toUpper(""));

/*
Problem 3 — Reverse a String (Important Logic)
Reverse the string

Example:
Input: "hello"
Output: "olleh"
Task:
reverseString(str: string): string
 Hint:
loop from end OR
use built-in methods 
*/

function reverseString1(str : string):string {
    return(str.split("").reverse().join(""))


}
console.log(reverseString1("hello_world"));

function reverseString2(str :string):string{
    let revStr = ""
    for(let i = str.length -1 ; i>=0 ; i--){
        revStr += str[i]

    }
    return revStr
}
console.log(reverseString2("hello_Raza"));

/*  problem : 4 
Count Vowels (Logic Building)
Count vowels (a, e, i, o, u)

Example:
Input: "raza"
Output: 2
Task:
countVowels(str: string): number
 Think:
loop
check each character */

function countVowels(str:string):number | string {
    let count:number = 0 
    if(str !=""){
        for(let i = 0 ; i < str.length; i ++){
            if(str[i] == "a" ||str[i] == "e"  ||str[i] == "i" ||str[i] == "o" ||str[i] == "u"){
                count +=1

            }
             
           
        }return(count)
       
    }
    else{
        return("something went wrong ")
    }
}
console.log(countVowels("raza"));


/* problem - 5 : Check Palindrome (Important)
 Check if string is palindrome

Example:
"madam" → true
"hello" → false
Task:
isPalindrome(str: string): boolean */

function isPalindrome(str:string):boolean{
    if(str === str.split("").reverse().join("")){
        return(true)
    }else{
        return(false)
    }
}

console.log(isPalindrome("raza"));
console.log(isPalindrome("madam"));

/*problem -6 : Count how many times a character appears

Input: "hello", "l"  
Output: 2
 */

function charAppers(str:string , char :string): number{
    let count:number=0;

    for (let i =0 ; i <=str.length - 1 ; i++)
        if(str[i] == char){
            count = count + 1 

        }
    return count

}

console.log(charAppers("Mohammad raza ali shaikh aliyawarjang khatik" , 'a'));

/*
problem -7 : 
Remove all spaces from string
"hello world" → "helloworld"
 */

function removeSpace(str:string):string{
    let trimmed = str.replaceAll(" " , "")
    return(trimmed)

    
}

function removeSpace2(str:string):string{

    let trimmed2 = str.split(" ").join("")
    return(trimmed2)
    
}

 console.log(removeSpace("wdnuh wefn wef"));
  console.log(removeSpace2("wdnuh wefn wef"));

  /* problem -8 : 
Capitalize first letter
"raza" → "Raza" */

function Capitalize(str :string){
    return  str.split(" ")
     .map(word => word.charAt(0).toUpperCase() + word.slice(1))
     .join(" ")
 
}
console.log(Capitalize("raza ali shaikh "));


/*problem -9 : Find longest word in sentence
"I love typescript " → "typescript" */


function findLongSentence( str :string){
    let newarr = str.split(" ")
    let biggest:number = 0;

    for(let i=0; i< newarr.length; i++){
        let first = newarr[i];      
        
        if(first?.length > biggest){
            biggest =first?.length 
        }
        
    }
    console.log(biggest);
  
}
findLongSentence("I love typescript df asdfghjklzxcvbnm")
/*problem -10 : 
Check if two strings are anagrams
"listen" & "silent" → true */

function anagrams(str1:string , str2:string):boolean{
    let strr1 =str1.toLowerCase().split("").sort().join("")
    let strr2 = str2.toLowerCase().split("").sort().join("")
    if(strr1 === strr2){return true}
    else{return false}

}
console.log(anagrams("listen" , "silent"))

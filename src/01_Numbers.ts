// ways to declare number data type to variable 

// 1) explicit 
let number1: number = 10;
console.log(number1)

//2) type inference ( gets type auto. based on value assigned )

let number2 = 20;
console.log(number2);

let number3;
number3 = 30;
console.log(number3);


//3) declare firs assign later : 

let number4: number
number4 = 40;
console.log(number4);

//4) number in function : 

function addTwoNum( n1: number , n2:number) : number{
    return(n1 + n2)
}
console.log(addTwoNum(5 , 10));

// 5) number in array : 
let myNumarray : number[] = [1,2,3,4,5];
console.log(myNumarray);

// important : All numbers are number type , Ex:
let number6:number = 10.5
console.log(number6);

let number7: number = -65
console.log(number7);
 
// special value : 
let numberNaN : number = NaN;
console.log(numberNaN);

let numberInfinity : number = Infinity
console.log(numberInfinity);


/*Question 1
Create:
num1 = 10
num2 = 20
Print sum */

let num1:number  = 10
let num2:number = 20
console.log(`addition of ${num1} + ${num2} is ${num1 + num2}`)

/*
Question 2
Create:
marks = 85
Increase it by 5 and print */

let marks:number = 85
marks += 5
console.log(marks)

/*Question 3
Create function:
addNumbers(a, b)
Return sum */

function addNumbers(a:number , b:number):number{
    return(a + b )
    
}
console.log(addNumbers(17 , 18));

/* Question 4 
Find square of a number
Example:
Input: 5  
Output: 25 */

let numberforSquare = 7
let square:number = numberforSquare * numberforSquare
console.log(square);
 
/*
Problem 5
Convert minutes to seconds
Example:
Input: 5  
Output: 300 */

let minutes : number = 15
let seconds :number = minutes * 60
console.log(seconds);




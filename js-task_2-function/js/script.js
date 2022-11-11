"use strict";
///*****************Functions: Declerations/Expression******************************/
//task1
//1. The user enters 1 number (A). Print all numbers from 1 to 1000 that are divisible by A.
// let a=+prompt("please enter number")
// function Devide(){
//   if(a==0){
//          alert("A is can not 0")
//  }
//   for (let i = 1; i <=1000; i++) {
//           if(i%a==0){
//            console.log(i);
//}
//}
//         return i;
//}

// console.log(Devide(a));

//task2
// The user enters 1 number (A). Find the number of positive integers whose square is less than A (n^2 < A). 
// let num=+prompt("please enter the num");
// function findSquare(num){
//     let number=Math.sqrt(num);
//     if(num==0){
//         alert("number will not 0")
//     }
//     else{
//         for (let i = 1; i < number; i++) {
//           let square=Math.pow(i,2);
//             console.log(square)
//         }
     
//     }
//     return square

// }
// console.log(findSquare(num));




//task-3
//3. The user enters 1 number (A). Print the largest divisor (other than A itself) of the number A.
//  let A=+prompt("please enter A");

// var Gcd=function(A){
//   let divisor = 0;
//     for (let i = 1; i <= A/2; i++){
//         if (A% i == 0) {
//             divisor = i;
        
//         }
// }
// return divisor
// }

//  console.log(Gcd(A));

//task-4
//The user enters 2 numbers (A and B). Print the sum of all numbers from the range A to B that are divisible by 7 without a remainder. (Note that B may be less than A if you type).
//   let num1= +prompt("please enter num1");
//   let num2= +prompt("please enter num2");
//   let result=0;
//   function Range(){
//     for (let i = num1; i <= num2; i++) {
//         if(i%7==0){
//             result+=i;
//         }
//     }
   
//     return result
// }
//   console.log(Range());





//task 5
//5. The user enters 1 positive number (N). Print the Nth number of the fibonacci series. In the fibonacci series, each next number is the sum of the previous two. The first and second are considered equal to 1.
// let anyFibonacciNumber=+prompt("What fibonacci number do you want to know?")
// let num1=0;//1 2
// let num2=1;//2 3
// let result;

// function fib(){
//     for (let i = 0; i <anyFibonacciNumber; i++) {
//         result=num1+num2; //1//3//5
//         num1=num2;   //1//2//3
//         num2=result   //1//3//5
    
//       }
//       return result
// }

// console.log(`FibonacciNumber:${anyFibonacciNumber}`)+console.log("sum="+fib())

//********************in other variant**********************************
// function anyFibonacciNumber(n){
//    let fib=[0,1]
//    for (let i = 2; i < n; i++) {
//      fib[i]=fib[i-1]+fib[i-2]
//     }
//    return fib
// }
// console.log(anyFibonacciNumber(5));

//task 6
//The user enters 2 numbers. Find their greatest common divisor using Euclid's algorithm. (yes, you've got to google this algorithm at first :D ).
//  let a= +prompt("please enter a");//48
//  let b= +prompt("please enter b");// 72

// let Ebob=function(a,b){
//  let result;
//  while(a!=0 && b!=0){
//     if(a>b){
//         a=a%b
//     }
//     else{
//         b=b%a  //b=72%48=1(24)
//     }
//    result=a+b 
//  }
//  return result
 
// }
// console.log(Ebob(a,b));


//task-7
//The user enters 1 number. Find a number that is a mirror image of the sequence of digits of a given number, for example, given the number 123, output is 321 in this case.
// let number= +prompt("please enter number");
// let str=""
// let mirror=function(){
//   let newNumber=number;
//   let digit;
 
//   while(newNumber>0){
//     digit=newNumber%10;
//     newNumber=(newNumber-digit)/10;
//      str+=digit
    
//   }
//   return str
// }
// console.log(mirror());




//task-8
//8.user enter  2 numbers. Find out if these two numbers have the same digits. For example, for a pair of 123 and 3456789, the answer would be "YES", and for a pair of 500 and 99, "NO".
let num1=+prompt("please enter first number ")
let num2=+prompt("please enter second number ")
let digit1
let digit2

function Devide(){
    for (let i = 0; i < num1; i++) {
        digit1=num1%10;
        num1=(num1-digit1)/10;
    
        for (let j = 0; j < num2; j++) {
            digit2=num2%10;
            num2=(num2-digit2)/10;
       
            if(digit1==digit2){
                console.log("same");
                break;
             }
             else{
                  console.log( "dif");
                
             }
        }
     }
   
         
}

console.log(Devide());
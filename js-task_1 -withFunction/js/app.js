//task1
//User gives 2 numbers (A and B). Print to the console the result of dividing A by B and the remainder of the division.
//task1

// let A=+prompt("please enter A number");
// let B=+prompt("please enter B number");
// function Devide(){
// return console.log(`qaliq=${A%B} and tam=${A/B}`);
// }

// Devide()

//task2
//The user enters 2 values (A and B). Swap the contents of variables A and B (that means the value of variable B must be assigned to variable A, and vice versa).
// let A=+prompt("please enter number");
// let B=+prompt("please enter number");
// let C;
// function swap(){
//  C=A
//  A=B
//  B=C
// //  return{A,B}
//  return[A,B]
// }
// const func=swap();
// const firstNum=func[0];
// const secondNum=func[1];
// console.log(swap());
// console.log(firstNum);
// console.log(secondNum);


//task-3
//The user enters 3 non-zero numbers (A, B and C). Print to the console the solution (the value of X) of the standard linear equation, where A*X+B=C.
// let A=+prompt("please enter value of A");
// let B=+prompt("please enter value of B");
// let C=+prompt("please enter value of C");

// var solution=function (){
// if(A==0){
//     alert("A cannot bought 0 ")
// }
// if(B==0){
//     alert("B cannot bought 0 ")
// }
// if(C==0){
//     alert("C cannot bought 0 ")
// }
// console.log('give us linear equation: A*X+C=B');
// console.log('let we find X');
// return 'X='+ ((C-B))/A;
// }

// console.log(solution());


//task-4
//4. User gives 2 numbers (A and B). If A>B then print to the console the result of A+B, if A=B then the result of A*B, if A<B then A-B.
// let A=+prompt("please enter value of A");
// let B=+prompt("please enter value of B");
// let result;
// let compared =()=>{
   
//     if(A>B){
//       return "result = "+(A+B);
//     }
   
//    if(A==B){
//       return "result = "+(A*B);
//     }
//     if(A<B){
//       return "result = "+(A-B);
//    }
// }
// console.log(compared());
 


//task-5
// User gives 3 numbers (a, b, c). Find out and print to the console the solution of quadratic equation ax^2+bx+c=0.
//   let a=+prompt("please enter value of a");
//   let b=+prompt("please enter value of b");
//   let c=+prompt("please enter value of c");
//  console.log('quadraticEquation=a*Math.pow(x,2)+b*x+c'); 
//    let descriminant=(b**2)-(4*a*c);
//    let D=Math.sqrt(descriminant);
// function Descriminant(){
//   if(descriminant<0){
//    return descriminant+" result quadratic equation haven't solution"
  
//   }
//   if(descriminant=0){
//       x1=-b/(2*a);
//       x1=-b/(2*a);
//       return x1
//    }

//   else{
//     let x1=-b+Math.sqrt(D)/2*a;
//     let x2=-b-Math.sqrt(D)/2*a;
//     return {
//         "D":D,
//         "x1":x1,
//         "x2":x2
//     }
    
//  }
 
// }
// console.log(Descriminant());
   

 //task-6
// The user enters a two-digit number. Print the literal representation of this number to the console. For example, typing "25" will display "twenty five" in the console, and "13" will display "thirteen".
//  let num=+prompt("please enter two-digit numbers ")

//   function literal(){
// if(num % 10 == 0 && num - (num % 10) == 10){
//     return "ten";
// }
// else if(num % 10 == 1 && num - (num % 10) == 10){
//     return"eleven";
// }
// else if(num % 10 == 2 && num - (num % 10) == 10){
//     return "twenty";
// }
// else if(num % 10 == 3 && num - (num % 10) == 10){
   
//     return "thirteen";
// }
// else if(num % 10 == 4 && num - (num % 10) == 10){
   
//       return "thirteen"
// }

// else if(num % 10 == 4 && num - (num % 10) == 10){
//      return "fourteen";
// }
// else if(num % 10 == 5 && num - (num % 10) == 10){
//     return "fivetten";
// }
// else if(num % 10 == 6 && num - (num % 10) == 10){
//     return"sixteen";
// }
// else if(num % 10 == 7 && num - (num % 10) == 10){
//     return"seventeen";
// }
// else if(num % 10 == 8 && num - (num % 10) == 10){
//     return"eighteen";
// }
// else if(num % 10 == 9 && num - (num % 10) == 10){
//     return "nineteen";
// }
// else if(num % 10 == 0 && num - (num % 10) == 20){
//     return"twenty";
// }


// else if(num % 10 == 1 && num - (num % 10) == 20){
//     return "twenty one";
// }


// else if(num % 10 == 2 && num - (num % 10) == 20){
//     return"twenty two";
// }


// else if(num % 10 == 3 && num - (num % 10) == 20){
//    return"twenty there";
// }


// else if(num % 10 == 4 && num - (num % 10) == 20){
//     return "twenty four";
// }


// else if(num % 10 == 5 && num - (num % 10) == 20){
//     return "twenty five";
// }


// else if(num % 10 == 6 && num - (num % 10) == 20){
//     return "twenty six";
// }


// else if(num % 10 == 7 && num - (num % 10) == 20){
//    return"twenty seven";
// }


// else if(num % 10 == 8 && num - (num % 10) == 20){
//     return "twenty eight";
// }


// else if(num % 10 == 9 && num - (num % 10) == 20){
//     return "twenty nine";
// }

// else if(num % 10 == 0 && num - (num % 10) == 30){
//     return "thirty";
// }
// else if(num % 10 == 0 && num - (num % 10) == 40){
//     return "fourty";
// }
// else if(num % 10 == 0 && num - (num % 10) == 50){
//     return"fifty";
// }
// else if(num % 10 == 0 && num - (num % 10) == 60){
//     return "sixty";
// }
// else if(num % 10 == 0 && num - (num % 10) == 70){
//     return "seventy";
// }
// else if(num % 10 == 0 && num - (num % 10) == 80){
//    return"eighty";
// }
// else if(num % 10 == 0 && num - (num % 10) == 90){
//     return"ninety";
// }
//   }
// console.log(literal());



//task-7
// 7. User gives 3 numbers (x, y, r). Find out if point with location (x,y) is inside a circle with radius r? (the center of the circle is at the origin)

// let x=+prompt("please enter value of x");
// let y=+prompt("please enter value of y");
// let r=+prompt("please enter value of radius");
// let radius=r**2
// let formula=(Math.pow(x,2)+Math.pow(y,2))
// let Formula=function(){
 
//     if(radius==formula){
//        return "x y is  inside circle"
       
//     }
//    else{
//         return "x y is  not inside"
//     }

   
// }

// console.log(Formula());








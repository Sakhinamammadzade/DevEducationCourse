"use strict"
//Let's say you have an array of arbitrary size filled with random numbers (one array per task). You need to:
//1. Find the minimum element of this array
//2. Find the maximum element of this array
// 3. Find the index of the minimum element of this array
// 4. Find the index of the maximum element of this array
// 5. Calculate the sum of array's elements with odd indices
// 6. Reverse this array (array in reverse direction) - you have to create YOUR OWN function, which WILL NOT create any new array
// 7. Count the number of odd elements in the array
// 8. Swap the first and second half of the array, for example, for an array of 1234, the result is 3412, or for 12345 the result will be 45312.
// 9. Sort the array in ascending order in one of the following ways: bubble sort, selection sort or insertion sort.
// 10. Sort the array in descending order in one of the ways (different from the method taken in the 9th task): bubble sort, selection sort or insertion sort.


//lets start
//task1
// let items=[];
// for (var i = 0, t=20; i < t; i++) {
//    items.push(Math.round(Math.random()*t));
//    let itemsMin=items.reduce((prevNum,nextNum)=>Math.min(prevNum,nextNum))
//    console.log(itemsMin);
//    //in other variant
 //   console.log(Math.min(...items));
// }
// document.write(items)

//task2
// let items=[];
// for (var i = 0, t=20; i < t; i++) {
//    items.push(Math.round(Math.random()*t));
//    let itemsMax=items.reduce((prevNum,nextNum)=>Math.max(prevNum,nextNum))
//    console.log(itemsMax);


    //in other variant
 //   console.log(Math.max(...items));
// }
// document.write(items)


//task3
// let items=[];
// for (var i = 0, t=20; i < t; i++) {
//    items.push(Math.round(Math.random()*t));
//    let  arrMin= Math.min(...items);
//    let findMinIndex=items.findIndex(element=>element === arrMin)
//     console.log(findMinIndex);

//diger usul
//    // let minIndex=items.indexOf(Math.min(...items))
//    // console.log(minIndex);
 
// }

//task 4
// let arr=[];
// for (let i = 0 ,t=15; i <t; i++) {
//    arr.push(Math.floor(Math.random()*t))
//    let maxElement=Math.max(...arr)
//    let maxIndex=arr.findIndex(Element=>Element===maxElement)
//    console.log(maxIndex);
   
// }


//task 5
// let items=[];
// let result=0;
// for (var i = 0, t=20; i < t; i++) {
//    items.push(Math.round(Math.random()*t));
//    let  arrMin= Math.min(...items);
//    let findMinIndex=items.findIndex(element=>element === arrMin)
//    if(findMinIndex%2!=0){
//       result+=findMinIndex
//       console.log(result);
//    }
  
// }

//task 6
// let arr=[32,12,5,9,33,221,44,76]
// let newArr=[]
// for (let i = arr.length; i>0; i--) {
//     newArr.push(arr[i-1])
     
// }
// console.log(newArr);




//task 7
// let items=[];
// for (let i = 0 ,t=10; i < t; i++) {
//   items.push(Math.floor(Math.random()*t))
//  var count= items.filter(x=>x%2!=0).length
//  console.log(count);
   
// }



//task 8


const arr=[1,2,3,4,5,6]
//3412

let splice1=arr.splice(2,4)
let splice1Reverse=splice1.reverse()
let splice2=arr.splice(0,2)
let concat=splice1Reverse.concat(splice2)
console.log(concat);




//task 9
//bubble sort
// let Arr=[3,6,2,7,8,4,9,5,1];
//const arr=[1,2,3,4,5,6,7]
// function bubble(arr){
//     let swapped;
//     do {
//       swapped=false;
//       for (let i = 0; i < arr.length-1; i++) {
//           if(arr[i]>arr[i+1]){
//            let temp=arr[i]
//            arr[i]=arr[i+1]
//            arr[i+1]=temp
//             swapped=true
   
//           }
//        }
//     } while (swapped);
// }
// bubble(arr)
//  console.log(arr);

//***************************************************/
//in other way
// let Arr=[3,6,2,7,8,4,9,5,1];
// for (let i = 0; i < Arr.length-1; i++) {
//   for (let j = 0; j < Arr.length-1-i; j++) {
//     if(Arr[j]>Arr[j+1]){
//         let temp=Arr[j];
//         Arr[j]=Arr[j+1];
//         Arr[j+1]=temp
//     }
// }
// }
// console.log(Arr);


//task 10
//selection sort
//  const arr=[12,5,-2,9,1,8]
//  //12 [-2,5,12,9,1,8]
//  //[-2,1,12,9,5,8]
//  //[-2,1,5,9,12,8]
// function selectionSort(arr) {
//     for (let i = 0; i < arr.length; i++) {
//       let lowest = i
//       for (let j = i+1; j < arr.length; j++) {
//         if (arr[j] < arr[lowest]) {
//           lowest = j
//         }
//       }
//       if (lowest !== i) {
//    //  Swap
//         ;[arr[i], arr[lowest]] = [arr[lowest], arr[i]]
//       }
//     }
//     return arr
//   }

// console.log(selectionSort(arr));

////////////////***********************************************///////////////////////////////
//insertion sort
// function insertionSort(arr){
//     for (let i = 0; i < arr.length; i++) {
//        let numberToInsert=arr[i];
//        let j=i-1
//        while(j>0&&arr[j]>numberToInsert){
//          arr[j+1]=arr[j]
//          j=j-1
//        }
//        arr[j+1]=numberToInsert
        
//     }
// }
 
// const arr=[-4,5,-2,9,1,8]
// insertionSort(arr)
// console.log(arr);
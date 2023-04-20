// let nums = [1, 2, 3, 4];
// //output [1,3,6,10]

// const runningSum = (numsx) => {
//   let sumsArray = [0]
//   let indexSum
//   let firstPushArray = []
//   let finalNumber = []
//   let length

// for (let i = 0; i <= numsx.length; i++) {
//   firstPushArray.push(numsx[i])
//   indexSum = firstPushArray.shift()
//   firstPushArray.shift()
//   firstPushArray.push(numsx[i])
//  length = sumsArray[i] + numsx[i]
//  sumsArray.push(length)
// finalNumber.push(sumsArray[i])
// }
// finalNumber.shift()
// numsx = finalNumber
// return numsx
// }
// console.log(runningSum(nums))









// let nums = [1, 2, 3, 4];
// //output [1,3,6,10]

// const runningSum = (numsx) => {
//   let randomArray = [0]
//   let random
//   let firstPushArray = []
//   let secondBlank = []
//   let length

// for (let i = 0; i <= numsx.length; i++) {
//   firstPushArray.push(numsx[i])
//   random = firstPushArray.shift()
//   firstPushArray.shift()
//   firstPushArray.push(numsx[i])
//  length = randomArray[i] + numsx[i]
//  randomArray.push(length)
// secondBlank.push(randomArray[i])
// }
// secondBlank.shift()
// numsx = secondBlank
// return numsx
// }
// console.log(runningSum(nums))


// const numsx = [2,7,11,14]
// const targetx = 9
// //output = [0,1]

// const twoSum = (nums,target) => {

// }

// console.log(twoSum(numsx,targetx))

// This is 2231. Largest Number After Digit Swaps by Parity
// const test = [1,2,3,4]
// const emptyArray = []
// const switchNumbers = (firstArrayy) =>{
//     const firstArray = [1,2,3,4]
//     const switchPop =[]
//     for(let i=0; i <= firstArray.length;i++){
//         for(let j=firstArray.length; j>=0;j--){
//             if(firstArray[i] % 2 !== 0){
//                 if(firstArray[j] > firstArray[i]){
//                     const lesserPop = []
//                     lesserPop.push(firstArray[i])
//                     const yo2 = firstArray.indexOf(j)
//                     firstArray.splice(i,1,j)
//                     firstArray.splice(yo2,1,lesserPop[0])
//                 }
//             }

//             if(firstArray[i] % 2 === 0){
//                 if(firstArray[j] > firstArray[i]){
//                     const lesserPop = []
//                     lesserPop.push(firstArray[i])
//                     firstArray.splice(firstArray[i]-1,1,firstArray[j])
//                     firstArray.splice(firstArray[j]-1,1,lesserPop[0])
//                     // firstArray.splice(yo2,1,lesserPop[0])
//                     return firstArray
//                 }
//             }
//     }
// }
//         }

// console.log(switchNumbers(test))
//this is arethimetic triplets
// const nums = [0,1,4,6,7,10]
// const triplets = (nums,diff)=>{

// let output;
// for(let i=0; i < 2;i++){
// for(let j=2; j< 4; j++){
//     if(nums[j]-nums[i] === diff){
//        return output = 1
//     }
// for(let k=4; k< 6;k++){
//     if(nums[k]-nums[j] === diff){
//         return output = 2
//     }
// }
// }
// }
// return output
// }
// console.log(triplets(nums,3))

//----------- complete with right answer merge from leetcode
// let nums1 = [1,2,3]
// let nums2x=[2,5,6]
// const merge = (nums,nums2,n,m) =>{
//---This is the first part that i did accidentaly backwards but still works great
    //[1,2,3](n)
    // [2,5,6](m)
    // 3 - 3 = 0 insert at index 0 from n to m
    //[1,2,5,6]
    // 4(n) - 2(m) = 2 insert 2 at index 2
    //[1,2,2,5,6]
    // 5(m)-1(n) = 4 insert at index 4 from 3
    //[1,2,2,3,5,6]
    ///-------
    // [1,2,3](m)
    // [2,5,6](n)
    //4-2(m going down) = 2 insert n at index 2 m 
    // [1,2,2,3]
    // [5,6]
    //5(m) - 1(n) = 4 insert at index of 
    // [1,2,2,3,5](m)
    // [6](n)
    //6(n) - 0(m) = 6 insert at index of 

    //-----
    //all index of for math
    //nums 1 equals m+n
    //[1,2,3,0,0,0](m)
    // [2,5,6](n)
    // 6(m) - (3n) = 3 insert 6 at index of 3
    //[1,2,3,6]
    //[2,5]
    //6(m) - 2(n) = 4 //m=4

//     let first = []
    
//     nums = [1,2,3]
//     nums2=[2,5,6]
//     //[1,2,2,3]4
//     //[5,6]
//     m=nums.length
//     n=nums2.length
//     let firstLength = m + n
//     const greaterMerge = m + n 
//     let i = 0
//     let t= 0
//     for(i;i<= nums2.length;i++){
//         //just do iterate over i nums2 while only subtracting from 1
//        const index = nums2[i] - 1
//         nums.push(0)
//         nums.splice(index,0,nums2[i])
//         nums.pop()
//     }
//    first = nums
//    first.shift()
//    return first
// }
// console.log(merge(nums1,nums2x,3,3))

// console.log(merge(nums1,nums2x,3,3))


//-----------1422. Maximum Score After Splitting a String
// const s = "011101"
// const maxscore = (s) =>{
//     const string = '011101'
//     const splif = stringx.split('')
//     let left = []
//     let right = []
//     let l = []
//     let r = []
//     let p = 0
//     let o = 0
//     let score= []
//     let mixedAdds = []
//     for(let i=0;i<= splif.length;i++){
//        const pushToLeft = splif.shift()
//        left.push(pushToLeft)
//        right = splif
//     if(left.includes("0")){
//     p+=1
//     l.push(p)
//     }
//     if(right.includes("1")){
//         o+=1
//     r.push(o)
//     }
//     score = l.length + r.length
//     mixedAdds.push(score)
//     }
//     s = mixedAdds.length
//     return s + 1
// }
// console.log(maxscore(stringx))


//-------------
// 1523. Count Odd Numbers in an Interval Range
// const check = []
// const countOdds = (low,high) =>{
// // low = 3
// // high =7 
// let allNumbers = []
// let oddNumbers = []
// for(let i=low;i<=high;i++){
//     allNumbers.push(i)
// }
// for(let i=0; i<=allNumbers.length;i++){
//     if(allNumbers[i] % 2 === 1){
//         oddNumbers.push(allNumbers[i])
//     }

// }
// return oddNumbers.length
// }
// console.log(countOdds(check))
//------- fail but close
// const test = []
// const calculateTime = (keybaord,word) => {
//     keybaord = "abcdefghijklmnopqrstuvwxyz"
//    let keyboardToArray = keybaord.split("")
//     word = "cba"
//     let wordToArray = word.split("")
//     let numbersToAdd = []
//     let getNumbers = []
//     for(let i=0;i<=keyboardToArray.length;i++){
//     getNumbers[i] = keyboardToArray.indexOf(wordToArray[i])
        
// }
// return numbersToAdd
// }
//-----------------
//real answer
// var calculateTime = function(keyboard, word) {

//     const map = new Map();
//     keyboard.split('').forEach((char, index) => map.set(char, index));
  
//     let curIdx = 0;
//     let totalTime = 0;
  
//     for(let i = 0; i < word.length; i++) {
//       const char = word[i];
//       const time = Math.abs(map.get(char) - curIdx); // c: 2 - 0 = 2
//       totalTime += time;
//       curIdx = map.get(char);
//     }
  
//     return totalTime;
//   }

// console.log(calculateTime(test))


//leetcode 1491. Average Salary Excluding the Minimum and Maximum Salary
let salary = [4000,3000,1000,2000]
const averageSalary = (salaryy) =>{
    let sal2 = salary
    sal2.sort()
    sal2.shift()
    sal2.pop()
  let splitArray1 = sal2.shift()
  let splitArray2 = sal2.pop()

  let addSal = splitArray1 + splitArray2
  let mediumSal = addSal / 2

    salary = mediumSal
    return salary
}
console.log(averageSalary(salary))


// 1281. Subtract the Product and Sum of Digits of an Integer
// let firstNum = 234
// let firstNumx = 234
// let numFunction = num => Number(num)

// let getArray = Array.from(String(firstNum), numFunction)
// let initialValue = 0
// let initialValueProd = 1
//  let product = getArray.reduce((num , val ) => num * val, initialValueProd)
//  let sum  = getArray.reduce((num , val) => num + val, initialValue)
//  let answer = product - sum
// console.log(answer)

// const subtractProductAndSum = (n) =>{
//     // n =  234
//     let getProduct = getArray
//     let multiply
//     let answer 
//     let secondArray = []
//     let push
//     for(let i = 0;i <=getProduct.length; i++){
//         for(let j = 1 ; j <= getProduct.length; j++){
//             let multiply = getProduct.redu
            
//         }
    
//     }
//     return secondArray
// }

// // console.log(subtractProductAndSum(getArray))
//------------------------------------------------------------------------

let oneS = "add"
let twoT = "egg"
const isosophormic = ( s, t) =>{
    s =  oneS
    t = twoT
    let dupLetter
    let firstString = s.split("")
    let secondString =  s.split("")
for(let i = 0 ; i <= firstString.length; i++){
    for( let j = 0; j<= secondString.length; j++){
      let findDuplicatesS = firstString => firstString.filter((item,index) => firstString.indexOf(item) !== index)
      let findDuplicatesT = secondString => secondString.filter((item,index) => secondString.indexOf(item) !== index)
        dupLetter = findDuplicatesS(firstString)
    }
    return dupLetter
}
}
console.log(isosophormic(oneS,twoT))

// let strArray = [ "q", "w", "w", "w", "e", "i", "u", "r"];
// let findDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) !== index)

// console.log(findDuplicates(strArray)) // All duplicates










// "Given an array of integers, return a list of all odd numbers found in the list"

// let arrayTest = [1,2,4,6,7,8]
// const even = (array) =>{
//     let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//     let arrayOne = []
//     for(let i = 0; i < arr.length; i++ ){
//       if(i % 2 === 1 ){
//       arrayOne.push(arr[i])
      
//       }

//     }
//     array = arrayOne
//     return array
//   } 
//   //   array = arrayOne
// //   return array

// // }

// console.log(even(arrayTest))

// let arrayTest = [1,2,4,6,7,8]
// const test = (array) =>{
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const even = [];

// arr.forEach(number => {
//   if (number % 2 === 0) {
//     even.push(number);
//   }
// });
// array = even
// return array

// }
// console.log(test(arrayTest))


// "Given an array of integers, return a new list that doubles each value"

// let arrayInt = [1,2,3,5,6,7]
// let newInt = []

// arrayInt.forEach((number)=>{
//     newInt.push(number * 2)
// })

// "Given a string representing a sentence, write a method that returns the longest word. If there’s a tie, output the longest word that’s found first"

// let stringSentence = "Please let this try be the bestest"

// let longestWord = (string) =>{
//     let str = string.split(" ")
//     let longest = 0
//     let word;
//     for(let i = 0; i< str.length; i++){
//         if(longest < str[i].length){
//             longest = str[i].length
//             word = str[i]
//         }
//     }
//     return word
// }

// console.log(longestWord(stringSentence))




//questions.js

// "Given an array of unsorted integers, return a sorted array with the integers list from lowest to highest. No .sort";
// const array = [1,5,3,9,2,4,7]
// const test = []
// const lowToHigh = (element) =>{

// for(let i = 0; i< element.length; i++){
//     for(let j = 1; j<element.length;j++){
        
//         if(element[i] < element[j]){
//        return  element.push(element[i])
//         // }else {
//         //     if(element[i] > element[j]){
//         //         let random =  test.splice(j,1,element[i])
//         //       test.splice(j,1,element[i])
//         //       test.push(random)
      
//         // }
//     }
// }
// }
// element = test
// return element
// }

// console.log(lowToHigh(array))

let sA = "hia"

let sB = "hello"

const twoStrings = (stringOne,stringTwo) => {
    stringOne.split("")
    stringTwo.split("")
    let empty = []
    if(stringOne.length < stringTwo.length){
     let test = stringOne.concat(stringTwo)
     empty = test.concat(stringOne)
        // empty.push(test)
        // empty.push(stringOne)
        // empty.join()
        // return empty
    }else{
        if(stringTwo.length < stringOne.length){
          let test = stringTwo.concat(stringOne)
            empty = test.concat(stringTwo)
        }
    }
 return empty
}

console.log(twoStrings(sA,sB))




// let string = "WeLl This WaS Neat"
//   let testt = string.toLowerCase()
//   let myArray = string.split("")
//   let otherArray = string.split("")
//   let caps = "ABCDEFGHIJKLMNOPQRSTUVWYXZ"
//   let lower = "a b c d e f g h i j k l m n o p q r s t u v w y x z"
//   caps.split("")
//   lower.split("")
// let empty = []
//   // const test = (array) =>{
// let index = 0
// let j = 0

//   // for (let index = 0; index < myArray.length; index++) {
//   //    for(let j = 0; j< myArray.length; j++){
//   while(index < myArray.length){
//       if (myArray[index].charAt(caps) === myArray[index].toUpperCase()) {
//         let newValue = myArray[index].charAt(index).toLowerCase();

//       myArray.splice(index, 1, newValue)
//       }
// index++
//   }
//     while(j<otherArray.length){
//         if (otherArray[j].charAt(lower) === otherArray[j].toLowerCase()) {
//             let newValue = 
//               otherArray[j].charAt(j).toUpperCase();
            
//           otherArray.splice(j, 1,newValue);
//         }
//       j++
//     }
//   //    }
//   // }
//   //     array = myArray
//   //    return array
//   // }

// console.log(otherArray.join(""))
// console.log(myArray.join(""))



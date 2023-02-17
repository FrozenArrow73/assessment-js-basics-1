//////////////////PROBLEM 1////////////////////
/* Create a copy of the faveColors array called 'colorCopy' using the slice method. */

const faveColors = ['red', 'green', 'black']

//CODE HERE
//I used faveColors.length so that the code would still work if the array was of different lengths
let colorCopy = faveColors.slice(0, faveColors.length)


//////////////////PROBLEM 2////////////////////
/* Add a fourth color to the end of the 'colorCopy' array using the push method. */

//CODE HERE
//I picked blue because it is the favorit color of 1/3 of the planet and one of the rarest colors in nature
colorCopy.push("blue")

//////////////////PROBLEM 3////////////////////
/*
  Using an array method, create a new array called 'middleNums' from the 
  numbers array that will capture only the middle numbers (2, 3, 4).
*/

const numbers = [1, 2, 3, 4, 5]

//CODE HERE
// slice needs the end paramater to fall outside the range so for 1-3 to be coppies we must slice 1-4
let middleNums =numbers.slice(1, 4)


//////////////////PROBLEM 4////////////////////
/* 
  Create an empty array called 'answers'.
  Using a for loop, loop over the array called 'bigOrSmallArray', and check to see if the 
  number in the array is GREATER than 100. 
  If it is, push 'big' as a string to the answers array. 
  If the number is LESS than or EQUAL to 100, push 'small' as a string 
  to the answers array. 
*/

const bigOrSmallArray = [1, 99, 42, 69, 102, -10, 159, 352]

// CODE HERE

let answers = []
// Loop through bigOrSmallArray and use if statement to see if each element is bigger or smaller than or equal to 100 then use .push to add to answers array
for (i = 0; i < bigOrSmallArray.length; i++) {
  if (bigOrSmallArray[i] > 100) {
    answers.push("big")
    //I used an if else to so that the code would run properly if there was an unexpected data type in the array
  } else if (bigOrSmallArray[i] <= 100){
    answers.push("small")
  }
}

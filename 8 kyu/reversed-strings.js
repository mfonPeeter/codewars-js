"use script";

// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

// Step 1. Use the split() method to return a new array
// Step 2. Use the reverse() method to reverse the new created array
// Step 3. Use the join() method to join all elements of the array into a string

const solution = (str) => str.split("").reverse().join("");

console.log(solution("world"));
console.log(solution("hello"));
console.log(solution(""));
console.log(solution("h"));

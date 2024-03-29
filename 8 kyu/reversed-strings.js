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

// Extra Solution from freecodecamp: https://www.freecodecamp.org/news/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb/

// 2. Reverse a String With a Decrementing For Loop

function reverseString(str) {
  // Step 1. Create an empty string that will host the new created string
  var newString = "";

  // Step 2. Create the FOR loop
  /* The starting point of the loop will be (str.length - 1) which corresponds to the 
     last character of the string, "o"
     As long as i is greater than or equals 0, the loop will go on
     We decrement i after each iteration */
  for (var i = str.length - 1; i >= 0; i--) {
    newString += str[i]; // or newString = newString + str[i];
  }
  /* Here hello's length equals 5
      For each iteration: i = str.length - 1 and newString = newString + str[i]
      First iteration:    i = 5 - 1 = 4,         newString = "" + "o" = "o"
      Second iteration:   i = 4 - 1 = 3,         newString = "o" + "l" = "ol"
      Third iteration:    i = 3 - 1 = 2,         newString = "ol" + "l" = "oll"
      Fourth iteration:   i = 2 - 1 = 1,         newString = "oll" + "e" = "olle"
      Fifth iteration:    i = 1 - 1 = 0,         newString = "olle" + "h" = "olleh"
  End of the FOR Loop*/

  // Step 3. Return the reversed string
  return newString; // "olleh"
}

reverseString("hello");

// Without comments:
function reverseString(str) {
  var newString = "";
  for (var i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
}
reverseString("hello");

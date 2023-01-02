"use script";

// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.

// Example:
// h = 0
// m = 1
// s = 1

// result = 61000

// Data
// We are taking in 3 ints, one representing hours, one representing minutes and one representing seconds.
// The output is one int in milliseconds
// Algorithm
// Create a variable to convert hours to milliseconds  by multiplying h to 60
// Multiply that result to 60 again for seconds
// then multiply the final result to 1000 for milliseconds
// Create a variable to convert minutes to milliseconds my multiplying the m to 60 to convert to minutes
// Take that result and multiply that to 1000 to convert to milliseconds
// Create a Variable that convers seconds to milliseconds by multiplying s to 1000
// Add all three variables together and return

// My Solution

const past = (h, m, s) => {
  const convertHours = h * 60 * 60 * 1000;
  const convertMinutes = m * 60 * 1000;
  const convertSeconds = s * 1000;

  return convertHours + convertMinutes + convertSeconds;
};

console.log(past(0, 1, 1));
console.log(past(1, 1, 1));
console.log(past(0, 0, 0));
console.log(past(1, 0, 1));
console.log(past(1, 0, 0));

// Others Solution
function past(h, m, s) {
  return (h * 3600 + m * 60 + s) * 1000;
}

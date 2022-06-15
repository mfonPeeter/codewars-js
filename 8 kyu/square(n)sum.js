"use strict";

// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

// My Solution

function squareSum(numbers) {
  let total = 0;
  for (const number of numbers) {
    const sum = number ** 2;
    total += sum;
  }
  return total;
}

console.log(squareSum([1, 2, 2], 5));

// Best Practices
function squareSum(numbers) {
  return numbers.reduce(function (sum, n) {
    return n * n + sum;
  }, 0);
}

console.log(squareSum([1, 2, 2], 5));

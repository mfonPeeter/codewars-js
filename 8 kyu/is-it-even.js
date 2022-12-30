"use script";

// In this Kata we are passing a number (n) into a function.

// Your code will determine if the number passed is even (or not).

// The function needs to return either a true or false.

// Numbers may be positive or negative, integers or floats.

// Floats with decimal part non equal to zero are considered UNeven for this kata.

// My Solution

const testEven = (n) => {
  if (n % 2 === 0) {
    return true;
  } else {
    return false;
  }
};

console.log(testEven(0));
console.log(testEven(0.5));
console.log(testEven(1));
console.log(testEven(2));
console.log(testEven(-4));

// Others Solution 1
function testEven(n) {
  return n % 2 === 0;
}

// Others Solution 2
function testEven(n) {
  return n % 2 === 0 ? true : false;
}

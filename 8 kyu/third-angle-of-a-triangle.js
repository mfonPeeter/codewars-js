"use strict";

// You are given two interior angles (in degrees) of a triangle.

// Write a function to return the 3rd.

// Note: only positive integers will be tested.

// My Solution

function otherAngle(a, b) {
  const thirdAngle = 180 - (a + b);
  return thirdAngle;
}

// First Best Practices

function otherAngle(a, b) {
  return 180 - (a + b);
}

// console.log(otherAngle(30, 60));
// console.log(otherAngle(60, 60));
// console.log(otherAngle(43, 78));
// console.log(otherAngle(10, 20));

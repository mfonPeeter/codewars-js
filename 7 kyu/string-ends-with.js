"use strict";

// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

// My Solution

function solution(str, ending) {
  return str.indexOf(ending, str.length - ending.length) !== -1;
}

console.log(solution("abc", "bc"));

// First Best Practices (Regular Function)

function solution(str, ending) {
  return str.endsWith(ending);
}

console.log(solution("abc", "bc"));

// Second Best Practices (Arrow Function)

const solution = (str, ending) => str.endsWith(ending);

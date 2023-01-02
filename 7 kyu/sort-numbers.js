"use script";

// Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

// For example:

// solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
// solution(null); // should return []

// My Solution

// return < 0, A, B (keep order)
// return > 0, B, A (switch order)

const solution = (nums) => {
  if (!nums || nums.length === 0) return [];
  return nums.sort((a, b) => a - b);
};

console.log(solution([1, 2, 3, 10, 5]));
console.log(solution(null));
console.log(solution([]));
console.log(solution([20, 2, 10]));
console.log(solution([2, 20, 10]));

// Others Solution 1
function solution(nums) {
  return (nums || []).sort(function (a, b) {
    return a - b;
  });
}

// Others Solution 2
function solution(nums) {
  return nums !== null
    ? nums.sort(function (a, b) {
        return a - b;
      })
    : [];
}

"use strict";

// Write a function named setAlarm which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.

// The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise. Examples:

// setAlarm(true, true) -> false
// setAlarm(false, true) -> false
// setAlarm(false, false) -> false
// setAlarm(true, false) -> true

// My Solution

function setAlarm(employed, vacation) {
  if (employed && vacation) {
    return false;
  } else if (employed && !vacation) {
    return true;
  } else {
    return false;
  }
}

// First Best Practices

const setAlarm = (employed, vacation) => employed && !vacation;

// Second Best Pracitices

function setAlarm(employed, vacation) {
  return employed && !vacation;
}

// console.log(setAlarm(true, true));
// console.log(setAlarm(false, true));
// console.log(setAlarm(false, false));
// console.log(setAlarm(true, false));

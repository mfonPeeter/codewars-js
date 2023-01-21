"use script";

// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "

// Good Luck!

// My Solution

const doubleChar = (str) => {
  return str
    .split("")
    .map((c) => c + c)
    .join("");
};

console.log(doubleChar("abcd"));
console.log(doubleChar("Adidas"));
console.log(doubleChar("1337"));
console.log(doubleChar("illuminati"));
console.log(doubleChar("123456"));
console.log(doubleChar("%^&*("));

// Others Solution 1
function doubleChar(str) {
  var word = "";
  for (var i = 0; i < str.length; i++) {
    word = word + str[i] + str[i];
  }
  return word;
}

// Others Solution 2
function doubleChar(str) {
  return str.replace(/(.)/g, "$1$1");
}

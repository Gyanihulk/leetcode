// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

// A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

// Example 1:

// Input: digits = "23"
// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
// Example 2:

// Input: digits = ""
// Output: []

var letterCombinations = function (digits) {
  const digitToLetters = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };

  const result = [];

  function backtrack(combination, digit) {
    if (digit.length === 0) {
        result.push(combination)
    } else {
        let letters=digitToLetters[digit[0]]
        for(let letter of letters){
            backtrack(combination+letter,digit.slice(1))
        }
    }
  }

  if(digits){
    backtrack("",digits)
  }
  return result
};

const digits = "23";
console.log(letterCombinations(digits)); // Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]

const emptyDigits = "";
console.log(letterCombinations(emptyDigits)); // Output: []

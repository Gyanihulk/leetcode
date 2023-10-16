// Given n pairs of parentheses, write a function
// to generate all combinations of well-formed parentheses.

// Example 1:

// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]
// Example 2:

// Input: n = 1
// Output: ["()"]

function generateParenthesis(n) {
  const result = [];

  function generate(current, open, close) {
    if (current.length == n * 2) {
      result.push(current);
      return;
    }

    if (open < n) {
      generate(current + "(", open + 1, close);
    }
    if (close < open) {
      generate(current + ")", open, close + 1);
    }
  }

  generate("", 0, 0);
  return result;
}


console.log(generateParenthesis(3));
// Output: ["((()))","(()())","(())()","()(())","()()()"]

// Example 2: n = 1
console.log(generateParenthesis(1));

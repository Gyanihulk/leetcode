// Given two binary strings a and b, return their sum as a binary string.
// Example 1:

// Input: a = "11", b = "1"
// Output: "100"
// Example 2:

// Input: a = "1010", b = "1011"
// Output: "10101"

function addBinary(a, b) {
  const num1 = parseInt(a, 2);
  const num2 = parseInt(b, 2);
  const sum = num1 + num2;
  return sum.toString(2);
}

const a1 = "11";
const b1 = "1";
const result1 = addBinary(a1, b1);
console.log(result1); // Output: "100"

const a2 = "1010";
const b2 = "1011";
const result2 = addBinary(a2, b2);
console.log(result2); // Output: "10101"

function addBinary(a, b) {
  let result = "";
  let carry = 0;

  // Make both strings the same length by padding with zeros
  const maxLength = Math.max(a.length, b.length);
  a = a.padStart(maxLength, "0");
  b = b.padStart(maxLength, "0");

  for (let i = maxLength - 1; i >= 0; i--) {
    const bitA = Number(a[i]);
    const bitB = Number(b[i]);
    const sum = bitA + bitB + carry;

    result = (sum % 2) + result;
    carry = Math.floor(sum / 2);
  }

  if (carry > 0) {
    result = "1" + result;
  }

  return result;
}

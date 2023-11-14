// Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.

// Note: You must not use any built-in BigInteger library or convert the inputs to integer directly.

 

// Example 1:

// Input: num1 = "2", num2 = "3"
// Output: "6"
// Example 2:

// Input: num1 = "123", num2 = "456"
// Output: "56088"

function multiplyStrings(num1, num2) {
    const len1 = num1.length;
    const len2 = num2.length;
    const result = new Array(len1 + len2).fill(0);

    for (let i = len1 - 1; i >= 0; i--) {
        let carry = 0;
        for (let j = len2 - 1; j >= 0; j--) {
            const tempSum = (parseInt(num1[i], 10) * parseInt(num2[j], 10)) + result[i + j + 1] + carry;
            result[i + j + 1] = tempSum % 10;
            carry = Math.floor(tempSum / 10);
        }

        result[i] += carry;
    }

    // Remove leading zeros
    const resultStr = result.join('').replace(/^0+/, '');

    // If the result is an empty string, the product is 0
    return resultStr || "0";
}


function multiplyStrings(num1, num2) {
const len1=num1.length
const len2=num2.length
const result=new Array(len1+len2).fill(0)

for(let i=len1-1;i>=0;i--){
    let carry=0
    for(let j=len2-1;j>=0;j--){
        const tempSum=(parseInt(num1[i],10)*parseInt(num2[i],10))+result[i+j+1]+carry;
        result[i+j+1]=tempSum%10
        carry=Math.floor(tempSum/10)
    }
    result[i]+=carry
}

const str=result.join('').replace(/^0/,'')

return str
}

// Example usage:
const num1 = "2";
const num2 = "3";
const output1 = multiplyStrings(num1, num2);
console.log(output1);  // Output: "6"

const num3 = "123";
const num4 = "456";
const output2 = multiplyStrings(num3, num4);
console.log(output2);  // Output: "56088"

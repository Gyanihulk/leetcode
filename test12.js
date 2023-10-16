// // Return the unique elements and their frequencies.
// const unique = (arr) => {
//   const elementObject = {};

//   arr.forEach((element) => {
//     if (element in elementObject) {
//       elementObject[element] += 1;
//     } else {
//       elementObject[element] = 1;
//     }
//   });

//   return elementObject;
// };

// console.log(
//   unique([
//     1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 7, 6, 5, 4,
//     2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6,
//   ])
// );

// var a=0
// a=1
// console.log(a)

const input = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3,
    },
  },
};



function filter(input, parentkey) {
  let result = {};
  for (let key in input) {
    const keyName = parentkey ? `${parentkey}_${key}` : key;
    if (typeof input[key] == "object") {
      const nested=filter(input[key], keyName);
      result = { ...result, ...nested };
    } else {
      result[keyName] = input[key];
    }
  }
  return result;
}
// Expected Output: { 'a': 1, 'b_c': 2, 'b_d_e': 3 }

console.log(filter(input,""))
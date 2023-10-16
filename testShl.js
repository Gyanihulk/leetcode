
function nextPermutation(arr) {
  let i = arr.length - 2;
  while (arr[i] >= arr[i + 2] && i >= 0) {
    i--;
  }

  function reverseArray(arr1, start) {
    let end = arr1.length;

    while (start < end) {
      [arr1[start], arr1[end]] = [arr1[end], arr1[start]];
      start++;
      end--;
    }

    return arr1;
  }

  return reverseArray(arr);
}

console.log(nextPermutation([1, 2, 3]));

// Given an absolute path for a file (Unix-style), simplify it. Note that absolute path always begin with ‘/’ ( root directory ), a dot in path represent current directory and double dot represents parent directory.

// Eg: I/P: “/a/./b/../../c/”
// O/P:	“/c”

// Eg: I/P:  “/a/../”
// 	O/P:  “/”

// function filePath(s){
//   const stack=[]
//   const charcters=s.split("/")

//   for(let i of charcters){
//         if(i=="."||i==""){
//             continue;

//         }else if(i==".."){
//             if(stack.length>0){
//                 stack.pop()
//             }
//         }else{
//             stack.push(i)
//         }

//   }
//   const simplifiedPath="/"+stack.join("/")
//   return simplifiedPath
// }

function filePath(s) {
  let stack = [];
  let result = "/";
  let i = 0;

  while (i < s.length) {
    if (s[i] == "/" && i < s.length) {
      i++;
    }
    let dirName = "";
    while (i < s.length && s[i] !== "/") {
      dirName += result;
      i++;
    }

    
  }
}

// console.log(filePath("/a/./b/../../c/"))
console.log(filePath("/a//b//c//////d"));

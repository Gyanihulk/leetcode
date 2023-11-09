// Given a string s, reverse only all the vowels in the string and return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

function reverseVowels(string) {
 function isVowel(s){
    return 'aeiouAEIOU'.includes(s)
 }

 let charArray=string.split("")

 let left=0
 let right=charArray.length-1

 while(left<right){
    while(left<right && !isVowel(charArray[left])){
        left++
    }
    while(left<right && !isVowel(charArray[right])){
        right--
    }

    [charArray[left],charArray[right]]=[charArray[right],charArray[left]]

    left++
    right--
 }

 return charArray.join("")
}

// Example usage:
const inputString = "hello";
const reversedString = reverseVowels(inputString);
console.log(reversedString); // Output: "holle"

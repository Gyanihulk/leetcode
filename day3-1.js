// Given a string s, find the length of the longest 
// substring
//  without repeating characters.

var lengthOfLongestSubstring = function(s) {
    let maxLength = 0; // Initialize the maximum length of the substring.
    let start = 0; // Starting index of the current substring.
    let charIndexMap = {}; // Map to store the last index of each character.
    
    for (let end = 0; end < s.length; end++) {
        const currentChar = s[end];
        
        // If the current character has been seen before in the current substring,
        // update the starting index to the next index after the previous occurrence.
        if (charIndexMap[currentChar] !== undefined 
            && charIndexMap[currentChar] >= start) {
            start = charIndexMap[currentChar] + 1;
        }
        
        // Update the last index of the current character in the map.
        charIndexMap[currentChar] = end;
        
        // Calculate the length of the current substring and update maxLength if needed.
        const currentLength = end - start + 1;
        maxLength = Math.max(maxLength, currentLength);
        console.log(charIndexMap,end,start,end - start + 1
            ,maxLength,currentLength)
    }
    
    return maxLength;
};




// / Example usage
const s = "abcabcbb";
console.log(lengthOfLongestSubstring(s)); // Output: 3


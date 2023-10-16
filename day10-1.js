function longestString(s) {
    let maxlength = 0;
    let start = 0;
    const charIndexMap = {};
  
    for (let end = 0; end < s.length; end++) {
      const currentChar = s[end];
  
      if (charIndexMap[currentChar] >= start) {
        start = charIndexMap[currentChar] + 1;
      }
  
      charIndexMap[currentChar] = end;
      const currentLength = end - start + 1;
      maxlength = Math.max(maxlength, currentLength);
    }
    return maxlength;
  }
  
  console.log(longestString("ABCDEFGABEF"));
  
  // [1,2,3]
  // [1,2,3] [1,3,2], [2,1,3],[2,3,1] ,[3,1,2] ,[3,2,1]
  // O/P [1,3,2]
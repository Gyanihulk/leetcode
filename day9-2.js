var longestCommonPrefix = function(strs) {
    if (!strs.length) {
        return "";
    }

   const minLen=Math.min(...strs.map(str=>str.length));
   let commonPrefix="";

   for(let i=0;i<minLen;i++){
    const char =strs[0][i];
    if(strs.every(str=>str[i]===char)){
        commonPrefix+=char;
    }else{break;}
   }

    return commonPrefix;
};

console.log(longestCommonPrefix(["flower","flow","flight"]))
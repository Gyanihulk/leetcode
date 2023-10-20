// The Tribonacci sequence Tn is defined as follows: 

// T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0.

// Given n, return the value of Tn.

 

// Example 1:

// Input: n = 4
// Output: 4
// Explanation:
// T_3 = 0 + 1 + 1 = 2
// T_4 = 1 + 1 + 2 = 4
// Example 2:

// Input: n = 25
// Output: 1389537


function tribonacci(n) {
if(n==0) return 0;
if(n==1 ||n==2) return 1;
const series=[0,1,1]

for(let i=3;i<=n;i++){
    series[i]=series[i-1]+series[i-2]+series[i-3]
}

return series[n]
  }
  
  const n1 = 4;
  const n2 = 25;
  
  console.log(tribonacci(n1)); // Example 1
  console.log(tribonacci(n2)); // Example 2
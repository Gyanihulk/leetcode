// ou are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

// You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.


function rotate(arr){
const n=arr.length
for (let i=0;i<n;i++){
    for(let j=i;j<n;j++){
        const temp=arr[i][j]
        arr[i][j]=arr[j][i]
        arr[j][i]=temp
    }
}

for(let i=0;i<n;i++){
    for(let j=0;j<Math.floor(n/2);j++){
        const temp=arr[i][j]
        arr[i][j]=arr[i][n-1-j]
        arr[i][n-1-j]=temp
    }
}
    return arr
}

const matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
  console.log(rotate(matrix));
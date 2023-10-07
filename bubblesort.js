let arr=[64,34,25,12]

function recursiveBubbleSort(data,count){
    if(count==1){
        return;
    }
    currentEl=0
    for(let i=0;i<count-1;i++){
        if(data[i]>data[i+1]){
            [data[i],data[i+1]]=[data[i+1],data[i]]
            currentEl++;
        }
    }
    recursiveBubbleSort(data,count-1)
return data
}

console.log(recursiveBubbleSort(arr,arr.length))
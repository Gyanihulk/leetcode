function selectionSort(array){
 for(let i=0;i<array.length;i++){
    let minIndex=i;
    console.log("min index outer loop",minIndex,array[minIndex])
    for(let j=i+1;j<array.length;j++){
        if(array[j]<array[minIndex]){
            minIndex=j;
            console.log("minindex after change",minIndex,array[minIndex])
        }
        [array[i],array[minIndex]]=[array[minIndex],array[i]]
    }
 }
 return array
}

console.log(selectionSort([1,43,23,543,3,545,25,41,98,105,786]))

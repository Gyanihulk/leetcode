// Given an array intervals where intervals[i] = [li, ri] represent the interval [li, ri), remove all intervals that are covered by another interval in the list.

//     The interval [a, b) is covered by the interval [c, d) if and only if c <= a and b <= d.
    
//     Return the number of remaining intervals.
var removeCoveredIntervals = function(intervals) {
    const included=[]
    for(let i=0;i<intervals.length;i++){
        for(j=0;j<intervals.length;j++){
            if(intervals[i][0]<intervals[j][0] && intervals[i][1]>=intervals[j][1]){
                intervals.splice(j, 1);
                included.push(intervals[j])
            }
        }
    }
    return intervals.length
};

var removeCoveredIntervals = function(intervals) {
    intervals.sort((a,b)=>a[0]-b[0]||a[1]-b[1])
    console.log(intervals)
    let count=0;
    let prevEnd=-1;
    for(const interval of intervals){
        const currentEnd=interval[1];
        console.log(currentEnd,prevEnd,count)
        if(currentEnd<=prevEnd){
            count++
        }else{
            prevEnd=currentEnd;
        }
    }
    return intervals.length-count;

};


console.log(removeCoveredIntervals([[1, 4], [3, 6], [2, 8]])); // Output: 2

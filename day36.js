// There are some spherical balloons taped onto a flat wall that represents the XY-plane. The balloons are represented as a 2D integer array points where points[i] = [xstart, xend] denotes a balloon whose horizontal diameter stretches between xstart and xend. You do not know the exact y-coordinates of the balloons.

// Arrows can be shot up directly vertically (in the positive y-direction) from different points along the x-axis. A balloon with xstart and xend is burst by an arrow shot at x if xstart <= x <= xend. There is no limit to the number of arrows that can be shot. A shot arrow keeps traveling up infinitely, bursting any balloons in its path.

// Given the array points, return the minimum number of arrows that must be shot to burst all balloons.

 

// Example 1:

// Input: points = [[10,16],[2,8],[1,6],[7,12]]
// Output: 2
// Explanation: The balloons can be burst by 2 arrows:
// - Shoot an arrow at x = 6, bursting the balloons [2,8] and [1,6].
// - Shoot an arrow at x = 11, bursting the balloons [10,16] and [7,12].
// Example 2:

// Input: points = [[1,2],[3,4],[5,6],[7,8]]
// Output: 4
// Explanation: One arrow needs to be shot for each balloon for a total of 4 arrows.
// Example 3:

// Input: points = [[1,2],[2,3],[3,4],[4,5]]
// Output: 2
// Explanation: The balloons can be burst by 2 arrows:
// - Shoot an arrow at x = 2, bursting the balloons [1,2] and [2,3].
// - Shoot an arrow at x = 4, bursting the balloons [3,4] and [4,5].

// javascript 

function findMinArrowShots1(points) {
    if (points.length === 0) {
        return 0;
    }

    // Sort the balloons by their end points.
    points.sort((a, b) => a[1] - b[1]);

    let arrows = 1; // Initialize the count of arrows to 1.
    let prevEnd = points[0][1]; // Initialize the end point of the first balloon.

    // Loop through the sorted balloons and shoot arrows when necessary.
    for (let i = 1; i < points.length; i++) {
        if (points[i][0] > prevEnd) {
            // If the current balloon starts after the previous end point, we need to shoot a new arrow.
            arrows++;
            prevEnd = points[i][1]; // Update the end point.
        }
    }

    return arrows;
}


function findMinArrowShots(points) {
  if(points.length ===0){
    return 0
  }

  points.sort((a,b)=>a[1]-b[1])


  let arrow=1
let prevEnd=points[0][1]

for(let i=1;i<points.length;i++){
    if(points[i][0]>prevEnd){
        arrow++
        prevEnd=points[i][1]
    }
}
return arrow
}
// Example usage:
const points1 = [[10, 16], [2, 8], [1, 6], [7, 12]];
console.log(findMinArrowShots(points1)); // Output: 2

const points2 = [[1, 2], [3, 4], [5, 6], [7, 8]];
console.log(findMinArrowShots(points2)); // Output: 4

const points3 = [[1, 2], [2, 3], [3, 4], [4, 5]];
console.log(findMinArrowShots(points3)); // Output: 2

// java solution 
// import java.util.Arrays;

// public class MinArrowsToBurstBalloons {
//     public int findMinArrowShots(int[][] points) {
//         if (points.length == 0) {
//             return 0;
//         }

//         // Sort the balloons by their end points.
//         Arrays.sort(points, (a, b) -> Integer.compare(a[1], b[1]));

//         int arrows = 1; // Initialize the count of arrows to 1.
//         int prevEnd = points[0][1]; // Initialize the end point of the first balloon.

//         // Loop through the sorted balloons and shoot arrows when necessary.
//         for (int i = 1; i < points.length; i++) {
//             if (points[i][0] > prevEnd) {
//                 // If the current balloon starts after the previous end point, we need to shoot a new arrow.
//                 arrows++;
//                 prevEnd = points[i][1]; // Update the end point.
//             }
//         }

//         return arrows;
//     }

//     public static void main(String[] args) {
//         MinArrowsToBurstBalloons solution = new MinArrowsToBurstBalloons();
//         int[][] points1 = {{10, 16}, {2, 8}, {1, 6}, {7, 12}};
//         System.out.println(solution.findMinArrowShots(points1)); // Output: 2

//         int[][] points2 = {{1, 2}, {3, 4}, {5, 6}, {7, 8}};
//         System.out.println(solution.findMinArrowShots(points2)); // Output: 4

//         int[][] points3 = {{1, 2}, {2, 3}, {3, 4}, {4, 5}};
//         System.out.println(solution.findMinArrowShots(points3)); // Output: 2
//     }
// }

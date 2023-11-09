// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

 

// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]

import java.util.Arrays;

public class day38 {
    public static void moveZeroes(int[] nums) {
        int nonZeroIndex = 0;

        for (int currentIndex = 0; currentIndex < nums.length; currentIndex++) {
            if (nums[currentIndex] != 0) {
                nums[nonZeroIndex] = nums[currentIndex];
                if (currentIndex != nonZeroIndex) {
                    nums[currentIndex] = 0;
                }
                nonZeroIndex++;
            }
        }
    }

    public static void main(String[] args) {
        System.out.println("Hello, World!");

        // Test Case 1
        int[] nums1 = {0, 1, 0, 3, 12};
        moveZeroes(nums1);
        System.out.println(Arrays.toString(nums1)); // Expected output: [1, 3, 12, 0, 0]

        // Test Case 2
        int[] nums2 = {0};
        moveZeroes(nums2);
        System.out.println(Arrays.toString(nums2)); // Expected output: [0]

        // Test Case 3
        int[] nums3 = {1, 2, 3, 4, 5};
        moveZeroes(nums3);
        System.out.println(Arrays.toString(nums3)); // Expected output: [1, 2, 3, 4, 5]

        // Test Case 4
        int[] nums4 = {0, 0, 0, 0, 0};
        moveZeroes(nums4);
        System.out.println(Arrays.toString(nums4)); // Expected output: [0, 0, 0, 0, 0]

        // Test Case 5
        int[] nums5 = {0, 2, 0, 0, 3, 0, 4, 0};
        moveZeroes(nums5);
        System.out.println(Arrays.toString(nums5)); // Expected output: [2, 3, 4, 0, 0, 0, 0, 0]
    }
}

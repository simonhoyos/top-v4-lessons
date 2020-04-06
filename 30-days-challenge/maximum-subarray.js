/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxSum = nums[0];
    let subNums = nums;

    while(subNums.length > 0) {
        subNums.reduce((acc, cur) => {
            let sum = acc + cur;
            maxSum = Math.max(maxSum, sum);
            return sum;
        }, 0);
        const [_, ...rest] = subNums;
        subNums = rest;
    }

    return maxSum;
};

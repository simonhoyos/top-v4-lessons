/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    const add = [];
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === 0) {
            nums.splice(i,1);
            add.push(0);
            i--;
        }
    }
    nums.push(...add);
};

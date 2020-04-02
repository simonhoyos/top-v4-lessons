/**
 * @param {number[]} nums
 * @return {number}
 */
// var singleNumber = function(nums) {
//   return nums.filter(num => nums.indexOf(num) === nums.lastIndexOf(num))[0];
// }

// var singleNumber = function(nums) {
//     const cache = {}
//     return nums.filter((num, i) => {
//         cache[num] = cache[num] !== false ? i === nums.lastIndexOf(num) : cache[num];
//         return cache[num];
//     })[0];
// }

// var singleNumber = function(nums) {
//     const cache = {}
//     return nums.filter((num, i) => {
//         if(num === nums[i + 1]) {
//             cache[num] = false;
//         }
//         cache[num] = cache[num] !== false ? i === nums.lastIndexOf(num) : cache[num];
//         return cache[num];
//     })[0];
// }

var singleNumber = function(nums) {
  return nums.reduce((a, b) => a ^ b , 0);
}

// var singleNumber = function(nums) {
//     const cache = {}
//     for(let num of nums) {
//         if(cache[num] === false) {
//             continue;
//         }

//         const isUnique = nums.indexOf(num) === nums.lastIndexOf(num);

//         if(isUnique) {
//             return num;
//         }

//         cache[num] = isUnique;
//     }
// };

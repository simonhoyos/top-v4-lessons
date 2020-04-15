/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const zeros = [];
    const product = nums.reduce((prod, num, i) => {
        if(num === 0) {
            zeros.push(i)
            return prod;
        };
        return prod * num;
    }, 1);

    return nums.map((num, i) => {
        if(zeros.length > 1) return 0;
        if(zeros.length <= 0) return product / num;
        if(zeros.includes(i)) return product;
        return 0
    });
};

// var productExceptSelf = function(nums) {
//    return nums.map((num, i) => {
//        return nums.reduce((acc, cur, j) => {
//            if(i === j) return acc;
//            return acc * cur;
//        }, 1);
//    });
// };

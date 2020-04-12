/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    while(stones.length > 1) {
        stones.sort((a,b) => b - a);
        const [x, y] = stones;
        stones.splice(0, 2);
        stones.push(x - y);
    }

    return stones[0];
};

// var lastStoneWeight = function(stones) {
//     while(stones.length > 1) {
//         stones.sort((a,b) => b - a);
//         const x = stones.shift();
//         const y = stones.shift();
//         stones.push(x - y);
//     }

//     return stones[0];
// };

// var lastStoneWeight = function(stones) {
//     let sorted = stones.slice().sort((a,b) => b - a);

//     while(sorted.length > 1) {
//         const [x, y, ...rest] = sorted;
//         const res = Math.abs(x - y);
//         sorted = [res, ...rest].sort((a, b) => b - a);
//     }

//     return sorted[0];
// };

/**
 * @param {string} s
 * @param {number[][]} shift
 * @return {string}
 */
var stringShift = function(s, shift) {
    const length = s.length;
    let result = s;
    shift.forEach(([direction, amount]) => {
        result = direction === 0 ?
            result.substring(amount) + result.substring(0, amount) :
            result.substring(length - amount) + result.substring(0, length - amount);
    });

    return result;
};

// var stringShift = function(s, shift) {
//     const length = s.length;
//     let result = s;
//     shift.forEach(([direction, amount]) => {
//         if(direction === 0) {
//             result = result.substring(amount) + result.substring(0, amount);
//         }

//         if(direction === 1) {
//             result = result.substring(length - amount) + result.substring(0, length - amount);
//         }
//     });

//     return result;
// };

/**
 * @param {number[]} arr
 * @return {number}
 */
var countElements = function(arr) {
    let sum = 0;
    const map = arr.reduce((acc, cur) => {
        acc[cur] = acc[cur] + 1 || 1;
        return acc;
    }, {})

    arr.forEach(el => {
        if(map[el + 1]) {
            sum++;
        }
    });

    return sum;
};

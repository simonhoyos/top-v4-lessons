/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
    let count1 = 0;
    let count2 = 0;

    for(let char of s) {
        if(char === '(') {
            count1++;
            count2++;
        } else if(char === ')') {
            count1--;
            count2--;
        } else {
            count1--;
            count2++;
        }
        if(count2 < 0) break;
        count1 = count1 <= 0 ? 0 : count1;
    }

    return count1 === 0
};

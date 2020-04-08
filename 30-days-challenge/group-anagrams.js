/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const cache = {}
    const result = [];

    for(let i = 0; i < strs.length; i++) {
        const current = strs[i].split('').sort().join('');
        cache[current] = cache[current] ? cache[current].concat(strs[i]) : [strs[i]];
    }

    for(let key in cache) {
        result.push(cache[key]);
    }


    return result;
};

/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
    const charsS = [];
    const charsT = [];

    for(let i = 0; i < S.length; i++) {
        if(S[i] === '#') {
            charsS.pop();
        } else {
            charsS.push(S[i]);
        }
    }

    for(let i = 0; i < T.length; i++) {
        if(T[i] === '#') {
            charsT.pop();
        } else {
            charsT.push(T[i]);
        }
    }

    return charsS.join('') === charsT.join('');
};

/**
 * @param {number} n
 * @return {boolean}
 */
// var isHappy = function(n) {
//     const output=[]
//     while (n) {
//         output.push(n % 10);
//         n = Math.floor(n/10);
//     }
//     const ans = output.reduce((acc,ele)=>acc+(ele**2),0)
//     if (ans===1 ){
//       return true
//     } else if (ans===4){
//       return false
//     } else {
//       return  isHappy(ans)
//     }
// };

var isHappy = function(n) {
    const calculated = {};
    let num = `${n}`;

    while(true) {
        if(calculated[num]) {
            return false;
        }
        calculated[num] = true;
        num = '' + num.split('').reduce((acc, cur) => acc + cur**2, 0);
        if(num == 1) return true;
    }
}

// var isHappy = function(n) {
//     const calculated = {};
//     let num = `${n}`;

//     while(true) {
//         if(calculated[num]) return false;
//         calculated[num] = true;
//         num = '' + num.split('').reduce((acc, cur) => acc + cur**2, 0);
//         if(num == 1 || num == 7) return true
//     }
// }

// var isHappy = function(n) {
//     const happy = ['1', '7'];
//     let num = `${n}`;

//     while(num.length > 1) {
//         num = '' + num.split('').reduce((acc, cur) => acc + cur**2, 0);
//     }

//     if(happy.includes(num)) return true;
//     return false;
// }

// var isHappy = function(n) {
//     const correct = ['1', '7'];
//     let num = `${n}`;
//     while(num.length > 1) {
//         let sum = 0;
//         let numArr = num.split('');
//         for(let digit of numArr) {
//             sum += Math.pow(parseInt(digit),2);
//         }
//         num = `${sum}`;
//     }

//     if(correct.includes(num)) return true;
//     return false;
// };

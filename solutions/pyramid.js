'use strict';
// function pyramid(numPisos) {
//   for (let i = 0; i < numPisos; i++) {
//     let piso = '';

//     for (let j = 1; j < numPisos - i; j++) {
//       piso = piso + "*";
//     };

//     for (let j = -1; j < i * 2; j++) {
//       piso = piso + '#';
//     };

//     for (let j = 1; j < numPisos - i; j++) {
//       piso = piso + "*";
//     };

//     console.log(piso);
//   };
// };

// function pyramid(num){
//   let b = " ";
//   let j = 1;
//   let d = num;

//   if (num === 1) {
//     console.log("#");
//   } else {
//     for (let i=0;i<num;i++){
//         b="#".repeat(i+j);
//         j++
//         let c = " "
//         d=d-1
//         c=c.repeat(d);
//         console.log (c+b+c)
//     }
//   }
// }

// function pyramid(num){
//   let block='#';
//   let str = '';

//   for (let i = 1; i <= num; i++) {
//       let spaceFi = " ".repeat(num - i);
//       console.log(spaceFi + block + spaceFi);
//       // block = block + "#" + "#";
//       str += `\n${spaceFi}${block}${spaceFi}`;
//       block += "##";
//   };

//   return str;
// }

const pyramid = (level) => {
  let str = '';

  if (level <= 0) {
    console.log('You need digit a number greater than 0');
    return;
  }

  let auxStr = ''
  let space = level-1
  let sharp = 1

  for(let i=0; i<level;i++){

    for(let x=0; x<space; x++){
      auxStr += '-'
    }

    for(let x=0; x<sharp; x++){
      auxStr += '#'
    }

    for(let x=0; x<space; x++){
      auxStr += '-'
    }

    if(i != level){
      auxStr += '\n'
    }
    str +=auxStr
    auxStr=''
    space -= 1
    sharp += 2
  }

  return str
}


pyramid(1);
pyramid(2);
pyramid(3);

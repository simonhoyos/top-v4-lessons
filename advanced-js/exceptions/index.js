'use strict';

// throw new Error('Ups salio mal');
// throw new EvalError('Ups salio mal');
// throw new RangeError('Ups salio mal'); // número no es valido
// throw new ReferenceError('Ups salio mal'); // una variable no declarada

// a = 1;
// console.log(noExiste);

// throw new SyntaxError('Ups salio mal'); // error en la syntaxis

// function error(ar {
//   console.log(arg)
// }
// const obj = {
//   'a': 1

// throw new TypeError('Ups salio mal'); // error en el tipo de dato

// "string".map();
// let a;
// a();

// throw new URIError('Ups algo salio mal');

function pyramid(level) {
  if(level <= 0) {
    throw new RangeError(`Se esperaba que nivel fuera mayor que 0, y es ${level}`)
  }

  console.log('ok');
}

function other(num) {
  try {
    pyramid(num);
  } catch(error) {
    console.log(`numero de niveles ${num}`)
    // other(num + 1);
  } finally {
    console.log('simpre se muestra!')
  }
}

function otherOther(num) {
  other(num);
}

otherOther(-1);
otherOther(1);


function app() {
  let count = 0;

  function addToCount() {
    count++;
  }

  function getCount() {
    console.log(count);
  }

  return {
    addToCount,
    getCount
  }
}

const { addToCount, getCount } = app();

addToCount();
addToCount();
addToCount();
addToCount();
getCount();

function multiply() {
  let cache = {
    10: 100,
    50: 500,
  }

  return function multiplyBy10(num) {
    if(cache[num]) {
      return cache[num];
    }

    const result = 10 * num;
    cache[num] = result;

    return result;
  }
}

const multiplyBy10 = multiply();

multiplyBy10(10);
multiplyBy10(50);
multiplyBy10(10);


¿Qué es el scope en JavaScript?
El alcance de las variables

corchetes, bloque, funciones, closure

El comportamiento que mueve la declaración de variables al principio del archivo o función


hoist(); // Error: hoist is not a function

const hoist = function() {
  console.log("I love hoisting!")
}














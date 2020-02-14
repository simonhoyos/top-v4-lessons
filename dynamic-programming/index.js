// Complejidad temporal O(2^n)
// Complejidad espacial O(n)

// temporal O(2^n)
// function fib(n) {
//   if(n <= 1) {
//     console.log('el valor es 0 o 1')
//     return n;
//   }

//   console.log(`calculando para ${n}...`)
//   return fib(n-1) + fib(n-2);
// }

// temporal O(n)
// espacial O(n)
function memoization() {
  const cache = {};

  return function(n) {

    if(cache[n]) {
      console.log(`la propiedad ${n} ya está en el cache, retornando valor...`)
      return cache[n];
    }

    if(n <= 1) {
      console.log('el valor es 0 o 1')
      return n;
    }

    //O(n)
    console.log(`calculando para ${n}...`)
    const result = fib(n - 1) + fib(n - 2);
    cache[n] = result;
    return result;
  }
}

const fib = memoization();

// function tabulation() {
//   const data = [0, 1];

//   return function fib(n) {
//     if(data[n]) {
//       console.log(`el resultado de la operación ${n} ya está en data`);
//       return data[n];
//     }

//     for(let i = 2; i <= n; i++) {
//       console.log(`calculando ${i}...`);
//       data[i] = data[i - 1] + data[i - 2];
//     }

//     return data[n];
//   }
// }

// const fib = tabulation();

console.log(fib(10));
console.log(fib(5));

function multiply(factor) {
  const cache = {};

  return function (num) {
    if(chache[num]) {
      return chache[num];
    }
    return factor * num;
  }
}

const multiplyBy10 = multiply(10);

multiplyBy10(1);
multiplyBy10(2);
multiplyBy10(1);
multiplyBy10(2);
multiplyBy10(1);

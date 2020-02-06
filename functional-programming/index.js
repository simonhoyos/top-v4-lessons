function foo() {
  console.log('executing foo...')
  console.log('foo');
}

const fuz = foo;
// no hoisting
const a = function () {}

fuz(); // foo

// High order function o función de alto orden
function bar(cb) {
  // callback: funcion que se ejecuta dentro de la ejecución de bar
  cb();
}

bar(foo); // foo

function buz() {
  // funciones anonimas
  return function () {
    console.log('buz');
  }
}

const boo = buz();
boo();

const arr = [1, 2, 3];
const arr2 = [4, 5, 6];

// for(let i = 0; i < arr.length; i++) {
//   arr[i]++;
// }

// console.log(arr);
function addOne(num) {
  return num + 1;
}

// Array.prototype.map = function(callback) {
//   const arr = this;
//   const newArr = [];

//   for(let i = 0; i < arr.length; i++) {
//     newArr.push(callback(arr[i]));
//   }

//   return newArr;
// }

const newArr = arr.map(addOne);
const newArr2 = arr2.map(addOne);

console.log(newArr);
console.log(newArr2);

const sum = arr.reduce((acc, cur) => acc + cur);

console.log(sum);

const charMap = 'simon'.split('').reduce((acc, cur) => {
  // validar si el caracter ya esta en el mapa
  if(acc[cur] !== undefined) {
    // si el caracter ya esta en el mapa incrementamos el contador
    acc[cur] += 1;
  } else {
    // si el caracter no esta en el mapa, creamos la propiedad y la iniciamos en 0
    acc[cur] = 1;
  }
  // retonar el nuevo mapa
  return acc;
}, {});

console.log(charMap)

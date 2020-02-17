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

console.log(charMap);

// Inmutabilidad
let arr = [1, 2, 3];
let mapped = [2, 4, 6];

const str = "Hola mundo";
const str2 = str.slice(0, 5);
const str3 = str3.toUpperCase();

console.log(str);

let str = "Hola mundo";
str = str.slice(0, 5);
str = str3.toUpperCase();

console.log(str);

const obj = {
  a: 7
};
// obj.a = 3;
const obj2 = {
  ...obj,
  a: 5,
  b: 8
}

const obj3 = {
  c: 7
}

const obj3 = Object.assign({}, obj, obj2, obj3, { b: 5 });
// {
//   a: 5,
//   c: 7,
//   b: 5
// }
// 1. Crea un nuevo objeto.
// 2. a ese objeto le agrega las propiedades de obj.
// 3. a ese objeto le agreg las propiedades de obj2.

// map, filte, reduce, concat, slice
const arr = [];
// arr[1] = 0; // modifica
// arr.push(0); // modifica
// arr.splie() // modifica
const arr2 = arr.concat(0);
const arr3 = [ ...arr2, 1 ];

console.log(arr3); // [ 0, 1]

let str = '';

function pureFuction(a, b) {
  // side effects
  // str += 'hola';
  // console.log('hola mundo');
  // requestServer();

  return a + b;
}

function impureFuction(a) {
  str += a;
  return str;
}

// Siempre retorna lo mismo
pureFunction(1, 2); // 3
pureFunction(1, 2); // 3
pureFunction(1, 2); // 3

// Dados los mismos argumentos el resultado no es el mismo
impureFuction('hola'); // hola
impureFuction('hola'); // holahola
impureFuction('hola'); // holaholahola

let str = "Hola"
str.toUpperCase()
console.log(str) // Hola



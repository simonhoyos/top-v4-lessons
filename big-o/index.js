// Complejidad lineal
// complejidad temporal O(n)
// Peor
// Mejor

function printNum(list) {
  for(let i = 0; i < list.length; i++) {
    console.log(list[i]);
  }
}

// Asumiendo que for each recorre cada uno de los elementos O(n)

function printNum(list) {
  list.forEach((num) => {
    console.log(num);
  });

  return list[4];
}

// complejidad espacial O(n)

function duplicateArray(list) {
  let newArray = [];

  for(let i = 0; i < list.length; i++) {
    newArray.concat(list[i]);
  }

  return newArray;
}

// Complejidad exponencial
// O(n^2)

function duplicateNum(list) {
  for(let i = 0; i < list.length; i++) {
    for(let j = 0; j < list.length; j++) {
      // do something
    }
  }
}

// Complejidad logaritmica
// O(log n)

function findNum() {
  let num = Math.ceil(Math.random() * 10);
  let guess = 0;

  while(num !== 0) {
    // try guessing number
  }
}

// complejidad constante
// O(1)

function sum(a, b) {
  const result = a + b;

  return result;
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

array[4];


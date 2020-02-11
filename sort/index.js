// [4, 5, 1, 3, 2]
// [1, 2, 3, 4, 5]

// selection sort
// peor: O(n^2)
// mejor: O(n^2)
// [4, 5, 3]
// [1, 2, 3, 4, 5]

function selectionSort(list) {
  const result = [];

  while(list.length > 0) {
    let min = list[0];
    let index = 0;

    for(let i = 1; i < list.length; i++) {
      if(list[i] < min) {
        min = list[i];
        index = i;
      }

      // min = list[i] < min ? list[i] : min;
      // index = list[i] < min ? i : index;
    }

    result.push(min);
    list.splice(index, 1);
    console.log(list);
    console.log(result);
  }

  return result;
}

console.log(selectionSort([4, 5, 1, 3, 2]));

// insertion sort
// peor: O(n^2)
// mejor: O(n)
// Va recorrer el arreglo original hasta que quede vacio
// Agrega el elemento en la posición correcta
// [4, 5, 1, 3, 2]
// [1, 2, 3, 4, 5]



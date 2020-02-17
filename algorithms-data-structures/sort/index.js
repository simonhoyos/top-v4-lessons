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


// bubble sort
// O(n) - O(n^2)
// Recorrer el arreglo hasta que este ordenado.
// toma pares de elementos contiguos y los cambia según sea necesario
// [4, 5, 1, 3, 2]
// [4, 5, 1, 3, 2]
// [4, 1, 5, 3, 2]
// [4, 1, 3, 5, 2]
// [4, 1, 3, 2, 5]
// [1, 4, 3, 2, 5]
// [1, 3, 4, 2, 5]
// [1, 3, 2, 4, 5]
// [1, 3, 2, 4, 5]
// [1, 2, 3, 4, 5]

// merge sort
// O(n log n)
// [4, 5, 1, 3, 2]
// [4, 5] [1, 3, 2] = [1, 2, 3, 4, 5]
// [4] [5] = [4, 5]   [1] [3, 2] = [1, 2, 3]
//                 [3] [2] = [2,3]
function mergeSort(list) {
  if(list.length <= 1) return list;

  const half = Math.floor(list.length / 2);
  const start = mergeSort(list.slice(0, half));
  const end = mergeSort(list.slice(half));

  const result = [];
  let startIndex = 0;
  let endIndex = 0;

  while(startIndex < start.length || endIndex < end.length) {
    if(start[startIndex] < end[endIndex] || end[endIndex] === undefined) {
      result.push(start[startIndex]);
      startIndex++;
    } else {
      result.push(end[endIndex]);
      endIndex++;
    }
  }

  return result;
}

console.log(mergeSort([4, 5, 1, 3, 2]));

// quick sort
// O(n log n)
// [4, 5, 1, 3, 2]

// [] 1 [3, 2, 4, 5] = [1, 2, 3, 4, 5]
//      [] 2 [4, 5, 3] = [2, 3, 4, 5]
//           [4, 3] 5 [] = [3, 4, 5]
//           [3, 4]

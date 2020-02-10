// Busqueda lineal
// Busca elemento por elemento hasta encontrar el resultado.
// O(n)
// function findIndex(list, num) {
//   for(let i = 0; i < list.length; i++) {
//     if(list[i] === num) {
//       return i;
//     }
//   }

//   return -1;
// }

// binaria
// Busca el elemento en el medio de la lista y valida si el elemento puede estar
// en la primera mitad o en la segunda, luego descarta una de las mitades, y
// repite el proceso.
// requesito: La lista tiene que estar ordenada
// O(log n)
function binarySearch(list, num) {
  let i = Math.floor(list.length / 2);
  let start = 0;

  while(i <= list.length) {
    if(list[i] === num) {
      return start + i;
    } else if(list[i] > num) {
      list = list.slice(0, i);
      i = Math.floor(list.length / 2);
    } else if(list[i] < num) {
      list = list.slice(i + 1);
      start = i + 1;
      i = Math.floor(list.length / 2);
    }
  }

  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6], 6));

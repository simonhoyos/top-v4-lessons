// We are given a list nums of integers representing a list compressed with run-length encoding.

// Consider each adjacent pair of elements [a, b] = [nums[2*i], nums[2*i+1]] (with i >= 0).  For each such pair, there are a elements with value b in the decompressed list.

// Return the decompressed list.

// Input: lista de números
// Output: Lista de números descomprimidos

function decompressRLElist(nums) {
// 1. creamos una lista vacia.
  const list = [];
// 2. Recorrer la lista de 2 en 2 empezando en el primer elemento.
  for(let i = 0; i < nums.length; i += 2) {
// 3. Agregar a la nueva lista el número contiguo tan veces me indique el anterior.
    for(let j = 0; j <= nums[i]; j++) {
      list.concat(nums[i + 1]);
    }
  }

  return list;
}

// Balanced strings are those who have equal quantity of 'L' and 'R' characters.
// Given a balanced string s split it in the maximum amount of balanced strings.
// Return the maximum amount of splitted balanced strings.

// Input: cadena balanceada
// Output: la cantidad de subcadenas

function balancedStringSplit(s) {
  let balancedStrings = 0;
// 1. Inicio el conteo del caracter R.
  let countR = 0;
// 2. Inicio el conteo del caracter L.
  let countL = 0;
// 3. Reccorer la cadena en orden.
  for(let i = 0; i < s.length; i++) {
//   4. Tomo el primer elemento.
    const char = s[i];
//   5. Si es R:
    if(char === "R") {
//     6. aumento el conteo del caracter R.
      countR++;
    //   7. Si es L:
    } else {
      //     8. aumento el conteo de L.
      countL++;
    }

    //   9. si el conteo de R y L es el mismo:
    if(countL === countR) {
      //     10. aumento el conteo de substrings.
      balancedStrings++;
    }
  }
  return balancedStrings;
}







// Implement function ToLowerCase() that has a string parameter str, and returns the same string in lowercase.

// Reccorrer la cadena de texto e ir cambiando cada uno de los elementos a minusculas

// Input: string
// Output: lowercase string.

function toLowerCase(str) {
  const abc = "abcdefghijklmnopqrstuvwxyz";
  const ABC = abc.toLocaleUpperCase();
// 1. Recorrer cadena de texto orden
  let lwcStr = '';

  for(let i = 0; i < str.length; i++) {
// 2. tomo un elemento
    let char = str[i];
// 3. lo transformo a minusculas
    const index = ABC.indexOf(char);

    if(index >= 0) {
      lwcStr += abc[index];
    } else {
      lwcStr += char;
    }
// 4. si no es el ultimo caracter, vuelvo al paso 2. de lo contrario termina
  }
  return lwcStr;
}

console.log(toLowerCase("LOVELY"))

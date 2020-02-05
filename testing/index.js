/**
 * si a es mayor que b, sumamos ambos.
 * si b es mayor que a, a a le restamos b,
 * si son iguales retorna a.
 */

function calc(a, b) {
  if (a > b) {
    return a + b;
  } else if (b > a) {
    return b - a;
  } else {
    return a;
  }
}

module.exports = calc;

const convert = output => (output ? 1 : 0);

function NAND(x, y) {
  // You can use whatever JS operators that you would like: &&, ||, !
  return convert(!(x && y));
}

function NOT(n) {
  // Do not use !
  return convert(NAND(n, n));
}

function AND(x, y) {
  // Do not use &&, ||, or !
  // You can use any of the functions that you have already written
  return convert(NOT(NAND(x, y)));
}

function OR(x, y) {
  // Do not use ||, &&, or !
  // You can use any of the functions that you have already written
  return convert(NAND(NOT(x), NOT(y)));
}

function XOR(x, y) {
  // Do not use ||, &&, or !
  // You can use any of the functions that you have already written
  return convert(AND(NAND(x, y), OR(x, y)));
}

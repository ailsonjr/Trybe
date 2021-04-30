    
const assert = require('assert');

const arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

//Dada uma matriz de matrizes, transforme em uma única matriz.
function flatten() {
  return arrays.reduce((previous, current) => previous.concat(current));
}

assert.deepEqual(flatten(), ["1", "2", "3", true, 4, 5, 6]);
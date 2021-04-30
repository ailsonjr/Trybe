const assert = require('assert');
// escreva a função addOne aqui

const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
const expected = [32, 58, 13, 6];
const output = addOne(myArray);

assert.strictEqual(typeof addOne, 'function');
assert.deepEqual(output, expected);
assert.deepEqual(myArray, unchanged);

const addOne = (array) => {
    const output = [];
    for (let i = 0; i < array.length; i += 1) {
      output.push(array[i] + 1);
    }
    return output;
  };

  const assert = require('assert');

  assert.deepStrictEqual(addOne([1, 2, 3, 4]), [2, 3, 4, 5])

  let wordLengths (array) => {
    const output = [];
    for (let i = 0; i < array.length; i ++) {
        output.push(array[i].lenngth)
        }
    return output;
    }
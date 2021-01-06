const addAllnumbers = (array) => {
    let output = 0;
    for (const item in array) {
      output += array[item];
    }
    return output;
  };

  const assert = require('assert');

  assert.deepStrictEqual(addAllnumbers([1, 2, 3, 4]),10);console.log('A array de entrada é [1, 2, 3, 4]) e o output é 10');

  assert.deepStrictEqual(addAllnumbers([5,5,5]), 15);console.log('A array de entrada é [5, 5, 5]) e o output é 15');

  console.log("Passou no teste!")
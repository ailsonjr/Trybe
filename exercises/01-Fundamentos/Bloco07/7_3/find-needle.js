const findTheNeedle = (array, word) => {
    let output = -1;
    for (const index in array) {
      if (word === array[index]) {
        output = Number(index);
      }
    }
    return output;
  };

  const assert = require('assert');

  assert.deepStrictEqual(findTheNeedle)
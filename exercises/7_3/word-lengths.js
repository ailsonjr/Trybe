const wordLengths = (array) => {
    const output = [];
    for (let i = 0; i < array.length; i += 1) {
      output.push(array[i].length);
    }
    return output;
  };

  const assert = require('assert');

  assert.deepStrictEqual(wordLengths(['oi', 'pão', 'cabo', 'troca']), [2, 3, 4, 5])
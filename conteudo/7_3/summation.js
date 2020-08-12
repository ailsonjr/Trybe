// Implemente uma função `summationOf(number)` que recebe um número inteiro
// e retorna o seu somatório.

// Por exemplo:

// - `summationOf(1)` retorna 1: de 1 até 1 = 1
// - `summationOf(3)` retorna 6: de 1 até 3 = 1 + 2 + 3 = 6
// - `summationOf(5)` retorna 15: de 1 até 5 = 1 + 2 + 3 + 4 + 5 = 15

const assert = require('assert');

const summationOf = number => {
  let summation = 0;

  for (let value = 1; value <= number; value +=1) {
    summation += value;
  }

  return summation;
};

assert.strictEqual(typeof(summationOf), "function");
assert.strictEqual(summationOf(1), 1);
assert.strictEqual(summationOf(3), 6);
assert.strictEqual(summationOf(5), 15);
assert.strictEqual(summationOf(0), 0);

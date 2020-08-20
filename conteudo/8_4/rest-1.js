const assert = require('assert');

const sumAll = (text, ...numbers) => {
  const sum = numbers.reduce((previousValue, currentValue) => previousValue + currentValue);
  return `${text} ${sum}`;
}

assert.strictEqual(sumAll("O total do somatório é:", 1, 2), "O total do somatório é: 3");
assert.strictEqual(sumAll("O total do somatório é:", 1, 2, 3), "O total do somatório é: 6");
assert.strictEqual(sumAll("O total do somatório é:", 1, 2, 3, 4, 5), "O total do somatório é: 15");
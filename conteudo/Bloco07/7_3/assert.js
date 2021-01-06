// const assert = require('assert');

// // assert.equal(50, 50); // OK
// // assert.equal(50, 70); // AssertionError: 50 == 70

// function division(x, y) {
//   return x / y;
// }

// const expected = division(9, 3);

// assert.equal(expected, 3, 'Mensagem customizada do erro');

// const assert = require('assert');

// function add(a, b) {
//   return a + b;
// }

// const expected = add(1, 2);

// assert(expected === 3, 'one plus two is three');
// assert.ok(expected === 3, 'one plus two is three');
// assert.equal(expected, 3, 'one plus two is three');
// assert.notEqual(expected, 4, 'one plus two is three (NOT Four!)');

const assert = require('assert');

const list1 = [1, 2, 3, 4, 5];
const list2 = [1, 2, 3, 4, 5];

assert.deepEqual(list1, list2, 'deepEqual checks the elements in the arrays are identical');

const person1 = { name: 'john', age: 21 };
const person2 = { name: 'john', age: 21 };

assert.deepEqual(person1, person2, 'these two objects are the same');

const person3 = { name: 'john', age: 19 };

assert.notDeepEqual(person1, person3, 'these two objects are different');
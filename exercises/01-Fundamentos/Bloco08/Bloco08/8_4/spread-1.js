const assert = require('assert');

const horrorBooks = ['It', 'The Shining'];
const scifiBooks = ['I, Robot', 'Caves of Steel', 'The End of Eternity'];

// 1 FORMA DE FAZER
// let awesomeBooks = [];
// for (let index = 0; index < horrorBooks.length; index += 1) {
//   awesomeBooks.push(horrorBooks[index]);
// }

// for (let index = 0; index < scifiBooks.length; index += 1) {
//   awesomeBooks.push(scifiBooks[index]);
// }

// 2 FORMA DE CONCATENAR ARRAY
// const awesomeBooks = horrorBooks.concat(scifiBooks);

const awesomeBooks = [...horrorBooks, ...scifiBooks];
// const awesomeBooks = ['It', 'The Shining', 'I, Robot', 'Caves of Steel', 'The End of Eternity'];

assert.deepEqual(
  awesomeBooks,
  ['It', 'The Shining', 'I, Robot', 'Caves of Steel', 'The End of Eternity']
);

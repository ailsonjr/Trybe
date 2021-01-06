// setTimeout(() => {
//   console.log('Comprar parafusos') // Comprar parafusos
//   console.log('Adicionar ao estoque') // Adicionar ao estoque
// }, 2000);

// console.log('1 - Receber roda'); // 1 - Receber roda
// console.log('2 - Encaixar parafusos'); // 2 - Encaixar parafusos
// console.log('3 - Fixar roda no carro'); // 3 - Fixar roda no carro


const assert = require('assert');

// const pushNumber = (list, number) => list.push(number);

let numbers = [];

// SINCRONO
// pushNumber(numbers, 1);
// pushNumber(numbers, 2);
// pushNumber(numbers, 3);

// assert.deepStrictEqual(numbers, [1, 2, 3]); // Funciona

// ASSINCRONO
// setTimeout(() => pushNumber(numbers, 1), 3000);
// pushNumber(numbers, 2);
// pushNumber(numbers, 3);

// assert.deepStrictEqual(numbers, [1, 2, 3]); // essa validação falha pois o n 1 só é adicionado após 3 segundos

const pushNumber = (list, number) => {
  list.push(number);
  console.log(list);
};

setTimeout(() => pushNumber(numbers, 1), 3000);
pushNumber(numbers, 2);
pushNumber(numbers, 3);

setTimeout(() => assert.deepStrictEqual(numbers, [2, 3, 1]), 3000);

const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

//Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.
function containsA() {
  return names.reduce((prev, current) =>
    prev + current.split('').reduce((cont, letter) => {
      if (letter === 'a' || letter === 'A') return cont + 1;
      return cont;
    }, 0), 0);
}



assert.deepEqual(containsA(), 20);
const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// Exercício 1
// Crie uma função para adicionar o turno da manhã na lesson2. Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

const addNewKey = (obj, key, value) => {
  obj[key] = value;
};

addNewKey(lesson2, 'turno', 'noite');

// Exercício 2
// Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

const listKeys = (obj) => Object.keys(obj);
console.log(listKeys(lesson1));

// Exercício 3
// Crie uma função para mostrar o tamanho de um objeto.

const objLength = (obj) => Object.keys(obj).length;
console.log(objLength(lesson1));

// Exercício 4
// Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

const objValues = (obj) => Object.values(obj);
console.log(objValues(lesson1));

/* Exercício 5
 Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign. Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1, lesson2 e lesson3. Ao executar o comando console.log(allLessons), a saída deverá ser a seguinte:*/

/*
{
  lesson1:
   { materia: 'Matemática',
     numeroEstudantes: 20,
     professor: 'Maria Clara',
     turno: 'manhã' },
  lesson2:
   { materia: 'História',
     numeroEstudantes: 20,
     professor: 'Carlos',
     turno: 'noite' },
  lesson3:
   { materia: 'Matemática',
     numeroEstudantes: 10,
     professor: 'Maria Clara',
     turno: 'noite' }
};
*/

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
console.log(allLessons);

/*Exercício 6
Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas. */

const totalStudents = (obj) => {
  let total = 0;
  const array = Object.keys(obj);
  for (i in array) {
    total += obj[array[i]].numeroAlunos;
  }
  return total;
};
console.log(totalStudents(allLessons));


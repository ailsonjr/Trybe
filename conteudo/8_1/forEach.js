//  imagine que você tem um array de objetos. Cada objeto é um estudante com seu nome, nota e situação no curso. Para ser aprovado, ele precisa obter uma nota acima de 60. Como você pode ver, o objeto abaixo está desatualizado e precisa ser atualizado: ele não contém a informação acerca da aprovação. Para atualizá-lo, você provavelmente escreveria algo assim, utilizando loops:

const students = [
  { name: 'Maria', note: 70, approved: '' },
  { name: 'José', note: 56, approved: '' },
  { name: 'Roberto', note: 90, approved: '' },
  { name: 'Ana', note: 81, approved: '' }
];

function verifyNote(student) {
  if (student.note >= 60) {
    student.approved = 'Aprovado';
  } else {
    student.approved = 'Recuperação';
  }
}
// Usando for da maneira convencional
let i;
for (i = 0; i < students.length; i += 1) {
  verifyNote(students[i]);
}

console.log(students);

//Usando forEach
students.forEach(verifyNote);

console.log(students);

/* As duas abordagens geram o mesmo resultado, mas qual a diferença? Vamos analisar as duas soluções e ver em que elas diferem!
   Na solução usando for, é necessário se preocupar muito mais com detalhes de controle de lógica de execução do que com sua solução em si - você só quer atualizar uma propriedade de cada estudante, afinal. Você precisa:
  Declarar uma variável para controlar a iteração pelo array;
  Inicializar essa variável com zero, a primeira posição do array;
  Controlar o ponto de parada, quando o fim do array foi alcançado (i < students.length);
  Incrementar manualmente a variável de controle do loop a cada iteração (i += 1);
  Usar indexação de arrays pra acessar cada elemento/estudante (students[i]);
  Tudo isso só pra atualizar o seu array!
  Agora vamos olhar para a segunda solução. Tudo o que você precisa fazer é chamar a função forEach no array e passar para ela a função que você criou. E mais nada! Esse é o poder da função forEach. 😎*/

  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const multipliesFor2 = (element) => {
    console.log(`${element} * 2: ${element * 2}`);
  };
  
  numbers.forEach(multipliesFor2);
  /*No exemplo acima, ele realizou em cada elemento do array a função multipliesFor2, que imprime o parâmetro * 2 no console. 
  O forEach não retorna nenhum valor*/
//A função map possui a mesma estrutura das outras HOFs, o que muda é o seu retorno.
//Antes de mais nada, veja como seria feito sem o map, fazendo uso de for:

const persons = [
  { firstName: "Maria", lastName: "Ferreira" },
  { firstName: "João", lastName: "Silva" },
  { firstName: "Antonio", lastName: "Cabral" },
];

const fullNames = [];
for (let i = 0; i < persons.length; i += 1) {
  fullNames.push(`${persons[i].firstName} ${persons[i].lastName}`);
}

console.log(fullNames);

//Agora com a função map:  
const fullNames1 = persons.map((person) => `${person.firstName} ${person.lastName}`);

console.log(fullNames1); // [ 'Maria Ferreira', 'João Silva', 'Antonio Cabral' ]
/*O for foi substituído por apenas uma linha de código.
A função juntou o primeiro nome com o sobrenome de cada pessoa e retornou um array novo com cada um dos valores. Observe que o tamanho dos arrays persons e fullNames é o mesmo (3 elementos).*/

/*Outro exemplo é o de realizar um cálculo utilizando os valores dos elementos e retornar um array novo sem alterar o anterior.
Suponha que é preciso transformar todos os números em negativos e passa-lós para um array novo.*/
const numbers = [1, 2, 3, 4, -5];

const negativeNumbers = numbers.map(number => ((number > 0) ? number * (-1) : number));

console.log(negativeNumbers); // [ -1, -2, -3, -4, -5 ]
console.log(numbers); // [ 1, 2, 3, 4, -5 ]

//Usando o for convencional:

const negativeNumbers1 = [];
for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] > 0) {
    negativeNumbers1.push(numbers[i] * -1);
  } else {
    negativeNumbers1.push(numbers[i]);
  }
}

console.log(negativeNumbers1); // [ -1, -2, -3, -4, -5 ]
console.log(numbers); // [ 1, 2, 3, 4, -5 ]
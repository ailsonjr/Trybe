/* Queremos encontrar e imprimir no console o primeiro elemento de um array que satisfaça a uma determinada condição. Pode ser, por exemplo, encontrar o primeiro número que seja divisível por 5 em uma lista de números.*/

let numbers = [11, 24, 39, 47, 50, 62, 75, 81, 96, 100];
let firstMultipleOf5;

//Usando for e if
for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] % 5 === 0) {
    firstMultipleOf5 = numbers[i];
    break;
  }
}

console.log(firstMultipleOf5);

//Usando Array.find
firstMultipleOf5 = numbers.find(number => number % 5 === 0);

console.log(firstMultipleOf5);

console.log('-------')

/*Além de muito mais concisa, a solução usando find é muito mais fácil de entender, concorda?
Ponto de observação: note que o parâmetro passado para number.find(), number => number % 5 == 0, é uma arrow function, igual no primeiro exemplo de forEach, em foi passada a função verifyNote.*/

numbers = [19, 21, 30, 3, 45, 22, 15];

const verifyEven = (number) => number % 2 === 0;

const isEven = numbers.find(verifyEven);

console.log(isEven); // 30

console.log(verifyEven(9)); // False
console.log(verifyEven(14)); // True

// Outra forma de ser realizada sem a necessidade de criar uma nova função.
const isEven2 = numbers.find((number) => number % 2 === 0);

console.log(isEven2); // 30

/*Esse exemplo mostra duas formas de resolver o mesmo problema, que é retornar o primeiro número par do array.
Primeiro observe a função verifyEven. Ela verifica se o número recebido é par. Se sim, seu retorno será true; caso contrário, seu retorno é false.
Quando a passamos como callback, o find executará a função para cada um dos elementos do array e retornará o primeiro elemento quando o retorno da função for true.*/
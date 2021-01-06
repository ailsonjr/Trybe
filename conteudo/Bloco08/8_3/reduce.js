/*Ele serve para acumular dentro de si os resultados das funções. Pense assim: caso não exista segundo parâmetro no reduce, para um array de cinco elementos, o reduce executará a função passada como parâmetro quatro vezes. O valor inicial de acc será a primeira posição do array. Na primeira iteração ele realiza a função com o primeiro valor do array que está em acc com a segunda posição que está em seu segundo parâmetro curr, que é chamado de current. Na segunda vez, acc conterá o retorno da primeira iteração, na terceira, o retorno da primeira e da segunda, e assim por diante. Olhe no exemplo abaixo:*/
// * Usando for:
let numbers = [32, 15, 3, 2, -5, 56, 10];
let sumNumbers = 0; // A variável 'acumula', a cada iteração do for, o resultado da operação feita lá!
for(let i = 0; i < numbers.length; i += 1){
  sumNumbers = sumNumbers + numbers[i];
}
console.log(sumNumbers); // 113

// *Usando reduce:
sumNumbers = numbers.reduce((result, number) => result + number); // O parâmetro `result` é o acumulador. Ele recebe, do `reduce`, o retorno da função a cada iteração.
console.log(sumNumbers); // 113

// Ou seja:
let getSum = (result, number) => result + number;
sumNumbers = numbers.reduce(getSum);
console.log(sumNumbers); // 113


const getSum1 = (result, number) => {
  console.log(result); // 32 47 50 52 47 103
  return result + number;
  };
  sumNumbers = numbers.reduce(getSum1); // nesse caso ele vai imprimir os valores contidos no result
  
console.log(sumNumbers); // 113

/* *A função passada por parâmetro recebe dois parâmetros, o acumulador result e o elemento do array de cada iteração,  number;
  * Como a função é uma arrow function que possui apenas uma linha, o retorno de cada iteração será: result + number;
  * O retorno é salvo no primeiro parâmetro , result. É como se você estivesse fazendo igual à primeira função, sumNumbers = sumNumbers + numbers[i], mas nesse caso seria result = result + number;*/

  // O reduce possui uma outra diferença: você pode passar um segundo parâmetro para o reduce, logo após a função. Olhe a seguir, será usado o último exemplo dado da soma dos números:
  getSum = (result, number) => {
    console.log(result); // 10 32 47 50 52 47 103
    return (result + number);
    };
  sumNumbers = numbers.reduce(getSum, 10); // Parâmetro adicionado ao reduce: o "10"
  console.log(sumNumbers); // 123


numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];
// Usando filter e reduce:
let getEven = (number) => number % 2 === 0;
let sumPair = (currentValue, number) => currentValue + number;

sumNumbers = (array) => array.filter(getEven).reduce(sumPair); // Olhe que código pequeno e conciso!

console.log(sumNumbers(numbers)); // 152

//Usando só reduce:
sumPair = (currentValue, number) => (
  (number % 2 === 0) ? currentValue + number : currentValue);

sumNumbers = (array) => array.reduce(sumPair);

console.log(sumNumbers(numbers)); // 152
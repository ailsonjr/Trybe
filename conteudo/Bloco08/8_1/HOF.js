//Exemplo de uma HOF que imprime na tela cada valor do array:

const arrayOfValues = ['josé', 50, 0.25, { comida: 'Chocolate' }];

//Usando arrow-function
const printValues = arrayOfValues.forEach((element) => {
  console.log('Cada elemento do array:', element);
});

arrayOfValues.forEach((element) => {
  console.log('Cada elemento do array:', element);
});
console.log("--------");

/*Suas partes:
* arrayOfValues - Nome do array que será percorrido;
* .forEach - A HOF, pode ser, .find, .some, .every;
* element - Valor do elemento do array;
* (element) => {console.log('Cada elemento do array:', element); - função a ser executada, pode ser passada igual ao terceiro exemplo do conteúdo com a função verifyNote.*/

/* Quando você passa uma arrow function para uma HOF, o primeiro parâmetro que essa arrow function recebe é o elemento do array. Em português, é como se:*/

meuArray = [2, 4, 7, 9, 10, 11, 14, 21, 31, 44]

meuArray.forEach(elemento => {
  if (elemento % 2 === 0) {
    console.log(`${elemento} é divísivel por 2!`);
  }
})
console.log("--------");

/* Significasse Verifique se cada elemento do meu array é múltiplo de 2.
Uma função como meuArray.find(elemento => elemento % 5 === 0), por outro lado, seria Encontre o primeiro elemento de meuArray que é múltiplo de cinco.*/

/* Podemos passar mais de um parâmetro para a função também. As HOFs te dão, se você precisa, acesso a mais informações do array:*/

arrayOfValues.forEach((element, indexOfTheArray, theEntireArray) => {
  console.log('Cada elemento do array:', element);
  console.log('Index, posição do elemento:', indexOfTheArray);
  console.log('Array percorrido:', theEntireArray);
  console.log(" ");
});

/*A arrow function passada para o forEach possui element, index e array como parâmetros, onde:
 - element - Valor do elemento do array;
 - index - Índice em cada iteração ou posição do elemento no array, começando do 0;
 - array - Array original que está sendo percorrido.*/

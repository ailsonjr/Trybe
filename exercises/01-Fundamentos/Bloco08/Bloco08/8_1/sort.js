// A função sort permite ordenar um array de acordo com algum critério
//Ela ordena sempre por ordem alfabética. E se o array possui algum elemento que não é uma string, a sort a ordena de acordo com a ordem alfabética dos códigos desse elemento na tabela de caracteres!

console.log ([1, 2, 3, 4, 5, 6, 6, 7, 8, 9, 10].sort());
console.log (" ")

// Ou seja: caso queira ordenar de forma alfabética, basta chamar sort, passando nenhuma função como parâmetro.

const food = ['arroz', 'feijão', 'farofa', 'chocolate', 'doce de leite'];
food.sort();
console.log(food);
// [ 'arroz', 'chocolate', 'doce de leite', 'farofa', 'feijão' ]
console.log(" ");

//Para ordenar de forma numérica crescente, é necessário passar a função a seguir:
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){ return a - b });
console.log(points); // [1, 5, 10, 25, 40, 100]

const randomNumber = require('./jestFn.test')

// 2 - Crie uma nova implementação, que deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo. Essa implementação deve ocorrer uma única vez. Faça os testes necessários.

jest.mock('./jestFn.test');

test('Faz teste mocado onde troca a funcionalidade da função e a testa', () => {
  randomNumber.mockImplementation((num1, num2) => num1 / num2);
  randomNumber(10, 5);

  expect(randomNumber).toHaveBeenCalled();
   expect(randomNumber).toHaveBeenCalledTimes(1);
   expect(randomNumber).toHaveBeenCalledWith(10, 5);
   expect(randomNumber(10, 5)).toBe(2);
    })

// 3 - Crie uma nova implementação que receba três parâmetros e retorne sua multiplicação. Após fazer os devidos testes para ela, resete sua implementação e crie uma nova, que receba um parâmetro e retorne seu dobro. Faça os testes necessários.


// 4 - Dentro de um mesmo arquivo, crie três funções. A primeira deve receber uma string e retorná-la em caixa alta. A segunda deve também receber uma string e retornar só a primeira letra. A terceira deve receber duas strings e concatená-las. Faça o mock do arquivo. Faça uma nova implementação para a primeira função, mas agora ela deve retornar a string em caixa baixa. Para a segunda função, uma nova implementação deve retornar a última letra de uma string. A terceira deve receber três strings e concatená-las.
// 5 - Utilizando as mesmas funções do exercício anterior, repita a implementação para a primeira função. Após repetir a implementação, restaure a implementação original e crie os testes necessários para validar.
// 6 - Crie uma função que faça requisição para a api dog pictures . Mocke a requisição e crie dois testes. O primeiro deve interpretar que a requisição se resolveu e teve como valor "request sucess". O segundo deve interpretar que a requisição falhou e ter como valor "request failed". Crie todos os testes que achar necessário.
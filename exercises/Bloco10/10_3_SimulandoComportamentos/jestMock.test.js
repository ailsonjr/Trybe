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

test('Função randomNumber retorna a multipicação de 3 números', () => {
  randomNumber.mockImplementation((num1, num2, num3) => num1 * num2 * num3);
  randomNumber(2, 4, 5);
  randomNumber(1, 1, 1);

  expect(randomNumber).toHaveBeenCalled();
  expect(randomNumber).toHaveBeenCalledTimes(4);
  expect(randomNumber).toHaveBeenCalledWith(2, 4, 5);
  expect(randomNumber(2, 4, 5)).toBe(40)

  expect(randomNumber).toHaveBeenCalled();
  expect(randomNumber).toHaveBeenCalledTimes(5);
  expect(randomNumber).toHaveBeenCalledWith(1, 1, 1);
  expect(randomNumber(1, 1, 1)).toBe(1)
});

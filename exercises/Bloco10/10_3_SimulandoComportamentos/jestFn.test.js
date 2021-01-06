// 1 - Crie uma função que gere um número aleatório entre 0 e 100. Você irá criar também os testes para essa função. Utilizando o mock, defina o retorno padrão como 10. Teste se a função foi chamada, qual seu retorno e quantas vezes foi chamada.

function randomNumber() {
  Math.round(Math.random() * 100);
}

test('Testando se a função foi chamada.', () => {
  randomNumber = jest.fn()
    .mockReturnValueOnce(10);
  expect(randomNumber()).toBe(10);
  expect(randomNumber).toHaveBeenCalled();
  expect(randomNumber).toHaveBeenCalledTimes(1);
});

module.exports = randomNumber;
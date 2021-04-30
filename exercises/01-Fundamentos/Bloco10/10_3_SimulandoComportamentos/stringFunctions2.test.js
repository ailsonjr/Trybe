// 5 - Utilizando as mesmas funções do exercício anterior, repita a implementação para a primeira função. Após repetir a implementação, restaure a implementação original e crie os testes necessários para validar.

const stringFunctions = require('./stringFunctions');

describe('Implementação para fazer o Mock na função e depois restaurá-la', () => {
  let spyToUpperCase = jest.spyOn(stringFunctions, 'toUpperCase')
    .mockImplementation((string) => string.toLowerCase());
  
  it('Função toUpperCase retorna a string em caixa baixa', () => {
    spyToUpperCase('CaIXA');

    expect(spyToUpperCase).toHaveBeenCalled();
    expect(spyToUpperCase).toHaveBeenCalledTimes(1);
    expect(spyToUpperCase).toHaveBeenCalledWith('CaIXA');
    expect(spyToUpperCase('CaIXA')).toBe('caixa');
  });
  
  
  it('Restaura função e a testa', () => {
    spyToUpperCase.mockRestore();

    spyToUpperCase = jest.spyOn(stringFunctions, 'toUpperCase');
    spyToUpperCase('caixa');

    expect(stringFunctions.toUpperCase).toHaveBeenCalled();
    expect(stringFunctions.toUpperCase).toHaveBeenCalledTimes(1);
    expect(stringFunctions.toUpperCase).toHaveBeenCalledWith('caixa');
    expect(stringFunctions.toUpperCase('caixa')).toBe('CAIXA');
  })

});
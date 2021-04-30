// 4 - Faça uma implementação para a primeira função, mas agora ela deve retornar a string em caixa baixa. Para a segunda função, uma nova implementação deve retornar a última letra de uma string. A terceira deve receber três strings e concatená-las.

const stringFunctions = require('./stringFunctions');

jest.mock('./stringFunctions');

describe('Faz mock para as funções executarem comportamentos diferentes', () => {
  it('Função toUpperCase retorna a string em caixa baixa', () => {
    stringFunctions.toUpperCase.mockImplementation((string) => string.toLowerCase());
    stringFunctions.toUpperCase('CaIXA');

    expect(stringFunctions.toUpperCase).toHaveBeenCalled();
    expect(stringFunctions.toUpperCase).toHaveBeenCalledTimes(1);
    expect(stringFunctions.toUpperCase).toHaveBeenCalledWith('CaIXA');
    expect(stringFunctions.toUpperCase('CaIXA')).toBe('caixa');
  });

  it('Função firstLetter retorna a última letra em caixa alta', () => {
    stringFunctions.firstLetter.mockImplementation((string) => string.substr(0, (string.length - 1)) + string[string.length - 1].toUpperCase());
    stringFunctions.firstLetter('últimaLetra');

    expect(stringFunctions.firstLetter).toHaveBeenCalled();
    expect(stringFunctions.firstLetter).toHaveBeenCalledTimes(1);
    expect(stringFunctions.firstLetter).toHaveBeenCalledWith('últimaLetra');
    expect(stringFunctions.firstLetter('últimaLetra')).toBe('últimaLetrA');
  });

  it('Função concatTwoStrings retorna 3 strings concatenadas', () => {
    stringFunctions.concatTwoStrings.mockImplementation((str1, str2, str3) => str1 + str2 + str3);
    stringFunctions.concatTwoStrings('Pro', 'gra', 'mação');

    expect(stringFunctions.concatTwoStrings).toHaveBeenCalled();
    expect(stringFunctions.concatTwoStrings).toHaveBeenCalledTimes(1);
    expect(stringFunctions.concatTwoStrings).toHaveBeenCalledWith('Pro', 'gra', 'mação');
    expect(stringFunctions.concatTwoStrings('Pro', 'gra', 'mação')).toBe('Programação');
  });
});

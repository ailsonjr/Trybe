// Dentro de um mesmo arquivo, crie três funções. A primeira deve receber uma string e retorná-la em caixa alta. A segunda deve também receber uma string e retornar só a primeira letra. A terceira deve receber duas strings e concatená-las. //

function toUpperCase(string) {
  return string.toUpperCase();
}

function firstLetter(string) {
  return string[0].toUpperCase() + string.substr(1);
}

function concatStrings(str1, str2) {
  return str1 + str2
}

module.exports = {
  toUpperCase,
  firstLetter,
  concatStrings
}
// Quando a Promise for rejeitada, imprima, via console.log , a frase "É mais de oito mil! Essa promise deve estar quebrada!"

const promise = new Promise((resolve, reject) => {
  const array = [];

  for (let i = 0; i < 10; i += 1) {
    const number = Math.floor(Math.random() * (50 - 1) + 1);
    array.push(number);
  }

  const sum = array.map(num => num ** 2)
    .reduce((acc, elem) => acc + elem);

  if (sum < 8000) {
    return resolve(sum);
  }
  reject(sum)
})
  .then(number => {
    const divisors = [2, 3, 5, 10];

    const newArray = divisors.map(numbers => number / numbers);
    return console.log(`A soma dos elementos da array é ${number} e resultado da divisão desse número por 2, 3, 5 e 10 em um array é [ ${newArray} ]`);
  })
  .catch(number => console.log("É mais de oito mil! Essa promise deve estar quebrada!"));
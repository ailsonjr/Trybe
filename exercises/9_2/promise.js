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
  .then(number => console.log(`A soma dos elementos da array é ${number} e é menor que 8000`))
  .catch(number => console.log(`Erro: A soma dos elementos da array é ${number} e é maior que 8000`));
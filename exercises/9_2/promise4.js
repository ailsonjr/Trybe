// Quando a Promise for bem-sucedida, encadeie nela uma segunda Promise que some os elementos do array.

const fetchPromise = () => {

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
      console.log(number);
      console.log(newArray);
      return newArray;
    })
    .then(array => console.log(array.reduce((acc, number) => acc + number)))
    .catch(number => console.log("É mais de oito mil! Essa promise deve estar quebrada!"));
}

fetchPromise();
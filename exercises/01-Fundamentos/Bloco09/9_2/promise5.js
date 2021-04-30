// Refatore a Promise para utilizar somente async e await

const sumRandomNumbers = () => {
  const array = [];

  for (let i = 0; i < 10; i += 1) {
    const number = Math.floor(Math.random() * (50 - 1) + 1);
    array.push(number);
  }

  const sum = array.map(num => num ** 2)
    .reduce((acc, elem) => acc + elem);

  if (sum > 8000) {
    throw new Error();
  }

  return sum;
}

const arrayWithDivisors = number => {
  const divisors = [2, 3, 5, 10];
  
  const newArray = divisors.map(numbers => number / numbers);

  return newArray;
}

const arraySum = (elem) => elem.reduce((acc, num) => acc + num);

const fetchPromise = async () => {
  try {
    const firstSum = await sumRandomNumbers();
    const array = await arrayWithDivisors(firstSum);
    const sum = await arraySum(array);

    console.log(sum);
  } catch(e) {
    console.log('É mais de oito mil! Essa promise deve estar quebrada!');
  }
}

fetchPromise();
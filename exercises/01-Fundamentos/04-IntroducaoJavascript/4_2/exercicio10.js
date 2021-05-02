let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newNumbers = [];
let j = 0;

for (let i = 1; i < numbers.length; i++) {
     newNumbers.push ( numbers[i] * numbers[j] );
      j += 1;
    }
  newNumbers.push ( (numbers [j]) * 2)

  console.log (newNumbers);
//Copy all contents of arr1 into another array arr2 using the spread operator.
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];  // Change this line

console.log(arr2);

//Sem rest
let sum = (x, y, z) => {
  let args = [x, y, z];
  return args.reduce((a, b) => a + b);
}
console.table(sum(3, 4, 5))
//Com rest
sum = (...args) => {
  return args.reduce((a, b) => a + b, 0);
}
console.log(sum(3, 4, 4))
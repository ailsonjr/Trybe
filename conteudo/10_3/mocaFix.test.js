const randomNumber = () =>  Math.floor(Math.random() * 100);

const isDivisible = (number) => (randomNumber() % number) === 0;

test('if is divisible by 2, return  `true`', () => {
  expect(isDivisible(2)).toBe(true); // Como garantimos que o número retornado será par?
})
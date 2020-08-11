const factorialNumber = (N) => {
  let factorial = 1;
  for (let i = 1; i <= N; i += 1) {
    factorial = factorial * i
  }
  console.log (factorial);
}

factorialNumber (3)

// No caso abaixo dá um falso-positivo pois o Jest não espera o setTimeout finalizar, para que isso não acontece, usasse a função done após a mensagem do test e a chama dentro do setTimeOut

// test("Não deveria passar!", () => {
//   setTimeout(() => {
//     expect(10).toBe(5);
//     console.log('Deveria falhar!')
//   }, 500);
// });

test("Não deveria passar!", done => {
  setTimeout(() => {
    expect(10).toBe(5);
    console.log('Deveria falhar!')
    done();
  }, 500);
});
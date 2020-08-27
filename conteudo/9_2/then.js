//Aqui demonstramos 2 coisas importantes sobre a sintaxe do .then(). A primeira é que passamos como argumento uma função. Essa função também recebe 1 argumento que é o retorno do resolve da nossa promise. A segunda é que o .then() é usado "em cadeia", um conceito chamado de chaining. Assim, podemos colocar vários .then() em cadeia e o argumento da função interna de um será o retorno do anterior. A parte mais importante é que o .then() espera a promise (ou o .then() anterior) ser concluída para começar a sua execução. Assim, nosso fluxo está controlado!

const promise = new Promise((resolve, reject) => {
  const number = Math.floor(Math.random() * 11);

  if (number > 10 || number <= 5) {
    return reject(console.log(`Que fracasso =( Nosso número foi ${number}`));
  }
  resolve(number);
})
.then(number => `Que sucesso =) nosso número foi ${number}`)
.then(msg => console.log(msg));

//Vamos ver o que acontece no código acima. A promise é executada e após sua execução, caso o número seja algo entre 5 e 10, o resolve retorna o número que é passado para o primeiro .then() como number. Por sua vez, ele retorna a a frase Que sucesso =) nosso número foi ${number} que é passado como argumento para o segundo .then(), que o usa para "logar" no console.
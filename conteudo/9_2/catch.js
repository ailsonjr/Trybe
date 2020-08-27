
const promise = new Promise((resolve, reject) => {
  const number = Math.floor(Math.random()* 11);

  if (number > 10 || number <= 5) {
    return reject(number);
  }
  resolve(number);
})
.then(number => `Que sucesso =) nosso número foi ${number}`)
.then(msg => console.log(msg))
.catch(number => console.log(`Que fracasso =( Nosso número foi ${number}`));

//No código acima, vamos ver que o erro anterior desapareceu pois agora ele foi tratado! Assim como o .then() recebe o retorno de resolve, o .catch() recebe o retorno do reject, que é passado para ele como argumento de sua função interna. Assim, quando a promise retorna um reject, pula todos os .then() e é tratado no primeiro .catch() que encontrar. E tem mais! O .catch() também "pega" qualquer erro que acontecer dentro de qualquer .then() anterior a ele, por esse motivo ele é geralmente usado no final.
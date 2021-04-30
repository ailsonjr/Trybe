const promise = new Promise((resolve, reject) => {
  const number = Math.floor(Math.random() * 11);

  if (number > 10 || number <= 5) {
    return reject(number);
  }
  resolve(number);
})
  .then(number => `Que sucesso =) nosso número foi ${number}`)
  .then(msg => console.log(msg))
  .catch(number => console.log(`Que fracasso =( Nosso número foi ${number}`));

  // usando o .catch para tratar o erro, quando o mesmo acontece, aparece apenas a mensagem que foi inserida dentro do .catch
  // Tanto o .then quanto .catch recebem como parâemtro uma função, o argumento que será usado neles vem do reject ou do resolve, no caso do .then, pode vir de outro .then o argumento
  // O .catch pula todos os .then e pega os erros dos .then tbm
// O código abaixo utiliza uma API de piadas e implementa o fetchJoke , que é um gerador de piadas ruins . As piadas são geradas aleatoriamente através do endpoint armazenado em API_URL . Faça um teste que verifique a chamada dessa API para um resultado específico

const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  return fetch(API_URL, { headers: { Accept: 'application/json' } })
    .then(response => response.json())
    .then(data => data.joke);
};

const fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        id: "7h3oGtrOfxc",
        joke: "Whiteboards ... are remarkable.",
        status: 200
      })
  })
);

test('Testando a requisição para um resultado específico', () => {
  expect(fetchJoke()).resolves.toBe('Whiteboards ... are remarkable.');
});
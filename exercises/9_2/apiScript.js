const API_URL = 'https://icanhazdadjoke.com/';

const myObject = {
  method: 'GET',
  headers: { 'Accept': 'application/json' }
};

fetch(API_URL, myObject)
  .then(response => response.json())
  .then(data => console.log(data));

const fetchJoke = () => {
  // Adicionar lógica aqui!
};

window.onload = () => fetchJoke();
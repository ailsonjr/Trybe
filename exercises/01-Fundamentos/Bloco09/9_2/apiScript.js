const API_URL = 'https://icanhazdadjoke.com/';

const myObject = {
  method: 'GET',
  headers: { 'Accept': 'application/json' }
};

const fetchJoke = () => {
  const getJoke = (joke) => {
    let h2 = document.querySelector('h2');
    h2.innerHTML = joke;
  }

  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => getJoke(data.joke));
  };

window.onload = () => fetchJoke();
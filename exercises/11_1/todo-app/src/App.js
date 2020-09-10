import React from 'react';
import Exercises from './freeCodeCamp';

const task = (value) => {
  return (
    <li>{value}</li>
  );
}

const todoList = ['Ler','Escrever', 'Exercitar', 'Meditar', 'Caminhar', 'Jogar'];
const mapList = todoList.map(job => task(job));

function App() {
  return <div> 
    <Exercises />
    <ul>
      { (task(mapList)) }
    </ul>
  </div>
}

export default App;
import React from 'react';
import Exercises from './freeCodeCamp';
import './App.css';

const task = (value) => {
  return (
    <li>{value}</li>
  );
}

const todoList = ['Ler','Escrever', 'Exercitar', 'Meditar', 'Caminhar', 'Jogar'];
const mapList = todoList.map(job => task(job));

function App() {
  return <div> 
    <h2>Lista de tarefas feita utilizando um array de tarefas e usando o map para criar a lista dinâmicamente:</h2>
    <ul>
      { (task(mapList)) }
    </ul>
    <h2>Criado um Componet contendo os exercícios feito no site Free Camp Code:</h2>
    <Exercises />
  </div>
}

export default App;
import React from 'react';
import logo from './logo.svg';
import './App.css';

const task = (value) => {
  return (
    <li>{value}</li>
  );
}

const todoList = ['Ler','Escrever', 'Exercitar', 'Meditar', 'Caminhar', 'Jogar'];
const mapList = todoList.map(job => task(job));

function App() {
  return (task(mapList));
}

export default App;
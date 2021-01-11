const toDoList = ['Meditar', 'Exercitar', 'Estudar', 'Praticar']

const task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  return toDoList.map((toDo) => task(toDo));
}

export default App;

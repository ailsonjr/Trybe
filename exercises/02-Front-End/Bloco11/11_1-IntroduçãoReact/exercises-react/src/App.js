import CardList from './script'
const toDoList = ['Meditar', 'Exercitar', 'Estudar', 'Praticar'];

const task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  return (
    <div>
      {toDoList.map((toDo) => task(toDo))}
      <CardList />
    </div>
  )
    
  
}

export default App;

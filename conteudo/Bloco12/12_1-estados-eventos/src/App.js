import './App.css';
import FancyButtons from './FancyButtons';
import Constructor from './Constructor';
import State from './State';
import Lecture from './Lecture';

function App() {
  return (
    <div className="App">
      <h1>Componentes em React com Estados e eventos</h1>
      <p>Códigos usados no conteúdo da aula 12.1 para dar como exemplo e para fixar o que foi aprendido</p>
      <hr />
      <FancyButtons />
      <Constructor />
      <State />
      <Lecture />
    </div>
  );
}

export default App;

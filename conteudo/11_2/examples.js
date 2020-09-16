// Exemplos tirado do site https://pt-br.reactjs.org/docs/components-and-props.html#composing-components
// Podemos criar um componente App que renderiza Welcome muitas vezes
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
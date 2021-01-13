import React from 'react';

function Welcome(props) {
  return <h3>Welcome, {props.name}</h3>;
}

class Composing extends React.Component {
  render() {
    return (
      <div>
        <h2>Compondo componentes</h2>
        <p>Criar um componente Composing que renderiza Welcome muitas vezes</p>
        <Welcome name="Sara" />
        <Welcome name="Cahal" />
        <Welcome name="Edite" />
        <hr />
      </div >
    );
  }
}

  export default Composing;
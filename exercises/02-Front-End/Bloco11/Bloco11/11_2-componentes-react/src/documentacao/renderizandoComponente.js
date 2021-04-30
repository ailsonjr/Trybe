import React from 'react';

function Welcome(props) {
  return <h3>Nice to meet you, {props.name}</h3>;
}

// * para quando quer renderizar direto no index.js
// const element = <Welcome name="Sara" />;
// ReactDOM.render(
//   element,
//   document.getElementById('root')
// ); 

class Rendering extends React.Component {
  render() {
    return (
      <div>
        <h2>Renderizando um componente</h2>
        <p>Criar um componente Rendering que renderiza Welcome </p>
        <Welcome name="José" />
      <hr />
      </div >
    );
  }
}

export default Rendering;
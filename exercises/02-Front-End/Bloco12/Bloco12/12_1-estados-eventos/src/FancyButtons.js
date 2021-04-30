import React from 'react';

/* Embora isso funcione, essa DEFINITIVAMENTE
não é a maneira correta de se criar eventos
em React! A função se refere ao componente,
então deve ser parte de sua classe! */
function handleClick() {
  console.log('Você clicou');
}

function handleClick2() {
  console.log('React é muito divertido!');
}

function handleClick3() {
  console.log('React fica cada vez mais fácil');
}

class FancyButtons extends React.Component {
  /* Repare que, diferentemente do HTML, no
  JSX você associa uma função a um evento
  passando a própria função entre chaves `{}` */
  render() {
    return (
      <div>
        <h3>Componente FancyButtons</h3>
        <p>Evento com 3 botões onde cada um imprime no console uma mensagem diferente</p>
        <button onClick={handleClick}>Meu botão1</button>
        <button onClick={handleClick2}>Meu botão2</button>
        <button onClick={handleClick3}>Meu botão3</button>
        <hr />
      </div>
    );
  }
}

export default FancyButtons;
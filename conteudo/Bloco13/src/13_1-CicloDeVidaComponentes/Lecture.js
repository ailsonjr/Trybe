import React from 'react';
import Clock from './Clock';


class Lecture extends React.Component {
  

  render() {
    const { showDateTime, turnOffButton } = this.props;
    return (
      <div>
        <div>
          <h2>Componente Lecture</h2>
          <h5>Componente com o código usado na aula ao vivo onde foi feito um relógio para demonstrar o ciclo de vida dos componentes</h5>
        </div>
        <div>
        {showDateTime
          && <Clock
            turnOffButton={ turnOffButton }
            showDateTime={ showDateTime }
          />}
        </div>
      </div>
    );
  }
}

export default Lecture;
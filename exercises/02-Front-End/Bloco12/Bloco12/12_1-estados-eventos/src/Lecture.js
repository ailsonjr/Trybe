import React from 'react';
import colors from './data';

class Lecture extends React.Component {
  constructor() {
    super();

    this.state = {
      inputTextValue: ''
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ inputTextValue: event.target.value });
  }

  render() {
    const { inputTextValue } = this.state;
    return (
      <main>
        <h3>Código usado na aula ao vivo</h3>
        <p>Usando os conceitos de state, foi criado uma página que mostra um lista de cores e filtra conforme você vai escrevendo</p>
        <input type="text" onChange={this.handleChange} />
        <ul>
          {
            colors
              .filter((color) => color.color.includes(inputTextValue))
              .map((color) =>
                <li key={color.value}>
                  <div style={{ background: color.value }} className="color-square" />
                  {color.color}
                </li>
              )
          }
        </ul>
        <hr />
      </main>
    )
  }
}
export default Lecture;
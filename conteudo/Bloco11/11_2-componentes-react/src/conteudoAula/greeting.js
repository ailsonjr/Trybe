import React from 'react';

class Greeting extends React.Component {
  render() {
    return (
      <div>
        <h2>Componente Greeting</h2>
        <h4>Hello, {this.props.name} {this.props.lastName}</h4>
        <hr />
      </div>
      );
  }
}

export default Greeting;
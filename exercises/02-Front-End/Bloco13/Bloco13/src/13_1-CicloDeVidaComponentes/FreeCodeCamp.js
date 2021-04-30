import React from 'react';

class FreeCodeCamp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeUsers: null
    };
  }
  componentDidMount() {
    console.log('componentDidMount FreeCamp')
    setTimeout(() => {
      this.setState({
        activeUsers: 1273
      });
    }, 2500);
  } // activeUser é atualizado 2500ms depois da página ser renderizada

  render() {
    console.log('render free');
    return (
      <div>
        <h2>Componente FreeCodeCamp</h2>
        <h5>Códigos usados para praticar do site FreeCodeCamp</h5>
        <p>Active Users: {this.state.activeUsers} </p>
        <hr />
      </div>
    );
  }
}

export default FreeCodeCamp;
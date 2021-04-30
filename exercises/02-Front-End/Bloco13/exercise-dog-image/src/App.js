import React from "react";
import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
      name: "",
      array: []
    };
    this.fetchDog = this.fetchDog.bind(this);
    this.saveData = this.saveData.bind(this);
  }

  componentDidMount() {
    if (localStorage.namedDogURL) { // verifica se no Storage, há uma chave namedDogURL
      const parseStorage = JSON.parse(localStorage.namedDogURL); // converte o arquivo JSON no Storage para um array com objetos
      const lastDog = parseStorage[parseStorage.length - 1].message; // atribui a constante o message do ultimo objeto do array
      this.setState({
        array: parseStorage,
        data: { message: lastDog } // ao invés de fazer uma requisição, data passa ser o ultimo dog gravado no Storage
      });
    } else {
      this.fetchDog(); // se não tiver nada no Storage, faz uma nova requisição
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    // verifica se no state de data, vai ter a string
    if (nextState.data.message.includes("terrier")) {
      return false;
    }
    return true;
  }

  componentDidUpdate(prevProps, prevState) {
    // se o state é atualizado, envia o alert
    if (prevState.data !== this.state.data) {
      const dogBreed = this.state.data.message.split("/")[4];
      alert(dogBreed);
    }
  }

  fetchDog() {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(res => res.json())
      .then(result => this.setState({ data: result })); // o state data recebe do fetch da API o resultado e data passa de uma string vazia para um objeto com a chave message que contém a url da imagem
  }

  saveData() {
    const {
      data: { message },
      name,
      array
    } = this.state;
    const dogData = { message, name }; // nesse passo, a constante já recebe os valores
    const newArray = [...array, dogData]; // adiciona a constante na nova array
    this.setState({ array: newArray }); // atualiza o state da array com os valores da nova array
    this.setState({ name: "" }); // limpa o input
    localStorage.setItem("namedDogURL", JSON.stringify(newArray)); // salva no Storage a nova array convertida em arquivo JSON
  }

  render() {
    if (this.state.data === "") return "loading...";
    return (
      <div className='App'>
        <p>Doguinhos</p>
        <button onClick={ this.fetchDog }>Novo doguinho!</button>
        <div>
          <input
            type="text"
            value={ this.state.name }
            onChange={ e => this.setState({ name: e.target.value }) }
            placeholder="digite o nome do doguinho"
          />
          <button onClick={this.saveData}>Salvar doguinho!</button>
        </div>
        <div>
          <img src={ this.state.data.message } alt={ this.state.data.message } />
        </div>
      </div>
    );
  }
}

export default App;
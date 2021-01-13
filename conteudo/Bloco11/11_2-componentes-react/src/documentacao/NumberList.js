function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li key={number.toString()}>
      {number}
    </li>
  );
  return (
    <div>
      <h2>Lista de Números</h2>
      <p>Lista de Números usando .map</p>
      <ul>{listItems}</ul>
      <hr />
    </div>
  );
}

export default NumberList;

//  Na implementação a baixo, gera um aviso que uma chave deve ser definida para os itens da lista, por esse motivo é usado o atributo key na implementação acima

// function NumberList(props) {
//   const numbers = props.numbers;
//   const listItems = numbers.map((number) =>
//     <li>{number}</li>
//   );
//   return (
//     <ul>{listItems}</ul>
//   );
// }
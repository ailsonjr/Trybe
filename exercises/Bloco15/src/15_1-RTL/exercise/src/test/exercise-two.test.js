import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent, cleanup } from '@testing-library/react';
import App from '../Exercise';
import Item from '../Item';

afterEach(cleanup);

describe('Teste do campo de input', () => {
  test('Testando a adição de vários itens a aplicação', () => {
    const listTodo = ['Realizar CR', 'Ler Post no Medium', 'Beber água']; // Use esse array como base para realizar os testes.
    const { getByLabelText, queryByText } = render(<App />);
    const input = getByLabelText('Tarefa:');
    const button = queryByText('Adicionar');

    listTodo.forEach(todo => {
      fireEvent.change(input, { target: { value: todo } });
      expect(queryByText(todo)).not.toBeInTheDocument();
      fireEvent.click(button);
      expect(queryByText(todo)).toBeInTheDocument();
    });
  });

  describe('Teste do componente Item', () => {
    test('Ao receber uma string como prop ela precisa aparecer na tela', () => {
      const { getByText } = render(<Item content='Realizar CR' />); // content é a props enviada para o componente pai
      expect(getByText('Realizar CR')).toBeInTheDocument();
    });
  });
});

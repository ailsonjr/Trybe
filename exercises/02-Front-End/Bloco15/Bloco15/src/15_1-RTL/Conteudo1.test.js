import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Conteudo1 from './Conteudo1';
import ValidEmail from './ValidEmail';

test('Verificando se existe o campo Email.', () => {
  const { getByLabelText } = render(<Conteudo1 />);
  const inputEmail = getByLabelText('Email');
  expect(inputEmail).toBeInTheDocument();
  expect(inputEmail.type).toBe('email');
});

test('Verificando se existe um botão de enviar', () => {
  const { getByTestId } = render(<Conteudo1 />);
  const btn = getByTestId('id-send');
  expect(btn).toBeInTheDocument();
  expect(btn.type).toBe('button');
  expect(btn).toHaveValue('Enviar')
});

test('Verificando se existe dois botões', () => {
  const { getAllByRole } = render(<Conteudo1 />);
  const buttons = getAllByRole('button');
  expect(buttons.length).toBe(2);
});

test('Verificando se o botão e o campo email estão funcionando', () => {
  const { getByTestId, getByLabelText } = render(<Conteudo1 />);

  const EMAIL_USER = 'email@email.com';

  const textEmail = getByTestId('id-email-user');
  expect(textEmail).toBeInTheDocument();
  expect(textEmail).toHaveTextContent('Valor');

  const btnSend = getByTestId('id-send');
  const inputEmail = getByLabelText('Email');
  fireEvent.change(inputEmail, { target: { value: EMAIL_USER } });
  fireEvent.click(btnSend);
  expect(inputEmail).toHaveValue('');
  expect(textEmail).toHaveTextContent(`Valor: ${EMAIL_USER}`);
});

test('Testando um componente, no caso o email seja válido', () => {
  const EMAIL_USER = 'email@email.com';
  const { getByText } = render(<ValidEmail email={EMAIL_USER} />);
  const isValid = getByText('Email Valido');
  expect(isValid).toBeInTheDocument();
})
test('Testando um componente, caso o email seja inválido.', () => {
  const EMAIL_USER = 'emailerrado';
  const { getByText } = render(<ValidEmail email={EMAIL_USER} />);
  const isValid = getByText('Email Inválido');
  expect(isValid).toBeInTheDocument();
});

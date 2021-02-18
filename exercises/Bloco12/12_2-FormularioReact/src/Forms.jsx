import React, { Component } from 'react';
import Cargo from './components/Cargo';
import Cidade from './components/Cidade';
import CPF from './components/CPF';
import Curriculo from './components/Curriculo';
import DescricaoCargo from './components/DescricaoCargo';
import Email from './components/Email';
import Endereco from './components/Endereco';
import Estado from './components/Estado';
import Nome from './components/Nome';

const states = ['Rio de Janeiro', 'Minas Gerais', 'Amapá', 'Amazonas', 'São Paulo', 'Ceará', 'Distrito Federal'];

class Forms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      cpf: '',
      address: '',
      city: '',
      countryState: '',
      addressType: '',
      resume: '',
      role: '',
      roleDescription: '',
      hasEntered: false,
      formErrors: {email: '', password: ''},
    };

    this.validateField = this.validateField.bind(this);
    this.updateState = this.updateState.bind(this);
  }

  validateField(fieldName, value) {
    switch (fieldName) {
      case 'email':
        const isValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2})$/i);
        return isValid ? '' : ' is invalid ';
      default:
        break;
    }

    return '';
  }

  validateAddress = address => address.replace(/[^\w\s]/gi, '');

  updateState(name, value) {
    this.setState((state) => ({
      [name]: value,
      formErrors: {
        ...state.formErrors,
        [name]: this.validateField(name, value)
      }
    }));
  }

  changeHandler = event => {
    let { name, value } = event.target;
    if (name === 'name') value = value.toUpperCase();
    if (name === 'address') value = this.validateAddress(value);
    this.updateState(name, value);
  }

  onBlurHandler = event => {
    let { name, value } = event.target;
    if (name === 'city') value = value.match(/^\d/) ? '' : value;
    this.updateState(name, value);
  }

  handleSubmit = event => {
    event.preventDefault();
  }

  render() {
    const { name, email, cpf, address, city, countryState, resume, role, roleDescription } = this.state;
    const { changeHandler, onBlurHandler } = this;
    return (
      <div>
        <form action="">
          <fieldset>
            <legend>Dados pessoais</legend>
            <Nome
              value={name}
              onChange={changeHandler}
            />
            <Email
              value={email}
              onChange={changeHandler}
            />
            <CPF
              value={cpf}
              onChange={changeHandler}
            />
            <Endereco
              value={address}
              onChange={changeHandler}
            />
            <Cidade
              value={city}
              onBlur={onBlurHandler}
              onChange={changeHandler}
            />
            <Estado
              value={countryState}
              onChange={changeHandler}
              states={states}
            />
          </fieldset>
          <fieldset>
            <legend>Dados profissionais:</legend>
            <Curriculo
              value={resume}
              onChange={changeHandler}
            />
            <Cargo
              value={role}
              onChange={changeHandler}
            />
            <DescricaoCargo
              value={roleDescription}
              onChange={changeHandler}
            />
          </fieldset>
        </form>
      </div>
    );
  }
}

export default Forms;

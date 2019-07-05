import React, { Component } from 'react';
import { Container, Form, Main } from './style';
import api from '../../services/api';
import logo from '../../assets/logo.png';
import { login } from '../../services/auth';

class SigIn extends Component {
  state = {
    email: '',
    password: '',
  };

  handleSigIn = async (e) => {
    e.preventDefault();

    const { email, password } = this.state;

    if (!email || !password) {
      this.setState({ error: 'Preencha e-mail e senha para continuar.' });
    } else {
      try {
        const response = await api.post('/sessions', { email, password, version: 'web' });
        login(response.data.token);
      } catch (err) {
        this.setState({
          error: 'Houve um erro ao efetuar o login. Favor verifique suas credencias.',
        });
      }
    }
  };

  render() {
    return (
      <Main>
        <Container>
          <Form onSubmit={this.handleSigIn}>
            <img src={logo} alt="logo" />
            {this.state.error && <p>{this.state.error}</p>}
            <input
              type="text"
              placeholder="Seu e-mail"
              onChange={e => this.setState({ email: e.target.value })}
            />
            <input
              type="password"
              placeholder="Senha secreta"
              onChange={e => this.setState({ password: e.target.value })}
            />
            <button type="submit"> Entrar </button>
          </Form>
        </Container>
      </Main>
    );
  }
}

export default SigIn;

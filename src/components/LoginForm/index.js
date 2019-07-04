import React from 'react';
import { Container, Form, Main } from './style';
import logo from '../../assets/logo.png';

const LoginForm = () => (
  <Main>
    <Container>
      <Form>
        <img src={logo} alt="logo" />
        <input type="text" placeholder="Seu e-mail" />
        <input type="password" placeholder="Senha secreta" />
        <button type="submit"> Entrar </button>

        {/* <input placeholder="Seu e-mail" />
        <input placeholder="Senha secreta" />
        <button type="submit"> Entrar </button> */}
      </Form>
    </Container>
  </Main>
);

export default LoginForm;

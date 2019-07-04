import React, { Fragment } from 'react';
import GlobalStyle from './styles/global';
import LoginForm from './components/LoginForm';

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <LoginForm />
    </Fragment>
  );
}

export default App;

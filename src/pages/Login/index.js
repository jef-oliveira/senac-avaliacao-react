import React, { Component } from 'react';
import { Redirect, Link }   from 'react-router-dom';
import AuthForm  from '../../components/AuthForm';

export default class Login extends Component {
  state = {
    credentials: undefined
  };

  handleSubmit = (credentials) => {
    this.setState({credentials});
  };

  render() {
    const { credentials } = this.state;

    if (credentials)
      return (
        <Redirect to="/home" />
      );

    return (
      <div>
        <AuthForm onSubmit={this.handleSubmit} submitLabel="Entrar" />
        <Link to="/register">ou clique aqui para se registar</Link>
      </div>
    );
  }
}

import React, { Component } from 'react';
import { Redirect, Link }   from 'react-router-dom';

import Card     from '../../components/Card';
import AuthForm from '../../components/AuthForm';

import './login.css';

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
      <div className="login-page">
        <Card className="login-card">
          <AuthForm onSubmit={this.handleSubmit} submitLabel="Entrar" />
          <Link to="/register" className="bottom-link">ou clique aqui para se registar</Link>
        </Card>
      </div>
    );
  }
}

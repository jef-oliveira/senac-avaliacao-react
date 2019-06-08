import React, { Component } from 'react';
import { Redirect, Link }   from 'react-router-dom';

import Card     from '../../components/Card';
import AuthForm from '../../components/AuthForm';

import './register.css';

export default class Register extends Component {
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
      <div className="register-page">
        <Card className="register-card">
          <AuthForm onSubmit={this.handleSubmit} submitLabel="Registar" />
          <Link to="/" className="bottom-link">cancelar</Link>
        </Card>
      </div>
    );
  }
}

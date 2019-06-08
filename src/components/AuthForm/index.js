import React, { Component } from 'react';

import ActionButton from '../ActionButton';

import './form.css';

export default class LoginForm extends Component {
  static defaultProps = {
    submitLabel: 'Submit',
  };

  state = {
    username: '',
    password: '',
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.props.onSubmit) {
      const credentials = {
        username: this.state.username, 
        password: this.state.password
      };
      this.props.onSubmit(credentials)
    }
  };

  handleChange = (event) => {
    this.setState({[event.target.id]: event.target.value});
  };

  render() {
    const { username, password } = this.state;
    const { submitLabel }        = this.props;

    const isDisabled = !username.length|| !password.length;

    return (
      <form className="auth-form-container" onSubmit={this.handleSubmit}>
        <label htmlFor="username">Username</label> 
        <input id="username" type="text" placeholder="Informe seu username" value={username} onChange={this.handleChange} />
        
        <label htmlFor="password">Password</label> 
        <input id="password" type="password" placeholder="Informe seu password" value={password} onChange={this.handleChange} />
        
        <ActionButton disabled={isDisabled}>{submitLabel}</ActionButton>
      </form>
    );
  }
}

import React, { Component } from 'react';

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
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="username">Username</label> 
          <input id="username" type="text" placeholder="Informe seu username" value={username} onChange={this.handleChange} />
        </div>

        <div>
          <label htmlFor="password">Password</label> 
          <input id="password" type="password" placeholder="Informe seu password" value={password} onChange={this.handleChange} />
        </div>

        <button disabled={isDisabled}>{submitLabel}</button>
      </form>
    );
  }
}

import React, { Component } from 'react';

import './card.css';

export default class LoginForm extends Component {
  render() {
    const { className, children } = this.props;

    return (
      <div className={'card-container ' + className}>
        {children}
      </div>
    );
  }
}

import React, { Component } from 'react';

import './actionButton.css';

export default class ActioonButton extends Component {
  render() {
    const { title, className, children, ...otherProps } = this.props;

    return (
      <button className={'action-button ' + className} {...otherProps}>
        {title || children}
      </button>
    );
  }
}

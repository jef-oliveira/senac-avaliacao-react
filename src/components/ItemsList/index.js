import React, { Component } from 'react';

export default class ItemsList extends Component {
  render() {
    const { items, onDelete } = this.props;

    return (
      <ul>
        {items.map((item, index) => {
          return (
            <li key={index}>
              {item.category} - {item.name}
              <span onClick={() => onDelete ? onDelete(item) : {}}>X</span>
            </li>
          );
        })}
      </ul>
    );
  }
}

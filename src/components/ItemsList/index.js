import React, { Component } from 'react';

import './list.css';

export default class ItemsList extends Component {
  render() {
    const { items, onDelete } = this.props;

    if (items.length)
      return (
        <div className="items-list-container">
          {items.map((item, index) => {
            const isLast = index === (items.length - 1);
            return (
              <div className={'item-list-item-container ' + (!isLast && 'divider')} key={index}>
                <div className="item-list-item-name">{item.category} - {item.name}</div>
                <div className="item-list-item-actions">
                  <button onClick={() => onDelete ? onDelete(item) : {}}>X</button>
                </div>
              </div>
            );
          })}
        </div>
      );
    else
      return (
        <div className="item-list-item-container">
          <div className="item-list-item-name">sem nenhum item...</div>
        </div>
      );
  }
}

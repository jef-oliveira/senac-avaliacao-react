import React, { Component, Fragment } from 'react';

import ItemForm  from '../../components/ItemForm';
import ItemsList from '../../components/ItemsList';

export default class Home extends Component {
  state = {
    items: []
  };

  addItem = (item) => {
    this.setState({items: [...this.state.items, item]});
  };

  deleteItem = (item) => {
    this.setState({items: [...this.state.items.filter(i => i !== item)]});
  };

  render() {
    return (
      <Fragment>
        <ItemForm onSubmit={this.addItem} />
        <ItemsList items={this.state.items} onDelete={this.deleteItem} />
      </Fragment>
    );
  }
}

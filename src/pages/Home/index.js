import React, { Component, Fragment } from 'react';

import Card      from '../../components/Card';
import ItemForm  from '../../components/ItemForm';
import ItemsList from '../../components/ItemsList';

import './home.css';

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
      <div className="home-page">
        <Card>
          <ItemForm onSubmit={this.addItem} />
        </Card>

        <Card className="items-card">
          <ItemsList items={this.state.items} onDelete={this.deleteItem} />
        </Card>
      </div>
    );
  }
}

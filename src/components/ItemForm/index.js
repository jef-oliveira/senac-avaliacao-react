import React, { Component } from 'react';

import ActionButton from '../ActionButton';

import './form.css';

export default class ItemForm extends Component {
  state = {
    itemCategories: [],
    itemCategory:   '',
    itemName:       '',
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.props.onSubmit) {
      const item = {
        name: this.state.itemName, 
        category: this.state.itemCategory
      };
      this.props.onSubmit(item)
    }

    this.setState({itemName: '', itemCategory: ''});
  };

  handleChange = (event) => {
    this.setState({[event.target.id]: event.target.value});
  };

  componentDidMount() {
    this.setState({
      itemCategories: [
        {id: 'cat-01', name: 'Categoria 1'},
        {id: 'cat-02', name: 'Categoria 2'},
        {id: 'cat-03', name: 'Categoria 3'},
        {id: 'cat-04', name: 'Categoria 4'},
      ]
    });
  }

  render() {
    const { itemCategories, itemCategory, itemName } = this.state;

    return (
      <form className="item-form-container" onSubmit={this.handleSubmit}>
        <label htmlFor="itemCategory">Categoria</label>
        <select id="itemCategory" value={itemCategory} onChange={this.handleChange}>
          <option value="">Selecione...</option>
          {itemCategories.map(itemCategory => {
            return <option key={itemCategory.id} value={itemCategory.id}>{itemCategory.name}</option>
          })}
        </select>

        <label htmlFor="itemName">Item</label> 
        <input id="itemName" type="text" value={itemName} onChange={this.handleChange} />

        <ActionButton disabled={!itemCategory.length|| !itemName.length}>OK</ActionButton>
      </form>
    );
  }
}

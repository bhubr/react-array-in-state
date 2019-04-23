import React, { Component } from 'react';
import getRandomString from './helpers/getRandomString';

class ArrayInState extends Component {
  constructor(props) {
    super(props);
    // Initialize state with an empty array
    this.state = {
      items: []
    };
    this.addItem = this.addItem.bind(this);
  }

  addItem() {
    const newItem = getRandomString();
    this.setState(prevState => {
      const items = prevState.items.concat([newItem]);
      return { items: items };
    });
  }

  render() {
    return (
      <div className="ArrayInState">
        <button onClick={this.addItem}>
          Add random item
        </button>
        <ul>
        {
          this.state.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))
        }
        </ul>
      </div>
    );
  }
}
export default ArrayInState;

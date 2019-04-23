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
    this.removeItem = this.removeItem.bind(this);
  }

  addItem() {
    const newItem = getRandomString();
    this.setState(prevState => {
      const items = prevState.items.concat([newItem]);
      return { items: items };
    });
  }

  removeItem(removedIndex) {
    this.setState(
      prevState => ({
        items: prevState.items.filter(
          (item, index) => removedIndex !== index
        )
      })
    );
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
            <li key={index}>
              {item}
              <button
                onClick={() => this.removeItem(index)}
              >
                Remove
              </button>
            </li>
          ))
        }
        </ul>
      </div>
    );
  }
}
export default ArrayInState;

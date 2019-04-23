import React, { Component } from 'react';
import getRandomString from './helpers/getRandomString';

class ArrayInState extends Component {
  constructor(props) {
    super(props);
    // Initialize state with an empty array
    this.state = {
      items: []
    };
  }

  render() {
    return (
      <div className="ArrayInState">
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

import React from 'react';
import ReactDOM from 'react-dom';
import ArrayInState from './ArrayInState';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ArrayInState />, div);
  ReactDOM.unmountComponentAtNode(div);
});

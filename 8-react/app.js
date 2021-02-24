import React from 'react';
import ReactDOM from 'react-dom';

const items = ['item 1', 'item 2', 'item 3'];

ReactDOM.render(
  <ul>{ items.map(v => <li>{v}</li> )}</ul>,
  document.getElementById('root')
);

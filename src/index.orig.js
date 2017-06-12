import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.orig.js';

/*
  State:
  cards ( array )
  viewStatus ( bool )
  selectedId ( number )
  nextId  ( number )

  Action:
  Save
  Edit
  Remove
  Add
  Cancel


*/

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

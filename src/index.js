import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './redux/app.js';
import heroesCards from './redux/reducers.js';
import cardsData from './redux/cardsData.js';

const initialState = {
  cards: cardsData,
  viewStatus: null,
  selectedId: null,
  nextId: cardsData.length
}

const store = createStore(heroesCards, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

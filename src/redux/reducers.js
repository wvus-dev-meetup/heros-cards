import { combineReducers } from 'redux';
import { SAVE, ADD, EDIT, REMOVE } from './actions.js';

function cards(state = [], action) {
  switch (action.type) {
    case SAVE:
      if (!state[action.data.id]) {
        // Add New Item
        return [...state, action.data];
      }

      // Edit Existing Item
      return state.map((card) => {
        if (action.data.id === card.id) {
          return action.data;
        }

        return card;//Object.assign({}, card);
      })
    case REMOVE:
      return state.filter(card => card.id !== action.id);
    default:
      return state;
  }
}

function viewStatus(state = false, action) {
  switch (action.type) {
    case ADD:
     return true;
    case EDIT:
      return true;
    default:
      return false;
  }
}

function selectedId(state = null, action) {
  switch (action.type) {
    case ADD:
     return null;
    case EDIT:
      return (typeof action.id !== undefined) ? action.id : null;
    default:
      return state;
  }
}

function nextId(state = 0, action) {
  switch (action.type) {
    case ADD:
      return state + 1;
    default:
      return state;
  }
}

const heroesCards = combineReducers({
  cards,
  viewStatus,
  selectedId,
  nextId
});

export default heroesCards;

/**
 * Inspired by PKinlow's codepen https://codepen.io/pkinlow/pen/WjrWzZ/
 *
 */
import React from 'react';
import { connect } from 'react-redux';
import { save, add, edit, remove, cancel } from './actions.js';
import { Search } from './search.js';
import { Cards } from './cards.js'
import CardInput  from './cardInput.js';

class HeroApp extends React.Component {
  constructor(props) {
    console.log('props', props);
    super(props);
    this.profiles = this.props.cards;
    // this.profiles.sort(() => { return 0.5 - Math.random() });
    this.state = {
        searchText: '',
        selectedType: 'all'
    };

    this.handleSearchFilter = this.handleSearchFilter.bind(this);
    this.handleTypeFilter = this.handleTypeFilter.bind(this);
  }

  handleSearchFilter(e) {
    const searchText = e.target.value;
    this.setState({searchText});
  }

  handleTypeFilter(e) {
    const profileType = e.target.value;
    this.setState({selectedType: profileType});
    console.log(this.state.selectedType);
  }

  selectedInput(id) {
    const selected = this.props.cards
      .map((card, index) => Object.assign({}, card, {index}))
      .filter((card) => card.id === id)[0] || null;

    if (selected) {
      return Object.assign({}, this.props.cards[selected.index], {saveInput: this.props.saveCard});
    } else {
      return {id: this.props.nextId, saveInput: this.props.saveCard};
    }
  }

  /* <Search handleTypeFilter={this.handleTypeFilter} handleSearchFilter={this.handleSearchFilter} selectedType={this.state.selectedType}  searchText={this.state.searchText}/> */

  render() {
    return (
      <div className="App">

        <Cards profiles={this.props.cards} searchText={this.state.searchText} selectedType={this.state.selectedType} handleEdit={this.props.editCard} handleDelete={this.props.removeCard} />

        {
          this.props.viewStatus ?
          <CardInput {...this.selectedInput(this.props.selectedId)} cancelInput={this.props.cancel} />
          :
          <button onClick={this.props.addCard}>Add Card</button>
        }

        <div id="bottom"></div>
      </div>
    );
  }
}
const botton = () => {
  setTimeout(() => {window.location = "#bottom"}, 200);
}

const clear = () => {
  setTimeout(() => {window.location = "#"}, 200);
}

export default connect(

  function mapStateToProps(state){
    console.log('update', state);
    return state;
  },

  function mapDepatchToProps(dispatch, props) {
    return {
      saveCard: (fields) => {
        dispatch(save(fields));
        clear();
      },
      addCard: () => {
        dispatch(add());
        botton();
      },
      editCard: (id) => {
        dispatch(edit(id));
        botton();
      },
      removeCard: (id) => {
        console.log('remove', id);
        dispatch(remove(id));

        clear();
      },
      cancel: () => {
        dispatch(cancel());
        clear();
      }
    };
  }
)(HeroApp);

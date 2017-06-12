import React from 'react';

const Search = (props) => {
  return (
    <form className="search-form">
      <input type="text" placeholder="Search..." onChange={props.handleSearchFilter}  value={props.searchText} />
      <p>
        <select onChange={props.handleTypeFilter} value={props.selectedType}>
          <option value="all">All</option>
          <option value="hero">Hero</option>
          <option value="villain">Villain</option>
        </select>

      </p>
    </form>
  );
};

export { Search }

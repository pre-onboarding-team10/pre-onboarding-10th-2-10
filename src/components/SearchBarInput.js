import React from 'react';
import './../styles/SearchBarInput.css';
const SearchBarInput = ({ keyword, handleInputChange, handleKeyDown }) => {
  return (
    <section className="searchBarInput">
      <input
        className="searchBarInput__input"
        type="text"
        value={keyword}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="search"
      />
      <div className="searchBarInput__button">검색</div>
    </section>
  );
};

export default SearchBarInput;

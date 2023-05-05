import React from 'react';

const SearchBarInput = ({ keyword, handleInputChange, handleKeyDown }) => {
  return (
    <div className="search-bar_input_wrap">
      <div
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          borderRadius: '48px',
        }}
      >
        <input
          className="search-bar_input"
          type="text"
          value={keyword}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="search"
        />
        <button className="search-bar_input_button"></button>
      </div>
    </div>
  );
};

export default SearchBarInput;

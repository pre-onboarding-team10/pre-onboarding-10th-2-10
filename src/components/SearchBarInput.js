import React from 'react';

const SearchBarInput = ({ keyword, handleInputChange, handleKeyDown }) => {
  return (
    <input
      type="text"
      value={keyword}
      onChange={handleInputChange}
      onKeyDown={handleKeyDown}
      placeholder="search"
      style={{
        width: '320px',
        boxSizing: 'border-box',
        height: '70px',
        borderRadius: '42px',
        border: 'none',
        fontSize: '16px',
        fontWeight: '400',
        lineHeight: '1.6',
        padding: '12px 20px',
      }}
    />
  );
};

export default SearchBarInput;

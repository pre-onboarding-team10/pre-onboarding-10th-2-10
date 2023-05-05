import React from 'react';
import searchIcon from '../assets/searchIcon';

const SearchBarInput = ({ keyword, handleInputChange, handleKeyDown }) => {
  return (
    <div>
      <input
        type="text"
        value={keyword}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="질환명을 입력해 주세요."
      />
      <button>{searchIcon}</button>
    </div>
  );
};

export default SearchBarInput;

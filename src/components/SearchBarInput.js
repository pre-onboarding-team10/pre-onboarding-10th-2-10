import React from 'react';
import searchIcon from '../assets/searchIcon';

const SearchBarInput = ({
  keyword,
  handleInputChange,
  handleKeyDown,
  onCompositionStart,
  onCompositionEnd,
}) => {
  return (
    <div className="search__search-bar">
      <input
        type="text"
        value={keyword}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        onCompositionStart={onCompositionStart}
        onCompositionEnd={onCompositionEnd}
        placeholder="질환명을 입력해 주세요."
      />
      <button>{searchIcon}</button>
    </div>
  );
};

export default SearchBarInput;

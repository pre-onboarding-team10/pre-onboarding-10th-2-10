import React from 'react';

const SearchBarInput = ({ keyword, handleInputChange, handleKeyDown }) => {
  return (
    <div className="search-bar_input_wrap">
      <div className="search-bar_input_container">
        <i className="search-bar_input_icon" />
        <input
          className="search-bar_input"
          type="text"
          value={keyword}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="질환명을 입력해주세요"
        />
        <button className="search-bar_input_button">
          <i className="search-bar_input_button_icon" />
        </button>
      </div>
    </div>
  );
};

export default SearchBarInput;

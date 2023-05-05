import React, { useState } from 'react';
import useKeywordSuggestion from '../hooks/useKeywordSuggestion';
import useInputChange from '../hooks/useInputChange';
import useKeyboard from '../hooks/useKeyboard';
import SearchBarInput from '../components/SearchBarInput';
import SuggestionList from '../components/SuggestionList';
import { FaSearch } from 'react-icons/fa';

const SearchBar = () => {
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const [keyword, handleInputChange, setKeyword] = useInputChange();
  const [suggestions] = useKeywordSuggestion(keyword);

  const handleKeyDown = useKeyboard(
    suggestions,
    focusedIndex,
    setFocusedIndex,
    setKeyword
  );

  return (
    <>
      <h2>국내 모든 임상시험 검색하고 온라인으로 참여하기</h2>
      <div className="container">
        <FaSearch className="search-icon__input" />
        <SearchBarInput
          keyword={keyword}
          handleInputChange={handleInputChange}
          handleKeyDown={handleKeyDown}
        />
        <button>검색</button>
      </div>

      {keyword ? (
        <SuggestionList
          suggestions={suggestions}
          focusedIndex={focusedIndex}
          setFocusedIndex={setFocusedIndex}
          keyword={keyword}
        />
      ) : null}
    </>
  );
};

export default SearchBar;

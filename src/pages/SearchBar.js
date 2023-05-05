import React, { useState } from 'react';
import SearchBarInput from '../components/SearchBarInput';
import SuggestionList from '../components/SuggestionList';
import useInputChange from '../hooks/useInputChange';
import useKeyboard from '../hooks/useKeyboard';
import useKeywordSuggestion from '../hooks/useKeywordSuggestion';

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
    <div>
      <SearchBarInput
        keyword={keyword}
        handleInputChange={handleInputChange}
        handleKeyDown={handleKeyDown}
      />
      {keyword && (
        <SuggestionList
          suggestions={suggestions}
          focusedIndex={focusedIndex}
          setFocusedIndex={setFocusedIndex}
        />
      )}
    </div>
  );
};

export default SearchBar;

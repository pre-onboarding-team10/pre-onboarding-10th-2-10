import React from 'react';
import useKeywordSuggestion from '../hooks/useKeywordSuggestion';
import useInputChange from '../hooks/useInputChange';
import useKeyboard from '../hooks/useKeyboard';
import SearchBarInput from '../components/SearchBarInput';
import SuggestionList from '../components/SuggestionList';

const SearchBar = () => {
  const [keyword, handleInputChange, setKeyword] = useInputChange();
  const [suggestions] = useKeywordSuggestion(keyword);
  const { handleKeyDown } = useKeyboard(suggestions, setKeyword);
  return (
    <>
      <SearchBarInput
        keyword={keyword}
        handleInputChange={handleInputChange}
        handleKeyDown={(e) => handleKeyDown(e, suggestions)}
      />

      {keyword && suggestions?.length > 0 ? (
        <SuggestionList suggestions={suggestions} />
      ) : (
        <div>검색어 없음</div>
      )}
    </>
  );
};

export default SearchBar;

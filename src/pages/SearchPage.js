import { useState } from 'react';
import useKeywordSuggestion from '../hooks/useKeywordSuggestion';
import useInputChange from '../hooks/useInputChange';
import useKeyboard from '../hooks/useKeyboard';
import SuggestionList from '../components/SuggestionList';
import SearchTitle from '../components/SearchTitle';
import Container from '../components/Container';
import SearchBar from '../components/SearchBar';

const SearchPage = () => {
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
    <Container>
      <SearchTitle />
      <SearchBar
        keyword={keyword}
        handleInputChange={handleInputChange}
        handleKeyDown={handleKeyDown}
      />

      {keyword && suggestions.length > 0 ? (
        <SuggestionList
          suggestions={suggestions}
          focusedIndex={focusedIndex}
          setFocusedIndex={setFocusedIndex}
        />
      ) : (
        <div>검색어 없음</div>
      )}
    </Container>
  );
};

export default SearchPage;

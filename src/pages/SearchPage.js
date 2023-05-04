import { useState } from 'react';
import useKeywordSuggestion from '../hooks/useKeywordSuggestion';
import useInputChange from '../hooks/useInputChange';
import useKeyboard from '../hooks/useKeyboard';
import { SuggestionList, EmptyList } from '../components/Suggestion';
import { Container, Title } from '../components/Common/';
import { SearchBar } from '../components/Search';

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
      <Title />
      <SearchBar
        keyword={keyword}
        handleInputChange={handleInputChange}
        handleKeyDown={handleKeyDown}
      />

      {suggestions.length > 0 ? (
        <SuggestionList
          suggestions={suggestions}
          focusedIndex={focusedIndex}
          setFocusedIndex={setFocusedIndex}
        />
      ) : (
        <div>{keyword === '' ? '' : <EmptyList />}</div>
      )}
    </Container>
  );
};

export default SearchPage;

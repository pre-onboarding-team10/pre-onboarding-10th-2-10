import React, { useState } from 'react';
import useKeywordSuggestion from '../hooks/useKeywordSuggestion';
import useInputChange from '../hooks/useInputChange';
import useKeyboard from '../hooks/useKeyboard';
import SearchBarInput from '../components/SearchBarInput';
import SuggestionList from '../components/SuggestionList';

const SearchBar = () => {
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const [keyword, handleInputChange, setKeyword] = useInputChange();
  // const [suggestions] = useKeywordSuggestion(keyword);
  const suggestions = [
    {
      name: '갑상선암',
      id: 4373,
    },
    {
      name: '갑상선염',
      id: 4376,
    },
    {
      name: '갑상선중독증',
      id: 4378,
    },
    {
      name: '갑상선 중독',
      id: 4381,
    },
    {
      name: '갑상선암종',
      id: 4375,
    },
    {
      name: '갑상선염증',
      id: 4377,
    },
    {
      name: '갑상선 결절',
      id: 4355,
    },
    {
      name: '갑상선 항진증',
      id: 4372,
    },
    {
      name: '갑상선저하증',
      id: 4368,
    },
    {
      name: '갑상선기능저하증',
      id: 4364,
    },
    {
      name: '갑상선기능항진증',
      id: 4369,
    },
    {
      name: '갑상선 수질암',
      id: 4359,
    },
    {
      name: '갑상선 여포암',
      id: 4361,
    },
    {
      name: '갑상선 유두암',
      id: 4363,
    },
    {
      name: '갑상선기능저하',
      id: 4367,
    },
    {
      name: '갑상선 미분화암',
      id: 4357,
    },
  ];

  const handleKeyDown = useKeyboard(
    suggestions,
    focusedIndex,
    setFocusedIndex,
    setKeyword
  );

  // if (keyword && suggestions.length > 0) return <div>검색어 없음</div>;

  return (
    <>
      <SearchBarInput
        keyword={keyword}
        handleInputChange={handleInputChange}
        handleKeyDown={handleKeyDown}
      />

      {keyword && suggestions && (
        <SuggestionList
          suggestions={suggestions}
          focusedIndex={focusedIndex}
          setFocusedIndex={setFocusedIndex}
        />
      )}
    </>
  );
};

export default SearchBar;

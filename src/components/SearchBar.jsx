import React from 'react';
import useSearch from '../hooks/useSearch';
import KeywordList from './KeywordList';
import useKeyDown from '../hooks/useKeyDown';

const SearchBar = () => {
  const { keywordList, handleChange, handleSearch } = useSearch();
  const { focusIdx, handleKeyDown } = useKeyDown(keywordList);
  return (
    <>
      <div>
        <input
          type="search"
          placeholder="질환명을 입력해 주세요."
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        <button onClick={handleSearch}>검색</button>
      </div>
      <KeywordList keywordList={keywordList} focusIdx={focusIdx} />
    </>
  );
};

export default SearchBar;

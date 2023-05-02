import { useEffect, useState } from 'react';
import SearchInput from '../components/SearchInput';
import SearchResult from '../components/SearchResult';
import { getSearchResults } from '../api/utils';
import useKeyDown from '../hooks/useKeyDown';
import useFetchResults from '../hooks/useFetchResults';

const SearchPage = () => {
  const { selectedResultIndex, setSelectedResultIndex, handleKeyDown } =
    useKeyDown();
  const { query, searchResults, handleChangeInput } = useFetchResults();

  return (
    <>
      <div className="search-form">
        <div className="search-form__header">
          <h1>국내 모든 임상시험 검색하고 온라인으로 참여하기</h1>
        </div>
        <div className="search-form__input-bar">
          <SearchInput
            value={query}
            onChangeSearchInput={handleChangeInput}
            onKeyDown={(e) => handleKeyDown(e, searchResults)}
          />
          <button>검색</button>
        </div>
        <div className="search-form__result">
          <SearchResult
            searchResults={searchResults}
            selectedResultIndex={selectedResultIndex}
          />
        </div>
      </div>
    </>
  );
};

export default SearchPage;

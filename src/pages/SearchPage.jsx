import { useEffect, useState } from 'react';
import SearchInput from '../components/SearchInput';
import SearchResult from '../components/SearchResult';
import { getSearchResults } from '../api/utils';

const SearchPage = () => {
  const mockData = [
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
  const mockDataNolength = [];
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedResultIndex, setSelectedResultIndex] = useState(-1);
  const handleChangeInput = (e) => {
    setQuery(e.target.value);
    setSelectedResultIndex(-1);
  };
  const handleKeyDown = (e) => {
    if (
      e.key === 'ArrowDown' &&
      selectedResultIndex < searchResults.length - 1
    ) {
      setSelectedResultIndex(selectedResultIndex + 1);
    } else if (e.key === 'ArrowUp' && selectedResultIndex > -1) {
      setSelectedResultIndex(selectedResultIndex - 1);
    }
  };

  useEffect(() => {
    const fetchSearchResults = async () => {
      if (query) {
        const results = await getSearchResults(query);
        setSearchResults(results);
      }
    };

    fetchSearchResults();
  }, [query]);

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
            onKeyDown={handleKeyDown}
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

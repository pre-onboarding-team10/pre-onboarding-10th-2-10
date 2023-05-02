import { useCallback, useEffect, useState } from 'react';
import { getSearch } from '../api/search';

const useSearch = () => {
  const [keyword, setKeyword] = useState('');
  const [keywordList, setKeywordList] = useState([]);

  const handleChange = (event) => {
    setKeyword(event.target.value);
  };

  const handleSearch = useCallback(async () => {
    const keywords = await getSearch(keyword);
    setKeywordList(keywords);
  }, [keyword]);

  useEffect(() => {
    if (keyword !== '') handleSearch();
    else setKeywordList([]);
  }, [keyword, handleSearch]);

  return {
    keyword,
    keywordList,
    handleChange,
    handleSearch,
  };
};

export default useSearch;

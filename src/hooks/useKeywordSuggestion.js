import { useState, useEffect, useCallback } from 'react';
import { apiCache } from '../apis/apiCache';

const useKeywordSuggestion = (keyword) => {
  const [suggestions, setSuggestions] = useState([]);

  const fetchSuggestions = useCallback(async () => {
    try {
      if (keyword) {
        const response = await apiCache.getCacheStorage(keyword);
        setSuggestions(response);
      } else {
        setSuggestions([]);
      }
    } catch (error) {
      console.error(error);
    }
  }, [keyword]);

  useEffect(() => {
    fetchSuggestions();
  }, [fetchSuggestions]);

  return [suggestions];
};

export default useKeywordSuggestion;

import { useCallback, useEffect, useState } from 'react';
import { apiClient } from '../apis/apiClient';

const useKeywordSuggestion = (keyword) => {
  const [suggestions, setSuggestions] = useState([]);

  const fetchSuggestions = useCallback(async () => {
    try {
      if (keyword) {
        const fetchedSuggestions = await apiClient.getKeyword(keyword);
        setSuggestions(fetchedSuggestions);
      } else {
        setSuggestions([]);
      }
    } catch (error) {
      console.error(error);
    }
  }, [keyword]);

  useEffect(() => {
    const timer = setTimeout(fetchSuggestions, 200);

    return () => clearTimeout(timer);
  }, [fetchSuggestions]);

  return [suggestions];
};

export default useKeywordSuggestion;

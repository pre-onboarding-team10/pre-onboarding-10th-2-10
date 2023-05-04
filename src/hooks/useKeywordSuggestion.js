import { useState, useEffect, useCallback } from 'react';
import { apiClient } from '../apis/apiClient';

const useKeywordSuggestion = (keyword) => {
  const [suggestions, setSuggestions] = useState([]);

  const fetchSuggestions = useCallback(async () => {
    try {
      if (keyword) {
        const response = await apiClient.getCachedKeywords(keyword);
        setSuggestions(response);
      } else {
        setSuggestions([]);
      }
    } catch (error) {
      console.error(error);
    }
  }, [keyword]);

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchSuggestions();
    }, 400);
    return () => clearTimeout(timer);
  }, [fetchSuggestions]);

  return [suggestions];
};

export default useKeywordSuggestion;

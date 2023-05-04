import { useState, useEffect } from 'react';
import { apiClient } from '../apis/apiClient';
import { suggestionsCache } from '../store/cache';
import getCacheData from '../utils/getCacheData';

const API_REQUEST_TIMER = 1000;

const useKeywordSuggestion = (keyword) => {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const fetchSuggestions = async () => {
      try {
        if (keyword) {
          const response = await apiClient.getKeyword(keyword);
          const data = response.data;
          console.info('calling api');
          setSuggestions(data);
          suggestionsCache[keyword] = { data, timeStamp: Date.now() };
        } else {
          setSuggestions([]);
        }
      } catch (error) {
        console.error(error);
      }
    };

    const getSuggestions = async () => {
      let data = getCacheData(suggestionsCache, keyword);

      if (data) {
        setSuggestions(data);
      }

      if (!data) {
        data = await fetchSuggestions();
      }
    };

    const timeout = setTimeout(() => {
      getSuggestions();
    }, API_REQUEST_TIMER);

    return () => clearTimeout(timeout);
  }, [keyword]);

  return [suggestions];
};

export default useKeywordSuggestion;

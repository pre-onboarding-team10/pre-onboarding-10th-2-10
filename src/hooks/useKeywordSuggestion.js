import { useState, useEffect, useCallback } from 'react';
import { apiClient } from '../apis/apiClient';

const useKeywordSuggestion = (keyword) => {
  const [suggestions, setSuggestions] = useState([]);

  const fetchSuggestions = useCallback(async () => {
    try {
      if (JSON.parse(localStorage.getItem(`${keyword}`)) !== null) {
        setSuggestions(JSON.parse(localStorage.getItem(`${keyword}`)).value);
      } else if (keyword) {
        const response = await apiClient.getKeyword(keyword);
        setSuggestions(response.data);
        const cachedata = {
          value: response.data,
          expireTime: Date.now() + 3600 * 1000,
        };
        localStorage.setItem(`${keyword}`, JSON.stringify(cachedata));
        console.info('calling api');
      } else {
        setSuggestions([]);
      }
    } catch (error) {
      console.error(error);
    }
  }, [keyword]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (keyword) {
        fetchSuggestions();
      }
    }, 500);
    return () => clearTimeout(timer);
  }, [keyword]);

  useEffect(() => {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      try {
        const data = JSON.parse(localStorage.getItem(key));
        if (data && data.expireTime && data.expireTime < Date.now()) {
          localStorage.removeItem(key);
        }
      } catch (e) {
        localStorage.removeItem(key);
      }
    }
  }, [suggestions]);

  return [suggestions];
};

export default useKeywordSuggestion;

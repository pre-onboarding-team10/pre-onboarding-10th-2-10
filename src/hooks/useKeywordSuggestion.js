import { useState, useEffect, useCallback } from 'react';
import { apiClient } from '../apis/apiClient';
import { setExpireTime } from '../utils/setExpireTime';

const now = new Date();
const EXPIRE_TIME = 1000 * 60;

const useKeywordSuggestion = (keyword) => {
  const [suggestions, setSuggestions] = useState([]);

  const fetchSuggestions = useCallback(async () => {
    const isEmptyInput = keyword.trim() === '';
    const cachedItem = localStorage.getItem(keyword);
    const parsedCache = JSON.parse(cachedItem);

    if (isEmptyInput) {
      setSuggestions([]);
      return;
    }

    if (cachedItem) {
      setSuggestions(parsedCache);
      return;
    }

    try {
      const { data } = await apiClient.getKeyword(keyword);
      const cacheObject = {
        data,
        expireTime: now.getTime() + EXPIRE_TIME,
      };
      console.info('calling api');
      localStorage.setItem(keyword, JSON.stringify(cacheObject));
      setSuggestions(data);
    } catch (error) {
      console.error(error);
    }
  }, [keyword]);

  useEffect(() => {
    fetchSuggestions();
  }, [fetchSuggestions]);

  useEffect(() => {
    setExpireTime(keyword);
  }, [keyword]);

  return [suggestions];
};

export default useKeywordSuggestion;

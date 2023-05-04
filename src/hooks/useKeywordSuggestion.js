import { useState, useEffect, useCallback } from 'react';
import { apiClient } from '../apis/apiClient';
import {
  cacheData,
  getFromCache,
  startCacheCleanUpInterval,
  stopCacheCleanUpInterval,
} from '../utils/cache';
import useDebounce from './useDebounce';

const useKeywordSuggestion = (keyword) => {
  const [suggestions, setSuggestions] = useState([]);
  const debouncedKeyword = useDebounce(keyword, 500);

  const fetchSuggestions = useCallback(async () => {
    try {
      if (!debouncedKeyword) {
        return setSuggestions([]);
      }

      const cachedData = getFromCache(debouncedKeyword);
      if (cachedData) {
        setSuggestions(cachedData);
        return;
      }

      const response = await apiClient.getKeyword(debouncedKeyword);
      setSuggestions(response.data);

      cacheData(debouncedKeyword, response.data);
    } catch (error) {
      console.error(error);
    }
  }, [debouncedKeyword]);

  useEffect(() => {
    fetchSuggestions();
  }, [fetchSuggestions]);

  useEffect(() => {
    const cleanUpIntervalId = startCacheCleanUpInterval();
    return () => {
      stopCacheCleanUpInterval(cleanUpIntervalId);
    };
  }, []);

  return [suggestions];
};

export default useKeywordSuggestion;

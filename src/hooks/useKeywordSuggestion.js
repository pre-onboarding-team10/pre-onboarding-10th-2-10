import { useState, useEffect, useCallback } from 'react';
import { apiClient } from '../apis/apiClient';

const EXPIRE_TIME = 300; //300 seconds

const useKeywordSuggestion = (keyword) => {
  const [suggestions, setSuggestions] = useState([]);
  const fetchSuggestions = useCallback(async () => {
    try {
      if (keyword) {
        let cachedData = getDataFromCache(keyword);
        if (cachedData) {
          setSuggestions(cachedData);
        } else {
          const response = await apiClient.getKeyword(keyword);
          const responseData = response.data;
          setSuggestions(responseData);
          setCache(keyword, responseData, EXPIRE_TIME);
        }
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

function getDataFromCache(keyword) {
  const cache = localStorage.getItem(`suggestion-${keyword}`);
  if (cache) {
    const { data, expireTime: cacheExpireTime } = JSON.parse(cache);
    if (new Date().getTime() < cacheExpireTime) {
      return data;
    }
  }
  return null;
}

function setCache(keyword, data, expireTime) {
  const cache = {
    data,
    expireTime: new Date().getTime() + expireTime * 1000,
  };
  localStorage.setItem(`suggestion-${keyword}`, JSON.stringify(cache));
}

export default useKeywordSuggestion;

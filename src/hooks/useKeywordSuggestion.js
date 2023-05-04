import { useState, useEffect, useCallback, useRef } from 'react';
import { apiClient } from '../apis/apiClient';
import { getDataFromCache, setCache } from '../utils/cacheControl';
import { debounce } from '../utils/debounce';

const EXPIRE_TIME = 300; //300 seconds

const useKeywordSuggestion = (keyword) => {
  const [suggestions, setSuggestions] = useState([]);
  const fetchSuggestions = useCallback(async (keyword) => {
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
  }, []);

  const debounceRef = useRef(
    debounce((keyword) => {
      fetchSuggestions(keyword);
    }, 500)
  );

  useEffect(() => {
    if (keyword) {
      let cachedData = getDataFromCache(keyword);
      if (cachedData) {
        setSuggestions(cachedData);
      } else {
        debounceRef.current(keyword);
      }
    } else {
      setSuggestions([]);
    }
  }, [keyword, debounceRef]);

  return [suggestions];
};

export default useKeywordSuggestion;

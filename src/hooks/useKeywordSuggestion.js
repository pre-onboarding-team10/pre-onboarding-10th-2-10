import { useState, useEffect } from 'react';
import { apiClient } from '../apis/apiClient';
import { suggestionsCache } from '../store/cache';
import getCacheData from '../utils/getCacheData';

const API_REQUEST_TIMER = 1000;

const useKeywordSuggestion = (keyword) => {
  const [suggestions, setSuggestions] = useState([]);

  console.log(suggestionsCache);

  useEffect(() => {
    const fetchSuggestions = async () => {
      try {
        if (keyword) {
          const response = await apiClient.getKeyword(keyword);
          const data = response.data;
          console.info('calling api');
          setSuggestions(data);
          //캐쉬에 저장되어 있지 않은 경우, 캐쉬에 저장 & expire time 설정
          suggestionsCache[keyword] = { data, timeStamp: Date.now() };
        } else {
          setSuggestions([]);
        }
      } catch (error) {
        console.error(error);
      }

      //캐쉬를 검색 후 캐쉬에 저장되어 있으면 캐쉬에 저장된 데이터를 사용
      // if (cache[keyword]) {
      //   setSuggestions(cache[keyword].data);
      // } else {
      //   try {
      //     if (keyword) {
      //       const response = await apiClient.getKeyword(keyword);
      //       const data = response.data;
      //       setSuggestions(data);
      //       //캐쉬에 저장 & expire time 설정
      //       cache[keyword] = {};
      //       cache[keyword].data = data;
      //       cache[keyword].timeStamp = Date.now();
      //     } else {
      //       setSuggestions([]);
      //     }
      //   } catch (error) {
      //     console.error(error);
      //   }
      // }
    };

    const getSuggestions = async () => {
      let data = getCacheData(suggestionsCache, keyword);

      if (data) {
        setSuggestions(data);
      }

      if (!data) {
        data = await fetchSuggestions(); // Fetch new data
      }
    };

    /** 실행부분 */
    const timeout = setTimeout(() => {
      getSuggestions();

      //   if (data === null || undefined) {
      //     console.log('최초 한번 실행, 시간 지나고 실행');
      //     data = fetchSuggestions();
      //     setSuggestions(data);
      //   }
    }, API_REQUEST_TIMER);

    return () => clearTimeout(timeout);
  }, [keyword]);

  return [suggestions];
};

export default useKeywordSuggestion;

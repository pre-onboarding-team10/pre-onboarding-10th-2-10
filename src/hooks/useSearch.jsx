import axios from 'axios';
import { useEffect, useState } from 'react';

export const useSearch = (word) => {
  const [recommendationWords, setRecoomendationWoard] = useState();

  const fetchRecommendationWords = async () => {
    if (word.length > 0) {
      const { data } = await axios.get(
        `/api/v1/search-conditions/?name=${word}`
      );
      setRecoomendationWoard(data);
    } else {
      setRecoomendationWoard([]);
    }
  };

  useEffect(() => {
    fetchRecommendationWords();
  }, [word]);

  return {
    recommendationWords,
  };
};

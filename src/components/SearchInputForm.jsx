import axios from 'axios';
import { useEffect, useState } from 'react';
import { SearchWordList } from './SearchWordList';

export const SearchInputForm = () => {
  const [value, setValue] = useState('');

  const { recommendationWords } = useSearch(value);

  return (
    <div>
      <div>
        <input
          type="search"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit">submit</button>
      </div>
      {recommendationWords ? (
        <SearchWordList searchWords={recommendationWords} />
      ) : null}
    </div>
  );
};

const useSearch = (word) => {
  const [recommendationWords, setRecoomendationWoard] = useState();

  const fetchRecommendationWords = async () => {
    if (word.length > 0) {
      const { data } = await axios.get(
        `/api/v1/search-conditions/?name=${value}`
      );
      setRecoomendationWoard(data);
    } else {
      setRecoomendationWoard([]);
    }
  };

  useEffect(() => {
    fetchRecommendationWords();
  }, [value]);

  return {
    recommendationWords,
  };
};

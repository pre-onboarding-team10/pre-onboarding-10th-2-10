import axios from 'axios';
import { useEffect, useState } from 'react';
import { SearchWordList } from './SearchWordList';

export const SearchInputForm = () => {
  const [value, setValue] = useState('');

  const [recommendationWords, setRecoomendationWoard] = useState();

  const fetchRecommendationWords = async () => {
    if (value.length > 0) {
      const { data } = await axios.get(
        `/api/v1/search-conditions/?name=${value}`
      );
      setRecoomendationWoard(data);
    } else {
      setRecoomendationWoard(undefined);
    }
  };

  useEffect(() => {
    fetchRecommendationWords();
  }, [value]);

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

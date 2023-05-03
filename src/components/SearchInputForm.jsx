import axios from 'axios';
import { useEffect, useState } from 'react';
import { useArrowKeyFocus } from '../hooks/useArrowKeyFocus';
import { SearchWordItem } from './SearchWordItem';

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

const SearchWordList = ({ searchWords }) => {
  const [focus, setFocus] = useArrowKeyFocus(searchWords.length);

  return (
    <ul>
      {searchWords.map((searchWord, i) => (
        <SearchWordItem
          key={searchWord.id}
          word={searchWord.name}
          focus={focus === i}
          setFocus={() => setFocus(i)}
        />
      ))}
    </ul>
  );
};

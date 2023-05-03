import { useState } from 'react';
import { SearchWordList } from './SearchWordList';
import { useSearch } from '../hooks/useSearch';

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

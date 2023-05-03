import { useState } from 'react';
import { useSearch } from '../hooks/useSearch';
import { SearchInput } from './SearchInput';
import { SearchWordList } from './SearchWordList';

export const SearchInputForm = () => {
  const [value, setValue] = useState('');

  const { recommendationWords } = useSearch(value);

  return (
    <div>
      <SearchInput value={value} onChange={(e) => setValue(e.target.value)} />
      {recommendationWords ? (
        <SearchWordList searchWords={recommendationWords} />
      ) : null}
    </div>
  );
};

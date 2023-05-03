import { useState } from 'react';
import { useSearch } from '../hooks/useSearch';
import { SearchWordList } from './SearchWordList';
import { SearchInput } from './SearchInput';

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

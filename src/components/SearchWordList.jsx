import { useArrowKeyFocus } from '../hooks/useArrowKeyFocus';
import { SearchWordItem } from './SearchWordItem';

export const SearchWordList = ({ searchWords }) => {
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

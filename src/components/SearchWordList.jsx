import { useArrowKeyFocus } from '../hooks/useArrowKeyFocus';
import { SearchWordItem } from './SearchWordItem';

export const SearchWordList = ({ searchWords }) => {
  const [focus, setFocus] = useArrowKeyFocus(searchWords.length);

  if (searchWords.length === 0) return <span>추천 검색어가 없습니다.</span>;

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

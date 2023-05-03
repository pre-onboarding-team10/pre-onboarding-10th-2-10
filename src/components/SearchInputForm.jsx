import { useArrowKeyFocus } from '../hooks/useArrowKeyFocus';
import { SearchWordItem } from './SearchWordItem';

export const SearchInputForm = () => {
  return (
    <div>
      <div>
        <input type="search" />
        <button type="submit">submit</button>
      </div>
      <SearchWordList />
    </div>
  );
};

const SearchWordList = () => {
  const [focus, setFocus] = useArrowKeyFocus(3);

  return (
    <ul>
      <SearchWordItem
        word={'간세포암1'}
        focus={focus === 0}
        setFocus={() => setFocus(0)}
      />
      <SearchWordItem
        word={'간세포암2'}
        focus={focus === 1}
        setFocus={() => setFocus(1)}
      />
      <SearchWordItem
        word={'간세포암3'}
        focus={focus === 2}
        setFocus={() => setFocus(2)}
      />
    </ul>
  );
};

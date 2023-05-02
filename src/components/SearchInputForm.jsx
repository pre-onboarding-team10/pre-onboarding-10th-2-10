import { useArrowKeyFocus } from '../hooks/useArrowKeyFocus';
import { SearchWordItem } from './SearchWordItem';

export const SearchInputForm = () => {
  const [focus, setFocus] = useArrowKeyFocus(3);

  return (
    <div>
      <div>
        <input type="search" />
        <button type="submit">submit</button>
      </div>
      <ul>
        <SearchWordItem focus={focus === 0} setFocus={() => setFocus(0)} />

        <SearchWordItem focus={focus === 1} setFocus={() => setFocus(1)} />
        <SearchWordItem focus={focus === 2} setFocus={() => setFocus(2)} />
      </ul>
    </div>
  );
};

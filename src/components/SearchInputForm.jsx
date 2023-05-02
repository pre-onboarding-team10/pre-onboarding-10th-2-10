import { useEffect, useRef } from 'react';
import { useArrowKeyFocus } from '../hooks/useArrowKeyFocus';

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

const SearchWordItem = ({ focus, setFocus }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (focus) {
      ref.current.focus();
    }
  }, [focus]);

  return (
    <li>
      <button ref={ref} onClick={setFocus}>
        간세포암
      </button>
    </li>
  );
};

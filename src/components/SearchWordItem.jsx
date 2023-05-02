import { useEffect, useRef } from 'react';

export const SearchWordItem = ({ focus, setFocus }) => {
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

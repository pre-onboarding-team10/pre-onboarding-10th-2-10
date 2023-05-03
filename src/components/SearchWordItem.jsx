import { useEffect, useRef } from 'react';

export const SearchWordItem = ({ word, focus, setFocus }) => {
  const buttonRef = useRef(null);

  useEffect(() => {
    if (focus) {
      buttonRef.current.focus();
    }
  }, [focus]);

  useEffect(() => {
    setFocus(undefined);
  }, [word]);

  return (
    <li>
      <button ref={buttonRef} onClick={setFocus}>
        {word}
      </button>
    </li>
  );
};

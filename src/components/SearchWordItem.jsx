import { useEffect, useRef } from 'react';

export const SearchWordItem = ({ focus, setFocus }) => {
  const buttonRef = useRef(null);

  useEffect(() => {
    if (focus) {
      buttonRef.current.focus();
    }
  }, [focus]);

  return (
    <li>
      <button ref={buttonRef} onClick={setFocus}>
        간세포암
      </button>
    </li>
  );
};

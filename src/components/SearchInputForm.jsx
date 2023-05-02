import { useCallback, useEffect, useRef, useState } from 'react';

export const SearchInputForm = () => {
  const [focus, setFocus] = useArrowKeyFocus(3);
  const firstRef = useRef(null);
  const secondRef = useRef(null);
  const thirdRef = useRef(null);

  useEffect(() => {
    if (focus === 0) {
      firstRef.current.focus();
    } else if (focus === 1) {
      secondRef.current.focus();
    } else if (focus === 2) thirdRef.current.focus();
  }, [focus]);

  return (
    <div>
      <div>
        <input type="search" />
        <button type="submit">submit</button>
      </div>
      <ul>
        <li>
          <button
            ref={firstRef}
            tabIndex={0}
            onClick={() => {
              setFocus(0);
            }}
          >
            간세포암
          </button>
        </li>
        <li>
          <button
            ref={secondRef}
            onClick={() => {
              setFocus(1);
            }}
          >
            간세포암
          </button>
        </li>
        <li>
          <button
            ref={thirdRef}
            onClick={() => {
              setFocus(2);
            }}
          >
            간세포암
          </button>
        </li>
      </ul>
    </div>
  );
};

const DOWN_ARROW_KEY_KODE = 40;
const UP_ARROW_KEY_KODE = 38;

const useArrowKeyFocus = (size) => {
  const [currentFocus, setCurrentFocus] = useState(0);

  const handleKeyDown = useCallback(
    (e) => {
      if (e.keyCode === DOWN_ARROW_KEY_KODE) {
        e.preventDefault();
        setCurrentFocus(currentFocus === size - 1 ? 0 : currentFocus + 1);
      } else if (e.keyCode === UP_ARROW_KEY_KODE) {
        e.preventDefault();
        setCurrentFocus(currentFocus === 0 ? size - 1 : currentFocus - 1);
      }
    },
    [size, currentFocus, setCurrentFocus]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown, false);
    return () => {
      document.removeEventListener('keydown', handleKeyDown, false);
    };
  }, [handleKeyDown]);

  return [currentFocus, setCurrentFocus];
};

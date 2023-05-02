import { useEffect, useRef } from 'react';
import { useArrowKeyFocus } from '../hooks/useArrowKeyFocus';

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

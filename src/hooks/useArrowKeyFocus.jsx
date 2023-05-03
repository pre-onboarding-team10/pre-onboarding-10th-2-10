import { useCallback, useEffect, useState } from 'react';

const DOWN_ARROW_KEY_KODE = 40;
const UP_ARROW_KEY_KODE = 38;
export const useArrowKeyFocus = (size) => {
  const [currentFocus, setCurrentFocus] = useState();
  console.log(currentFocus);
  const handleKeyDown = useCallback(
    (e) => {
      if (e.keyCode === DOWN_ARROW_KEY_KODE) {
        e.preventDefault();
        if (currentFocus === undefined) {
          setCurrentFocus(0);
        } else {
          setCurrentFocus(currentFocus === size - 1 ? 0 : currentFocus + 1);
        }
      } else if (e.keyCode === UP_ARROW_KEY_KODE) {
        e.preventDefault();
        if (currentFocus === undefined) {
          setCurrentFocus(size - 1);
        } else {
          setCurrentFocus(currentFocus === 0 ? size - 1 : currentFocus - 1);
        }
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

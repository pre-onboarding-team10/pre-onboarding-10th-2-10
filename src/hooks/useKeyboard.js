import { useState } from 'react';

const useKeyboard = (setKeyword) => {
  const [focusedIndex, setFocusedIndex] = useState(-1);

  const handleKeyDown = (e, suggestions) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();

      setFocusedIndex((prevIndex) =>
        prevIndex < suggestions.length - 1 ? prevIndex + 1 : 0
      );
    }

    if (e.key === 'ArrowUp') {
      e.preventDefault();

      setFocusedIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : prevIndex
      );
    }

    if (e.key === 'Enter' && focusedIndex !== undefined && focusedIndex >= 0) {
      e.preventDefault();

      setKeyword(suggestions[focusedIndex].name);
    }
  };

  return { focusedIndex, setFocusedIndex, handleKeyDown };
};

export default useKeyboard;

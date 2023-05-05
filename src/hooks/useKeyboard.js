import { useState } from 'react';

const useKeyboard = (
  suggestions,
  focusedIndex,
  setFocusedIndex,
  setKeyword
) => {
  const [isComposing, setIsComposing] = useState(false);

  const handleKeyDown = (e) => {
    if (isComposing) return;

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

  return { handleKeyDown, setIsComposing };
};

export default useKeyboard;

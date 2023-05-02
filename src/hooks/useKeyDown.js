import { useState } from 'react';
import { MAX_NUM } from '../constant';

const useKeyDown = (keywordList) => {
  const [focusIdx, setFocusIdx] = useState(-1);
  let keywordLength = keywordList.length;

  const handleKeyDown = (event) => {
    if (keywordLength >= MAX_NUM) keywordLength = MAX_NUM;

    if (event.key === 'ArrowDown') {
      setFocusIdx((prev) => (prev + 1) % keywordLength);
    }
    if (event.key === 'ArrowUp') {
      setFocusIdx((prev) => (prev - 1) % keywordLength);
    }
  };

  return {
    focusIdx,
    handleKeyDown,
  };
};

export default useKeyDown;

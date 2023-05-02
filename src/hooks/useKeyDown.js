import { useState } from 'react';

const useKeyDown = () => {
  const [selectedResultIndex, setSelectedResultIndex] = useState(-1);
  const handleKeyDown = (e, resultsData) => {
    if (e.key === 'ArrowDown' && selectedResultIndex < resultsData.length - 1) {
      setSelectedResultIndex(selectedResultIndex + 1);
    } else if (e.key === 'ArrowUp' && selectedResultIndex > -1) {
      setSelectedResultIndex(selectedResultIndex - 1);
    }
  };
  return { selectedResultIndex, setSelectedResultIndex, handleKeyDown };
};

export default useKeyDown;

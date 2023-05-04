import React, { useRef } from 'react';
import useKeyboard from '../hooks/useKeyboard';

const SuggestionList = ({ suggestions }) => {
  const suggestionListRef = useRef(null);
  const { focusedIndex, setFocusedIndex } = useKeyboard();
  return (
    <ul ref={suggestionListRef}>
      {suggestions.map((suggestion, index) => (
        <li
          key={suggestion?.id}
          style={index === focusedIndex ? { backgroundColor: '#ccc' } : {}}
          onClick={() => setFocusedIndex(index)}
        >
          {suggestion.name}
        </li>
      ))}
    </ul>
  );
};

export default SuggestionList;

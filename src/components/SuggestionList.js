import React, { useRef } from 'react';

const SuggestionList = ({ suggestions, focusedIndex, setFocusedIndex }) => {
  const suggestionListRef = useRef(null);

  if (suggestions.length === 0) return <div>검색어 없음</div>;

  return (
    <ul ref={suggestionListRef}>
      {suggestions.map((suggestion, index) => (
        <li
          key={index}
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

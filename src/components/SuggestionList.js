import React, { useRef } from 'react';

const SuggestionList = ({ suggestions, focusedIndex, setFocusedIndex }) => {
  const suggestionListRef = useRef(null);

  return (
    <div>
      <span>추천 검색어</span>
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
    </div>
  );
};

export default SuggestionList;

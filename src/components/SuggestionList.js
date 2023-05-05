import React, { useRef } from 'react';

const SuggestionList = ({ suggestions, focusedIndex, setFocusedIndex }) => {
  const suggestionListRef = useRef(null);

  return (
    <div>
      <span>추천 검색어</span>
      <ul ref={suggestionListRef}>
        {suggestions.length > 0 ? (
          suggestions.map((suggestion, index) => (
            <li key={index} onClick={() => setFocusedIndex(index)}>
              {suggestion.name}
            </li>
          ))
        ) : (
          <li>검색어 없음</li>
        )}
      </ul>
    </div>
  );
};

export default SuggestionList;

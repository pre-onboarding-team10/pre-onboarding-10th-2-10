import React, { useRef } from 'react';
import { FaSearch } from 'react-icons/fa';

const SuggestionList = ({
  suggestions,
  focusedIndex,
  setFocusedIndex,
  keyword,
}) => {
  const suggestionListRef = useRef(null);

  return (
    <ul ref={suggestionListRef}>
      <div className="suggestion__title">추천검색어</div>
      {keyword && suggestions.length > 0 ? (
        suggestions.slice(0, 7).map((suggestion, index) => (
          <li
            key={index}
            style={index === focusedIndex ? { backgroundColor: '#ccc' } : {}}
            onClick={() => setFocusedIndex(index)}
          >
            <FaSearch className="search-icon" />
            {suggestion.name}
          </li>
        ))
      ) : (
        <div className="empty-list">검색어 없음</div>
      )}
    </ul>
  );
};

export default SuggestionList;

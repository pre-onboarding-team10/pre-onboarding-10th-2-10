import React, { useRef } from 'react';
import searchIcon from '../assets/searchIcon';

const SuggestionList = ({ suggestions, focusedIndex, setFocusedIndex }) => {
  const suggestionListRef = useRef(null);

  return (
    <div className="search__search-list">
      <span>추천 검색어</span>
      <ul ref={suggestionListRef}>
        {suggestions.length > 0 ? (
          suggestions.map((suggestion, index) => (
            <li
              key={index}
              className={index === focusedIndex ? 'focus' : null}
              onClick={() => setFocusedIndex(index)}
            >
              {searchIcon}
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

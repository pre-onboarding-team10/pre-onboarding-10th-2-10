import React, { useRef } from 'react';

const SuggestionList = ({ suggestions, focusedIndex, setFocusedIndex }) => {
  const suggestionListRef = useRef(null);

  if (suggestions.length === 0)
    return (
      <div
        style={{
          position: 'absolute',
          backgroundColor: 'white',
          top: '70px',
          boxSizing: 'border-box',
          width: '320px',
          maxHeight: '100px',
          overflow: 'scroll',
          borderRadius: '20px',
          margin: '0px',
          marginTop: '10px',
          padding: '10px',
        }}
      >
        검색어 없음
      </div>
    );

  return (
    <ul
      ref={suggestionListRef}
      style={{
        listStyle: 'none',
        position: 'absolute',
        backgroundColor: 'white',
        top: '70px',
        boxSizing: 'border-box',
        width: '320px',
        maxHeight: '100px',
        overflow: 'scroll',
        borderRadius: '20px',
        margin: '0px',
        marginTop: '10px',
        padding: '10px',
      }}
    >
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

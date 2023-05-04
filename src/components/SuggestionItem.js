import React from 'react';

const SuggestionItem = ({
  index,
  focusedIndex,
  setFocusedIndex,
  suggestionName,
}) => {
  return (
    <li
      key={index}
      style={index === focusedIndex ? { backgroundColor: '#eee' } : {}}
      onClick={() => setFocusedIndex(index)}
    >
      <span>{suggestionName}</span>
    </li>
  );
};

export default SuggestionItem;

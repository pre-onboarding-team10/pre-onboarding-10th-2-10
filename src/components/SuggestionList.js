import { useRef } from 'react';
import SuggestionItem from './SuggestionItem';

const SuggestionList = ({ suggestions, focusedIndex, setFocusedIndex }) => {
  const suggestionListRef = useRef(null);

  return (
    <ul ref={suggestionListRef}>
      {suggestions.map((suggestion, index) => (
        <SuggestionItem
          key={index}
          index={index}
          focusedIndex={focusedIndex}
          setFocusedIndex={setFocusedIndex}
          name={suggestion.name}
        />
      ))}
    </ul>
  );
};

export default SuggestionList;

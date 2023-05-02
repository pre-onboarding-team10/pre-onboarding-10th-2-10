const Suggestions = ({
  suggestions,
  focusIndex,
  isEmptyInput,
  setFocusIndex,
  setSearchTerm,
}) => {
  if (isEmptyInput) {
    return null;
  }

  return (
    <ul>
      <span>추천 검색어</span>
      <hr />
      {suggestions.length > 0 ? (
        suggestions.map((suggestion, index) => (
          <li
            style={{ color: focusIndex === index ? 'red' : 'black' }}
            key={suggestion.id}
            onMouseEnter={() => setFocusIndex(index)}
            onMouseLeave={() => setFocusIndex(-1)}
            onClick={() => setSearchTerm(suggestion.name)}
          >
            {suggestion.name}
          </li>
        ))
      ) : (
        <li>검색어 없음</li>
      )}
    </ul>
  );
};

export default Suggestions;

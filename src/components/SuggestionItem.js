const SuggestionItem = ({ index, focusedIndex, setFocusedIndex, name }) => {
  return (
    <li
      key={index}
      style={index === focusedIndex ? { backgroundColor: '#ccc' } : {}}
      onClick={() => setFocusedIndex(index)}
    >
      {name}
    </li>
  );
};

export default SuggestionItem;

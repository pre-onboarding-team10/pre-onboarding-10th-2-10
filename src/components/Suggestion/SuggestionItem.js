import { FaSearch } from 'react-icons/fa';

const SuggestionItem = ({ index, focusedIndex, setFocusedIndex, name }) => {
  return (
    <li
      key={index}
      style={
        index === focusedIndex ? { color: '#007be9', fontWeight: 'bold' } : {}
      }
      onClick={() => setFocusedIndex(index)}
    >
      <FaSearch />
      <span className="suggestion-item-text">{name}</span>
    </li>
  );
};

export default SuggestionItem;

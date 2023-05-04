import SearchBarInput from './SearchBarInput';
import { FaSearch } from 'react-icons/fa';

const SearchBar = ({ keyword, handleInputChange, handleKeyDown }) => {
  return (
    <div className="search-bar">
      <div className="search-bar__icon-container">
        <FaSearch color="grey" />
      </div>
      <SearchBarInput
        keyword={keyword}
        handleInputChange={handleInputChange}
        handleKeyDown={handleKeyDown}
      />
      <button>검색</button>
    </div>
  );
};

export default SearchBar;

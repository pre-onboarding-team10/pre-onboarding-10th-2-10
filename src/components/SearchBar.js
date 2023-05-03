import SearchBarInput from './SearchBarInput';

const SearchBar = ({ keyword, handleInputChange, handleKeyDown }) => {
  return (
    <div className="search-bar">
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

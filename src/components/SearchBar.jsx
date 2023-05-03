import { getKeywords } from '../apis/searchApi';
import { SEARCH, SEARCH_PLACEHOLDER } from '../constants';

const SearchBar = ({ searchKeyword, setSearchkeyword, setSearchedList }) => {
  const handleSearch = async (event) => {
    event.preventDefault();
    const result = await getKeywords(searchKeyword);
    setSearchedList(result);
  };

  const handleChange = (event) => {
    setSearchkeyword(event.target.value);
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        value={searchKeyword}
        onChange={handleChange}
        placeholder={SEARCH_PLACEHOLDER}
        required
      />
      <button type="submit">{SEARCH}</button>
    </form>
  );
};

export default SearchBar;

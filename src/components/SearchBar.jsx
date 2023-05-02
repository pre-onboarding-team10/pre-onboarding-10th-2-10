import { getKeywords } from '../apis/searchApi';

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
    <>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchKeyword}
          onChange={handleChange}
          placeholder="&#128269; 질환명을 입력해주세요"
        />
        <button>검색</button>
      </form>
    </>
  );
};

export default SearchBar;

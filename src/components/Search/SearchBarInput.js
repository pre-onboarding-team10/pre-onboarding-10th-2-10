const PLACEHOLDERTEXT = '질환명을 입력해 주세요';
const SearchBarInput = ({ keyword, handleInputChange, handleKeyDown }) => {
  return (
    <input
      type="search"
      value={keyword}
      onChange={handleInputChange}
      onKeyDown={handleKeyDown}
      placeholder={PLACEHOLDERTEXT}
    />
  );
};

export default SearchBarInput;

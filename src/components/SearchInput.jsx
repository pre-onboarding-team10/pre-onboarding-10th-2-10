const SearchInput = ({ value, onChangeSearchInput, onKeyDown }) => {
  return (
    <div>
      <input
        placeholder="질환명을 입력해주세요"
        value={value}
        onChange={onChangeSearchInput}
        onKeyDown={onKeyDown}
      />
    </div>
  );
};

export default SearchInput;

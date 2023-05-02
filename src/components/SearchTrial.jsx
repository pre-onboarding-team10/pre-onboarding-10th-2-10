const SearchTrial = ({ setValue }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        placeholder="질환명을 입력해 주세요."
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="button">검색</button>
    </form>
  );
};

export default SearchTrial;

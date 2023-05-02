const SearchResult = ({ searchResults, selectedResultIndex }) => {
  return (
    <>
      <ul>
        <span>추천 검색어</span>
        {searchResults?.length ? (
          searchResults.map((result, index) => {
            return (
              <>
                <li
                  key={result.id}
                  className={
                    index === selectedResultIndex ? 'selected' : 'none'
                  }
                >
                  {result.name}
                </li>
              </>
            );
          })
        ) : (
          <div>검색결과 없음</div>
        )}
      </ul>
    </>
  );
};

export default SearchResult;

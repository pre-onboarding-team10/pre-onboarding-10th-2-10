import React from 'react';

const SearchResult = ({ searchResults, selectedResultIndex }) => {
  return (
    <>
      <ul>
        {searchResults?.length ? (
          searchResults.map((result, index) => {
            return (
              <>
                {/* <div>돋보기</div> */}
                <li
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

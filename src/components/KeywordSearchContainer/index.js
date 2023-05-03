import React, { useRef, useState } from 'react';
import KeywordInput from '../KeywordInput';
import RecommendedKeywordList from '../RecommendedKeywordList';

function KeywordSearchContainer() {
  const [keyword, setKeyword] = useState('');

  const keywordListRef = useRef(null);
  return (
    <section>
      <KeywordInput
        keyword={keyword}
        setKeyword={setKeyword}
        keywordListRef={keywordListRef}
      />
      <section>
        <div>추천 검색어</div>
        <RecommendedKeywordList
          keywordListRef={keywordListRef}
          keyword={keyword}
        />
      </section>
    </section>
  );
}

export default KeywordSearchContainer;

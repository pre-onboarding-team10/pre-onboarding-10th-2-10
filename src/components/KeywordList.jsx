import React from 'react';
import KeywordItem from './KeywordItem';
import { MAX_NUM } from '../constant';

const KeywordList = ({ keywordList, keyword, focusIdx }) => {
  return (
    <div className="keywordList">
      <div className="keywordList-title">
        {keywordList.length > 0
          ? '추천 검색어'
          : keyword !== ''
          ? '검색어 없음'
          : null}
      </div>
      {keywordList.length > 0 &&
        keywordList
          .filter((_, idx) => idx < MAX_NUM)
          .map((word, idx) => (
            <KeywordItem
              key={word.id}
              keyword={word.name}
              isFocus={focusIdx === idx}
            />
          ))}
    </div>
  );
};

export default KeywordList;

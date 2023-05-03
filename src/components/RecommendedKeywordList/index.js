import React, { useEffect, useState } from 'react';
import RecommendedKeywordItem from '../RecommendedKeywordItem';
import isEmptyArr from '../../utils/isEmptyArr';
import { apiClient } from '../../apis/apiClient';

function RecommendedKeywordList({ keyword, keywordListRef }) {
  const [recommendedKeywords, setRecommendedKeywords] = useState([]);

  const fetchRecommendedKeywords = async () => {
    const res = await apiClient.getRecommendedKeywordsAPI(keyword);
    setRecommendedKeywords([...res]);
  };

  useEffect(() => {
    fetchRecommendedKeywords();
  }, [keyword]);

  if (isEmptyArr(recommendedKeywords)) return <div>검색어 없음</div>;

  return (
    <ul ref={keywordListRef}>
      {recommendedKeywords.map(({ name, id }) => (
        <RecommendedKeywordItem key={id} name={name} />
      ))}
    </ul>
  );
}

export default RecommendedKeywordList;

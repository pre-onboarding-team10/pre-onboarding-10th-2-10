import { useEffect, useState } from 'react';
import { fetchTrialData } from '../api/fetchTrialData';

export const useFetch = ({ value }) => {
  const [trialKeywords, setTrialKeywords] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    fetchTrialData(value)
      .then((res) => {
        setTrialKeywords(res.data);
      })
      .catch((error) => {
        setError('검색어를 가져올 수 없습니다.');
        console.error(error);
      });
  }, [value]);

  return { error, trialKeywords };
};

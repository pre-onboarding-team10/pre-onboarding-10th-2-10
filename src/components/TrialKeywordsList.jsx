import { useFetch } from '../hooks/useFetch';

const NO_RESULTS_MESSAGE = '검색어 없음';

const TrialKeywordsList = ({ value }) => {
  const { error, trialKeywords } = useFetch({ value });
  const NO_RESULTS = trialKeywords.length === 0;

  if (NO_RESULTS) return NO_RESULTS_MESSAGE;
  if (error) return error;

  return (
    <ul>
      {trialKeywords.map((keyword) => (
        <li key={keyword.id} title={keyword.name}>
          <button>{keyword.name}</button>
        </li>
      ))}
    </ul>
  );
};

export default TrialKeywordsList;

import { useState } from 'react';
import SearchTrial from '../components/SearchTrial';
import TrialKeywordsContainer from '../components/TrialKeywordsContainer';
import TrialKeywordsList from '../components/TrialKeywordsList';

const MainPage = () => {
  const [value, setValue] = useState();
  return (
    <>
      <SearchTrial setValue={setValue} />
      <TrialKeywordsContainer>
        <TrialKeywordsList value={value} />
      </TrialKeywordsContainer>
    </>
  );
};

export default MainPage;

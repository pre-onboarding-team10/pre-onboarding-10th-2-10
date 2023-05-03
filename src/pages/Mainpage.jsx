import { useState } from 'react';
import { Container, RecommendList, SearchBar, Title } from '../components';

const Mainpage = () => {
  const [searchKeyword, setSearchkeyword] = useState('');
  const [searchedList, setSearchedList] = useState([]);

  const handleSelect = (option) => {
    setSearchkeyword(option.name);
  };

  return (
    <Container>
      <Title />
      <SearchBar
        searchKeyword={searchKeyword}
        setSearchkeyword={setSearchkeyword}
        setSearchedList={setSearchedList}
      />
      <RecommendList options={searchedList} onChange={handleSelect} />
    </Container>
  );
};

export default Mainpage;

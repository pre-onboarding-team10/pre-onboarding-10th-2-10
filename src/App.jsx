import Container from './components/Container';
import RecommendList from './components/RecommendList';
import SearchBar from './components/SearchBar';
import Title from './components/Title';
import './style/globlas.css';
import { useState } from 'react';

const App = () => {
  const [searchKeyword, setSearchkeyword] = useState('');
  const [searchedList, setSearchedList] = useState([]);

  const handleSelect = (option) => {
    setSearchkeyword(option.name);
  };

  return (
    <div className="App">
      <Container>
        <Title />
        <SearchBar
          searchKeyword={searchKeyword}
          setSearchkeyword={setSearchkeyword}
          setSearchedList={setSearchedList}
        />
        <RecommendList options={searchedList} onChange={handleSelect} />
      </Container>
    </div>
  );
};

export default App;

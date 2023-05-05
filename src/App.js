import React from 'react';
import SearchBar from './pages/SearchBar';
import './style/App.css';

function App() {
  return (
    <div className="App">
      <div className="search-bar_wrap">
        <h1 className="search-bar_title">
          국내 모든 임상시험 검색하고 <br />
          온라인으로 참여하기
        </h1>
        <SearchBar />
      </div>
    </div>
  );
}

export default App;

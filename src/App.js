import React from 'react';
import SearchBar from './pages/SearchBar';

function App() {
  return (
    <div className="App">
      <div
        style={{
          background: '#D0E8FD',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '500px',
        }}
      >
        <SearchBar />
      </div>
    </div>
  );
}

export default App;

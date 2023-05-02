const App = () => {
  return (
    <div className="App">
      <SearchInputForm />
    </div>
  );
};

export default App;

const SearchInputForm = () => {
  return (
    <div>
      <div>
        <input type="search" />
        <button type="submit">submit</button>
      </div>
      <ul>
        <li>
          <button>간세포암</button>
        </li>
        <li>
          <button>간세포암</button>
        </li>
        <li>
          <button>간세포암</button>
        </li>
      </ul>
    </div>
  );
};

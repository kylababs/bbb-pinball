import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import SearchBar from './search/searchBar';
import ResultList from './results/resultList';
import { selectError, selectLoading } from './search/searchSlice';

function App() {
  const isLoading = useSelector(selectLoading);
  const errorMsg = useSelector(selectError);

  return (
    <div className="app">
      <header className="app-header">
        <p>
          Search for pinball locations
        </p>
      </header>
      <div>
        <SearchBar />
        {isLoading && (
          <div className="loading-text">
            Loading results...
          </div>
        )}
        {errorMsg && (
          <div className="error-text">
            Error fetching results: {errorMsg}
          </div>
        )}
        <ResultList />
      </div>
    </div>
  );
}

export default App;

import './results.css';
import ResultTile from './resultTile';
import { useSelector } from 'react-redux';
import { selectResults } from '../search/searchSlice';

function ResultList() {
  const results = useSelector(selectResults);

  return (
    <div className="results-holder">
      {results && results.length > 0 && (
        <div className="results-list">
          {results.map((result) => (
            <ResultTile
              location={result}
              id={`pinballLocation${result.id}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default ResultList;

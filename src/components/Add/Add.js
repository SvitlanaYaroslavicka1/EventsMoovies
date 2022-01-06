import React, { useState, useContext } from 'react';
import { ResultCard } from '../ResultCard/ResultCard';
import { GlobalContext } from '../../context/GlobalState';

export const Add = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const { searchMovies } = useContext(GlobalContext);
  const { search } = useContext(GlobalContext);

  const onChange = e => {
    e.preventDefault();
    const val = e.target.value;
    setQuery(val);
    if (val.trim().length === 0) {
      setResults([]);
    } else {
      searchMovies(val.trim());
      console.log(search);
      setResults(search.results);
    }
  };

  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Search for a movie"
              value={query}
              onChange={onChange}
            />
          </div>

          {results.length > 0 && (
            <ul className="results">
              {results.map(movie => (
                <li key={movie.id}>
                  <ResultCard movie={movie} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

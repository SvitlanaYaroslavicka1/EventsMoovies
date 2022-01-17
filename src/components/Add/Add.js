import React, { useState } from 'react';
import { ResultCard } from '../ResultCard/ResultCard';
import './Add.scss';

export const Add = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const onChange = e => {
    e.preventDefault();
    const val = e.target.value;
    setQuery(val);
    if (val.trim().length === 0) {
      setResults([]);
    } else {
      fetch(
        `/search?api_key=08d83ae460697a6af99ef26c1f3b0027&language=en-US&page=1&include_adult=false&query=${e.target.value}`,
      )
        .then(res => res.json())
        .then(data => {
          if (!data.errors) {
            setResults(data.results);
          } else {
            setResults([]);
          }
        });
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

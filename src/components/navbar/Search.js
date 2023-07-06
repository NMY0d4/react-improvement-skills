import React, { useEffect, useRef } from 'react';
import { useKey } from '../../useKey';

const Search = ({ query, setQuery }) => {
  const inputEl = useRef(null);
  const action = () => {
    if (document.activeElement === inputEl.current) return;
    inputEl.current.focus();
    setQuery('');
  };

  useKey('Enter', action);

  return (
    <input
      ref={inputEl}
      className='search'
      type='text'
      placeholder='Search movies...'
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
};

export default Search;

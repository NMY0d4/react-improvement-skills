import React from 'react';
import WatchMovie from './WatchMovie';

const WatchedMoviesList = ({ watched }) => {
  return (
    <ul className='list'>
      {watched.map((movie) => (
        <WatchMovie key={movie.imdbID} movie={movie} />
      ))}
    </ul>
  );
};

export default WatchedMoviesList;

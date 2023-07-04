import React from 'react';
import WatchMovie from './WatchMovie';

const WatchedMoviesList = ({ watched, onDeleteWatched }) => {
  return (
    <ul className='list'>
      {watched.map((movie) => (
        <WatchMovie
          key={movie.imdbID}
          movie={movie}
          onDeleteWatched={onDeleteWatched}
        />
      ))}
    </ul>
  );
};

export default WatchedMoviesList;

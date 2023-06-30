import React, { useState } from 'react';
import ListBox from './movieListBox/ListBox';
import WatchBox from './watchBox/WatchBox';

const Main = ({ movies, tempWatchedData }) => {
  return (
    <main className='main'>
      <ListBox movies={movies} />
      <WatchBox movies={movies} tempWatchedData={tempWatchedData} />
    </main>
  );
};

export default Main;

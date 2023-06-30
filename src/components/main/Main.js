import React, { useState } from 'react';
import ListBox from './movieListBox/ListBox';
import WatchBox from './watchBox/WatchBox';

const Main = ({ children }) => {
  return <main className='main'>{children}</main>;
};

export default Main;

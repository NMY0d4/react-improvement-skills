import React from 'react';
import ReactDOM from 'react-dom/client';
import StarRating from './components/startRating/StarRating';
// import './index.css';
// import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating
      // maxRating={10}
      messages={['Terrible', 'Bad', 'Okay', 'Good', 'Amazing']}
    />
    <StarRating size={20} color='green' className='test' />
  </React.StrictMode>
);

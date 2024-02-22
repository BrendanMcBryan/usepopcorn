import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
import StarRating from './StarRating';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}

    <StarRating maxRating={3} messages={['bad', 'okay', 'good']} />
    <StarRating
      maxRating={17}
      size={24}
      color="red"
      classname="test"
      defaultRating={8}
    />
  </React.StrictMode>
);

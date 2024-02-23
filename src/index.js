import { useState } from 'react';

import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
import StarRating from './StarRating';

function Test() {
  const [movieRating, setMovieRating] = useState(0);

  return (
    <div>
      <StarRating color="blue" maxRating={10} onSetRating={setMovieRating} />
      <p>This Movie was rated {movieRating} stars</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}

    <StarRating
      maxRating={3}
      size={24}
      color="red"
      classname="test"
      defaultRating={0}
      messages={['bad', 'okay', 'good']}
    />
    <Test />
  </React.StrictMode>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import FreeMint  from './FreeMint';
import Test from './Test'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <Test />
  // </React.StrictMode>
  <FreeMint/>
);
reportWebVitals();

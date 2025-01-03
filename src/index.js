import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/main.css';
import DigitalClock from './components/DigitalClock';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DigitalClock />
  </React.StrictMode>
);

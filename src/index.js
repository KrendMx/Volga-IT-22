import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App url={document.getElementById("glasses-quiz-widget").dataset.source}/>
  </React.StrictMode>,
  document.getElementById('glasses-quiz-widget')
);
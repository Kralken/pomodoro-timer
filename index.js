// import React from 'react';
// import { createRoot } from 'react-dom/client';
// import App from './src/App';
// import './src/styles.scss';

// const root = createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// );

//!!! need to use ReactDOM.render to pass fcc tests!!!
import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/App.js';
import './src/styles.scss';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

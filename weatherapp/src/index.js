import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  // <React>
  //   <App />
  // </React>,

  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';

// const rootElement = document.getElementById('root');

// ReactDOM.render(
//   process.env.NODE_ENV === 'development' ? (
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>
//   ) : (
//     <App />
//   ),
//   rootElement
// );
import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './router/Router';
import App from './App';
import GlobalStyle from './styles/GlobalStyle';
import GlobalFonts from './styles/fonts/fonts';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <GlobalStyle />
    <GlobalFonts />
    <Router>
      <App />
    </Router>
  </>,
);

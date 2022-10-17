import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './router/Router';
import App from './App';
import ScrollTop from './components/ScrollTop';
import GlobalStyle from './styles/GlobalStyle';
import GlobalFonts from './styles/fonts/fonts';
import { RecoilRoot } from 'recoil';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <GlobalStyle />
    <GlobalFonts />
    <RecoilRoot>
      <Router>
        <ScrollTop />
        <App />
      </Router>
    </RecoilRoot>
  </>,
);

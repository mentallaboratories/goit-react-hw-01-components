import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { ThemeProvider } from 'styled-components';

const theme ={
  colors:{
    white: 'white',
    accent: 'tomato',
  },

  radii: {
    s: '2px',
    m: '4px',
    l: '8px',
    xl: '16px',
  }
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

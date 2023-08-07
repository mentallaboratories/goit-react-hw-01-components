import React from 'react';// імпортуй бібліотеку 'React з директорії 'react'
import ReactDOM from 'react-dom/client';// імпортуй бібліотеку 'ReactDOM з директорії 'react-dom/client'
import { App } from 'components/App';// імпортуй  App.js
import { ThemeProvider } from 'styled-components';// імпортуй бібліотеку 'React з директорії 'react'

const theme ={ // створи об'єкт стилів 
  colors:{ //властивість-значення
    white: 'white',
    accent: 'tomato',
  },

  radii: {
    s: '2px',
    m: '5px',
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

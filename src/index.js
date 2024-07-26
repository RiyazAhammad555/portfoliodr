// index.js or main.js
import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import theme from './theme'; // Import the custom theme

ReactDOM.render(
  <ChakraProvider theme={theme}>
    {/* Ensure ColorModeScript is included to initialize color mode on the client side */}
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <BrowserRouter>
      <App  />
    </BrowserRouter>
  </ChakraProvider>,
  document.getElementById('root')
);

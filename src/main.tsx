import ReactDOM from 'react-dom/client';
import React from 'react';
import './index.css'
import App from './App'
import { ChakraProvider, defaultSystem  } from '@chakra-ui/react';

const container = document.getElementById('root') as HTMLElement;


ReactDOM.createRoot(container).render(
  <React.StrictMode>
    <ChakraProvider value={defaultSystem}>
      <App />
    </ChakraProvider>
    </React.StrictMode>,
)

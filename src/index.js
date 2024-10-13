import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AdapterProvider } from './context/AdapterProvider';
import './styles/index.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AdapterProvider>
      <App />
    </AdapterProvider>
  </React.StrictMode>
);

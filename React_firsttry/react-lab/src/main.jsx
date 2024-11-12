import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { App } from './app_2.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Greeting />
    <App />
  </StrictMode>,
);


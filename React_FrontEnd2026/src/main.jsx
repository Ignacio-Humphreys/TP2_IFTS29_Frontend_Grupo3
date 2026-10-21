import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import API_Ghibli from './API_Ghibli.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <API_Ghibli />
  </StrictMode>,
)
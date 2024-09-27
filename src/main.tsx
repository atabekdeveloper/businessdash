import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';

import { App } from './App';

import './index.css';

createRoot(document.getElementById('root')!).render(
  <Router>
    <App />
    <Analytics />
  </Router>,
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClientProvider } from '@tanstack/react-query';
import Routes from './routes';
import queryClient from './queryClient';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Routes /> {/* Provides the app's routing */}
    </QueryClientProvider>
  </React.StrictMode>);
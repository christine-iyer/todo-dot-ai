import React from 'react';
import { useNavigate, Outlet } from '@tanstack/react-router';
import { todoRoute, aiToolsRoute } from './routes'; // Import route objects

const App: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      <nav
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          padding: '1rem',
          borderBottom: '1px solid #ddd',
        }}>
        <button onClick={() => navigate({ to: todoRoute.id })}>Todo List</button>
        <button onClick={() => navigate({ to: aiToolsRoute.id })}>AI Tools</button>
      </nav>
      <main style={{ padding: '2rem' }}>
        <Outlet />
      </main>
    </div>
  );
};

export default App;
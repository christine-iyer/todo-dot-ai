import React from 'react';
import { useNavigate, Outlet } from '@tanstack/react-router';

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
        <button
          onClick={() => navigate({ to: '/' })}
          style={{ 
            textDecoration: 'none', 
            fontWeight: 'bold',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            fontSize: '1rem'
          }}
        >
          Todo List
        </button>
        <button
          onClick={() => navigate({ to: '/ai-tools' })}
          style={{ 
            textDecoration: 'none', 
            fontWeight: 'bold',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            fontSize: '1rem'
          }}
        >
          AI Tools
        </button>
      </nav>
      <main style={{ padding: '2rem' }}>
        <Outlet />
      </main>
    </div>
  );
};

export default App;
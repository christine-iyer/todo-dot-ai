import React from 'react';
import { Link, Outlet } from '@tanstack/react-router';

const App: React.FC = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      <nav
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          padding: '1rem',
          borderBottom: '1px solid #ddd',
        }}>
        <Link to="/" style={{ textDecoration: 'none', fontWeight: 'bold' }}>
          Todo List
        </Link>
        <Link to="/ai-tools" style={{ textDecoration: 'none', fontWeight: 'bold' }}>
          AI Tools
        </Link>
      </nav>
      <main style={{ padding: '2rem' }}>
        <Outlet /> {/* Renders child components */}
      </main>
    </div>);
};

export default App;
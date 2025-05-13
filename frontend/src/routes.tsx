
import { createBrowserRouter, RouterProvider, Outlet } from '@tanstack/react-router';
import TodoPage from './pages/TodoPage';
import AiToolsPage from './pages/AiToolsPage';
import App from './App';

// Define the main routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <TodoPage /> },
      { path: '/ai-tools', element: <AiToolsPage /> },
    ],
  },
]);

export default function Routes() {
  return <RouterProvider router={router} />;

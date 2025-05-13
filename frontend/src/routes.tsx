import { createRootRoute, createRoute, createRouter, RouterProvider } from '@tanstack/react-router';
import TodoPage from './pages/TodoPage';
import AiToolsPage from './pages/AiToolsPage';
import App from './App';

// Define the root route
const rootRoute = createRootRoute({
  component: App,
});

// Define the index route
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: TodoPage,
});

// Define the AI tools route
const aiToolsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '..',
  component: AiToolsPage,
});

// Create the router
const router = createRouter({
  routeTree: rootRoute,
  defaultPreload: 'intent',
});

// Register the router
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export default function Routes() {
  return <RouterProvider router={router} />;
}

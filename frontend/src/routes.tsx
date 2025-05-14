import { createRootRoute, createRoute, createRouter, RouterProvider } from '@tanstack/react-router';
import TodoPage from './pages/TodoPage';
import AiToolsPage from './pages/AiToolsPage';
import App from './App';

// Define the root route
const rootRoute = createRootRoute({
  component: App,
});

// Define child routes
const todoRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: TodoPage,
});

const aiToolsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/ai-tools',
  component: AiToolsPage,
});

// Attach child routes to the root route
rootRoute.addChildren([todoRoute, aiToolsRoute]);

// Create the router using the root route
const router = createRouter({
  routeTree: rootRoute, // Pass the root route directly
  defaultPreload: 'intent',
});

// Register the router for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export default function Routes() {
  return <RouterProvider router={router} />;
}
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
  path: '/ai-tools',
  component: AiToolsPage,
});

// Build the route tree using addChildren
const routeTree = rootRoute.addChildren([
  indexRoute,
  aiToolsRoute,
]);

// Create the router using the constructed route tree
const router = createRouter({
  routeTree: routeTree, // Use the tree built with addChildren
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

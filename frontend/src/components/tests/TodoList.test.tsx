import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import TodoList from '../TodoList';
import { fetchTodos } from '../../api/todoApi';

jest.mock('../../api/todoApi'); // Mock the API calls

const queryClient = new QueryClient();

describe('TodoList Component', () => {
  const mockTodos = [
    { _id: '1', title: 'Todo 1', completed: false },
    { _id: '2', title: 'Todo 2', completed: true },
  ];

  it('renders loading state initially', () => {
    (fetchTodos as jest.Mock).mockReturnValue(new Promise(() => {})); // Simulate pending promise

    render(
      <QueryClientProvider client={queryClient}>
        <TodoList />
      </QueryClientProvider>);

    expect(screen.getByText(/loading todos/i)).toBeInTheDocument();
  });

  it('renders todos after fetching data', async () => {
    (fetchTodos as jest.Mock).mockResolvedValue(mockTodos);

    render(
      <QueryClientProvider client={queryClient}>
        <TodoList />
      </QueryClientProvider>);

    await waitFor(() => {
      expect(screen.getByText('Todo 1')).toBeInTheDocument();
      expect(screen.getByText('Todo 2')).toBeInTheDocument();
    });
  });

  it('handles error state', async () => {
    (fetchTodos as jest.Mock).mockRejectedValue(new Error('Failed to fetch'));

    render(
      <QueryClientProvider client={queryClient}>
        <TodoList />
      </QueryClientProvider>);

    await waitFor(() => {
      expect(screen.getByText(/failed to load todos/i)).toBeInTheDocument();
    });
  });
});
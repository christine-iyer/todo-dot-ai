import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AddTodo from '../AddTodo';
import { createTodo } from '../../api/todoApi';

jest.mock('../../api/todoApi'); // Mock the API calls

const queryClient = new QueryClient();

describe('AddTodo Component', () => {
  it('renders input and button', () => {
    render(
      <QueryClientProvider client={queryClient}>
        <AddTodo />
      </QueryClientProvider>);

    expect(screen.getByPlaceholderText(/add a new task/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /add todo/i })).toBeInTheDocument();
  });

  it('calls createTodo API and clears input on submission', async () => {
    const mockedCreateTodo = createTodo as jest.Mock;
    mockedCreateTodo.mockResolvedValue({ title: 'Test Todo', completed: false });

    render(
      <QueryClientProvider client={queryClient}>
        <AddTodo />
      </QueryClientProvider>);

    const input = screen.getByPlaceholderText(/add a new task/i);
    const button = screen.getByRole('button', { name: /add todo/i });

    fireEvent.change(input, { target: { value: 'Test Todo' } });
    fireEvent.click(button);

    expect(mockedCreateTodo).toHaveBeenCalledWith('Test Todo');
    expect(input).toHaveValue('');
  });
});
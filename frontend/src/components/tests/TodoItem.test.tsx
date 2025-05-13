import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoItem from '../TodoItem';

describe('TodoItem Component', () => {
  const mockOnDelete = jest.fn();
  const mockOnToggle = jest.fn();

  const todoProps = {
    id: '1',
    title: 'Test Todo',
    completed: false,
    onDelete: mockOnDelete,
    onToggle: mockOnToggle,
  };

  it('renders the todo item with title and delete button', () => {
    render(<TodoItem {...todoProps} />);

    expect(screen.getByText('Test Todo')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('calls onDelete when delete button is clicked', () => {
    render(<TodoItem {...todoProps} />);

    fireEvent.click(screen.getByRole('button'));
    expect(mockOnDelete).toHaveBeenCalled();
  });

  it('calls onToggle when checkbox is clicked', () => {
    render(<TodoItem {...todoProps} />);

    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);
    expect(mockOnToggle).toHaveBeenCalled();
  });
});
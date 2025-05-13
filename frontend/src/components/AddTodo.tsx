import React, { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createTodo } from '../api/todoApi';

const AddTodo: React.FC = () => {
  const [title, setTitle] = useState('');
  const queryClient = useQueryClient();

  // Mutation for adding a new todo
  const mutation = useMutation(createTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries(['todos']); // Refetch the todos list
      setTitle(''); // Clear the input field
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      mutation.mutate(title); // Trigger the API call
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '1rem' }}>
      <input
        type="text"placeholder="Add a new task..."value={title}onChange={(e) => setTitle(e.target.value)}style={{ padding: '0.5rem', marginRight: '0.5rem', width: '250px' }}/>
      <button
        type="submit"disabled={mutation.isLoading}style={{ padding: '0.5rem' }}>
        {mutation.isLoading ? 'Adding...' : 'Add Todo'}
      </button>
    </form>);
};

export default AddTodo;
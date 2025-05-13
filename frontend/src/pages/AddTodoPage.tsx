import React, { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createTodo } from '../api/todoApi';

const AddTodoPage: React.FC = () => {
  const [title, setTitle] = useState('');
  const queryClient = useQueryClient();

  const createMutation = useMutation(createTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries(['todos']);
      setTitle('');
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      createMutation.mutate(title);
    }
  };

  return (
    <div>
      <h2>Add New Todo</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter todo title"
          style={{
            padding: '0.5rem',
            marginRight: '0.5rem',
            borderRadius: '4px',
            border: '1px solid #ddd',
          }}
        />
        <button
          type="submit"
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default AddTodoPage;

import React from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchTodos, deleteTodo, createTodo } from '../api/todoApi';
import TodoItem from './TodoItem';

interface Todo {
  _id: string;
  title: string;
  completed: boolean;
}

const TodoList: React.FC = () => {
  const queryClient = useQueryClient();

  // Fetch Todos
  const { data: todos = [], isLoading, error } = useQuery<Todo[]>(['todos'], fetchTodos);

  // Mutation for deleting a Todo
  const deleteMutation = useMutation(deleteTodo, {
    onSuccess: () => queryClient.invalidateQueries(['todos']),
  });

  // Mutation for toggling a Todo's completion status
  const toggleMutation = useMutation(
    async (todo: Todo) => {
      // Create a new todo with the updated completion status
      return createTodo(todo.title);
    },
    {
      onSuccess: () => queryClient.invalidateQueries(['todos']),
    }
  );

  if (isLoading) return <p>Loading todos...</p>;
  if (error) return <p>Failed to load todos.</p>;

  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          key={todo._id}
          id={todo._id}
          title={todo.title}
          completed={todo.completed}
          onDelete={() => deleteMutation.mutate(todo._id)}
          onToggle={() => toggleMutation.mutate(todo)}
        />
      ))}
    </div>
  );
};

export default TodoList;
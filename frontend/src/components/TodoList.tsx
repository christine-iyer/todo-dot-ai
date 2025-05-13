import React from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchTodos, deleteTodo, createTodo } from '../api/todoApi';
import TodoItem from './TodoItem';

const TodoList: React.FC = () => {
  const queryClient = useQueryClient();

  // Fetch Todos
  const { data: todos = [], isLoading, error } = useQuery(['todos'], fetchTodos);

  // Mutation for deleting a Todo
  const deleteMutation = useMutation(deleteTodo, {
    onSuccess: () => queryClient.invalidateQueries(['todos']),
  });

  // Mutation for toggling a Todo's completion status
  const toggleMutation = useMutation(
    async (todo: any) => {
      return createTodo({ ...todo, completed: !todo.completed });
    },
    {
      onSuccess: () => queryClient.invalidateQueries(['todos']),
    }
  );

  if (isLoading) return <p>Loading todos...</p>;
  if (error) return <p>Failed to load todos.</p>;

  return (
    <div>
      {todos.map((todo: any) => (
        <TodoItemkey={todo._id}id={todo._id}title={todo.title}completed={todo.completed}onDelete={() => deleteMutation.mutate(todo._id)}onToggle={() => toggleMutation.mutate(todo)}/>))}
    </div>);
};

export default TodoList;
import React from 'react';
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';

const TodoPage: React.FC = () => {
  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Todo List</h1>
      <AddTodo /> {/* Component for adding new todos */}
      <TodoList /> {/* Component for displaying the todo list */}
    </div>);
};

export default TodoPage;
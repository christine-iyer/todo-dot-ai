import React from 'react';
import * as Checkbox from '@radix-ui/react-checkbox';
import { Check, Trash } from 'phosphor-react';

interface TodoItemProps {
  id: string;
  title: string;
  completed: boolean;
  onDelete: () => void;
  onToggle: () => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  id,
  title,
  completed,
  onDelete,
  onToggle,
}) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0.5rem 1rem',
        border: '1px solid #ddd',
        borderRadius: '5px',
        marginBottom: '0.5rem',
        backgroundColor: completed ? '#f0f0f0' : '#fff',
      }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <Checkbox.Root checked={completed} onCheckedChange={onToggle}>
          <Checkbox.Indicator>
            <Check size={18} />
          </Checkbox.Indicator>
        </Checkbox.Root>
        <span style={{ textDecoration: completed ? 'line-through' : 'none' }}>
          {title}
        </span>
      </div>
      <button
        onClick={onDelete}style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          color: 'red',
        }}>
        <Trash size={20} />
      </button>
    </div>);
};

export default TodoItem;
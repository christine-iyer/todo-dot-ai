import { Request, Response } from 'express';
import Todo from '../models/Todo';

// @desc    Get all todos
// @route   GET /api/todos
export const getTodos = async (req: Request, res: Response) => {
  try {
    const todos = await Todo.find(); // Fetch all todos from the database
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch todos' });
  }
};

// @desc    Create a new todo
// @route   POST /api/todos
export const createTodo = async (req: Request, res: Response) => {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({ message: 'Title is required' });
  }

  try {
    const todo = new Todo({ title }); // Create a new Todo instance
    await todo.save(); // Save the todo to the database
    res.status(201).json(todo); // Return the created todo
  } catch (error) {
    res.status(500).json({ message: 'Failed to create todo' });
  }
};

// @desc    Delete a todo by ID
// @route   DELETE /api/todos/:id
export const deleteTodo = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const todo = await Todo.findByIdAndDelete(id); // Find and delete by ID
    if (!todo) {
      return res.status(404).json({ message: 'Todo not found' });
    }
    res.status(200).json({ message: 'Todo deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete todo' });
  }
};
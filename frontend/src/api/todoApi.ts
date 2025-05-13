import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_BACKEND_URL; // Defined in frontend `.env` file

// API endpoint for Todo operations
const TODOS_API_URL = `${API_BASE_URL}/api/todos`;
// API endpoint for AI operations
const AI_API_URL = `${API_BASE_URL}/api/ai`;

/**
 * @desc Fetch all todos
 * @returns A list of todos from the backend
 */
export const fetchTodos = async () => {
  const response = await axios.get(TODOS_API_URL);
  return response.data;
};

/**
 * @desc Create a new todo
 * @param title - Title of the todo item
 * @returns The created todo object
 */
export const createTodo = async (title: string) => {
  const response = await axios.post(TODOS_API_URL, { title });
  return response.data;
};

/**
 * @desc Delete a todo by ID
 * @param id - ID of the todo to be deleted
 * @returns A success message from the backend
 */
export const deleteTodo = async (id: string) => {
  const response = await axios.delete(`${TODOS_API_URL}/${id}`);
  return response.data;
};

/**
 * @desc Generate a description for a task using OpenAI
 * @param task - The task description to enhance
 * @returns Generated task description from the backend
 */
export const generateTaskDescription = async (task: string) => {
  const response = await axios.post(`${AI_API_URL}/description`, { task });
  return response.data.description;
};

/**
 * @desc Generate a task schedule based on available time
 * @param tasks - Array of tasks
 * @param totalTime - Total time (in hours) available to complete tasks
 * @returns Generated schedule from the backend
 */
export const generateTaskSchedule = async (tasks: string[], totalTime: number) => {
  const response = await axios.post(`${AI_API_URL}/schedule`, { tasks, totalTime });
  return response.data.schedule;
};

/**
 * @desc Generate subtasks for a given main task using OpenAI
 * @param task - The main task
 * @returns Array of subtasks generated from the backend
 */
export const generateSubtasks = async (task: string) => {
  const response = await axios.post(`${AI_API_URL}/subtasks`, { task });
  return response.data.subtasks;
};
import React, { useState } from 'react';
import { generateTaskDescription, generateTaskSchedule, generateSubtasks } from '../api/todoApi';

const AiToolsPage: React.FC = () => {
  const [task, setTask] = useState('');
  const [description, setDescription] = useState('');
  const [subtasks, setSubtasks] = useState<string[]>([]);
  const [tasks, setTasks] = useState<string[]>([]);
  const [totalTime, setTotalTime] = useState<number>(0);
  const [schedule, setSchedule] = useState('');

  const handleGenerateDescription = async () => {
    if (task.trim()) {
      const result = await generateTaskDescription(task);
      setDescription(result);
    }
  };

  const handleGenerateSubtasks = async () => {
    if (task.trim()) {
      const result = await generateSubtasks(task);
      setSubtasks(result);
    }
  };

  const handleGenerateSchedule = async () => {
    if (tasks.length > 0 && totalTime > 0) {
      const result = await generateTaskSchedule(tasks, totalTime);
      setSchedule(result);
    }
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>AI Tools</h1>

      {/* Task Description Section */}
      <div style={{ marginBottom: '2rem' }}>
        <h2>Generate Task Description</h2>
        <input
          type="text"placeholder="Enter a task..."value={task}onChange={(e) => setTask(e.target.value)}style={{ padding: '0.5rem', width: '80%' }}/>
        <button
          onClick={handleGenerateDescription}style={{ marginLeft: '0.5rem', padding: '0.5rem' }}>
          Generate
        </button>
        {description && <p style={{ marginTop: '1rem' }}>Description: {description}</p>}
      </div>

      {/* Subtasks Section */}
      <div style={{ marginBottom: '2rem' }}>
        <h2>Generate Subtasks</h2>
        <button onClick={handleGenerateSubtasks} style={{ padding: '0.5rem' }}>
          Generate Subtasks
        </button>
        {subtasks.length > 0 && (
          <ul style={{ marginTop: '1rem' }}>
            {subtasks.map((subtask, index) => (
              <li key={index}>{subtask}</li>))}
          </ul>)}
      </div>

      {/* Schedule Section */}
      <div style={{ marginBottom: '2rem' }}>
        <h2>Generate Task Schedule</h2>
        <textarea
          placeholder="Enter tasks separated by commas..."onChange={(e) => setTasks(e.target.value.split(',').map((t) => t.trim()))}style={{ padding: '0.5rem', width: '80%', height: '80px' }}/>
        <input
          type="number"placeholder="Enter total time (hours)..."onChange={(e) => setTotalTime(Number(e.target.value))}style={{ padding: '0.5rem', marginLeft: '0.5rem', width: '20%' }}/>
        <button onClick={handleGenerateSchedule} style={{ marginTop: '1rem', padding: '0.5rem' }}>
          Generate Schedule
        </button>
        {schedule && <p style={{ marginTop: '1rem' }}>Schedule: {schedule}</p>}
      </div>
    </div>);
};

export default AiToolsPage;
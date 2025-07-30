'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import axios from 'axios';

export default function Home() {
  const [tasks, setTasks] = useState<any[]>([]);

  const fetchTasks = async () => {
    const res = await axios.get('http://localhost:4000/tasks');
    setTasks(res.data);
  };

  const toggleComplete = async (task: any) => {
    await axios.put(`http://localhost:4000/tasks/${task.id}`, {
      ...task,
      completed: !task.completed,
    });
    fetchTasks();
  };

  const deleteTask = async (id: number) => {
    if (confirm('Are you sure you want to delete this task?')) {
      await axios.delete(`http://localhost:4000/tasks/${id}`);
      fetchTasks();
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="p-6 max-w-xl mx-auto">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Todo List</h1>
        <Link href="/new" className="bg-blue-500 text-white px-4 py-2 rounded">+ New Task</Link>
      </div>
      <div className="mt-2 text-gray-600">
        Tasks: {tasks.length} | Completed: {tasks.filter(t => t.completed).length} of {tasks.length}
      </div>

     <ul className="mt-4 space-y-2">
  {tasks.map(task => (
    <li
      key={task.id}
      className={`flex justify-between items-center p-4 rounded shadow bg-${task.color}-100`}
    >
      <div
        onClick={() => toggleComplete(task)}
        className="flex-1 cursor-pointer flex items-center"
      >
        <input
          type="checkbox"
          checked={task.completed}
          readOnly
          className="mr-2"
        />

        <Link
          href={`/edit/${task.id}`}
          onClick={(e) => e.stopPropagation()} // <-- This prevents checkbox toggle
          className={task.completed ? 'line-through' : ''}
        >
          {task.title}
        </Link>
      </div>

      <div className="flex space-x-2 ml-4">
        <Link
          href={`/edit/${task.id}`}
          onClick={(e) => e.stopPropagation()} // <-- Optional: prevents toggle if clicking edit
          className="text-blue-600 hover:underline"
        >
          Edit
        </Link>
        <button
          onClick={(e) => {
            e.stopPropagation(); // <-- Also stop toggle on delete click
            deleteTask(task.id);
          }}
          className="text-red-500 hover:underline"
        >
          Delete
        </button>
      </div>
    </li>
  ))}
</ul>

    </div>
  );
}

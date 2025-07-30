'use client';
import TaskForm from '@/components/TaskForm';
import { useRouter } from 'next/navigation';
import axios from 'axios';

export default function NewPage() {
  const router = useRouter();

  const handleCreate = async (data: { title: string; color: string }) => {
    await axios.post('http://localhost:4000/tasks', data);
    router.push('/');
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-xl font-bold mb-4">Create Task</h1>
      <TaskForm onSubmit={handleCreate} />
    </div>
  );
}

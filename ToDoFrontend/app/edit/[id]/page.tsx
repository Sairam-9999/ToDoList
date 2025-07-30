'use client';
import TaskForm from '@/components/TaskForm';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function EditPage() {
  const { id } = useParams();
  const router = useRouter();
  const [task, setTask] = useState<any>(null);

  useEffect(() => {
    axios.get(`http://localhost:4000/tasks`).then((res) => {
      const found = res.data.find((t: any) => t.id === Number(id));
      setTask(found);
    });
  }, [id]);

  const handleUpdate = async (data: { title: string; color: string }) => {
    await axios.put(`http://localhost:4000/tasks/${id}`, {
      ...task,
      ...data,
    });
    router.push('/');
  };

  if (!task) return <div className="p-4">Loading...</div>;

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-xl font-bold mb-4">Edit Task</h1>
      <TaskForm onSubmit={handleUpdate} initial={task} />
    </div>
  );
}

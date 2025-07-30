'use client';

import { useState } from 'react';

type Props = {
  initial?: {
    title: string;
    color: string;
  };
  onSubmit: (data: { title: string; color: string }) => void;
};

export default function TaskForm({ initial, onSubmit }: Props) {
  const [title, setTitle] = useState(initial?.title || '');
  const [color, setColor] = useState(initial?.color || 'blue');

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit({ title, color });
      }}
      className="space-y-4"
    >
      <div>
        <label className="block">Title</label>
        <input
          className="border p-2 w-full rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label className="block">Color</label>
        <select
          className="border p-2 w-full rounded"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        >
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
        </select>
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Save
      </button>
    </form>
  );
}

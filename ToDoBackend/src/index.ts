import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

app.get('/tasks', async (_req, res) => {
  const tasks = await prisma.task.findMany();
  res.json(tasks);
});

app.post('/tasks', async (req, res) => {
  const { title, color } = req.body;
  const task = await prisma.task.create({ data: { title, color } });
  res.json(task);
});

app.put('/tasks/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  const { title, color, completed } = req.body;
  const task = await prisma.task.update({
    where: { id },
    data: { title, color, completed },
  });
  res.json(task);
});

app.delete('/tasks/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  await prisma.task.delete({ where: { id } });
  res.status(204).send();
});

app.listen(4000, () => console.log('Server running on http://localhost:4000'));

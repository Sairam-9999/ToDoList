### 1.Backend (todo-backend)

# Todo App Backend

This is the **Express.js + Prisma + MySQL** backend for the Todo List App.

---

## Tech Stack

- Express.js
- Prisma ORM
- MySQL
- TypeScript

---

## Setup Instructions (Windows Friendly)

### 1. Clone the Repository (if not done)

```bash
  git clone https://github.com/Sairam-9999/ToDoList.git
  cd ToDoBackend


### 2. Install Dependencies

  npm install

### 3. Setup Prisma and Database

  Ensure MySQL is installed and running
  
  Create the database:
    CREATE DATABASE tododb;

  Create .env in ToDoBackend folder and and set:
    DATABASE_URL="mysql://root:yourpassword@localhost:3306/todo"
  // Replace yourpassword with your own credentials

### 4. Run Migrations

  npx prisma migrate dev --name init
  npx prisma generate

### 5. Start the Server

  npm run dev


Server runs on: http://localhost:4000 or as per local setup port.

### API Endpoints
  Method	      Endpoint	          Description
  GET	          /tasks	          Get all  tasks
  POST	        /tasks	          Create a new task
  PUT	          /tasks/:id	      Update a task
  DELETE	      /tasks/:id	      Delete a task


### Folder Structure

  ToDoBackend/
  ├── prisma/
  │   └── schema.prisma
  ├── src/
  │   └── index.ts
  ├── .env
  ├── package.json
  └── tsconfig.json


### Useful Commands

  npx prisma studio        # View DB in browser
  npx prisma generate      # Re-generate client
  npx prisma migrate dev   # Run migrations


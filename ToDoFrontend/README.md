### 2. Frontend (`ToDoFrontend`)

```markdown
# Todo App Frontend

This is the **Next.js 14 + Tailwind + Axios** frontend for the Todo List App.

---

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Axios

---

## Setup Instructions

### 1. Clone the Repository (If not done)

```bash
  git https://github.com/Sairam-9999/ToDoList.git
  cd ToDoFrontend


### 2. Install Dependencies

  npm install


### 3. Start the Frontend

    npm run dev

### Folder Structure

    ToDoStructure/
    ├── app/
    │   ├── page.tsx             # Home
    │   ├── new/page.tsx         # Create task
    │   └── edit/[id]/page.tsx   # Edit task
    ├── components/
    │   └── TaskForm.tsx
    ├── styles/
    │   └── globals.css
    ├── tailwind.config.ts
    ├── package.json
    └── ...


### Features

  Create / Edit / Delete tasks
  Toggle task completion
  Task color selection
  Uses Axios to communicate with Express API


### Backend API

    Ensure backend is running on http://localhost:4000
    Update API URLs in frontend if needed (e.g., in axios requests inside components)


### Common Errors
    CORS error? → Ensure backend uses: app.use(cors())
    Network error? → Check backend is running on port 4000
    404 on edit page? → Ensure [id] is a dynamic segment under edit/
  

# 📝 Task Management Web Application

A clean and simple **Task Management Web Application** built as part of the **Global Trend – Full Stack Development Internship Skill Assessment**.

![Task Manager](https://img.shields.io/badge/Status-Complete-brightgreen) ![React](https://img.shields.io/badge/React-18.2-blue) ![Node.js](https://img.shields.io/badge/Node.js-Express-green) ![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-purple)

---

## 🚀 Features

- ✅ Create tasks with **title, description, and status**
- ✅ View all tasks in a clean, card-based UI
- ✅ Update task details and status
- ✅ Delete tasks instantly
- ✅ Responsive and mobile-friendly interface
- ✅ Persistent data storage using MongoDB

---

## 🎨 UI Design

The UI is designed to be **simple, realistic, and professional**:

- Clean white background with subtle shadows
- Card-based task layout
- Color-coded status badges (Pending / In Progress / Completed)
- Smooth hover animations
- Fully responsive design

---

## 🛠️ Tech Stack

| Layer      | Technology                |
|------------|---------------------------|
| Frontend   | React.js, Vite, Axios     |
| Backend    | Node.js, Express.js       |
| Database   | MongoDB (Atlas)           |
| Styling    | Custom CSS                |

---

## 📁 Project Structure

```
task-manager-app/
├── backend/
│   ├── config/
│   │   └── db.js              # MongoDB connection
│   ├── controllers/
│   │   └── taskController.js  # CRUD operations
│   ├── models/
│   │   └── Task.js            # Mongoose schema
│   ├── routes/
│   │   └── taskRoutes.js      # API routes
│   ├── app.js                 # Express app config
│   ├── server.js              # Entry point
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── TaskForm.jsx   # Create/Edit form
│   │   │   ├── TaskList.jsx   # Task container
│   │   │   └── TaskItem.jsx   # Individual task card
│   │   ├── services/
│   │   │   └── api.js         # Axios API calls
│   │   ├── App.jsx            # Main component
│   │   └── main.jsx           # Entry point
│   └── package.json
│
└── README.md
```

---

## ⚡ Quick Start

### Prerequisites

- Node.js (v16 or higher)
- MongoDB Atlas account (or local MongoDB)
- npm or yarn

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd task-manager-app
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the backend folder:

```env
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/taskmanager?retryWrites=true&w=majority
PORT=5000
```

Start the backend server:

```bash
npm run dev
```

### 3. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

### 4. Access the Application

- Frontend: [http://localhost:5173](http://localhost:5173)
- Backend API: [http://localhost:5000/api/tasks](http://localhost:5000/api/tasks)

---

## 📡 API Endpoints

| Method | Endpoint          | Description       |
|--------|-------------------|-------------------|
| GET    | `/api/tasks`      | Get all tasks     |
| POST   | `/api/tasks`      | Create a new task |
| PUT    | `/api/tasks/:id`  | Update a task     |
| DELETE | `/api/tasks/:id`  | Delete a task     |

### Example Request Body (POST/PUT)

```json
{
  "title": "Complete Assessment",
  "description": "Finish the task manager application",
  "status": "In Progress"
}
```

---

## 🎯 Status Options

| Status       | Description                |
|--------------|----------------------------|
| Pending      | Task not started           |
| In Progress  | Task currently being worked on |
| Completed    | Task finished              |

---

## 📱 Responsive Design

The application is fully responsive and works on:
- 💻 Desktop
- 📱 Tablet
- 📱 Mobile

---

## 🚀 Deployment

### Frontend (Vercel)

1. Push code to GitHub
2. Connect repo to Vercel
3. Set build command: `npm run build`
4. Set output directory: `dist`

### Backend (Render)

1. Push code to GitHub
2. Create new Web Service on Render
3. Connect repo and select backend folder
4. Add environment variables
5. Deploy

---

## Author

**Shashi Bhushan Kumar**  
Full Stack Developer

| | |
|---|---|
| Portfolio | [shashibhushan.me](https://shashibhushan.me) |
| GitHub | [github.com/shashibhushan21](https://github.com/shashibhushan21) |
| LinkedIn | [linkedin.com/in/shashi-tech](https://linkedin.com/in/shashi-tech) |
| Location | Bhubaneswar, Odisha, India |

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

*Built for Global Trend – Full Stack Development Internship Assessment*

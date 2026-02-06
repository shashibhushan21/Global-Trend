import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api/tasks';

// Create axios instance
const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});

// Get all tasks
export const getTasks = async () => {
    const response = await api.get('/');
    return response.data;
};

// Create a new task
export const createTask = async (taskData) => {
    const response = await api.post('/', taskData);
    return response.data;
};

// Update a task
export const updateTask = async (id, taskData) => {
    const response = await api.put(`/${id}`, taskData);
    return response.data;
};

// Delete a task
export const deleteTask = async (id) => {
    const response = await api.delete(`/${id}`);
    return response.data;
};

export default api;

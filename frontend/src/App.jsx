import { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import Modal from './components/Modal';
import { getTasks, createTask, updateTask, deleteTask } from './services/api';
import './App.css';

function App() {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [editingTask, setEditingTask] = useState(null);
    const [deleteModal, setDeleteModal] = useState({ isOpen: false, taskId: null, taskTitle: '' });

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        try {
            setLoading(true);
            setError(null);
            const response = await getTasks();
            setTasks(response.data || []);
        } catch (err) {
            setError('Unable to connect to server. Please ensure the backend is running.');
            console.error('Error fetching tasks:', err);
        } finally {
            setLoading(false);
        }
    };

    const handleCreateTask = async (taskData) => {
        try {
            setError(null);
            const response = await createTask(taskData);
            setTasks([response.data, ...tasks]);
        } catch (err) {
            setError('Failed to create task. Please try again.');
            console.error('Error creating task:', err);
        }
    };

    const handleUpdateTask = async (taskData) => {
        try {
            setError(null);
            const response = await updateTask(editingTask._id, taskData);
            setTasks(tasks.map(task =>
                task._id === editingTask._id ? response.data : task
            ));
            setEditingTask(null);
        } catch (err) {
            setError('Failed to update task. Please try again.');
            console.error('Error updating task:', err);
        }
    };

    const handleDeleteClick = (task) => {
        setDeleteModal({ isOpen: true, taskId: task._id, taskTitle: task.title });
    };

    const handleDeleteConfirm = async () => {
        try {
            setError(null);
            await deleteTask(deleteModal.taskId);
            setTasks(tasks.filter(task => task._id !== deleteModal.taskId));
            setDeleteModal({ isOpen: false, taskId: null, taskTitle: '' });
        } catch (err) {
            setError('Failed to delete task. Please try again.');
            console.error('Error deleting task:', err);
        }
    };

    const handleDeleteCancel = () => {
        setDeleteModal({ isOpen: false, taskId: null, taskTitle: '' });
    };

    const handleEditClick = (task) => {
        setEditingTask(task);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleCancelEdit = () => {
        setEditingTask(null);
    };

    return (
        <div className="app">
            <div className="app-container">
                <header className="app-header">
                    <h1 className="app-title">
                        <span className="app-title-icon">✓</span>
                        Task Manager
                    </h1>
                    <p className="app-subtitle">Organize and track your work efficiently</p>
                </header>

                {error && (
                    <div className="error-message">
                        <span>{error}</span>
                        <button onClick={() => setError(null)}>Dismiss</button>
                    </div>
                )}

                <TaskForm
                    onSubmit={editingTask ? handleUpdateTask : handleCreateTask}
                    editingTask={editingTask}
                    onCancel={handleCancelEdit}
                />

                <TaskList
                    tasks={tasks}
                    loading={loading}
                    onEdit={handleEditClick}
                    onDelete={handleDeleteClick}
                />

                <footer className="app-footer">
                    <p>
                        Built for{' '}
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            Global Trend Internship
                        </a>
                    </p>
                </footer>
            </div>

            <Modal
                isOpen={deleteModal.isOpen}
                title="Delete Task"
                message={`Are you sure you want to delete "${deleteModal.taskTitle}"? This action cannot be undone.`}
                confirmText="Delete"
                cancelText="Cancel"
                variant="danger"
                onConfirm={handleDeleteConfirm}
                onCancel={handleDeleteCancel}
            />
        </div>
    );
}

export default App;

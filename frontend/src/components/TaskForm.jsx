import { useState, useEffect } from 'react';
import './TaskForm.css';

const TaskForm = ({ onSubmit, editingTask, onCancel }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('Pending');

    useEffect(() => {
        if (editingTask) {
            setTitle(editingTask.title || '');
            setDescription(editingTask.description || '');
            setStatus(editingTask.status || 'Pending');
        } else {
            setTitle('');
            setDescription('');
            setStatus('Pending');
        }
    }, [editingTask]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!title.trim() || !description.trim()) {
            return;
        }

        onSubmit({
            title: title.trim(),
            description: description.trim(),
            status
        });

        if (!editingTask) {
            setTitle('');
            setDescription('');
            setStatus('Pending');
        }
    };

    return (
        <div className="form-card">
            <div className="form-header">
                <h2 className="form-title">
                    {editingTask ? 'Edit Task' : 'New Task'}
                </h2>
                {editingTask && (
                    <button type="button" className="btn-cancel" onClick={onCancel}>
                        Cancel
                    </button>
                )}
            </div>

            <form className="task-form" onSubmit={handleSubmit}>
                <div className="form-row">
                    <div className="form-group form-group-title">
                        <label htmlFor="title">Title</label>
                        <input
                            type="text"
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="What needs to be done?"
                            maxLength={100}
                            required
                        />
                    </div>

                    <div className="form-group form-group-status">
                        <label htmlFor="status">Status</label>
                        <select
                            id="status"
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                        >
                            <option value="Pending">Pending</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Completed">Completed</option>
                        </select>
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Add some details..."
                        maxLength={500}
                        rows={3}
                        required
                    />
                </div>

                <div className="form-actions">
                    <button type="submit" className="btn-primary">
                        {editingTask ? 'Save Changes' : 'Add Task'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default TaskForm;

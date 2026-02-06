import './TaskItem.css';

const TaskItem = ({ task, onEdit, onDelete }) => {
    const getStatusClass = (status) => {
        switch (status) {
            case 'Pending':
                return 'status-pending';
            case 'In Progress':
                return 'status-progress';
            case 'Completed':
                return 'status-completed';
            default:
                return 'status-pending';
        }
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric'
        });
    };

    return (
        <div className="task-card">
            <div className="task-main">
                <div className="task-content">
                    <h3 className="task-title">{task.title}</h3>
                    <p className="task-description">{task.description}</p>
                    <span className="task-meta">
                        Created {formatDate(task.createdAt)}
                    </span>
                </div>

                <div className="task-side">
                    <span className={`status-badge ${getStatusClass(task.status)}`}>
                        {task.status}
                    </span>
                </div>
            </div>

            <div className="task-actions">
                <button
                    className="btn-action"
                    onClick={() => onEdit(task)}
                    aria-label="Edit task"
                >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                    </svg>
                    <span>Edit</span>
                </button>
                <button
                    className="btn-action btn-action-danger"
                    onClick={() => onDelete(task)}
                    aria-label="Delete task"
                >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="3 6 5 6 21 6"></polyline>
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                    </svg>
                    <span>Delete</span>
                </button>
            </div>
        </div>
    );
};

export default TaskItem;

import TaskItem from './TaskItem';
import './TaskList.css';

const TaskList = ({ tasks, onEdit, onDelete, loading }) => {
    if (loading) {
        return (
            <div className="task-list-section">
                <div className="loading-state">
                    <div className="loading-spinner"></div>
                    <p>Loading tasks...</p>
                </div>
            </div>
        );
    }

    if (!tasks || tasks.length === 0) {
        return (
            <div className="task-list-section">
                <div className="empty-state">
                    <div className="empty-icon">
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M9 11l3 3L22 4"></path>
                            <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                        </svg>
                    </div>
                    <h3>No tasks yet</h3>
                    <p>Create your first task to get started</p>
                </div>
            </div>
        );
    }

    return (
        <div className="task-list-section">
            <div className="section-header">
                <h2 className="section-title">All Tasks</h2>
                <span className="task-count">{tasks.length}</span>
            </div>
            <div className="task-list">
                {tasks.map((task) => (
                    <TaskItem
                        key={task._id}
                        task={task}
                        onEdit={onEdit}
                        onDelete={onDelete}
                    />
                ))}
            </div>
        </div>
    );
};

export default TaskList;

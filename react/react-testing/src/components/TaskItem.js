import React from 'react';

class TaskItem extends React.Component {
  render() {
    const { title, done, onClick } = this.props;
    return (
      <div className="task">
        <h2>{title}</h2>
        <p>{done ? 'completada' : 'por completar'}</p>
        <button
          data-testid="complete-task"
          onClick={onClick}
          type="button"
        >
          Completar
        </button>
      </div>
    );
  }
}

export default TaskItem;

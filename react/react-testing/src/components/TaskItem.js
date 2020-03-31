import React from 'react';

class TaskItem extends React.Component {
  render() {
    const { title, done } = this.props;
    return (
      <div className="task">
        <h2>{title}</h2>
        <p>{done ? 'completada' : 'por completar'}</p>
      </div>
    );
  }
}

export default TaskItem;

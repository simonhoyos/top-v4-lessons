import React from 'react';
import TaskItem from './TaskItem';

class TasksList extends React.Component {
  render() {
    const { tasks, onClick } = this.props;
    return (
      <div className="tasks">
        <h1>Lista de Tareas</h1>
        {tasks && tasks.length > 0 && tasks.map(({ id, title, done}) => {
          return (
            <TaskItem
              done={done}
              key={id}
              title={title}
              onClick={onClick(id)}
            />
          )
        })}
      </div>
    )
  }
}

export default TasksList;

import React from 'react';
import TaskItem from './TaskItem';
import { connect } from 'react-redux';

class TasksList extends React.Component {
  render() {
    const { tasks } = this.props;
    return (
      <div className="tasks">
        <h1>Lista de Tareas</h1>
        {tasks && tasks.length > 0 && tasks.map(({ id, title, done}) => {
          return (
            <TaskItem
              done={done}
              key={id}
              title={title}
              id={id}
            />
          )
        })}
      </div>
    )
  }
}

const mapStateToProps = ({ tasks }) => ({ tasks });

export default connect(mapStateToProps)(TasksList);

import React from 'react';
import { connect } from 'react-redux';
import { completeTask } from '../store';

class TaskItem extends React.Component {
  render() {
    const { title, done, id, onClick } = this.props;
    return (
      <div className="task">
        <h2>{title}</h2>
        <p>{done ? 'completada' : 'por completar'}</p>
        <button
          data-testid="complete-task"
          onClick={() => onClick(id)}
          type="button"
        >
          Completar
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onClick(id) {
      dispatch(completeTask(id))
    }
  }
}

export default connect(null, mapDispatchToProps)(TaskItem);

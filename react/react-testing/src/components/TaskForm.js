import React from 'react';
import { connect } from 'react-redux';
import { inputChange, createTask } from '../store';

function TaskForm({ onSubmit, onChange, title }) {
  return (
    <form
      data-testid="task-form"
      className="create-task"
      onSubmit={onSubmit}
    >
      <label htmlFor="title">Título</label>
      <input
        data-testid="input-title"
        id="title"
        name="title"
        onChange={onChange}
        type="text"
        value={title}
      />
      <button>Crear tarea</button>
    </form>
  )
}

const mapStateToProps = ({ title }) => ({ title });

const mapDispatchToProps = dispatch => {
  return {
    onChange(e) {
      const { value } = e.target;
      dispatch(inputChange(value))
    },
    onSubmit(e) {
      e.preventDefault();
      dispatch(createTask());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);

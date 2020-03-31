import React from 'react';

class TaskForm extends React.Component {
  render() {
    const { onSubmit, onChange, title } = this.props
    return (
      <form
        className="create-task"
        onSubmit={onSubmit}
      >
        <label htmlFor="title">Título</label>
        <input
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
}

export default TaskForm;

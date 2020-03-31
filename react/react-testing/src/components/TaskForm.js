import React from 'react';

class TaskForm extends React.Component {
  render() {
    const { onSubmit, onChange, title } = this.props
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
}

export default TaskForm;

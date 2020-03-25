import React from 'react';
import logo from './logo.svg';
import './App.css';

function TaskList({ title, tasks, onClick }) {
  return (
    <div>
      <h2>{title}</h2>
      {tasks.map(task => (
        <p
          key={task.id}
          data-id={task.id}
          onClick={onClick}
        >
          {task.name}
        </p>
      ))}
    </div>
  );
}

class App extends React.Component {
  state = {
    tasks: [
      { id: 1, name: 'taks 1' },
      { id: 2, name: 'taks 2' },
      { id: 3, name: 'taks 3' },
      { id: 4, name: 'taks 4' },
      { id: 5, name: 'taks 5' },
      { id: 6, name: 'taks 6' },
      { id: 7, name: 'taks 7' },
      { id: 8, name: 'taks 8' },
    ],
    completedTasks: []
  }

  redoTask = e => {
    const { id } = e.target.dataset;

    let currentTask;
    const completedTasks = this.state.completedTasks.filter(task => {
      if(task.id == id) {
        currentTask = task;
        return false;
      }

      return true;
    });
    const tasks = this.state.tasks.concat(currentTask);
    this.setState({
      tasks,
      completedTasks,
    });
  }

  completeTask = e => {
    const { id } = e.target.dataset;

    let currentTask;
    const tasks = this.state.tasks.filter(task => {
      if(task.id == id) {
        currentTask = task;
        return false;
      }

      return true;
    });
    const completedTasks = this.state.completedTasks.concat(currentTask);
    this.setState({
      tasks,
      completedTasks,
    });
  }

  render() {
    return (
      <div className="App">
        <TaskList
          title="To Do"
          tasks={this.state.tasks}
          onClick={this.completeTask}
        />
        <TaskList
          title="Completed"
          tasks={this.state.completedTasks}
          onClick={this.redoTask}
        />
      </div>
    );
  }
}

export default App;

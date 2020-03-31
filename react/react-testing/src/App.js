import React from 'react';
import uuid from 'uuid-random';
import TasksList from './components/TasksList';
import TaskForm from './components/TaskForm';
import './App.css';

class App extends React.Component {
  state = {
    tasks: [],
    title: '',
  };

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit = e => {
    e.preventDefault();

    const task = {
      id: uuid(),
      title: this.state.title,
      done: false,
    };

    const tasks = this.state.tasks.concat(task);

    this.setState({
      tasks,
      title: ''
    });
  }

  handleClick = id => {
    return e => {
      const tasks = this.state.tasks.map(task => {
        if(task.id === id) {
          return {
            ...task,
            done: !task.done,
          }
        }

        return task;
      });

      this.setState({ tasks });
    }
  }

  render() {
    const { tasks, title } = this.state;
    return (
      <div className="App">
        <TasksList
          tasks={tasks}
          onClick={this.handleClick}
        />
        <TaskForm
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
          title={title}
        />
      </div>
    );
  }
}

export default App;

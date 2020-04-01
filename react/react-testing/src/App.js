import React from 'react';
import TasksList from './components/TasksList';
import TaskForm from './components/TaskForm';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <TasksList />
        <TaskForm />
      </div>
    );
  }
}

export default App;

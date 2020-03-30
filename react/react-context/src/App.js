import React from 'react';
import logo from './logo.svg';
import './App.css';
import TasksContext from './state/TasksContext';

// lifting state
// prop drilling

// Render Props
function FatherComponent({ render }) {
  const [list, setList] = React.useState(['hola mundo', 'hola mir']);
  return render({ list });
}

// class TasksList extends React.Component {
//   static contextType = TasksContext;
//   render() {
//     return (
      // <div className="tasks">
      //   {this.context.tasks.map(task => <p>{task}</p>)}
      // </div>
//     );
//   }
// }

function TasksList() {
  // const { tasks } = React.useContext(TasksContext);

  // return (
    // <div className="tasks">
    //   {tasks && tasks.length > 0 && tasks.map(task => <p>{task}</p>)}
    // </div>
  // );

  return (
    <TasksContext.Consumer>
      {({ tasks }) => (
        <div className="tasks">
          {tasks && tasks.length > 0 && tasks.map(task => <p>{task}</p>)}
        </div>
      )}
    </TasksContext.Consumer>
  );
}

function Button() {
  const { addTask } = React.useContext(TasksContext);

  return <button onClick={addTask}>Agregar tarea</button>;
}

function App() {
  const [tasks, setTasks] = React.useState([]);

  function addTask() {
    setTasks([ ...tasks, 'nueva tarea' ]);
  }

  return (
    <TasksContext.Provider value={{ tasks: ['otro contexto'] }}>
      <TasksList />
      <TasksContext.Provider value={{ tasks, addTask }}>
        <div className="App">
          <TasksList />
          <Button />
          <FatherComponent render={
            ({ list }) => {
              return list.map(el => <p>{el}</p>);
            }
          } />
        </div>
      </TasksContext.Provider>
    </TasksContext.Provider>
  );
}

export default App;

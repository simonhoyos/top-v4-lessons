import React from 'react';
import logo from './logo.svg';
import './App.css';

function TaskList({ tasks, className, show = 'odd' }) {
  return tasks.map((el, index) => {
    if(show === 'odd' && index % 2 !== 0) {
      return <p className={className + ' ' + show}>{el}</p>
    }

    if(show === 'even' && index % 2 === 0) {
      return <p className={className + ' ' + show}>{el}</p>
    }
  })
}

// TaskList.defaultProps = {
//   show: 'odd'
// };

function Button({ addTask, children }) {
  return (
    <button onClick={addTask}>{children}</button>
  );
}

// React.createElement(
//   'button',
//   {
//     addTasks: [Function],
//     children
//   },
//   children,
// );

class App extends React.Component {
  state = {
    tasks: ['primera tarea', 'tercera tarea'],
    obj: {},
  };

  handleClick = event => {
    console.dir(event.currentTarget);
    // const newTask = 'nueva tarea';
    const newTask = 'segunda tarea';
    this.setState(prevState => ({
      // tasks: prevState.tasks.concat(newTask),
      // tasks: prevState.tasks
      //         .slice(0, 1)
      //         .concat(newTask)
      //         .concat(
      //           prevState.tasks
      //             .slice(1)
      //         )
      // tasks: prevState.tasks
      //         .slice(0, 1)
      //         .concat(
      //           prevState.tasks
      //             .slice(2)
      //         )
      tasks: prevState.tasks.filter(el => el !== 'tercera tarea'),
      // obj: {
      //   ...prevState.obj,
      //   newProperty: 'New property',
      // },
    }))
  }

  render() {
    // this.props.name
    return (
      <div className="App">
        <h1>Hola mundo</h1>
        <TaskList
          tasks={this.state.tasks}
          className="task"
          // show="odd"
        />
        <Button addTask={this.handleClick}>Add task</Button>
      </div>
    );
  }
}

export default App;

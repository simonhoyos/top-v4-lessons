import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      content: 1
    }

    this.handleClick = this.handleClick.bind(this);
    // this.changeTitle = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => ({
      content: prevState.content + 1,
    }));
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.content}</h1>
        <button onClick={this.handleClick}>Click</button>
      </div>
    );
  }
}

export default App;

import React from 'react';
import uuid from 'uuid-random';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  state = {
    name: '',
    lastname: '',
    password: ''
  };

  handleChange = e => {
    const { value, name } = e.target;

    this.setState({
      [name]: value
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    alert(this.state);

    fetch('http://localhost:3001', {
      method: 'POST',
      body: this.state
    });
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <label htmlFor="lastname">Lastname</label>
          <input
            type="text"
            name="lastname"
            id="lastname"
            value={this.state.lastname}
            onChange={this.handleChange}
          />
          <label htmlFor="password">Password</label>
          <input
            type="text"
            name="password"
            id="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default App;

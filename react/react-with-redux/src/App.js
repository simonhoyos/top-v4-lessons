import React from 'react';
import { connect } from 'react-redux';
import { increaseCount, decreaseCount } from './reducers/countReducer';
import Posts from './components/Posts';
import './App.css';

function App({
  count,
  increaseCount,
  decreaseCount,
}) {
  return (
    <div className="App">
      <h1>{count}</h1>
      <button
        type="button"
        onClick={increaseCount}
      >
        Increase
      </button>
      <button
        type="button"
        onClick={decreaseCount}
      >
        Decrease
      </button>
      <Posts />
    </div>
  );
}

// HOC - High Order Component
// HOF - High Order Function

const mapStateToProps = ({ countReducer }) => {
  return {
    count: countReducer.count,
  }
}

const mapDispatchToProps = {
  increaseCount,
  decreaseCount,
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

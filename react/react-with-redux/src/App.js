import React from 'react';
import { connect } from 'react-redux';
import { INCREASE, DECREASE } from './store/index';
import './App.css';

function App(props) {
  return (
    <div className="App">
      <h1>{props.count}</h1>
      <button
        type="button"
        onClick={() => props.increaseCount(1)}
      >
        Increase
      </button>
      <button
        type="button"
        onClick={props.decreaseCount}
      >
        Decrease
      </button>
    </div>
  );
}

// HOC - High Order Component
// HOF - High Order Function

const mapStateToProps = (state) => {
  console.log(state)
  return {
    count: state.count
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increaseCount(data) {
      dispatch({ type: INCREASE, payload: data });
    },
    decreaseCount() {
      dispatch({ type: DECREASE });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { Signup } from './pages/Signup';
import { Home } from './pages/Home';
import './App.css';

function PrivateRoute(props) {
  const token = localStorage.token;

  if(!token) return <Redirect to="/signup" />
  return (
    <Route {...props} />
  );
}

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/admin/signup" component={Signup} />
          <PrivateRoute exact path="/" component={Home} />
          <Redirect from="*" to="/admin/signup" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

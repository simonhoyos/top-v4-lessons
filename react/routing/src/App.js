import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Error from './pages/Error';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact="true" path="/" component={Home} />
        <Route exact={true} path="/about" component={About} />
        <Route exact path="/about/:aboutId" component={About} />
        <Route exact path="/contact" component={Contact} />
        {/* <Route path="*" component={Error} /> */}
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
}

export default App;

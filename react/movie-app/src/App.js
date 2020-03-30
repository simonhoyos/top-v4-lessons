import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from 'react-router-dom';
import Popular from './pages/Popular';
import Upcoming from './pages/Upcoming';
import TopRated from './pages/TopRated';
import NowPlaying from './pages/NowPlaying';
import { MoviesProvider } from './state/MoviesContext';
import './App.css';

function App() {
  return (
    <MoviesProvider>
      <Router>
        <nav>
          <Link to="/popular">Popular</Link>
          <Link to="/upcoming">Upcoming</Link>
          <Link to="/top-rated">Top Rated</Link>
          <Link to="/now-playing">Now Playing</Link>
        </nav>
        <div className="App">
          <Switch>
            <Route exact path="/popular" component={Popular} />
            <Route exact path="/upcoming" component={Upcoming} />
            <Route exact path="/top-rated" component={TopRated} />
            <Route exact path="/now-playing" component={NowPlaying} />
            <Redirect path="*" to="/popular" />
          </Switch>
        </div>
      </Router>
    </MoviesProvider>
  );
}

export default App;

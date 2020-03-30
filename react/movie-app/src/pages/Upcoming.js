import React from 'react';
import Movies from '../components/Movies';
import { MoviesContext } from '../state/MoviesContext';

const Upcoming = () => {
  const { getMovies } = React.useContext(MoviesContext);

  React.useEffect(()=> {
    getMovies('upcoming')
  }, []);

  return (
    <div className="upcoming">
      <h1>Upcoming</h1>
      <Movies />
    </div>
  )
}

export default Upcoming;

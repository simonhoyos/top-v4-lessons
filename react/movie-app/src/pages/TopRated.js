import React from 'react';
import Movies from '../components/Movies';
import { MoviesContext } from '../state/MoviesContext';

const TopRated = () => {
  const { getMovies } = React.useContext(MoviesContext);

  React.useEffect(()=> {
    getMovies('top_rated')
  }, []);

  return (
    <div className="top-rated">
      <h1>TopRated</h1>
      <Movies />
    </div>
  )
}

export default TopRated;

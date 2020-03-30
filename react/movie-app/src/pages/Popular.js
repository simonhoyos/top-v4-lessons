import React from 'react';
import Movies from '../components/Movies';
import { MoviesContext } from '../state/MoviesContext';

const Popular = () => {
  const { getMovies } = React.useContext(MoviesContext);

  React.useEffect(()=> {
    getMovies('popular')
  }, []);

  return (
    <div className="popular">
      <h1>Popular</h1>
      <Movies />
    </div>
  )
}

export default Popular;

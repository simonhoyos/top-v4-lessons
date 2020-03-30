import React from 'react';
import Movies from '../components/Movies';
import { MoviesContext } from '../state/MoviesContext';

const NowPlaying = () => {
  const { getMovies } = React.useContext(MoviesContext);

  React.useEffect(()=> {
    getMovies('now_playing')
  }, []);

  return (
    <div className="now-playing">
      <h1>NowPlaying</h1>
      <Movies />
    </div>
  )
}

export default NowPlaying;

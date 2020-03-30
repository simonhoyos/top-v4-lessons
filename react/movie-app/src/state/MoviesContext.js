import React from 'react';
import axios from 'axios';

export const MoviesContext = React.createContext();

export const MoviesProvider = ({ children }) => {
  const [ movies, setMovies ] = React.useState([]);

  async function getMovies(path) {
    const { data: { results } } = await axios({
      method: 'get',
      baseURL: 'https://api.themoviedb.org/3/movie',
      url: `/${path}?api_key=xxxxxxxxxxxx`,
    })
    setMovies(results);
  }

  return (
    <MoviesContext.Provider value={{
      movies,
      getMovies
    }}>
      {children}
    </MoviesContext.Provider>
  )
}

// export default MoviesContext;
// module.exports = MoviesContext;
// export MoviesContext;
// module.exports = { MoviesContext };

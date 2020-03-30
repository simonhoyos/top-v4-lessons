import React from 'react';
import styled from 'styled-components';
import { MoviesContext } from '../state/MoviesContext';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const Movies = () => {
  const { movies } = React.useContext(MoviesContext);

  return (
    <Container>
      {movies && movies.length > 0 && movies.map(movie => (
        <div key={movie.id}>
          <h1>{movie.title}</h1>
          <p>{movie.overview}</p>
        </div>
      ))}
    </Container>
  )
}

export default Movies;

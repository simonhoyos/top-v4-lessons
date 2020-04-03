import React from 'react';
import axios from 'axios';

export function Home({ history }) {
  const [plates, setPlates] = React.useState([]);

  React.useEffect(() => {
    axios({
      method: 'get',
      baseURL: 'http://localhost:3000',
      url: '/plates',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': localStorage.token,
      }
    })
      .then(({ data }) => setPlates(data))
      .catch(() => {
        localStorage.removeItem('token');
        history.push('/admin/signup');
      });
  }, []);

  return (
    <div className="plates">
      {plates && plates.length > 0 && plates.map(plate => (
        <div className="plate" key={plate.id}>
          <h2>Ingredientes</h2>
          {
            plate.ingredients
            && plate.ingredients.length > 0
            && plate.ingredients.map(ingredient => <p>{ingredient}</p>)
          }
          <h2>Descripción</h2>
          <p>{plate.description}</p>
        </div>
      ))}
    </div>
  );
}

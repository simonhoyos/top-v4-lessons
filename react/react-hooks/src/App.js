import React from 'react';
import axios from 'axios';
import './App.css';

// class App extends React.Component {
//   state = {
//     count: 0
//   };

//   handleClick = () => {
//     this.setState((prevState) => ({ count: prevState.count + 1 }));
//   }

//   render() {
//     const { count } = this.state;
//     return (
      // <div className="App">
      //   <button onClick={this.handleClick}>{count}</button>
      // </div>
//     );
//   }
// }

function App() {
  const [count, setCount] = React.useState(0);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    setLoading(true);
    axios({
      method: 'GET',
      baseURL: 'http://jsonplaceholder.typicode.com',
      url: '/posts'
    })
      .then(({ data }) => setPosts(data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  function handleClick() {
    setCount(count + 1);
  }

  if(loading) return <p>Loading...</p>;
  if(error) return <p>Something went wrong</p>;
  return (
    <div className="App">
      <button onClick={handleClick}>{count}</button>
      {posts && posts.length && posts.map(({ id, title, body}) => (
        <div key={id} className="post">
          <h2>{title}</h2>
          <p>{body}</p>
        </div>
      ))}
    </div>
  );
}

export default App;

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

function reducer(state, action) {
  switch (action.type) {
    case 'setPosts':
      return {
        ...state,
        posts: action.payload
      };
    case 'toggleLoading':
      return {
        ...state,
        loading: !state.loading
      };
    case 'setError':
      return {
        ...state,
        error: action.payload
      };
    default:
      return state
  }
}

// action = { type, payload }

const initialState = {
  loading: false,
  error: null,
  posts: [],
}

function useClock() {
  const [clock, setClock] = React.useState(new Date().toLocaleString());

  setInterval(() => {
    setClock(new Date().toLocaleString());
  }, 1000);

  return clock;
}

function usePosts() {
  // const [loading, setLoading] = React.useState(false);
  // const [error, setError] = React.useState(null);
  // const [posts, setPosts] = React.useState([]);
  const [state, dispatch] = React.useReducer(reducer, initialState);

  React.useEffect(() => {
    // setLoading(true);
    dispatch({ type: 'toggleLoading' })
    axios({
      method: 'GET',
      baseURL: 'http://jsonplaceholder.typicode.com',
      url: '/posts'
    })
      .then(({ data }) => dispatch({ type: 'setPosts', payload: data }))
      // .catch((error) => setError(error))
      .catch((error) => dispatch({ type: 'setError', payload: error }))
      // .finally(() => setLoading(false));
      .finally(() => dispatch({ type: 'toggleLoading' }));

    // window.addEventListener('resize', handleResize);

    // return () => {
    //   axios.cancel();
    //   window.removeEventListener('resize', handleResize);
    // }
  }, []);

  return state;
}

function App() {
  const [count, setCount] = React.useState(0);
  const clock = useClock();
  const { posts, loading, error } = usePosts();

  function handleClick() {
    setCount(count + 1);
  }

  if(loading) return <p>Loading...</p>;
  if(error) return <p>Something went wrong</p>;
  return (
    <div className="App">
      <p>{clock}</p>
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

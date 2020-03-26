import React from 'react';
import axios from 'axios';
import Posts from './components/Posts';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends React.Component {
  state = {
    posts: [],
    loading: false,
    error: null,
  };

  async componentDidMount() {
    try {
      this.setState({ loading: true });
      const { data } = await axios({
        method: 'GET',
        baseURL: 'http://jsonplaceholder.typicode.com',
        url: '/posts'
      })
      this.setState({ posts: data });
    } catch (error) {
      this.setState({ error: 'Algo salio mal'});
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    const { posts, loading, error } = this.state;

    if(loading) return <p>Loading...</p>;
    if(error) return <p>Algo salió mal!</p>;

    return (
      <div className="App">
        <Posts posts={posts} />
      </div>
    );
  }
}

export default App;

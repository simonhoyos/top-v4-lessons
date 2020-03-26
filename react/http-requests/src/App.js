import React from 'react';
import axios from 'axios';
import './App.css';

// Ciclo de vida
// el componente se va a montar
// render()
// el componente se montó
// setState
// el componente se debe actualizar?
// el componente se va a actualizar
// render()
// el componente se actualizó
// el componente se va a desmontar

class App extends React.Component {
  state = {
    images: [],
    loading: false,
    error: null,
  }

  async componentDidMount() {
    try {
      this.setState({ loading: true });
      const { data } = await axios({
        method: 'GET',
        baseURL: 'http://jsonplaceholder.typicode.com/',
        url: '/photos',
        params: {
          _page: 1,
          _limit: 10
        }
      });

      this.setState({
        images: data,
      })
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ loading: false });
    }
    // axios({
    //   method: 'GET',
    //   baseURL: 'http://jsonplaceholder.typicode.com/',
    //   url: '/photos',
    //   params: {
    //     _page: 1,
    //     _limit: 10
    //   }
    // })
    //   .then(({ data }) => this.setState({ images: data }))
    //   .catch(error => console.error(error))

    // window.addEventListener('resize', handleResize);
  }

  // shouldComponentUpdate(nextProps, nextState) {
    // this.props <=> nextProps
    // this.state <=> nextState
    // return this.state.error === nextState.error;
  // }

  // componentWillUnmount() {
  //   axios.cancell();
  //   window.removeEventListener('resize'. handleResize);
  // }
  render() {
    if(this.state.loading) return <p>Loading....</p>;
    if(this.state.error) return <p>Something went wrong!</p>;
    return (
      <div className="App">
        <h1>Images</h1>
        {
          this.state.images &&
          this.state.images.length >= 0 &&
          this.state.images.map(image => (
            <img
              key={image.id}
              src={image.thumbnailUrl}
              alt={image.title}
            />
          ))
        }
        {/* {this.state.images.length > 0 ? <p>true</p> : undefined} */}
        {/* {this.state.images.length > 0 && <p>true</p>} */}
      </div>
    );
  }
}

export default App;

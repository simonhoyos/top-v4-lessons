import React from 'react';
import { connect } from 'react-redux';
import { increaseCount, decreaseCount } from './reducers/countReducer';
import { getPosts } from './reducers/postsReducer';
import './App.css';

function App({
  count,
  posts,
  increaseCount,
  decreaseCount,
  getPosts
}) {
  React.useEffect(() => {
    getPosts()
  }, [getPosts]);

  return (
    <div className="App">
      <h1>{count}</h1>
      <button
        type="button"
        onClick={() => increaseCount(1)}
      >
        Increase
      </button>
      <button
        type="button"
        onClick={decreaseCount}
      >
        Decrease
      </button>
      <div className="posts">
        {posts && posts.length > 0 && posts.map(post => (
          <div className="post" key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// HOC - High Order Component
// HOF - High Order Function

const mapStateToProps = ({ countReducer, postsReducer }) => {
  return {
    count: countReducer.count,
    posts: postsReducer.posts
  }
}

const mapDispatchToProps = {
  increaseCount,
  decreaseCount,
  getPosts,
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

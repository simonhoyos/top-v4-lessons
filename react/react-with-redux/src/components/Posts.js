import React from 'react';
import { connect } from 'react-redux';
import { getPosts } from '../reducers/postsReducer';

function Posts({
  posts,
  getPosts
}) {
  React.useEffect(() => {
    getPosts()
  }, [getPosts]);

  return (
    <div className="posts">
      {posts && posts.length > 0 && posts.map(post => (
        <div className="post" key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

const mapStateToProps = ({ postsReducer }) => {
  return {
    posts: postsReducer.posts
  }
}

const mapDispatchToProps = {
  getPosts,
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);

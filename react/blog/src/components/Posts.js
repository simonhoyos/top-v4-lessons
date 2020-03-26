import React from 'react';
import Post from './Post';

function Posts({ posts }) {
  return (
    <div className="posts">
      {posts && posts.length > 0 && posts.map(post => {
        return <Post key={post.id} post={post} theme="dark" />;
      })}
    </div>
  )
}

export default Posts;

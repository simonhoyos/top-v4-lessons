import React from 'react';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import './Post.css';

const Container = styled.div`
  background-color: ${props => props.theme === 'light' ? '#e3e3e3' : '#333'};
  color: ${({ theme }) => theme === 'light' ? '#333' : '#f5f5f5'};
  width: 800px;
  margin: 0 auto;
`;

function Post({ post, theme }) {
  const styles = {
    container: {
      backgroundColor: theme === 'light' ? '#e3e3e3' : '#333',
      color: theme === 'light' ? '#333' : '#f5f5f5',
      width: 800,
      margin: '0 auto',
    }
  };

  return (
    // <div className={`post post--${theme}`}>
    // <div className="post" style={styles.container}>
    // <Container className="post">
    //   <h2>{post.title}</h2>
    //   <p>{post.body}</p>
    //   <Button
    //     size="lg"
    //     disabled
    //   >
    //     view more
    //   </Button>
    // </Container>
    //   </div>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{post.title}</Card.Title>
        <Card.Text>{post.body}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default Post;

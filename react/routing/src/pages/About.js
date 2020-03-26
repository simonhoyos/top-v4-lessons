import React from 'react';
import { Link } from 'react-router-dom';

class About extends React.Component {
  render() {
    console.dir(this.props)
    return (
      <div>
        <h1>About</h1>
        <Link to="/contact">Contact</Link>
      </div>
    );
  }
}

export default About;

import React from 'react';
import { Link } from 'react-router-dom';

class Contact extends React.Component {
  render() {
    return (
      <div>
        <h1>Contact</h1>
        <Link to="/no-existe">Error</Link>
      </div>
    );
  }
}

export default Contact;

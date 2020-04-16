import React from 'react';
import logo from './logo.svg';
import './App.css';

interface Props {
  name: string
}

const Greeting: React.FC<Props> = ({ name }) => {
  return (
    <h1>Hola {name}</h1>
  );
}

// interface Props {}
// interface State {}

// class Greeting extends React.Component<Props, State> {

// }

function App() {
  return (
    <div className="App">
      <Greeting name="Simon" />
    </div>
  );
}

export default App;

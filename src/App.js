import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter></Counter>
      </div>
    );
  }
}
function AnotherComponent() {
  return(
  <div className="anotherComponent">
    Another Component
  </div> 
  );
}


export default App;

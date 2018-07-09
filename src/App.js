import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome to Burger App</h1>
          <Person name = "gagan" age= "22" >Hobbies : Gym</Person>
          <Person name = "baban" age= "24" />
      </div>
    );
  }
}

export default App;

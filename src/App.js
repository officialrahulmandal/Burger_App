import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            { name: 'Max', age: 28},
            { name: 'Manu', age: 29},
            { name: 'Stephanie', age: 26 }
        ]
    }

  render() {
    return (
      <div className="App">
        <h1>Welcome to Burger App</h1>
          <Person name = {this.state.persons[0].name} age= "22" >Hobbies : Gym</Person>
          <Person name = {this.state.persons[1].name} age= "24" />
      </div>
    );
  }
}

export default App;

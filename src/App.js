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
    switchNameHandler = (newName) => {
        this.setState({
            persons: [
                { name: newName, age: 28},
                { name: 'Manu', age: 39},
                { name: 'Stephanie', age: 30 }
            ]
        })
    }

  render() {
    return (
      <div className="App">
        <h1>Welcome to Burger App</h1>
          <button onClick={() => this.switchNameHandler('Remo')}>Change</button>
          <Person name = {this.state.persons[0].name} age= "22" click={this.switchNameHandler.bind(this, 'Max')} >Hobbies : Gym</Person>
          <Person name = {this.state.persons[1].name} age= "24" />
      </div>
    );
  }
}

export default App;

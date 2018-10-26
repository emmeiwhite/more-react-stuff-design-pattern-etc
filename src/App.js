import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    console.log(props);
  }
  render() {
    const {message} = this.props; //Interpolation
    return (
      <div className="App">
          <h1>{message}</h1>
      </div>
    );
  }
}

export default App;

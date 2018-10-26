import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
          {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children:PropTypes.element
}

App.defaultProps = {
  children:900
}

export default App;

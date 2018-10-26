import React, { Component } from 'react';
import PropTypes from 'prop-types';

// import $ from 'jquery';
import './App.css';


class Fetch extends Component{
  constructor(props){
    super(props);

    this.state = {
      content:[]
    }
  }

  componentDidMount(){
      // $.ajax({
      //   url:this.props.url,
      //   success:(data)=>{
      //     this.setState({
      //       content:data
      //     })
      //   },
      //   error:(error)=>{
      //     console.log("ERROR :",error);
      //   }
      // })
      const promise = fetch('https://jsonplaceholder.typicode.com/posts');

        promise.then(function(res){
            // console.log(res); This here is again a promise, so we have to return it and use another then to get the data
            return res.json(); // We are returning a Promise again which will now be resolved for the data
        }).then(data => {
            console.log(data);
            this.setState((prevState)=>{
              return {content:data}
            }
              
            )
        })
        .catch(err=>console.log(err));
  }

  render(){
    return(
      <div>
       {this.state.content}
      </div>
    )
  }
}


class App extends Component {
  constructor(props){
    super(props);

    console.log(props);
  }
  render() {
    const {message} = this.props; //Interpolation
    return (
      <div className="App">
        <div> 
          <h1>{message}</h1>
          {this.props.children}
          <h2>Data from the fetch API is</h2>
        </div>
          
        <div>
          <Fetch url="https://jsonplaceholder.typicode.com/posts"/>
        </div>
      
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

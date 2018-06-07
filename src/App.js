import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      bookCategories:[],
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Gutenberg </h1>
        <h1>Project</h1>
      </div>
    );
  }

  renderBookCategories(){

  }
}

export default App;

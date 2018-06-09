import React, { Component } from 'react';
import { BrowserRouter, Switch,Route } from "react-router-dom";
import Home from './home.js';
import Books from './booksUnderCategory';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/books/:bookCategory" exact component={Books} />
        </Switch>  
      </BrowserRouter>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Callback from './Callback';
import Nav from './Nav';
import './App.css';
import {withRouter, Switch, Route } from 'react-router-dom';
class App extends Component {
  render() {

    return (
      <div className="App">

          <Route path="/" component={Nav} />
          <Route path="/callback" component={Callback} />
      </div>
    );
  }
}

export default App;

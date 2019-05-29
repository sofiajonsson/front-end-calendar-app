import React, { Component } from "react";
import {BrowserRouter as Router, Route, Link, NavLink} from 'react-router-dom'
import { withRouter } from "react-router";

import MainContainer from './containers/MainContainer';
import Calendar from './containers/Calendar';
import User from './containers/User';
import Homepage from './containers/Homepage'


import EventForm from './components/EventForm';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'

class App extends Component {
  constructor(props){
    super(props)
    this.state={};
  }

  render() {
    return (
      <div className="App">
      <header className="App-header">
        <h1>Welcome to Your Personal Calendar!</h1>
        <Router>

          <Route exact path="/" component={Homepage} />
          <Route path={`/Calendar`} component={Calendar} />

        </Router>
      </header>
      </div>
    );
  }
}
export default App;

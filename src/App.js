import React, { Component } from "react";
import {BrowserRouter as Router, Route, Link, NavLink} from 'react-router-dom'
import { withRouter } from "react-router";

import Calendar from './containers/Calendar';
import Homepage from './containers/Homepage'

import EventForm from './components/EventForm';

class App extends Component {
  constructor(props){
    super(props)
    this.state={};
  }

  render() {
    return (
      <div className="App">
      <header className="App-header">

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

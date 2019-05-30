import React, { Component } from "react";
import {BrowserRouter as Router, Route, Link, NavLink} from 'react-router-dom'
import { withRouter } from "react-router";

import Calendar from './containers/Calendar';
import Homepage from './containers/Homepage'

import EventForm from './components/EventForm';

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      thisComp: '',
      current_user: {},
      isLoggedIn: false,
    };
  }

    // ** refer to bottom if not working
  displayThisPage = () => {
    switch(this.state.thisComp) {
      case "calendar":
        return <Calendar changeDisplay={this.changeDisplay}/>;
      default:
        return <Homepage changeDisplay={this.changeDisplay} setCurrentUser={this.setCurrentUser}/>;
    }
  }

  // ** refer to bottom if not working
  changeDisplay = (page) => {
    this.setState({thisComp: page})
  }

  // ** refer to bottom if not working
  setCurrentUser = (user) => {
    console.log("user", user);
    debugger
    this.setState({ current_user: user, isLoggedIn: true, thisComp: "calendar"})
  }

  render() {
    return (
      <div className="App">
      <header className="App-header">
      {this.displayThisPage()}

      </header>
      </div>
    );
  }
}
export default App;

// place between <header></header> if conditional rendering of state doesnt work
// <Router>
//   <Route exact path="/" component={Homepage} />
//   <Route path={`/Calendar`} component={Calendar} />
//
// </Router>

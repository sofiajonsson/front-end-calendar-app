import React, { Component } from "react";
import Calendar from './containers/Calendar';
import Homepage from './containers/Homepage'


class App extends Component {
  constructor(props){
    super(props)

    let current_user = this.getCurrentUser()
    let isLoggedIn = !!(current_user !== null && current_user.user_id)
    let thisComp = ''
    if (isLoggedIn) {
      thisComp = 'calendar'
    }

    this.state={
      thisComp,
      current_user,
      isLoggedIn
    };
  }

    // ** refer to bottom if not working
  displayThisPage = () => {
    switch(this.state.thisComp) {
      case "calendar":
        return <Calendar changeDisplay={this.changeDisplay} currentUser={this.state.current_user}/>;
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
    this.setState({ current_user: user, isLoggedIn: true, thisComp: "calendar"})
  }

  getCurrentUser = () => {
    if (localStorage.jwt === undefined) return null
    let payload = localStorage.jwt.split('.')[1]
    let userInfo = atob(payload)
    let user = JSON.parse(userInfo)
    return user
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

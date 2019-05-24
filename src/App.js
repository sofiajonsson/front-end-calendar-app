import React, { Component } from "react";
import logo from './logo.svg';
import Calendar from './containers/Calendar';
import Moment from 'react-moment';


class App extends Component {

  render() {
    return (
      <div className="App">
        <Calendar />
      </div>
    );
  }
}
export default App;

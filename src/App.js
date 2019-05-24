import React, { Component } from "react";
import Calendar from './containers/Calendar';
import User from './containers/User';


class App extends Component {
  constructor(){
    super()
      this.state={
        events: []

    }
  }

  newEventForm = (event) => {
      event.preventDefault();

      const newEvent= {
        title: event.target.elements.title.value,
        author: event.target.elements.description.value,
        img: event.target.elements.date.value
      }
      this.setState({
        events: [newEvent, ...this.state.events]
      })
      // console.log(this.state.book);
    }

  render() {
    return (
      <div>
        <div className="App">
          <header>
            <div id="logo">
              <span className="icon">date_range</span>
              <span>
                Mod 4 <b>calendar</b>
              </span>
            </div>
          </header>
          <main>
            <Calendar />
            <User />
          </main>
        </div>
        <div className="User">
          <h3>User Form</h3>
            <User />
        </div>
      </div>


    );
  }
}
export default App;

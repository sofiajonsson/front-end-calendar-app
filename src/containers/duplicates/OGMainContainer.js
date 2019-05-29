import React, { Component } from "react";

import Calendar from './Calendar';
import User from './User';
import Modal from 'react-bootstrap/Modal';

import EventForm from '../components/EventForm';
import Button from 'react-bootstrap/Button'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'

//make a git ignore so api key is hidden from internet
// dont push to origin master
//check out container components lab
//make a const to base url and then have the API_KEY at
//the bottom
//try just from front end but if run into cors issues go through the backend
//
// const API_KEY = 'b685bba66a7fd7328edc28a29172ef1c07341a9e'

class MainContainer extends Component {
  constructor(){
    super()
      this.state={
        events: [],
        scheduled: [],
        modalShow: false
    }
  }

  render() {
     let modalClose = () => this.setState({ modalShow: false })
    return (
      <div>
        <div className="MainContainer">
          <header>
            <div id="logo">
              <span className="icon">date_range</span>
              <span>
                Mod 4 <b>calendar</b>
              </span>
            </div>
          </header>
          <div className="Event">
          <ButtonToolbar>
           <Button
            className="button"
             variant="primary"
             onClick={() => this.setState({ modalShow: true })}
           >
             New Event
           </Button>

           <EventForm
             show={this.state.modalShow}
             onHide={modalClose}
           />
          </ButtonToolbar>
              <User />
          </div>
          <main>
            <Calendar />
          </main>
        </div>

      </div>


    );
  }
}
export default MainContainer;

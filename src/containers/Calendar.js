import React from "react";
import dateFns from "date-fns";
import EventForm from "../components/EventForm"
import Event from '../components/Event';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'

class Calendar extends React.Component {
  constructor(props){
    super(props)
    console.log(props);
    this.state = {
      currentMonth: new Date(),
      selectedDate: new Date(),
      events: []
    };
    this.getEvents()
  }
  renderHeader() {
    const dateFormat = "MMMM YYYY";

    return (
      <div className="header row flex-middle">
        <div className="col col-start">
          <div className="icon" onClick={this.prevMonth}>
            chevron_left
          </div>
        </div>
        <div className="col col-center">
          <span>{dateFns.format(this.state.currentMonth, dateFormat)}</span>
        </div>
        <div className="col col-end" onClick={this.nextMonth}>
          <div className="icon">chevron_right</div>
        </div>
      </div>
    );
  }

  renderDays() {
    const dateFormat = "dddd";
    const days = [];

    let startDate = dateFns.startOfWeek(this.state.currentMonth);

    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="col col-center" key={i}>
          {dateFns.format(dateFns.addDays(startDate, i), dateFormat)}
        </div>
      );
    }

    return <div className="days row">{days}</div>;
  }

  renderCells() {
    const { currentMonth, selectedDate } = this.state;
    const monthStart = dateFns.startOfMonth(currentMonth);
    const monthEnd = dateFns.endOfMonth(monthStart);
    const startDate = dateFns.startOfWeek(monthStart);
    const endDate = dateFns.endOfWeek(monthEnd);

    const dateFormat = "D";
    const rows = [];

    let days = [];
    let day = startDate;
    let formattedDate = "";

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = dateFns.format(day, dateFormat);
        const duplicateDay = day;
        // console.log(formattedDate)
        days.push(
          <div
            className={`col cell ${
              !dateFns.isSameMonth(day, monthStart)
                ? "disabled"
                : dateFns.isSameDay(day, selectedDate) ? "selected" : ""
            }`}
            key={day}
            onClick={() => this.onDateClick(dateFns.parse(duplicateDay))}
            id={`date ${formattedDate}`}
          >


            <span className="number">{formattedDate}</span>
            <span className="bg">{formattedDate}</span>

            {this.state.events && this.state.events.filter(event => {
              // console.log(new Date(Date.parse(event.date)).getDate() == formattedDate)
              return new Date(Date.parse(event.date)).getDate() == formattedDate
            }).map(event => this.showEvent(event))}
          </div>

        );
        day = dateFns.addDays(day, 1);
      }

      rows.push(
        <div className="row" key={day}>
          {days}
        </div>
      );
      days = [];
    }
    return <div className="body">{rows}</div>;
  }

  onDateClick = day => {
    this.setState({
      selectedDate: day,
       modalShow: true
    });

  };

  nextMonth = () => {
    this.setState({
      currentMonth: dateFns.addMonths(this.state.currentMonth, 1)
    });
  };

  prevMonth = () => {
    this.setState({
      currentMonth: dateFns.subMonths(this.state.currentMonth, 1)
    });
  };
  onSubmit = (ev) => {
    ev.preventDefault()

    let title = ev.target.title.value
    let description = ev.target.description.value
    let date = this.state.selectedDate
    // let user = this.props.currentUser
    //   let user_id = user.user.id
      // console.log(user_id);
    // debugger
// console.log(props);

    fetch('http://localhost:3000/events', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: title,
        description: description,
        date: date,
        // user_id: user_id
      })
    })
    .then(res => res.json())
    // .then(json => console.log(json))
    .then(json => this.setState({events: [...this.state.events, json]}))
      ev.target.title.value = ""
      ev.target.description.value=""
      this.state.selectedDate=""

  }

  removeEvent =(id)=> {
    fetch('http://localhost:3000/events' + '/' + id, {
      method: 'DELETE'
    })
    .then(res => res.json())
  }


showEvent = (event) => {
 return  <Event
            event={event}
            user={this.props.currentUser.user_id}
          />
}

getEvents =() => {
  fetch('http://localhost:3000/events', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('jwt')
    },
  })
  .then(res => res.json())
  .then(json => {
    console.log('events', json)
    // this.setState({
    //   events: json
    // })
  })
}

  render() {
     let modalClose = () => this.setState({ modalShow: false })
    return (
      <div>
        <div className="MainContainer">
          <header>
            <div id="logo">
              <span className="icon">public</span>
              <span>
                Monthly <b>Lineup</b>
                <span className="icon">public</span>
              </span>
            </div>
          </header>
          <div className="Event">
          <ButtonToolbar>
          <h4 className="courtesy">Please Click on a Date this Month to create an Event</h4>

           <EventForm
             show={this.state.modalShow}
             onHide={modalClose}
             date={this.state.selectedDate}
             onSubmit={this.onSubmit}
           />
          </ButtonToolbar>
          </div>
        </div>
        <div className="calendar">
          {this.renderHeader()}
          {this.renderDays()}
          {this.renderCells()}
          </div>
      </div>
    );
  }
}

export default Calendar;

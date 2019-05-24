import React from "react";

class EventForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { };
}

	handleSubmit = (event) => {
	  event.preventDefault();
	  this.props.newEventForm(event)
	}

  render() {
    return (
      <div>
       <form onSubmit={this.handleSubmit}>
          <label>
              Title:
            <input type="text" name="title" onChange={null} />
          </label>

          <label>
            Description:
            <input type="text" name="description" onChange={null} />
          </label>
          <label>
            Date:
            <input type="text"  name="date" onChange={null} />
          </label>

            <input type="submit" value="Submit"/>
        </form>
      </div>
    )
  }
}

export default Form;

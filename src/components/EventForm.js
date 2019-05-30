import React from "react";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

class EventForm extends React.Component {
  constructor(props){
    super(props)
    this.state={
    }
  }

render() {
   return (
     <Modal
       {...this.props}
       size="lg"
       aria-labelledby="contained-modal-title-vcenter"
       centered
     >

       <Modal.Body>
         <h4>Create Event</h4>
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
                <input type="text"  defaultValue={this.props.date} name="date" onChange={null} />
              </label>
                <input type="submit" value="Submit"/>
            </form>
      </div>
       </Modal.Body>
       <Modal.Footer>
         <Button onClick={this.props.onHide}>Close</Button>
       </Modal.Footer>
     </Modal>
   );
 }
}
export default EventForm

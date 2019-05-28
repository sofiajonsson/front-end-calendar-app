import React from "react";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
class EventForm extends React.Component {


    render() {
   return (
     <Modal
       {...this.props}
       size="lg"
       aria-labelledby="contained-modal-title-vcenter"
       centered
     >

       <Modal.Body>
         <h4>Centered Modal</h4>
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
       </Modal.Body>
       <Modal.Footer>
         <Button onClick={this.props.onHide}>Close</Button>
       </Modal.Footer>
     </Modal>
   );
 }
}
export default EventForm

import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import DeleteIcon from "@material-ui/icons/Delete";
import {connect} from 'react-redux';
import {deleteStream} from '../../actions';

const StreamDelete = (props) => {

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const deleteUserStream = () =>{
    props.deleteStream(props.stream.id);
    setModal(!modal);
  }

  return (
    <div>
      <div onClick={toggle}><DeleteIcon /></div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Delete Stream</ModalHeader>
        <ModalBody>
            <p>Are you sure you want to delete this Stream?</p>
            <span>{props.stream.title}</span>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={deleteUserStream}>Confirm</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}


export default connect(null,{
    deleteStream
})(StreamDelete);
import { useState } from "react";
import { Modal, Button,Row,Col, Form } from "react-bootstrap";
const ModalToping = (props) => {
  const { handleClose, show } = props;

 

 
  return (
  <Modal className="my-modal" show={show} onHide={handleClose} centered>
      <Modal.Body>
  
       <p>New Topping successfully Added</p>
    
   
      </Modal.Body>
    </Modal>
  );
};

export default ModalToping;

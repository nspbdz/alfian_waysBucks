import { useState } from "react";
import { Modal, Button,Row,Col, Form } from "react-bootstrap";
const ModalProduct = (props) => {
  const { handleClose, show } = props;

 

 
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Body>
  
       <p>Thank you for ordering in us, please wait to verify you order</p>
    
   
      </Modal.Body>
    </Modal>
  );
};

export default ModalProduct;

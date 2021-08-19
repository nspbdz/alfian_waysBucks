import { useState } from "react";
import { Modal, Button,Row,Col, Form } from "react-bootstrap";
const ModalSignin = (props) => {
  const [data, setData] = useState({
  
    email: "",
    password: "",
  });
  // const { handleClose, handleLogin, show } = props;
  const { handleClose, handleLogin, show } = props;

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin({
      type: 'LOGIN',
      payload: {
        id: 1,
        // name: "user1",
        email: data.email,
        password: data.password
      }
    })

    setData({
      email: "",
      password: ""
    })
  };
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Body>
  
        <Form onSubmit={handleSubmit} style={{paddingLeft:"33px",paddingRight:"33px",}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <h3 style={{color:"#BD0707",paddingTop:"20px",paddingBottom:"29px"}} > Login</h3>
        <Form.Control 
          type="email"
          name="email"
          value={data.email}
          onChange={handleChange}
          placeholder="email"
        />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control
          type="password"
          name="password"
          value={data.password}
          onChange={handleChange}
          placeholder="Password"
        />
      </Form.Group>
      <Button style={{backgroundColor:"#BD0707",width:"400px",height:"50px"}} type="submit">
        Login
      </Button>
      <p>Don't have an account ? Klik Here</p>
    </Form>
   
    
   
      </Modal.Body>
    </Modal>
  );
};

export default ModalSignin;

import { useState } from "react";
import { Modal, Button, Row, Col, Form } from "react-bootstrap";
import userData from "../data/User"

const ModalSignin = (props) => {

  const [data, setData] = useState({
    email: "",
    password: "",
    fullname: "",
  });
  const { handleClose, handleLogin, show } = props;

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  // console.log(data)
  const handleSubmit = (e) => {
    e.preventDefault();

  };
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Body>

        <Form onSubmit={handleSubmit} style={{ paddingLeft: "33px", paddingRight: "33px", }}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <h3 style={{ color: "#BD0707", paddingTop: "20px", paddingBottom: "29px" }} > Register</h3>
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
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="text"
              name="fullname"
              value={data.fullname}
              onChange={handleChange}
              placeholder="Full Name"
            />

          </Form.Group>
          <Button style={{ backgroundColor: "#BD0707", width: "400px", height: "50px" }} type="submit">
            Register
      </Button>
          <p>Already have an account ? Klik Here</p>
        </Form>



      </Modal.Body>
    </Modal>

  );
};

export default ModalSignin;

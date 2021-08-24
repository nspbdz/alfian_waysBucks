import { Card, Jumbotron, Row, Col, Button, Form } from "react-bootstrap";
import { useState, useContext, useEffect } from "react";
import { UserContext } from "../contexts/userContext";
import ProfileList from "../components/ProfileList";
import OrderList from "../components/OrderList";
import dataTransaction from "../data/transaction.json"
import "../styles/customStyle.css";

function Profile() {
  const { state, dispatch } = useContext(UserContext);
  console.log(state.user)
  console.log(dataTransaction)
  return (
    <div>
      <>
        <div>
          <Row >
            <Col sm="1"></Col>

            <Col >
              <>
                <ProfileList data={dataTransaction} />
                <div style={{ marginTop: "10px" }}>

                  <Form
                  //   onSubmit={handleSubmit} 
                  >
                    <Form.Group>
                      <Form.Control
                        name="imageFile"
                        type="file"
                        //   onChange={handleChange}
                        required
                      />
                    </Form.Group>

                    <Button id="updateProfile"  >
                      update profile
        </Button>


                  </Form>
                </div>
              </>

            </Col>
            <Col xs={1}></Col>
            <Col xs={5}  >
              <>
                <h4 id="myTransaction" >My Transaction</h4>

                <OrderList data={dataTransaction} />
              </>
            </Col>

            <Col sm="1"></Col>

          </Row>
        </div>

      </>

    </div>
  )
}

export default Profile

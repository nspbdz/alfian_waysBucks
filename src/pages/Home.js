import { Row, Col,Container } from "react-bootstrap";

import CardList from "../components/CardList";
import data from "../data/fakeData";
import Jumbotron from "../../src/assets/images/Jumbotron.svg";
import { useState, useContext, useEffect } from "react";
import { UserContext } from "../contexts/userContext";

const Home = () => {
  const {state, dispatch} = useContext(UserContext);
console.log(state)
console.log(state.isLogin)

  return (
    <Container style={{display:'flex'}} >
        {state.isLogin==true && state.user.id==2 &&(
    <Row className="justify-content-md-center">
      <Col md="auto" >
        <img src={Jumbotron} />
        <p>Let’s Order</p>
        <CardList data={data}/>
      </Col>
  
    </Row>
      )}
        {/* {state.isLogin==true && state.user.id==1 &&(


        )} */}


      </Container>

  );
};

export default Home;

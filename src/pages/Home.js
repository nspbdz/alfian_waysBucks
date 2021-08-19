import { Row, Col,Container } from "react-bootstrap";

import CardList from "../components/CardList";
import data from "../data/fakeData";
import Jumbotron from "../../src/assets/images/Jumbotron.svg";
import { useState, useContext, useEffect } from "react";
import { UserContext } from "../contexts/userContext";
import TransactionList from "../components/TransactionList"
import TransactionData from "../data/Transaction"

const Home = () => {
  const {state, dispatch} = useContext(UserContext);
console.log(state)
console.log(state.isLogin)
console.log(TransactionData)
  return (
    <Container style={{display:'flex'}} >
       {state.isLogin==true && state.user.id==1 &&(

        <Row className="justify-content-md-center">
        <Col md="auto" >
          <img src={Jumbotron} />
          <p>Let’s Order</p>
          <TransactionList data={TransactionData}/>
        </Col>

        </Row>

        )} 
        {state.isLogin==true && state.user.id==2 &&(
    <Row className="justify-content-md-center">
      <Col md="auto" >
        <p>Let’s Order</p>
        <CardList data={data}/>
      </Col>
  
    </Row>
      )}
        
    </Container>

  )
} 
export default Home;

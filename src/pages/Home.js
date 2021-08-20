import { Row, Col,Container } from "react-bootstrap";

import CardList from "../components/CardList";
import data from "../data/fakeData";
import Jumbotron from "../../src/assets/images/Jumbotron.svg";
import { useState, useContext, useEffect } from "react";
import { UserContext } from "../contexts/userContext";
import TransactionList from "../components/TransactionList"
import TransactionData from "../data/Transaction"
import  "../styles/customStyle.css"
// import dataFake from "../data/topinga.json"; 

const Home = () => {
  const WAIT_TIME = 3000; // waktu re render

  const {state, dispatch} = useContext(UserContext);
  const [dataState,setDataState]= useState([])
// console.log(state)
// console.log(state.isLogin)
// console.log(TransactionData)
// console.log(data)
// const fakeData=dataFake.user.products
// let JsonString=JSON.stringify(fakeData);
// localStorage.setItem("data", JsonString)
// const getLocalStorage=localStorage.getItem("data")
// const ParseJson=JSON.parse(getLocalStorage)  
// console.log(getLocalStorage)
// console.log(ParseJson)
// console.log(dataFake.user.products)

const getLocalStorage=localStorage.getItem("data")
const ParseJson=JSON.parse(getLocalStorage)  
  const parseData = () => {
    setDataState(ParseJson)
  }
  console.log(dataState)

// useEffect(() => { 
//   parseData()
//     // const ParseJson=JSON.parse(getLocalStorage)  

// }, []); 

useEffect(() => { //re render every WAIT_TIME
  const id = setInterval(() => {
  parseData()
  }, WAIT_TIME);
  return () => clearInterval(id);
}, []); 
  return (
    <>
      <Container  >

        <h3 className="title">Income Transaction</h3>
        {state.isLogin==true && state.user.id==1 &&(
          <>
        <Row className="justify-content-md-center" >
          <>

          <Col sm="1"></Col>
          <Col sm="10"  >
            <TransactionList  data={TransactionData}/>

          </Col>
          <Col sm="1"></Col>
          </>
        </Row>
        </>

         )}   
      </Container>
    
      <Container style={{display:'flex'}} >
        <Row >
           {state.isLogin==true && state.user.id==2 &&(
            // <Col md="auto" >
            <Col xs="2" >
              <img src={Jumbotron} />
              <p>Let’s Order</p>
              <CardList data={dataState}/>
              {/* <CardList data={data}/> */}
              
            </Col>
          )}
        </Row>
      </Container>
      <Container style={{display:'flex'}} >

      <Row className="justify-content-md-center" >
          {!state.isLogin && ( 
            <Col md="auto" >
              <img src={Jumbotron} />
              <p>Let’s Order</p>
              <CardList data={dataState}/>

              {/* <CardList data={data}/> */}
           </Col>
        )} 
      </Row>
      </Container>
    </>
        

  )
} 
export default Home;

import { Row, Col,Container } from "react-bootstrap";

import CardList from "../components/CardList";
import data from "../data/fakeData";
import Jumbotron from "../../src/assets/images/Jumbotron.svg";

const Home = () => {

  return (
    <Container style={{display:'flex'}} >
    <Row className="justify-content-md-center">
    {/* <Col md="2" >
     </Col> */}
      <Col md="auto" >
      <img src={Jumbotron} />
      <p>Let’s Order</p>
      <CardList data={data}/>
     
      </Col>
      {/* <Col md="2" >
     </Col> */}
    </Row>
  
  </Container>
//     <>
//       <Row >

//         <Col  xs={4}  style={{marginRight:"50px"}}>
        
//         </Col>
//         <Col >
//         <img src={Jumbotron} />
//          <CardList data={data}/>

//         </Col>
//       </Row >

// </>

    // <div>
    //   <Row> 
    //     <Col xs={4} md={4}>
    //       <Sidebar />
    //     </Col>
    //     <Col xs={8} md={8}>
    //       <CardList data={data}/>
    //     </Col>
    //   </Row>
    // </div>
  );
};

export default Home;

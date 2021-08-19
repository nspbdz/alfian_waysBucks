import { Row, Col } from "react-bootstrap";

import Sidebar from "../components/Sidebar";
import CardList from "../components/CardList";
import data from "../data/fakeData";
const Home = () => {
  
  return (
    
    <div>
      <Row> 
        <Col xs={4} md={4}>
          <Sidebar />
        </Col>
        <Col xs={8} md={8}>
          <CardList data={data}/>
        </Col>
      </Row>
    </div>
  );
};

export default Home;

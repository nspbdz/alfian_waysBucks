import { useState } from "react";
// import { Form, Button } from "react-bootstrap";
import { Row,Button, Col } from "react-bootstrap";
import AddTopingForm from "../components/form/AddTopingForm";
// import ProductDetailItem from "../components/ProductDetailItem"
import data from "../data/data.json"; 

function AddToping(props) {

  const [showSignin, setshowSignin] = useState(false);

  return (
    <div>
    <Row>
    <Col>
    {/* <ProductDetailItem /> */}
    <Row>
                    
      <Col >
        <>
      <AddTopingForm />
      <br></br>
      <br></br>

      <Row>
        <Col sm="5"></Col>
        <Col sm="2">
        </Col>
        
        <Col sm="5">
      
        </Col>
      </Row>
      {/* </Button> */}
      </>
        </Col>

        </Row> 

    
    </Col>
   
  </Row>
</div>
  );
}

export default AddToping;

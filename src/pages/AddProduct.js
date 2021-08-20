import { useState } from "react";
// import { Form, Button } from "react-bootstrap";
import { Row,Button, Col } from "react-bootstrap";
import AddProductForm from "../components/form/AddProductForm";
// import ProductDetailItem from "../components/ProductDetailItem"
import data from "../data/product.json"; 

function AddProduct(props) {

  const [showSignin, setshowSignin] = useState(false);

  return (
    <div>
    <Row>
    <Col>
    {/* <ProductDetailItem /> */}
    <Row>
                    
      <Col >
        <>
      <AddProductForm />
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

export default AddProduct;

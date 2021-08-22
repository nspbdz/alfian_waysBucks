import {useContext,useState,useEffect} from 'react';
import { CartContext } from '../contexts/cartContext';
import { UserContext } from '../contexts/userContext';
import {Button, Card, Col, Row,Form} from 'react-bootstrap';
import { BsTrash } from "react-icons/bs";
import fakeCartToping from "../data/topingCart.json"
import fakeCartProduct from "../data/productCart.json"
import "../styles/customStyle.css";

function Cart() {
  const [dataState,setDataState]= useState([])
  const {state, dispatch} = useContext(CartContext);

  const fakeProduct=fakeCartProduct.user.products
  console.log(fakeProduct)
  const parseData = () => {
    setDataState(fakeProduct)
  }
  console.log(dataState)

  

  const [data, setData] = useState({
    name: "",
    email: "",
    Phone: "",
    status: "",
    postCode  : "",
    price: "",
    orderQuantity: "",
    address: "",
    imageFile: null,
    productId: "",
    user_id: "",
  });
  
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]:
        e.target.type === "file" ? e.target.files[0] : e.target.value,
    });
  };

  const handleClick = (item, type) => {
    console.log(item)
    dispatch({
      type,
      data: item,
    }) 
  
  };
  {fakeProduct.map((item) => (
    console.log(item.toping.length)
  ))}

 
  return (
    <div>
      {/* {state.carts.length < 1 && (<p className="h1">Your cart is empty</p>)}
      {state.carts.length > 0 && ( */}
      {fakeProduct.length < 1 && (<p className="h1">Your cart is empty</p>)}
      {fakeProduct.length > 0 && (
        <Row >
          <Col sm="1">
          </Col>
        <Col sm="4">
         <hr></hr>

          <div style={{width:"524px",marginBottom:"5px",marginTop:"10px"}}>
        {fakeProduct.map((item) => (
            <Row >
             <Col md="2">    
                 <img
                     variant="top"
                     src={item.image}
                     height={80}
                     width={80}
                     style={{ objectFit: "cover" }}
                   />
            </Col>
            <Col md="4" style={{marginTop:"10px"}}>    
                   <p> {item.name}</p>
                  {item.toping.map((items) => (
                   <p> {items.name}</p>
                  ))}
            </Col>
            <Col md="3">       </Col>
                 <Col md="2" style={{marginTop:"10px"}}>
                 {/* <div   id={"demo"+item.id} value={item.qty*item.price}  > */}
                 <div   id={"demo"+item.id} value={item.price}  >
                {/* <p>  Rp.    {item.qty*item.price} </p> */}
                <p>  Rp.    {item.price} </p>
                <p onClick={() => handleClick(item, "REMOVE_CART")} style={{fontSize:"16px"}}><BsTrash /> </p>
                 </div>
            </Col>
          </Row>
          ))} 

          </div>
         <hr></hr>
          <Row>
            <Col sm="6">
         <hr></hr>
          <Row>
            <Col sm="4">
            <p>Sub Total</p>
            <p>Qty</p>

            </Col>
            <Col sm="2">

            </Col>
            <Col sm="4">
              
              </Col>
          </Row>
         <hr></hr>
         <p>Sub Total</p>
          
            </Col>
            <Col sm="6"></Col>
          </Row>
        </Col>
        <Col sm="1">
          </Col>
          <Col sm="4" style={{paddingLeft:"20px"}}>
            
<h4 style={{marginTop:"77px"}}>Shipping</h4>
 <Form 
//  onSubmit={handleSubmit}
 >
<Form.Group>
  <Form.Control
    name="name"
    type="text"
    value={data.name}
    required
    placeholder="Name"
    onChange={handleChange}
  />
</Form.Group>
<Form.Group>
  <Form.Control
    name="email"
    type="text"
    value={data.email}
    required
    placeholder="email "
    onChange={handleChange}
  />
</Form.Group>
<Form.Group>
  <Form.Control
    name="phone"
    type="number"
    value={data.phone}
    required
    placeholder=" Phone"
    onChange={handleChange}
  />
</Form.Group>
<Form.Group>
  <Form.Control
    name="postCode"
    type="number"
    value={data.postCode}
    required
    placeholder="postCode"
    onChange={handleChange}
  />
</Form.Group>
<Form.Group>
  <Form.Control
    name="address"
    type="text"
    placeholder="address"
    required
    value={data.address}
    onChange={handleChange}
  />
</Form.Group>
<Form.Group>
  <Form.Control
    name="imageFile"
    type="file"
    onChange={handleChange}
    required
  />
</Form.Group>
<Button style={{backgroundColor:"#613D2B",width:"300px"}} type="submit">pay</Button>

</Form>


 </Col>

        {/* <Col sm="4">
        <p>ansdkasd</p>
      </Col> */}
  </Row>
                   )}
        {/* <Row>
          <Col sm="4"></Col>
          <Col sm="4">
        <Button style={{backgroundColor:"#613D2B",width:"500px"}} type="submit">pay</Button>

          </Col>
          <Col sm="4"></Col>
        </Row> */}

    </div>
  )

}

export default Cart

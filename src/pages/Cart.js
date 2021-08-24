import { useContext, useState, useEffect } from 'react';
import { CartContext } from '../contexts/cartContext';
import { UserContext } from '../contexts/userContext';
import { Button, Card, Col, Row, Form } from 'react-bootstrap';
import { BsTrash } from "react-icons/bs";
// import fakeCartToping from "../data/topingCart.json"
import fakeCartProduct from "../data/productCart.json"
import "../styles/cartStyle.css";
import imgFilebtn from "../assets/images/imgFilebtn.svg"
import ModalTransaction from "../components/ModalTransaction"

function Cart() {

  const getLocalStorage = localStorage.getItem("dataCart")
  console.log(getLocalStorage)
  const ParseJson = JSON.parse(getLocalStorage)
  console.log(ParseJson.cart)
  const dataCarts = ParseJson.cart

  const [show, setshow] = useState(false);
  const [dataState, setDataState] = useState([])
  const { state, dispatch } = useContext(CartContext);
  const [dataUpdate, setDataUpdate] = useState([])
  const [dataTransaction, setDataTransaction] = useState({
    transaction: dataCarts
  })
  const fakeProduct = fakeCartProduct.user.products
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
    postCode: "",
    price: "",
    orderQuantity: "",
    address: "",
    imageFile: null,
    productId: "",
    user_id: "",
  });

  const handleChange = (e) => {

    setDataUpdate({
      ...dataUpdate,
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

  {
    dataCarts.map((item) => (
      console.log(item.qty)
    ))
  }

  const handleOnSubmit = (e) => {

    setDataTransaction((prevDataProduct => ({
      ...prevDataProduct,
      "role": "user",
      "name": "user",
      "status": "On The Way",
      "email": "user@gmail.com",
      "address": "jakarta",
      "postCode": 123321,
      "income": "25.000",
      "subTotal": 74000,
      "image": "http://thispix.com/wp-content/uploads/2015/06/portrait-profile-027.jpg",
      transaction: [...prevDataProduct.transaction, {
        // item,
        qty: "qty",
        total: "a",
        toping: [{
          // TopingName
          name: "asd"

        }]
      }]
    })))
    setshow(true)


  }
  const JsonString = JSON.stringify(dataTransaction);
  localStorage.setItem("fakeTransaction", JsonString)
  console.log(dataTransaction)
  return (
    <div>
      {/* {state.carts.length < 1 && (<p className="h1">Your cart is empty</p>)}
      {state.carts.length > 0 && ( */}
      {dataCarts.length < 1 && (<p className="h1">Your cart is empty</p>)}
      {dataCarts.length > 0 && (
        <Row id="cartList">
          <Col sm="1">
          </Col>
          <Col sm="4" >
            <h4 id="myCart" > My Cart</h4>
            <p id="reviewCart" >Review Your Order</p>
            <hr></hr>

            <div style={{ width: "524px", marginBottom: "5px", marginTop: "10px" }}>
              {dataCarts.map((item) => (
                <Row >
                  <Col md="2">
                    <img
                      variant="top"
                      src={item.item.image}
                      height={80}
                      width={80}
                      style={{ objectFit: "cover" }}
                    />
                  </Col>
                  <Col md="5" style={{ marginTop: "10px" }}>
                    <p className="productName"> {item.item.name}</p>
                    <br></br>
                    {/* <p id="productName"> product Qty: {item.qty}</p> */}
                    <p id="topingText"> Toping :
                  {item.toping.map((items) => (
                      <p id="topingName"> {items.TopingName}</p>
                    ))}
                    </p>
                  </Col>
                  <Col md="2">       </Col>
                  <Col md="2" style={{ marginTop: "10px" }}>
                    {/* <div   id={"demo"+item.id} value={item.qty*item.price}  > */}
                    <div className="productPrice" id={"demo" + item.id} value={item.item.price}  >
                      {/* <p>  Rp.    {item.qty*item.price} </p> */}
                      <p>  Rp.{item.item.price} </p>
                      <p onClick={() => handleClick(item, "REMOVE_CART")} id="trashIcon" ><BsTrash /> </p>
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
                  <Col sm="6">
                    <p id="subTotalProduct">Sub Total</p>
                    <p id="subTotalProduct">Qty</p>

                  </Col>
                  <Col sm="2">

                  </Col>
                  <Col sm="4">
                    {dataCarts.map((dataItem) => (
                      <>
                        <p id="dataItem" >{dataItem.item.price}</p>

                        <p id="dataItem">{dataItem.qty}</p>
                      </>

                    ))}
                  </Col>
                </Row>
                <hr></hr>
                <Row>
                  <Col sm="4">
                    <p id="totalPrice" >Total</p>

                  </Col>
                  <Col sm="4"></Col>
                  <Col sm="4">
                    {dataCarts.map((dataItem) => (
                      <>
                        <p>{dataItem.item.price}</p>
                      </>

                    ))}

                  </Col>
                </Row>

              </Col>
              <Col sm="4">
                <label for="file-upload" class="custom-file-upload">
                  <img src={imgFilebtn} />
                </label>
                <input id="file-upload" type="file" />
              </Col>
            </Row>
          </Col>
          <Col sm="1">
          </Col>
          <Col sm="4" style={{ paddingLeft: "20px" }}>

            <Form style={{ marginTop: "77px" }}
            //  onSubmit={handleSubmit}
            >
              <Form.Group>
                <Form.Control
                  name="name"
                  type="text"

                  required
                  placeholder="Name"
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  name="email"
                  type="text"
                  required
                  placeholder="email "
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  name="phone"
                  type="number"
                  required
                  placeholder=" Phone"
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  name="postCode"
                  type="number"
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
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="image">
                <Form.Control type="text" placeholder="image" name="image" value={dataUpdate.image} onChange={handleChange} />
              </Form.Group>
              {/* <Form.Group>
  <Form.Control
    name="imageFile"
    type="file"
    onChange={handleChange}
    required
  />
</Form.Group> */}
              <Button onClick={handleOnSubmit} id="payBtn" >pay</Button>
              <ModalTransaction show={show} handleClose={() => setshow(false)} />

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

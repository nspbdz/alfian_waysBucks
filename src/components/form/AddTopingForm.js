import { useState, useContext, useEffect } from "react";
import { Row, Col, Form, Button, InputGroup, FormControl } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { useHistory, Router, Link } from "react-router-dom";
import data from "../../data/toping.json";
import topingadd from "../../assets/images/toping/topingadd.svg";
import "../../styles/customStyle.css";
import ModalToping from "../ModalToping"

function AddTopingForm() {

  const [show, setshow] = useState(false);

  console.log(data)
  const [dataUpdate, setDataUpdate] = useState([])


  const [dataProduct, setDataProduct] = useState({
    toping: data.user.toping

  })

  console.log(dataProduct)
  const handleChange = (e) => {
    const a = e.target.value
    setDataUpdate({
      ...dataUpdate,
      [e.target.name]:
        e.target.type === "file" ? e.target.files[0] : e.target.value,
    });

  }

  console.log(dataUpdate)
  const handleOnSubmit = (e) => {

    setDataProduct((prevDataProduct => ({
      ...prevDataProduct,
      toping: [...prevDataProduct.toping, {
        id: 5,
        name: dataUpdate.name,
        price: dataUpdate.price,
        image: dataUpdate.image,


      }]

    })
    ))

    setshow(true)

  }
  let JsonString = JSON.stringify(dataProduct);
  localStorage.setItem("dataToping", JsonString)

  console.log(dataProduct.product)


  return (
    <div>
      <>
        <Row>
          <Col xs={5}>
            <Form className="formStyle" style={{ marginTop: "40px" }}>


              <Form.Group className="mb-3" controlId="name">
                <h4 className="titleForm">Toping</h4>
                <Form.Control type="text" placeholder="Nama Toping" name="name" value={dataUpdate.name} onChange={handleChange} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="price">
                <Form.Control type="text" placeholder="Price" name="price" value={dataUpdate.price} onChange={handleChange} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="image">
                <Form.Control type="text" placeholder="Photo Product " name="image" value={dataUpdate.image} onChange={handleChange} />
              </Form.Group>
              <br />
              <Form.Control style={{ paddingTop: "20px" }}
                name="imageFile"
                type="file"
                onChange={handleChange}
              //  required
              />

              <Row>
                <Col sm="1"></Col>
                <Col sm="4">
                  <div style={{ paddingTop: "34px" }}>
                    <Button style={{ backgroundColor: "#BD0707", width: "420px", height: "40px" }} onClick={handleOnSubmit}  >
                      Add Product
           </Button>

                  </div>
                </Col>
                <ModalToping show={show} handleClose={() => setshow(false)} />

                <Col sm="4"></Col>
              </Row>


            </Form>
            {/* <Button style={{backgroundColor:"#613D2B", width:"260px",height:"40px"}}  onClick={handleOnSubmit}  > 
           Add 
           </Button> */}

          </Col>
          <Col xs={1}>
          </Col>

          <Col xs={5}>
            <img style={{ marginTop: "20px" }} width="406" height="450"
              src={topingadd}
            />
          </Col>
        </Row>

      </>


    </div>
  )
}

export default AddTopingForm;

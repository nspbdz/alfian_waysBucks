import { React } from "react"
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { BsCalendar } from 'react-icons/bs';
import IconUser from "../assets/images/IconUser.svg"
import IconAddProduct from "../assets/images/IconAddProduct.svg"
import IconAddToping from "../assets/images/IconAddToping.svg"
import { Dropdown } from "react-bootstrap"
import { useContext, useState } from "react"
import { UserContext } from "../contexts/userContext";
import userData from "../data/User";
import { Card, Jumbotron, Row, Col, Button, DropdownButton, Image } from "react-bootstrap";
import { BsPeopleCircle, BsEnvelope, BsLock, BsFillHouseFill, BsGeoAlt } from 'react-icons/bs';
import { BiReceipt } from "react-icons/bi";
import { ImExit } from "react-icons/im";


function AdminDropdown() {
  const { state, dispatch } = useContext(UserContext);

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch({
      type: 'LOGOUT',
      payload: {
        id: null,
        name: "",
        email: "",
        password: ""
      }
    })
  }

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  // const userFilter = userData.filter(item => ( item.username === userlogin ));


  return (
    <>
      <div>
        <Dropdown>
          <Dropdown.Toggle style={{ backgroundColor: "transparent", border: 'none' }} id="dropdown-basic" >
            <Image style={{ width: "50px" }} src="https://ujhw03sswsepgw3234x0qm51-wpengine.netdna-ssl.com/wp-content/uploads/2018/05/171025-202659-Donnely-Christopher-400x400x72.jpg" roundedCircle />

          </Dropdown.Toggle>

          <Dropdown.Menu style={{ width: "220px" }}>

            <Dropdown.Item style={{ marginBottom: "10px" }} >
              <Row>
                <Col sm="2"> <img src={IconAddProduct} style={{ width: "25px" }} /> </Col>
                <Col sm="2">
                  <Link to="/addproduct" style={{ backgroundColor: "transparent", color: "black" }} >Add Product</Link>

                </Col>
              </Row>
            </Dropdown.Item>
            <Dropdown.Item >
              <Row>
                <Col sm="2"> <img src={IconAddToping} style={{ width: "30px" }} /> </Col>
                <Col sm="2">
                  <Link to="/addtoping" style={{ backgroundColor: "transparent", color: "black" }} >Add Toping</Link>

                </Col>
              </Row>
            </Dropdown.Item>

            <Dropdown.Divider />
            <Dropdown.Item >
              <Row>
                <Col sm="2"> <ImExit style={{ color: "#BD0707", width: "35px", height: "25px" }} /> </Col>
                <Col sm="2">
                  <Link to="/" onClick={handleLogout} style={{ backgroundColor: "transparent", color: "black" }} >Logout</Link>

                </Col>
              </Row>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </>
  )
}
export default AdminDropdown;
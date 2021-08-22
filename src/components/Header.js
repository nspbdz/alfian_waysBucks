import { useState, useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import {Row,Col,Badge, Button,  FormControl,  InputGroup,  Form,  Navbar,  Nav,} from "react-bootstrap";
import shopcart from "../assets/images/shopcart.svg";
import { UserContext } from "../contexts/userContext";
import { CartContext } from "../contexts/cartContext";
import ModalSignin from "./ModalSignin";
import ModalSignup from "./ModalSignup";
import Icon from "../assets/images/brand-icon.svg";
import UserDropdown from "./UserDropdown"
import AdminDropdown from "./AdminDropdown"
import data from "../data/fakeData";
import "../styles/customStyle.css";

const Header = () => {
  // const [showSignin, setshowSignin] = useState(false);
  const [showSignup, setshowSignup] = useState(false);
 
  const {state, dispatch} = useContext(UserContext);
  const {state: cartState} = useContext(CartContext);
  console.log("user context state", state)
  console.log("user id ", state.user.id)
  
  console.log("cart context state", cartState)
  const [search, setSearch] = useState("");
  const [show, setshow] = useState(false);

  useEffect(() => {
    if (!state.isLogin) {
      setshow(true);
    }
    return () => {
      setshow(false)
    }
  }, [state])

  const router = useHistory();
  const handlePushToSignUp = () => {
    router.push("/signup");
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const product = data.near.find((item) => item.restaurant === search);

    if (product) {
      return router.push(`/product/${product.id}`);
    }
  };

  const handleLogout = (e) => {
    dispatch({ type: "LOGOUT" })
  };

  return (
    
    <Navbar expand="lg">
    
    <Link to="/" className="navbar-brand" id="logo">
      <img src={Icon} alt="brand" />
    </Link>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
      </Nav>
    
      {state.isLogin==true && state.user.id==1 &&(

        <>

         <Row>
           <Col sm="2" className="navbarDropdown">
         <AdminDropdown />
           </Col>
           <Col sm="5"></Col>
           <Col sm="5"></Col>

         </Row>
          
        
        </>
      )}
       {state.isLogin==true && state.user.id==2 &&(

        <>  
          <Row>
           <Col sm="2" className="navbarDropdown">
         
          <Link to="/cart" >  
          <Badge style={{marginRight:"10px"}} className="bg-secondary text-white">   {cartState.carts.length}</Badge>
          <img  src={shopcart} className="shopCart" /> {' '}
          {/* <img src={shopcart} style={{width:"30px", height:"30px"}} /> {' '}{cartState.carts.length} */}

          </Link>
          </Col>
          <Col className="navbarDropdown" sm="2">
           <UserDropdown />
           </Col>
           <Col sm="3"></Col>
           <Col sm="5"></Col>

         </Row>
          
       
        </>
        )}
     {!state.isLogin && ( 
        <>
          <div id="pading">
          <Button className="my-2" onClick={() => setshow(true)}  variant="light">
            Login
          </Button>
          </div>
          <Button id="warna" className="mr-3 my-2" onClick={() => setshowSignup(true)}   >
             Register
          </Button>
      
      <ModalSignin show={show} handleClose={() => setshow(false)} handleLogin={dispatch}/>

          <ModalSignup
            show={showSignup}
            handleClose={() => setshowSignup(false)}
          />
        </>
       )}
    </Navbar.Collapse>
  </Navbar>

  );
};


export default Header;

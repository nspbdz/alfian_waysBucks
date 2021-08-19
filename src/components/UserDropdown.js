import {React} from "react"
import { BrowserRouter as Router, Route, Switch,Link } from "react-router-dom";
import { BsCalendar } from 'react-icons/bs';

import {Dropdown} from "react-bootstrap"
import { useContext,useState } from "react"
import {UserContext} from "../contexts/userContext";
import userData from "../data/User";
import { Card,Jumbotron,Row,Col,Button,DropdownButton,Image } from "react-bootstrap";
import { BsPeopleCircle,BsEnvelope,BsLock,BsFillHouseFill,BsGeoAlt } from 'react-icons/bs';
import { BiReceipt } from "react-icons/bi";
import { ImExit } from "react-icons/im";

// import userData from '../data/User'

function UserDropdown(){
  // const [state, dispatch] = useContext(UserContext);

  // const contextValue = useContext(UserContext);
  // console.log(contextValue[0].user.name)
  // const userlogin=contextValue[0].user.username
  // console.log(userlogin);
  // console.log(state);


  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  // const userFilter = userData.filter(item => ( item.username === userlogin ));
 

    return (
        <> 
<div>
 <Dropdown>
  <Dropdown.Toggle style={{backgroundColor:"transparent",border:'none'}} id="dropdown-basic" >
 <Image style={{width:"50px"}} src="https://ujhw03sswsepgw3234x0qm51-wpengine.netdna-ssl.com/wp-content/uploads/2018/05/171025-202659-Donnely-Christopher-400x400x72.jpg" roundedCircle />

  </Dropdown.Toggle>

  <Dropdown.Menu style={{width:"220px"}}>

    <Dropdown.Item >
    <Row>
        <Col sm="2"> <BsPeopleCircle style={{color:"#613D2B"}} /> </Col>
        <Col sm="2">
    <Link to="/profile" style={{backgroundColor:"transparent"}} className="btn btn-light">profile</Link>
          
        </Col>
      </Row>
        </Dropdown.Item>
    
    <Dropdown.Divider />
    <Dropdown.Item >
    <Row>
        <Col sm="2"> <ImExit style={{color:"#613D2B"}} /> </Col>
        <Col sm="2">
    {/* <Link to="/" onClick={handleSignout} style={{backgroundColor:"transparent"}} className="btn btn-light">Logout</Link> */}
          
        </Col>
      </Row>
        </Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
</div>
        </>
    )
}
export default UserDropdown;
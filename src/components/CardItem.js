import { useHistory } from "react-router-dom";
import { Card, Button,Row,Col } from "react-bootstrap";
import { UserContext } from "../contexts/userContext";
import ModalSignin from "./ModalSignin";
import { useState, useContext, useEffect } from "react";
import "../styles/customStyle.css";

function CardItem({ item, isProduct, handleClick }) {
  const router = useHistory();
  const {state, dispatch} = useContext(UserContext);
  const [show, setshow] = useState(false);
 
  // useEffect(() => {
  //   if (!state.isLogin) {
  //     setshow(true);
  //   }
  //   return () => {
  //     setshow(false)
  //   }
  // }, [state])

  const handlePushToSignUp = () => {
    router.push("/signup");
  };

  const handlePushToDetail = (id) => {
    console.log(id);
    router.push(`product/${id}`); 
  };
  return ( 
    <>
   <>
    <Row>
              <Col  key={item.id} id={item.id} >
                <Card  onClick={() => handlePushToDetail(item.id)} data-div_id={item.id} id={item.id}  style={{ width: "15rem", marginBottom: "10px" }}>
                    <Card.Img  variant="top" src={item.image} width={241} height={321} style={{ objectFit: "cover" }}   />
                    <Card.Body style={{backgroundColor:"#F6E6DA"}}>
                    <Card.Title>  {item.name} </Card.Title>
                    <Card.Title>Rp. {item.price} </Card.Title>
                  </Card.Body>
               <ModalSignin show={show} handleClose={() => setshow(false)} handleLogin={dispatch}/>

                </Card>
                
        </Col>
    </Row>
    </>


    </>
  );
}

export default CardItem;

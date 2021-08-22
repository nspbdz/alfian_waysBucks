
import { useHistory,Router,Link } from "react-router-dom";
import { Row,Col,Card, Button } from "react-bootstrap";
import { useState } from "react";
// import icon from "../assets/images/Icon.svg";
// import qr from "../assets/images/qr.jpg";

function OrderItem({ item }) {
  const router = useHistory();
  const [dataApi, setDataApi] = useState([])
  const nowss =new Date().toLocaleTimeString("en-US", { month: "long",day: "2-digit" })
 
  console.log(item)
  return (
    <>
    <p>asndkasnd</p>               
    </>

  )
  
}

export default OrderItem;

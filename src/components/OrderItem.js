
import { useHistory,Router,Link } from "react-router-dom";
import { Row,Col,Card, Button } from "react-bootstrap";
import { useState } from "react";
// import icon from "../assets/images/Icon.svg";
// import qr from "../assets/images/qr.jpg";

function OrderItem({ item }) {
  const router = useHistory();
  const [dataApi, setDataApi] = useState([])
  var token= localStorage.getItem("token")
  const nowss =new Date().toLocaleTimeString("en-US", { month: "long",day: "2-digit" })
 
  console.log(item)
  return (
    <>
    <div style={{width:"524px",marginBottom:"20px"}}>
   <Row style={{backgroundColor:"#F6E6DA",height:"185px"}} >
      <Col key={item.id}  md={3} style={{marginTop:"10px",paddingLeft:"5px"}}>
        <img   src={item.order[0].product.photo}  style={{width:"90px",height:"140px",marginTop:"14px",marginLeft:"28px"}}   />
      </Col>
      <Col  md={5}>
        <h5 style={{marginTop:"25px"}}>{item.order[0].product.name}</h5>
        <p style={{fontSize:"12px"}}>{nowss}</p> 
        <p style={{fontSize:"12px",marginTop:"25px",marginBottom:"4px"}}>{item.order.price}</p>
        {/* <p style={{fontSize:"12px"}}>{item.product.qty}</p> */}
        <p style={{fontSize:"12px",marginBottom:"4px"}}>quantity</p>
        <p style={{fontSize:"12px",marginBottom:"4px"}}>price*qty</p>
      </Col>
      <Col  md={4}  >
        <div style={{alignItems:"center"}}>
        {/* <img src={icon}  style={{width:"100px", height:"32px",display:"block",marginLeft: "auto",marginRight:"auto",marginBottom:"5px",marginTop:"20px"}} />
        <img src={qr}  style={{width:"70px",height:"70px",marginBottom:"10px",marginTop:"12px",display:"block",marginLeft: "auto",marginRight:"auto"}} /> */}
        <div>
              {item.status== "On The Way" ?
                  <td  > 
                  {/* <Button onClick={() => approveStatus(item.id)} style={{display:"block",marginLeft: "auto",marginRight:"auto",width:"150px",height:"35px"}}  variant="light"> 
                  <p style={{color:"#FF9900",fontSize:"5"}}>{item.status} </p> 
                  </Button> */}
                </td>
                :null
                }
                {item.status== "Completed" ?
                  <td  > 
                  <Button  style={{ backgroundColor:"#613D2B", display:"block",marginLeft: "auto",marginRight:"auto",width:"150px",height:"35px"}}  > 
                  <p style={{color:"#FFfff",fontSize:"5"}}>{item.status} </p> 
                  </Button>
                </td>
                :null
                }
                 {item.status== "Cancel" ?
                  <td  > 
                  <Button variant="danger" style={{ display:"block",marginLeft: "auto",marginRight:"auto",width:"150px",height:"35px"}}  > 
                  <p style={{color:"#FFfff",fontSize:"5"}}>{item.status} </p> 
                  </Button>
                </td>
                :null
                }

                  {item.status== "Waiting Approve" ?
                  <td  > 
                  <Button variant="light" style={{ display:"block",marginLeft: "auto",marginRight:"auto",width:"150px",height:"35px"}}  > 
                  <p style={{color:"#FFfff",fontSize:"5"}}>{item.status} </p> 
                  </Button>
                </td>
                :null
                }                
      {/* <Button onClick={() => approveStatus(item.id)} style={{display:"block",marginLeft: "auto",marginRight:"auto",width:"150px",height:"35px"}}  variant="light"> 
      <p style={{color:"#FF9900",fontSize:"5"}}>{item.status} </p> 
      </Button> */}

      </div>
      </div>

    </Col>
  </Row>
    </div>
                 
    </>

  )
  
}

export default OrderItem;

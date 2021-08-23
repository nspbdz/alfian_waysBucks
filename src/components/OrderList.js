
import OrderItem from "./OrderItem";
import { Row,Col,Card, Button } from "react-bootstrap";
import qr from "../assets/images/qr.jpg";
import icon from "../assets/images/brand-icon.svg";


import not_found from "../assets/images/not_found.svg";
const OrderList = ({ data, loading,  }) => {
  // if (loading) return <p>...loading</p>;
  console.log(data)
  const nowss =new Date().toLocaleTimeString("en-US", { month: "long",day: "2-digit" })
const transactions=data.user.products
const subtotal=data.user.subTotal
const status=data.user.status

console.log(transactions)

  return (
    <div>
      {transactions?.length <= 0 && (
        <img src={not_found} width="100%" height="100%" alt="not found" />
      )}
      
       {transactions?.length > 0 &&(
      <Row style={{backgroundColor:"#F6DADA"}}>
          <Col sm="7" >

          {transactions?.map((item, index) => (
            <>
        <Row  >
            
        <Col key={item.id}  sm="4" style={{marginTop:"10px",paddingLeft:"5px"}}>
        <img   src={item.image}  style={{width:"80px",height:"97px",marginTop:"14px",marginLeft:"28px",objectFit: "cover", borderRadius:"10px"}}   />
        </Col>

        <Col  sm="7">
            <h5  id="MyTransactionText" style={{marginTop:"25px"}}>{item.name}</h5>
            <p style={{fontSize:"12px"}}>{nowss}</p> 
            <p id="MyTransactionText">Toping : &nbsp;
                 {item.toping.map((items) => (
                    <div  id="Mytoping" >
                        <p> {items.name} </p>
                    </div>
                  ))}
                 </p>
            <p id="MyTransactionText" style={{paddingBottom:"5px"}}>{item.price}</p>
        </Col>
        
      </Row>
            </>
                )) 
            }   
            
          </Col>
          <Col sm="4" >

          <div style={{alignItems:"center"}}>
          <img src={icon}  style={{width:"100px", height:"32px",display:"block",marginLeft: "auto",marginRight:"auto",marginBottom:"5px",marginTop:"20px"}} />
          <img src={qr}  style={{width:"70px",height:"70px",marginBottom:"10px",marginTop:"12px",display:"block",marginLeft: "auto",marginRight:"auto"}} />
            <Button  style={{ display:"block",marginLeft: "auto",marginRight:"auto",width:"150px",height:"35px",backgroundColor:"#00D1FF"}}  > 
            <p style={{color:"#FFfff",fontSize:"5"}}>{status} </p> 
            <p>Sub Total: {subtotal}</p>
            </Button>
      </div>

         </Col>
          </Row>
      )
        }
    </div>
  );
};

export default OrderList;

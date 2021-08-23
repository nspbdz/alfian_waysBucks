
import OrderItem from "./OrderItem";
import { Row,Col,Card, Button } from "react-bootstrap";
import qr from "../assets/images/qr.jpg";
import icon from "../assets/images/brand-icon.svg";
import "../styles/customStyle.css";


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
      <Row id="wraperprofile" >
          <Col sm="7" >

          {transactions?.map((item, index) => (
            <>
        <Row  >
            
        <Col key={item.id}  sm="4" style={{marginTop:"10px",paddingLeft:"5px"}}>
        <img   src={item.image}  style={{width:"80px",height:"97px",marginTop:"14px",marginLeft:"28px",objectFit: "cover", borderRadius:"10px"}}   />
        </Col>

        <Col  sm="8">
            <h5  id="MyTransactionname" className="h4 font-weight-bold" style={{marginTop:"25px"}}>{item.name}</h5>
            <p id="date">{nowss}</p> 
            <p id="MyTransactionText">Toping : &nbsp;
                 {item.toping.map((items) => (
                    <div  id="Mytoping" >
                        <p> {items.name +","} </p>
                    </div>
                  ))}
                 </p>
            <p id="MyTransactionText" style={{paddingBottom:"5px"}}>Price : Rp.{item.price}</p>
        </Col>
        
      </Row>
            </>
                )) 
            }   
            
          </Col>
          <Col sm="4" >

          <div style={{alignItems:"center"}}>
          <img src={icon} id="iconprofile"  />
          <img src={qr}  id="qr" />

            <Button id="profilestatus"   > 
            <p id="statustext">{status} </p> 
            <p id="subtotaltext">Sub Total: {subtotal}</p>
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

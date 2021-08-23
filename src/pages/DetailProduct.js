import { useParams, useLocation } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { Row, Col,Button } from "react-bootstrap";
import dataProduct from "../data/product";
import NotFound from "./NotFound";
import CardList from "../components/CardList";
import { CartContext } from "../contexts/cartContext";
import  "../styles/customStyle.css"
import fakecart from "../data/cart.json"; 


const DetailProduct = ({ match }) => {
  console.log(fakecart.user.cart)
  const [topingPrice,setTopingPrice]= useState([])
  const [getTopping, setGetTopping] = useState('');
  const data=dataProduct.user.product;
  const [dataToping,setDataToping]= useState([])
  const getLocalStorage=localStorage.getItem("dataToping")
  const [getPrice, setGetPrice] = useState(null);
  const {state, dispatch} = useContext(CartContext);
  const [item, setItem] = useState(null);
  const [ProductItem, setProductItem] = useState([]);
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const [topings,setTopings] = useState([])
  const [qty,setQty] = useState(1)

  const [dataCart, setDataCart] = useState({
    cart:fakecart.user.cart
  })
  const getLocalToping=localStorage.getItem("dataToping")
  // console.log(getLocalToping)
  const ParseJson=JSON.parse(getLocalToping)  
// console.log(ParseJson)
const DataTopings=ParseJson.toping
   const parseData = () => {
    setDataToping(DataTopings)
  }

  useEffect(() => { 
  parseData()
}, []); 

  
  useEffect(() => {
 
    setTimeout(() => {
      const itemMatchId = data.find((item) => item.id === parseInt(params.id));
      if (!itemMatchId) {
        setItem({
          status: "error",
          message: "item does not exist",
          data: null,
        });
        return setLoading(false);
      }
      setItem({
        status: "ok",
        message: "resource has been get successfully",
        data: itemMatchId,
      });
      setLoading(false);
    }, 5000);

    return () => {
      setItem(null)
      setLoading(true);
    }
  }, []);

    const findTopping =(e) =>{
    const topingId=parseInt(e.target.value)
    let newArray =   [...topings,topingId ];
    if (topings.includes(topingId))
    {
      newArray = newArray.filter(day => day !== topingId );
    }
    var price=0;
    // var TopingName="";
        for(var i=0; i<=newArray.length; i++ ) 
        {
          const findData= DataTopings.find(data => data.id === i )
          if (findData !== undefined) {
         price +=findData.price
        //  TopingName +=findData.name + ","
          }
        }
        setGetPrice(price)
    console.log(newArray)
    // console.log(price)
     setTopings( newArray );
    console.log("DataTopings",DataTopings)
  } 

  const addQty = () => {
    setQty(qty + 1);
  };
  const removeQty = () => {
    if(qty === 1){
      return;  
    }
    setQty(qty - 1);
  
  };

  const addProduct = (item) => {
  console.log("dataTopingsDipilih",topings)

console.log(item)
 var TopingName=[];
 for(var i=0; i<=topings.length; i++ ) 
 {
   const finTopingName= DataTopings.find(data => data.id === i )
   if (finTopingName !== undefined) {
    //  console.log(finTopingName.name)
  TopingName +=[finTopingName.name + ", "]
  
   }
 }
 console.log(TopingName)
    setDataCart((prevDataProduct=> ({
      ...prevDataProduct,
      cart: [...prevDataProduct.cart, {
        item,
        total: qty * item.price + getPrice,
       
        toping: [ {
          TopingName
          
        }]
      }]
  })  ))
  
    dispatch({
      type: "ADD_PRODUCT",
      data:item,
    }) 
  }

  const JsonString=JSON.stringify(dataCart);
  localStorage.setItem("dataCart", JsonString)
  console.log("dataTopingsDipilih",topings)

  // console.log("dataToping",dataToping)
  // console.log("dataCart",dataCart)

  return (
    <>
      {loading && <p>loading....</p>}
      {(!loading && item.data) && (
        <>
          <Row>
            <Col id="detailImg" xs={4}>
              <div>
              <img  style={{width:"350px",height:"350px"}}
                src={item.data.image}
                alt="product"
                className="shadow-sm img-fluid rounded"
                />
                </div>
            </Col>  
         
            <Col>
                 <p className="h1 font-weight-bold">{item.data.name}</p>
                 <p> Rp. {item.data.price}</p>
                      {dataToping.map((item, index) => ( 
                        <div id="topingDiv" >
                            <>
                            <input name={item.name} value={item.id} type="checkbox" id={` "myCheckbox ${item.id} " `} 
                            className="check"
                            onChange={findTopping}
                            />
                            <label for={` "myCheckbox ${item.id} " `} >
                            <img  src={item.image} id="topingStyle" class="topingstyle" />
                              </label>
                            </>
                        </div>
                       ))}
                       <Row>
                         <Col sm="4">
                           <>
                                <Row>
                                <Col md="2" >
                                <p onClick={removeQty}  style={{fontSize:"16px"}}>-</p>
                                </Col>
                                <Col md="2" >       
                                  <span >{qty}</span>
                              </Col>
                                <Col md="2" > 
                                <p onClick={addQty} style={{fontSize:"16px"}}>+</p>
                                </Col>
                              </Row>
                           <h5>Total</h5>
                           </>

                         </Col>
                         <Col sm="4"></Col>
                         <Col sm="4">
                       <p> Rp. { qty * item.data.price + getPrice }</p>

                         </Col>
                       </Row>
                <Button  style={{width:"544px",height:"40px",alignItems:"center",backgroundColor:"#613D2B"}}variant="warning" data={data}
                 onClick={() => addProduct(item.data)}
                 >
                  <p style={{color:"white"}}>Add to Cart</p>
                </Button>
            </Col>
           
          </Row> 
          <hr />
        </>
      )}
      {(!loading && !item) && (<NotFound />)}
    </>
  );
};

export default DetailProduct;

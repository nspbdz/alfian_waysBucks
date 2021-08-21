import { useParams, useLocation } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { Row, Col } from "react-bootstrap";
import dataProduct from "../data/product";
import NotFound from "./NotFound";
import CardList from "../components/CardList";
import { CartContext } from "../contexts/cartContext";
import  "../styles/customStyle.css"

const DetailProduct = ({ match }) => {
  const [topingPrice,setTopingPrice]= useState([])
  const [getTopping, setGetTopping] = useState('');
  const data=dataProduct.user.products;
  const [dataToping,setDataToping]= useState([])
  const getLocalStorage=localStorage.getItem("dataToping")
  const DataTopings=JSON.parse(getLocalStorage)  
  const [getPrice, setGetPrice] = useState(null);
  const [getPrices, setGetPrices] = useState([]);
  var productPriceData = [];

 
  const {state, dispatch} = useContext(CartContext);
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const [topings,setTopings] = useState([])
 
  
   const parseData = () => {
    setDataToping(DataTopings)
  }

  useEffect(() => { 
  parseData()
}, []); 

  const addProduct = (item) => {
    dispatch({
      type: "ADD_PRODUCT",
      data: item
    }) 
  }
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
    }, 3000);

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
    // var price=item.data.price;
    var price=0;
        for(var i=0; i<=newArray.length; i++ ) 
        {
          const findData= DataTopings.find(data => data.id === i )
          if (findData !== undefined) {
         price +=findData.price
          }
        }
        setGetPrice(price)
    console.log(newArray)
    console.log(price)
     setTopings( newArray );
    console.log("DataTopings",DataTopings)
  } 
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
                            <img  src={item.image} id="topingStyle" />
                              </label>
                            </>
                        </div>
                       ))}
                       <p> Rp. {item.data.price + getPrice}</p>

              
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

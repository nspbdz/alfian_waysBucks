import { useParams, useLocation } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { Row, Col } from "react-bootstrap";
import dataProduct from "../data/product";
import NotFound from "./NotFound";
import CardList from "../components/CardList";
import { CartContext } from "../contexts/cartContext";
import  "../styles/customStyle.css"

const DetailProduct = ({ match }) => {
  const [colors, setColors] = useState()

  const data=dataProduct.user.products;
  const [dataToping,setDataToping]= useState([])
  const getLocalStorage=localStorage.getItem("dataToping")
  const ParseJson=JSON.parse(getLocalStorage)  
  const {state, dispatch} = useContext(CartContext);
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const params = useParams();

  const parseData = () => {
    setDataToping(ParseJson)
  }
  console.log(dataToping)

useEffect(() => { 
  parseData()
    // const ParseJson=JSON.parse(getLocalStorage)  

}, []); 
console.log(dataToping)

  const addProduct = (item) => {
    dispatch({
      type: "ADD_PRODUCT",
      data: item
    }) 
  }
  // execute after rendering jsx
  useEffect(() => {
    console.log("mounting component at:\n", new Date().toLocaleTimeString());
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
  console.log(item)

  const handle1  = (e) => {
    setColors({

      // v1:1,
      // v2:"",
      // 3:"",
      // v4:"",
      // v5:"",
    })
    }
  let btn_1= colors ? "blueButton" : "whiteButton";

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
                            <input type="checkbox" id={` "myCheckbox ${item.id} " `} className="check" />
                            <label for={` "myCheckbox ${item.id} " `} >
                            <img  src={item.image} id="topingStyle" />
                              </label>
                            </>
                        </div>
                       ))}
                       <p> Rp. {item.data.price}</p>

              
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

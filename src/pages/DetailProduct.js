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

  const data=dataProduct.user.products;
  const [dataToping,setDataToping]= useState([])
  const getLocalStorage=localStorage.getItem("dataToping")
  const ParseJsonToping=JSON.parse(getLocalStorage)  
  // console.log(ParseJsonToping)
  const {state, dispatch} = useContext(CartContext);
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const [topings,setTopings] = useState([])
  const [temp,setTemp] = useState({
    name:"",
    price:""
  })
  const [topingsPrice,setTopingsPrice] = useState([])
  
  const handleCheckboxChange = async (e)  => {
    
    console.log(e.target.name)
    console.log(e.target.value)
    let newArray =   [...topings, e.target.name];
    if (topings.includes(e.target.name) )
     {
      newArray = newArray.filter(day => day !== e.target.name);
    }
     setTopings( newArray );
     console.log(newArray)

     const x= ParseJsonToping.filter(items => items.name ==e.target.name ).map(dataMatch => (
      console.log(dataMatch)
          
        ))


    //  setTemp({
    //   ...temp,
    //   name:e.target.name,
    //   price:e.target.value,
    //   })
    //   if (topingsPrice.includes(e.target.name) )
    //  {
    //   temp = temp.filter(temporer => temporer.name !== e.target.name);
    // }
    // setTemp(temp)
    // console.log(temp)




    
     
      }

       console.log(topingsPrice)
       console.log(temp)



    const checkUser =  () => {
      // console.log(topings)
      const stringIdToping=topings.toString()
      // console.log(stringIdToping)
      const a =ParseJsonToping.filter(items => items.name ==topings)
      // console.log(a)

  //     let newArrays =   [...topings, a];
  //     if (topings.includes(a) )
  //      {
  //       newArrays = newArrays.filter(day => day !== a);
  //     }
  //      setTopingsPrice( newArrays );
  // console.log(topingPrice)
    // };
      
      
      
      // const  array1 = ParseJsonToping.filter(function(item) {
      //     return !topings.includes(item); 
      //   });
      //   console.log(array1);
    //  const   str = /.(.+)/.exec(stringIdToping);
    //  console.log(str)
        //   if  (topings <=1){
      // {ParseJsonToping.filter(item => item.name ==stringIdToping).map(dataMatch => (
    }

useEffect(() => {
  checkUser();
}, [topings]);



  const parseData = () => {
    setDataToping(ParseJsonToping)
  }
  // console.log(dataToping)

useEffect(() => { 
  parseData()
}, []); 
// console.log(dataToping)

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
  // console.log(item)

 

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
                            onChange={handleCheckboxChange}
                            />
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

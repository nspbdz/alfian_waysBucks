
import { Button, Col, Row,Table } from "react-bootstrap";
// import TransactionItem from "./TransactionItem";
import { BiCheckCircle } from "react-icons/bi";
import { ImCross } from "react-icons/im";
import { BsSearch } from "react-icons/bs";
import not_found from "../assets/images/not_found.svg";
import { useState, useContext, useEffect } from "react";
import dataTransactions from "../data/transaction.json"
import  "../styles/customStyle.css"
const TransactionList = ({  isLoading, error,isLoadingFilter, errors }) => {
const [data,setData]= useState([])
const WAIT_TIME = 3000; // waktu re render

// console.log(dataTransactions)
// const fakeDataTransaction=dataTransactions.user
// let JsonString=JSON.stringify(fakeDataTransaction);
// localStorage.setItem("dataTransaction", JsonString)
// console.log(fakeDataTransaction)

const getLocalStorage=localStorage.getItem("dataTransaction")

const ParseJson=JSON.parse(getLocalStorage)  
console.log(getLocalStorage)
console.log(ParseJson)
  const parseData = () => {
    setData(ParseJson)
  }
  console.log(setData)


useEffect(() => { 
  parseData()
}, []); 
// useEffect(() => { //re render every WAIT_TIME
//   const id = setInterval(() => {
//     parseData()
  
//   }, WAIT_TIME);
//   return () => clearInterval(id);
// }, []); 
// console.log(data)
// console.log(ParseJson)


//   const [dataProduct, setDataProduct] = useState({
//     product:data.products
//   })
//   const handleApprove = (e) => {
  
//   setDataProduct((prevDataProduct=> ({
//     ...prevDataProduct,
//     product: [...prevDataProduct.product, {
//       id:1,
//       status: "Approve",
    
//     }]

// })
//   ))
// // setshow(true)
  
// }

  return(

<>
{/* <h3>Income Transaction</h3> */}
{/* <br></br> */}
    <Table  striped bordered hover style={{width:"900px"}} >
<thead style={{backgroundColor:"#E5E5E5"}}>
  <tr>
  <th>No</th>
    <th>Name</th>
    <th>Address</th>
    <th>Post Code</th>
    <th>Income</th>
    <th> Status </th>
    <th style={{textAlign:"center"}}>Action</th>
  </tr>
</thead>

    {data?.length <= 0 && (
      <img src={not_found} width="100%" height="100%" alt="not found" />
    )}
    {data?.length > 0 &&
      data?.map((item, index) => (
        <tbody style={{backgroundColor:"#FFFFFF"}} key={index}>
                  
          <tr>
                <td value={item.id}> {item.id}</td>
                <td>{item.name}</td>
                <td>{item.address}</td>
                <td>{item.postCode}</td>
                {/* <td> kopi {item.order.name}</td> */}
                <td> {item.income}</td>
                <td> {item.status}</td>
              {/* <td id={item.id} value={item.id} onClick={() => handleClick(item.id)}> 
              <BsSearch onClick={handleClick} 
              />
              </td> */}
              {item.status== "Waiting Approve" ?
                <td  > 
              <Row>
                {/* <Col sm="6"> <Button variant="danger" onClick={() => CancelStatus(item.id)}> */}
                <Col sm="6"> <Button variant="danger" >
                  Cancel
                </Button></Col>
                <Col sm="5">  <Button  variant="success" >
                {/* <Col sm="5">  <Button  variant="success" onClick={() => approveStatus(item.id)}> */}
                  Approve
                </Button></Col>
                <Col sm="1"></Col>
              </Row>
              
              
            
              </td>
              :null
              }
               {item.status== "Cancel" ?
                <td  > 
              
             <ImCross />
              </td>
              :null
              }
                {item.status== "Success" ?
                <td  > 
              <BiCheckCircle />
            
              </td>
              :null
              }
                {item.status== "On The Way" ?
                <td  > 
              
              <BiCheckCircle />
              
              </td>
              :null
              }
               {item.status== "Completed" ?
                <td  > 
                <Col sm="5">  <Button  variant="success" >
                  Completed
                </Button></Col>
              
              </td>
              :null
              }
              
  </tr>
 
</tbody>
        
      ))}
      </Table>
  </>

)
            }
export default TransactionList;
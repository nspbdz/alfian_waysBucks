import { useContext } from "react"
import {UserContext} from "../contexts/userContext";
import { Card,Jumbotron,Row,Col,Button,Form } from "react-bootstrap";
import ProfileList from "../components/ProfileList"
function Profile() {
  const {state} = useContext(UserContext);
  return (
    <>
    <div>
    <Row >
   <Col >
     <>
       {/* <ProfileList data={dataProfile} /> */}
       <ProfileList  />
     <div style={{marginTop:"10px"}}>
       
    {/* <Form onSubmit={handleSubmit}  > */}
    <Form  >
       <Form.Group>
         <Form.Control
           name="imageFile"
           type="file"
        //  onChange={handleChange}
           required
         />
       </Form.Group>
       
       {/* <Button type="submit" style={{width:"213px",height:"50px",backgroundColor:"#613D2B"}} >
         choose your photo
       </Button> */}
   
       
     </Form>
     </div>
     </>
       
   </Col>
   <Col xs={1}></Col>
 <Col xs={6}  >
   <>
   <h4 style={{paddingTop:"70px"}}>My Transaction</h4>

  {/* <OrderList data={dataTransaction} loading={loading}  /> */}
  </>
   </Col>

    </Row>
 </div>
   
   </>

    // <>
    //   <p className='h1'>{state.user.name}</p>
    //   <p className='h2'>{state.user.email}</p>
    //   <p className='h3'>{state.user.password}</p>
    // </>
  )
}

export default Profile;

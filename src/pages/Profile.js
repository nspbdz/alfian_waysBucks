import { Card,Jumbotron,Row,Col,Button,Form } from "react-bootstrap";

import React from 'react'

function Profile() {
    return (
        <div>
               <>
     <div>
     <Row >
    <Col >
      <>
        {/* <ProfileList data={dataProfile} /> */}
      <div style={{marginTop:"10px"}}>
        
     <Form
    //   onSubmit={handleSubmit} 
       >
        <Form.Group>
          <Form.Control
            name="imageFile"
            type="file"
        //   onChange={handleChange}
            required
          />
        </Form.Group>
        
        <Button type="submit" style={{width:"213px",height:"50px",backgroundColor:"#613D2B"}} >
          choose your photo
        </Button>
    
        
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
 
        </div>
    )
}

export default Profile

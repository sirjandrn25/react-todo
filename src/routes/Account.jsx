import {Card,Form,Button,Row,Col} from 'react-bootstrap'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UseUserContext } from "../contexts/userContext";

const Account = ()=>{
    const navigate = useNavigate();
    const {is_loading,access_token} = UseUserContext();
    useEffect(()=>{
        const respone = access_token();
        respone.then(resp=>{
          if(!resp){
            navigate("/login")
          }
        })
      },[])
   

    
    return (
        <div className="account_container">
            <Card style={{width:"40rem",padding:"10px"}}>
                <Card.Body>
                    <Card.Title>User Account Settings</Card.Title>
                    <hr />
                    {is_loading?"loading ......":<UpdateAccountForm />}
                    
                </Card.Body>
            </Card>
        </div>
    )
}


const UpdateAccountForm = ()=>{
    const handleSubmit = (e)=>{
        e.preventDefault()

    }
    const renderError = (error)=>{
        return (
            <Form.Text className="text-danger">
                {error}
            </Form.Text>
        )
    }
    return (
        <Form onSubmit={handleSubmit}>
                        <Row>
                            <Col>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" disabled />
                                
                            </Form.Group>
                            </Col>
                            <Col>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Full Name</Form.Label>
                                <Form.Control type="text" placeholder="enter your full name" />
                            </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                            <Form.Group className="mb-3" controlId="formBasicBirthDate">
                                <Form.Label>Birth Date</Form.Label>
                                <Form.Control type="date" placeholder="Enter your birth date" />
                                
                            </Form.Group>
                            </Col>
                            <Col>
                            <Form.Group className="mb-3" controlId="formBasicfullAddress">
                                <Form.Label>Address</Form.Label>
                                <Form.Control type="text" placeholder="enter your full address" />
                            </Form.Group>
                            </Col>
                        </Row>
                        

                        
                       
                        <Button variant="primary" type="submit">
                            Save
                        </Button>
                    </Form>
    )
}

export default Account;
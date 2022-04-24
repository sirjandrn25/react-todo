import {Card,Form,Button,Row,Col} from 'react-bootstrap'


const Account = ()=>{

    const renderError = (error)=>{
        return (
            <Form.Text className="text-danger">
                {error}
            </Form.Text>
        )
    }

    const handleSubmit = (e)=>{
        e.preventDefault()

    }
    return (
        <div className="account_container">
            <Card style={{width:"40rem",padding:"10px"}}>
                <Card.Body>
                    <Card.Title>User Account Settings</Card.Title>
                    <hr />
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
                    
                </Card.Body>
            </Card>
        </div>
    )
}


export default Account;
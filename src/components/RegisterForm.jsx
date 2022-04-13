import React from 'react';
import {Card,Form,Button} from 'react-bootstrap'


const RegisterForm = ()=>{
    
    const handleSubmit = (e)=>{
        e.preventDefault();
    }

    return (
        <Card style={{width:"25rem"}} className="p-4" >
            <h3 className='text-center' style={{'color':"#00ffcc"}}>New User Register</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Group className='mb-3'>
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" id="id_fullname" placeholder='Enter your full name' name="fullname" />
                </Form.Group>
                <Form.Group className='mb-3' >
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder='Enter your email id' name="email" id="id_email "/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder='Enter Your Password' name="password" id="id_password" />
                </Form.Group>
                <Button type="submit" variant="outline-success">Register</Button>
            </Form>
        </Card>
    )
}

export default RegisterForm;
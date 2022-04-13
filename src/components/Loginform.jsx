import React from 'react';
import {Form,Card,Button} from 'react-bootstrap';
import { UseUserContext } from '../contexts/userContext';

const LoginForm = ()=>{
    const {handleLogin,handleLogout} = UseUserContext();
    const [email,setEmail] = React.useState("");
    const [password,setPassword] = React.useState("");
    
    const handleSubmit = (e)=>{
        e.preventDefault();
        
        const user_data = {
            email:email,
            password:password
        }
        
        handleLogin(user_data);
       
    

    }
    
    return (
        <Card style={{width:"25rem"}} className="p-4">
            <h3 style={{"color":"#00ffcc"}} className='mb-1 text-center'>User Login</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Group className='mb-3' >
                    <Form.Label>
                        Email Id
                    </Form.Label>
                    <Form.Control value={email} onChange={e=>setEmail(e.target.value)} type="email" name="email" id="email_id" placeholder="Enter your email id" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control value={password} onChange={e=>setPassword(e.target.value)} type="password" name="password" id="password_id" placeholder='Enter your password' />
                </Form.Group>
                <Button type="submit" >
                    Log In
                </Button>
            </Form>
        </Card>
    );
}

export default LoginForm;

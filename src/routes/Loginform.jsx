import React,{useEffect} from 'react';
import {Form,Card,Button} from 'react-bootstrap';
import { UseUserContext } from '../contexts/userContext';
import { useNavigate,Link } from 'react-router-dom';

const LoginForm = ()=>{
    const {handleLogin,is_loggedIn,is_loading,errors} = UseUserContext();
    const navigate = useNavigate();
    const [email,setEmail] = React.useState("");
    const [password,setPassword] = React.useState("");
    
    useEffect(()=>{
        console.log("clean up function")
        if(window.localStorage.getItem('access')){
            navigate('/')
        }
    },[])
    const handleSubmit = (e)=>{
        e.preventDefault();
        
        const user_data = {
            email:email,
            password:password
        }
        
        const response = handleLogin(user_data);
        response.then(resp=>{
            console.log(resp)
            if(resp){
                navigate('/')
            }
        })
    

    }

    const renderError = (error)=>{
        return (<Form.Text className="text-danger font-weight-bold">
                  {error}      
        </Form.Text>)
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
                    {errors.email?renderError(errors.email):null}
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control value={password} onChange={e=>setPassword(e.target.value)} type="password" name="password" id="password_id" placeholder='Enter your password' />
                    {errors.password?renderError(errors.password):null}
                </Form.Group>
                <Button type="submit" disabled={is_loading} >
                    {is_loading?"loading......":"Log In"}
                </Button>
                <br />
                <hr />
                
                <Link to="/register">Create An Account</Link>
            </Form>
        </Card>
    );
}

export default LoginForm;

import React from 'react';
import {Card,Form,Button,Alert} from 'react-bootstrap'
import { Link,useNavigate } from 'react-router-dom';
import { UseUserContext } from '../contexts/userContext';

const RegisterForm = ()=>{
    const {createUser,is_loggedIn,errors,is_loading} = UseUserContext();
    const navigate = useNavigate();
    const [email,setEmail] = React.useState('');
    const [fullname,setFullname] = React.useState('');
    const [password,setPassword] = React.useState('');
    const [success,setSuccess] = React.useState(false);

    React.useEffect(()=>{
        if(is_loggedIn){
            return navigate('/');
        }
        
    },[]);

    const handleSubmit =(e)=>{
        e.preventDefault();
        const user_data={
            email:email,
            fullname:fullname,
            password:password
        }

        const response = createUser(user_data);
        response.then(res=>{
            console.log(res)
            if(res){
                setSuccess(true);
                setEmail('');
                setFullname('');
                setPassword('');
            }
            else{
                setSuccess(false);
            }
        })
            
            
    }

    const renderError = (error)=>{
        return (<Form.Text className="text-danger font-weight-bold">
                  {error}      
        </Form.Text>)
    }
    

    return (
        <Card style={{width:"25rem"}} className="p-4" >
            <h3 className='text-center' style={{'color':"#00ffcc"}}>New User Register</h3>
            {success?<h3 className='text-success'>User Successfully Register</h3>:null}
            <Form onSubmit={handleSubmit}>
                <Form.Group className='mb-3'>
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control  type="text" value={fullname} onChange={e=>setFullname(e.target.value)}  name="fullname" id="id_fullname" placeholder='Enter your full name' />
                    {errors.fullname?renderError(errors.fullname):null}
                </Form.Group>
                <Form.Group className='mb-3' >
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder='Enter your email id' name="email" id="id_email "/>
                    {errors.email?renderError(errors.email):null}
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control value={password} onChange={e=>setPassword(e.target.value)} type="password" placeholder='Enter Your Password' name="password" id="id_password" />
                    {errors.password?renderError(errors.password):null}
                </Form.Group>
                <Button type="submit" disabled={is_loading} variant="outline-success">{is_loading?"loading....":"Register"}</Button>
            </Form>
            <hr />
            <Link to="/login">Do You Want To Login?</Link>
        </Card>
    )
}

export default RegisterForm;
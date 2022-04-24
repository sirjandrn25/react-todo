import { Button } from "react-bootstrap"
import { UseUserContext } from '../contexts/userContext';
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";

export default function Layout(){
    const {is_loading,is_loggedIn,access_token} = UseUserContext();
    useEffect(()=>{
        access_token()
    },[is_loggedIn]);
    
    const navigate = useNavigate();
    
    const navigateLogin = ()=>{
        navigate('/login');
    }

    const navigateHome = ()=>{
        console.log("login")
        navigate("/home");
    }
    
    
    return (
        <>
            
            <div >

             <h1 className="text-success">Welcome React Todo App</h1>
             <br />
             {!is_loggedIn?<Button variant="secondary" onClick={navigateLogin} disabled={is_loading} >
                 {is_loading?"loading....":"Go to login page"}
             </Button>:<Button variant="success" onClick={navigateHome} disabled={is_loading}>{is_loading?"loading....":"Go to Home page"}</Button>}
             
 
            </div>
        </>
        
    )
}
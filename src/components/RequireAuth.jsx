import {Navigate} from 'react-router-dom';
import { UseUserContext } from '../contexts/userContext';
import { useEffect } from 'react';


export default function RequireAuth({children}){
    const {is_loggedIn,access_token,is_loading} = UseUserContext();
    
    if(!is_loggedIn){
        <Navigate to="/login" />
    }
    
    
    
    return children
}
import {Navigate} from 'react-router-dom';
import { UseUserContext } from '../contexts/userContext';


export default function RequireAuth({children}){
    const {is_loggedIn} = UseUserContext();
    
    if(!is_loggedIn){
        <Navigate to="/login" />
    }
    
    return children
}
import React from 'react';
import axios from 'axios';




const UserContext = React.createContext({
    user:{},
    is_loggedIn:false,
    errors:{},
    handleLogin:()=>{},
    handleLogout:()=>{},
    createUser:()=>{},
    is_loading:false
    // access_token:null
})
const url = "https://dj-react-todo2022.herokuapp.com/api/v1"



export const UserProvider =({children})=>{
    const [user,setUser] = React.useState({})
    const [is_loggedIn,setLoggedIn] = React.useState(false);
    const [errors,setErrors] = React.useState({});
    const [is_loading,setLoading] = React.useState(false);
    

    const handleUserDetail = ()=>{
        let user_data = window.localStorage.getItem('user');
        user_data = JSON.parse(user_data);
        setUser(user_data);

    }
    const handleLogin = async (user_data)=>{
        setLoading(true);
        const response = await axios.post(`${url}/user_login/`,user_data).then(json_res=>{
            const data = json_res.data;
           
            window.localStorage.setItem('refresh',data.refresh)
            window.localStorage.setItem('access',data.access)
            window.localStorage.setItem('user',JSON.stringify(data.user));
            setLoggedIn(true);
            handleUserDetail();
            setLoading(false)
        }).catch(error=>{
            
            setErrors(error.response.data)
            setLoading(false);
        })
    }
    const access_token = async()=>{
        setLoading(true);
        const refresh_token = window.localStorage.getItem('refresh')
        const config_data = {
            'refresh':refresh_token
        }
        return await axios.post(`${url}/refresh_token/`,config_data).then(resp=>{
            const data = resp.data
            window.localStorage.setItem("access",data.access)
            
            setLoggedIn(true);
            handleUserDetail();
            setLoading(false);
            return true
        }).catch(error=>{
            console.log(error)
            setLoading(false)
            return false
        })
    }
    const handleLogout = ()=>{
        setUser({});
        window.localStorage.clear();
        setLoggedIn(false);
        return true
        
    }
    
    const createUser = async (user_data)=>{
        setLoading(true);
       
        const response =  await axios.post(`${url}/user_register/`,user_data).then(json_res=>{
            
            setErrors({});
            setLoading(false)
            return true;
            
        }).catch(error=>{
            setErrors(error.response.data)
            setLoading(false);
            return false;
            
        })
        return response
    }

    return (
        <UserContext.Provider value={{user,is_loggedIn,handleLogin,handleLogout,createUser,errors,is_loading,access_token}}>
            {children}
        </UserContext.Provider>
    )
}


export const UseUserContext = ()=>{
    const {user,is_loggedIn,handleLogin,handleLogout,createUser,errors,is_loading,access_token} = React.useContext(UserContext);

    return {user,is_loggedIn,handleLogin,handleLogout,createUser,errors,is_loading,access_token};
}

export default UserContext;

import React from 'react';





const UserContext = React.createContext({
    user:{},
    is_loggedIn:false,
    handleLogin:()=>{},
    handleLogout:()=>{}
    // access_token:null
})



export const UserProvider =({children})=>{
    const [user,setUser] = React.useState({})
    const [is_loggedIn,setLoggedIn] = React.useState(false);
    
    const handleLogin = (user_data)=>{
        setUser(user_data);
        setLoggedIn(true);
    }
    const handleLogout = ()=>{
        setUser({});
        setLoggedIn(false);
    }
    // const [access_token,setAccessToken] = React.useState('');


    return (
        <UserContext.Provider value={{user,is_loggedIn,handleLogin,handleLogout}}>
            {children}
        </UserContext.Provider>
    )
}


export const UseUserContext = ()=>{
    const {user,is_loggedIn,handleLogin,handleLogout} = React.useContext(UserContext);

    return {user,is_loggedIn,handleLogin,handleLogout};
}

export default UserContext;

import React,{useEffect} from 'react';
import { Container, Navbar, Button } from 'react-bootstrap';
import { UseUserContext } from '../contexts/userContext';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const { user, is_loggedIn, handleLogout,access_token } = UseUserContext();
  const navigate = useNavigate();
  console.log(is_loggedIn)
  // useEffect(()=>{
  //   const response = access_token();
  //   response.then(resp=>{
  //     if(!resp){
  //       navigate('/login')
  //     }
  //   })
  // },[])

  const userLogout = ()=>{
    handleLogout();
    navigate('/login');
  }
  const navigateLogin = ()=>{
    navigate('/login');
  }

  const UserDetail = () => {
    return <>
      <Navbar.Text style={{ "color": "#f5f5f0" }} className="mr-2">
        {user.fullname}
      </Navbar.Text>
      <Button size="sm" variant='outline-warning' onClick={userLogout} >Logout</Button>

    </>
  }
  return (
    <Navbar bg="dark" fixed='top'>
      <Container>
        <Navbar.Brand href="#home" className='font-weight-bold' style={{ 'color': "#00ffcc" }}>
          TodoReact
        </Navbar.Brand>
        <Navbar.Collapse className="justify-content-end" >
          {is_loggedIn ? UserDetail() : <Button variant="secondary" onClick={navigateLogin}>click login</Button>}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Header;
import React,{useEffect} from 'react';
import { Container, Navbar, Button } from 'react-bootstrap';
import { UseUserContext } from '../contexts/userContext';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom';

const Header = () => {
  const { user, is_loggedIn, handleLogout,access_token } = UseUserContext();
  const navigate = useNavigate();

  

  const userLogout = ()=>{
    handleLogout();
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
        <Navbar.Brand className='font-weight-bold' style={{ 'color': "#00ffcc" }}>
          <Link to="/">TodoReact</Link>
        </Navbar.Brand>
        <Navbar.Collapse className="justify-content-end" >
          {is_loggedIn ? UserDetail() :null}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Header;
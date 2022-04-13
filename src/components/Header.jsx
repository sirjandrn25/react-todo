import React from 'react';
import { Container, Navbar, Button } from 'react-bootstrap';
import { UseUserContext } from '../contexts/userContext';

const Header = () => {
  const { user, is_loggedIn, handleLogout } = UseUserContext();

  const UserDetail = () => {
    return <>
      <Navbar.Text style={{ "color": "#f5f5f0" }} className="mr-2">
        {user.email}
      </Navbar.Text>
      <Button size="sm" variant='outline-warning' onClick={e => handleLogout()} >Logout</Button>

    </>
  }
  return (
    <Navbar bg="dark">
      <Container>
        <Navbar.Brand href="#home" className='font-weight-bold' style={{ 'color': "#00ffcc" }}>
          TodoReact
        </Navbar.Brand>
        <Navbar.Collapse className="justify-content-end" >
          {is_loggedIn ? UserDetail() : null}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Header;
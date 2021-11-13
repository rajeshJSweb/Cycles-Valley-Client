import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth/useAuth';
import './Header.css'

const Header = () => {
  const { user, logOut } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';


  const signOut = () => {
    logOut()
      .then(() => {
        history.push(redirect_uri);
      }).catch((error) => {
      });
  }
    return (
        <div>
          <Navbar collapseOnSelect expand="lg" className='header' variant="dark">
            <Container>
            <Navbar.Brand as={Link} to="/home">Cycles Valley</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link className='text-white fw-bold' as={Link} to="/home">Home</Nav.Link>
                <Nav.Link className='text-white fw-bold' as={Link} to="/about">About</Nav.Link> 
                <Nav.Link className='text-white fw-bold' as={Link} to="/contact">Contact</Nav.Link>
                <Nav.Link className='text-white fw-bold' as={Link} to="/explore">Explore</Nav.Link>
              </Nav>
              <Nav>
              
              {           
                  user.email&&<Nav.Link className='text-white' as={Link} to="/dashboard">Dashboard</Nav.Link>
                }
                <Nav.Link className='text-white fw-bold'>{ user.displayName}</Nav.Link>
                {
                  user.email ?
                    <Nav.Link className='text-white fw-bold' as={Link} to="/dashboard"><button onClick={signOut}>Log Out</button></Nav.Link> :
                    <Nav.Link className='text-white' as={Link} to="/login">Login</Nav.Link>  
                }
                
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;
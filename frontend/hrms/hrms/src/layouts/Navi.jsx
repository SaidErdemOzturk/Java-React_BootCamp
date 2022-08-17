import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import SignedIn from './SignedIn';
import SignedOut from './SignedOut';
import { useNavigate } from 'react-router-dom';

export default function Navi() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const navigate= useNavigate();
  function handleSignOut(params){
    setIsAuthenticated(false)
    navigate("/")
  }
  function handleSignIn(params){
    setIsAuthenticated(true)
  }

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">HRMS</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/candidatehomepage">Home</Nav.Link>
              <Nav.Link href="#features">ADverts</Nav.Link>
              <Nav.Link href="#pricing">Candidates</Nav.Link>
              <Nav.Link href="#pricing">Employers</Nav.Link>
            </Nav>
            {
              isAuthenticated?<SignedIn/>:<SignedOut/>
            }

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

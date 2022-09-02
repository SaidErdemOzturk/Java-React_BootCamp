import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import SignedIn from './SignedIn';
import SignedOut from './SignedOut';
import { useSelector } from 'react-redux/es/exports';
import { useNavigate } from 'react-router-dom';

export default function Navi() {

  const {user} = useSelector(state=>state)
  let navigate = useNavigate();
  function handleHome(){
    if(user.userItems==null){
      navigate(`/`)

    }else{
    
    navigate(`/${user.userItems.userType}/homepage`)
    }
  }
  function handleAdverts(){
    navigate("/adverts")
  }
  function handleCandidates(){
    navigate("/candidates")
  }
  function handleEmployers(){
    navigate("/employers")
  }

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand onClick={handleHome}>HRMS</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={handleHome}>Home</Nav.Link>
              <Nav.Link onClick={handleAdverts}>Adverts</Nav.Link>
              <Nav.Link onClick={handleCandidates}>Candidates</Nav.Link>
              <Nav.Link onClick={handleEmployers}>Employers</Nav.Link>
            </Nav>            
            {JSON.parse(localStorage.getItem("user"))==null?<SignedOut/>:<SignedIn/>}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

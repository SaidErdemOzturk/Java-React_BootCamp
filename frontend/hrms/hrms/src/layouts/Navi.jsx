import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink } from 'react-router-dom';


export default function Navi() {
  return (
    <div>     

 <Navbar bg="light" expand="lg">
      <Container >
        <Navbar.Brand href="/" style={{marginRight:"35%"}}>HRMS</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px'}}
            navbarScroll
          >
            <Nav.Link href="#action1">Adverts</Nav.Link>
            <Nav.Link href="#action2">Candidates</Nav.Link>
            <Nav.Link href="/employers">Employers</Nav.Link>
          </Nav>
          <Button className="button" variant="outline-dark" href="/loginpage">Giriş Yap</Button>
          <Button className="button" variant="outline-dark">Kayıt Ol</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  
    </div>
  )
}

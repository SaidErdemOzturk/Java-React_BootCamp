import React from 'react'
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';

export default function Navi() {
  return (
    <div>       
       <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">HRMS</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link href="#pricing">Home</Nav.Link>
            <Nav.Link href="#features">ADverts</Nav.Link>
            <Nav.Link href="#pricing">Candidates</Nav.Link>
            <Nav.Link href="#pricing">Employers</Nav.Link>
          </Nav>
          <Button href="/loginpage" color='white' variant='dark'>Login</Button>
          <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Register
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="/RegisterCandidate">Candidate</Dropdown.Item>
        <Dropdown.Item href="/RegisterEmployer">Employer</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

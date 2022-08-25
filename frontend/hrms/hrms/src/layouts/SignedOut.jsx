import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';

export default function SignedOut(singIn) {
  return (
    <div>
      <NavbarCollapse>

        <Dropdown>
          <Dropdown.Toggle variant="dark" id="dropdown-basic" style={{ float: "left" }}>
            Login
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="/candidateloginpage">Candidate</Dropdown.Item>
            <Dropdown.Item href="/employerloginpage">Employer</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic" style={{ float: "right" }} >
            Register
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="/registercandidate">Candidate</Dropdown.Item>
            <Dropdown.Item href="/registeremployer">Employer</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </NavbarCollapse>
    </div>
  )
}

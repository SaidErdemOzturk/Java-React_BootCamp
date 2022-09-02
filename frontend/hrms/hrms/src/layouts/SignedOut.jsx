import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';

export default function SignedOut() {
  return (
    <div>
      <NavbarCollapse>

        <Dropdown>
          <Dropdown.Toggle variant="dark" id="dropdown-basic" style={{ float: "left" }}>
            Login
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="/candidate/loginpage">Candidate</Dropdown.Item>
            <Dropdown.Item href="/employer/loginpage">Employer</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic" style={{ float: "right" }} >
            Register
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="/candidate/register">Candidate</Dropdown.Item>
            <Dropdown.Item href="/employer/register">Employer</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </NavbarCollapse>
    </div>
  )
}

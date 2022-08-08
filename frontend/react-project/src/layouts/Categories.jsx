import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';

export default function Categories() {
  return (
    <div>    <Dropdown.Menu show>
    <Dropdown.Header>Kategoriler</Dropdown.Header>
    <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
    <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
  </Dropdown.Menu></div>
  )
}

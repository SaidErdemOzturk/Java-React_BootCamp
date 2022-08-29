import React from 'react'
import Form from 'react-bootstrap/Form';
import { Col, Row } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Link } from 'react-router-dom';


export default function EmployerHomePage() {
  return (
    <div>
    <Row style={{margin:"2em"}}>
    <Col sm="12"> 
    <DropdownButton id="dropdown-item-button" title="İşlemler">
    <Dropdown.ItemText>Yapacaığınız işlemi seçiniz</Dropdown.ItemText>
    <Dropdown.Divider />
    <Dropdown.Item as="button"><Link to={`/advertadd`} style={{textDecoration:"none"}}>İlan ekle</Link></Dropdown.Item>
    <Dropdown.Item as="button">Yeni okul ekle</Dropdown.Item>
    <Dropdown.Item as="button">Programlama dili ekle</Dropdown.Item>
    <Dropdown.Item as="button">Yabancı dil ekle</Dropdown.Item>
    <Dropdown.Item as="button">İş tecrübesi ekle</Dropdown.Item>
  </DropdownButton>
  </Col>
  </Row>

  </div>
  )
}

import React, { useEffect,useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Col, Row } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


export default function CandidateHomePage() {
  const {candidate} = useSelector(state=>state);  
  let navigate = useNavigate()
  useEffect(() => {
    if(candidate.candidateItems.id==0){
      navigate("/candidateloginpage")
    }
  }, [])
   
  return (
    <div>
      <Row style={{margin:"2em"}}>
      <Col sm="12"> 
      <DropdownButton id="dropdown-item-button" title="İşlemler">
      <Dropdown.ItemText>Yapacaığınız işlemi seçiniz</Dropdown.ItemText>
      <Dropdown.Divider />
      <Dropdown.Item as="button">CV Ekle</Dropdown.Item>
      <Dropdown.Item as="button">Yeni okul ekle</Dropdown.Item>
      <Dropdown.Item as="button">Programlama dili ekle</Dropdown.Item>
      <Dropdown.Item as="button">Yabancı dil ekle</Dropdown.Item>
      <Dropdown.Item as="button">İş tecrübesi ekle</Dropdown.Item>
    </DropdownButton>
    </Col>

    <Col>
    
    </Col>
    
    </Row>

    </div>
  )
}

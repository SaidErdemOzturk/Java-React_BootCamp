import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import { Col, Row } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import AdvertService from '../services/advertService';
import { useSelector } from 'react-redux/es/exports';
import { useNavigate } from 'react-router';


export default function EmployerHomePage() {
  const {user} = useSelector(state=>state)
  const [adverts, setAdverts] = useState([])
  const navigate = useNavigate();
  let advertService = new AdvertService;
  useEffect(() => {
    if(user.userItems!=null&&user.userItems.userType=="employer"){
    advertService.getByEmployerId(user.userItems.id).then(response=>(
      setAdverts(response.data.data)
    ))
  }else{
    navigate("/")
  }
    
    console.log(...adverts)
  }, [])
  function handleAdvertDetail(id){
  navigate(`/employer/adverts/${id}`)
  }
  
  return (
    <div>
    <Row style={{margin:"2em"}}>
    <Col sm="12"> 
    <DropdownButton id="dropdown-item-button" title="İşlemler">
    <Dropdown.ItemText>Yapacaığınız işlemi seçiniz</Dropdown.ItemText>
    <Dropdown.Divider />
    <Dropdown.Item as="button"><Link to={`/employer/advertadd`} style={{textDecoration:"none"}}>İlan ekle</Link></Dropdown.Item>
    <Dropdown.Item as="button">Yeni okul ekle</Dropdown.Item>
    <Dropdown.Item as="button">Programlama dili ekle</Dropdown.Item>
    <Dropdown.Item as="button">Yabancı dil ekle</Dropdown.Item>
    <Dropdown.Item as="button">İş tecrübesi ekle</Dropdown.Item>
  </DropdownButton>
  </Col>
  </Row>
  <Row>
  <Table hover style={{borderColor:"#000000"}}>
      <thead>
        
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Position</th>
          <th>Deadline</th>          
        </tr>
      </thead>
      <tbody>
        {
          adverts.map(adverts=>(

            <tr key={adverts.id} style={adverts.active==true?{backgroundColor:"#d4ffaa"}:{backgroundColor:"#908f8f"}} onClick={()=>handleAdvertDetail(adverts.id)}>
              <td>{adverts.id}</td>
              <td>{adverts.title}</td>
              <td>{adverts.position}</td>
              <td>{adverts.deadline}</td>

            </tr>
          ))

        }
       
      </tbody>
    </Table>


  </Row>

  </div>
  )
}

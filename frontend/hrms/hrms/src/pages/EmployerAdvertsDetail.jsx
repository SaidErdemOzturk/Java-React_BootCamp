import React, { useEffect, useState } from 'react'
import { Col, Container, FormLabel, Image, Row } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router'
import AdvertService from '../services/advertService'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify';
import EmployerRecourseService from '../services/employerRecourseService';

let advertService = new AdvertService;
let recourseService = new EmployerRecourseService;
export default function EmployerAdvertsDetail() {
    const [advert, setAdvert] = useState({})
    let {user} = useSelector(state=>state);
    const [employer, setEmployer] = useState({})
    const navigate = useNavigate()
  let {id} = useParams()

  useEffect(() => {
    if(user.userItems.userType=="employer"){   

    advertService.findById(id).then(response=>(
        setAdvert(response.data.data)
        ))
      }else{
        navigate("/employer/homepage")
      }
  }, [])

  function handleRemove(id){
    advertService.delete(id).then(response=>{
      if(response.data.success){
        toast.success(response.data.message)
        navigate("/employer/homepage")
      }else{
        toast.success(response.data.message)
      }
    })
  }

  function handleRecourses(id){
    navigate(`/employer/recourse/${id}`)
  }


  
    return (
    <div>
        <Container>
        
    <Card style={{marginTop:"3em"}}>
      <Card.Header as="h5">İlan Bilgileri</Card.Header>
      <Card.Body>
        <Card.Title>{advert.title}</Card.Title>
        <Card.Text>Açıklama  :
          {
           advert.jobDescription
          }
        </Card.Text>
        <Card.Text>Açık pozisyon adedi  :
          {
           advert.open_position_count
          }
        </Card.Text>
        <Card.Text>Şehir  :
          {
           advert.city
          }
        </Card.Text>
        <Card.Text>Pozisyon  :
          {
           advert.position
          }
        </Card.Text>
        <Card.Text>Başlangıç tarihi -  
          {
           advert.startingDate
          }
           /Bitiş tarihi -
           {
            advert.deadline
           }
        </Card.Text>
        <Card.Text>En düşük ücret  :
          {
           advert.minWage
          }
        </Card.Text>
        <Card.Text>En yüksek ücret  :
          {
           advert.maxWage
          }
        </Card.Text>
        <Image src={advert.imageUrl}/>

        <Row>
        <Col className="d-grid gap-2">
        {
          
        advert.employer!=undefined?
        advert.employer.id==user.userItems.id?<Button variant='outline-primary'>İlanı düzenle</Button>:null:null}
        </Col>
        <Col className="d-grid gap-2">
        {
          
        advert.employer!=undefined?
        advert.employer.id==user.userItems.id?<Button variant='outline-warning' onClick={()=>handleRecourses(advert.id)}>Başvurulara Git</Button>:null:null}
        </Col>
        <Col className="d-grid gap-2">
        {
          
        advert.employer!=undefined?
        advert.employer.id==user.userItems.id?<Button variant='outline-danger' onClick={()=>handleRemove(advert.id)}>İlanı Kaldır</Button>:null:null}
        </Col>
        </Row>
    
      </Card.Body>
    </Card>
        </Container>
    </div>
  )
}

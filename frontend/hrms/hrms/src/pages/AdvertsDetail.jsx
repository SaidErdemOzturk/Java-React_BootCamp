import React, { useEffect, useState } from 'react'
import { Container, FormLabel } from 'react-bootstrap'
import { useParams } from 'react-router'
import AdvertService from '../services/advertService'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useSelector } from 'react-redux'


export default function AdvertsDetail() {
    const [advert, setAdvert] = useState({})
    let {user} = useSelector(state=>state);
    const [employer, setEmployer] = useState({})

  let {id} = useParams()
  useEffect(() => {
    let advertService = new AdvertService;
    advertService.findById(id).then(response=>(
        setAdvert(response.data.data)
        ))
  }, [])
    return (
    <div>
        <Container>

        <Card style={{marginTop:"3em"}}>
      <Card.Header as="h5">Şirket bilgileri</Card.Header>
      <Card.Body>
        <Card.Title>Şirket Adı  :   
          
          {
            advert.employer != undefined?advert.employer.companyName:null
          }
          
          </Card.Title>
        <Card.Text>Email  :
          {
            advert.employer != undefined?advert.employer.email:null
          }
        </Card.Text>
        <Card.Text>Telefon Numarası  :
          {
            advert.employer != undefined?advert.employer.phoneNumber:null
          }
        </Card.Text>
    
      </Card.Body>
    </Card>
        
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
        {user.userItems.id==0?<Button disabled variant='secondary'>İlana başvurmak için giriş yapınız</Button>:<Button> ilana başvur</Button>}
    
      </Card.Body>
    </Card>
        </Container>
    </div>
  )
}

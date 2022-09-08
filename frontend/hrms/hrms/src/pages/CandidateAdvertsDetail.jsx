import React, { useEffect, useState } from 'react'
import { Container, FormLabel } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router'
import AdvertService from '../services/advertService'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useSelector } from 'react-redux'
import CandidateRecourseService from '../services/candidateRecourseService';
import { toast } from 'react-toastify';
import EmployerRecourseService from '../services/employerRecourseService';

let candidateRecourseService = new CandidateRecourseService;
let employerRecourseService = new EmployerRecourseService;
export default function CandidateAdvertsDetail() {
  const [advert, setAdvert] = useState({})
  const [isRecourse, setIsRecourse] = useState(false)
  let { user } = useSelector(state => state);
  const navigate = useNavigate()

  let { id } = useParams()
  useEffect(() => {
    let advertService = new AdvertService;

    advertService.findById(id).then(response => (
      setAdvert(response.data.data)
    ))
    candidateRecourseService.getByCandidateIdAndAdvertId(user.userItems.id, id).then(response => (
      setIsRecourse(response.data.success)
    ))
  }, [<Card />])

  let values = {}
  function handleRecourseAdvert() {
    values.status = "İnceleniyor"
    values.advertRecourse = advert
    values.employerRecourse = advert.employer
    values.candidateRecourse = user.userItems;
    candidateRecourseService.add(values)
    employerRecourseService.add(values)
  }
  return (
    <div>
      <Container>

        <Card style={{ marginTop: "3em" }}>
          <Card.Header as="h5">Şirket bilgileri</Card.Header>
          <Card.Body>
            <Card.Title>Şirket Adı  :

              {
                advert.employer != undefined ? advert.employer.companyName : null
              }

            </Card.Title>
            <Card.Text>Email  :
              {
                advert.employer != undefined ? advert.employer.email : null
              }
            </Card.Text>
            <Card.Text>Telefon Numarası  :
              {
                advert.employer != undefined ? advert.employer.phoneNumber : null
              }
            </Card.Text>

          </Card.Body>
        </Card>

        <Card style={{ marginTop: "3em" }}>
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
            {user.userItems == null ? <Button disabled variant='secondary'>İlana başvurmak için giriş yapınız</Button> : user.userItems.userType == "employer" ? <Button disabled variant="secondary">İş veren ilana başvuramaz</Button> : isRecourse ? <Button disabled variant="secondary">Bu ilana zaten başvurdunuz.</Button> : <Button onClick={() => handleRecourseAdvert()}> ilana başvur</Button>}

          </Card.Body>
        </Card>
      </Container>
    </div>
  )
}

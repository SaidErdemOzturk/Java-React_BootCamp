import { Formik } from 'formik'
import React, { useEffect, useState } from 'react'
import { Container, NavLink, Button } from 'react-bootstrap'
import AdvertService from '../services/advertService'
import HomePageCard from '../utilities/customCards/HomePageCard'
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row'

export default function HomePage() {

  const [adverts, setAdverts] = useState([])

  useEffect(() => {
    let advertService = new AdvertService;
    advertService.getAll().then(result => setAdverts(result.data.data))
  }, [])
  var count = 0


  return (

    <div>
          <Card key={adverts.id} style={{ float: "left", margin: "2em",width:"25%" }} bg="primary">
                    <Card.Img variant="top" src="https://www.turquagroup.com.tr/images/blog/blog_FCF81632-9A97-47DA-997B-2201C790A954.jpg" />
                    <Card.Body>
                      <Card.Title>{adverts[0]!= undefined?adverts[0].title:null}</Card.Title>
                      <Card.Text>
                        {adverts[0]!= undefined?adverts[0].jobDescription:null}
                      </Card.Text>
                      <Button variant="dark"><Link to={`/adverts/${adverts[0]!= undefined?adverts[0].id:null}`} style={{textDecoration:"none"}}>İlana git</Link></Button>
                    </Card.Body>
                  </Card>

                  <Card key={adverts.id} style={{ float: "left", margin: "2em",width:"25%" }} bg="primary">
                    <Card.Img variant="top" src="https://www.turquagroup.com.tr/images/blog/blog_FCF81632-9A97-47DA-997B-2201C790A954.jpg" />
                    <Card.Body>
                      <Card.Title>{adverts[1]!= undefined?adverts[1].title:null}</Card.Title>
                      <Card.Text>
                        {adverts[1]!= undefined?adverts[1].jobDescription:null}
                      </Card.Text>
                      <Button variant="dark"><Link to={`/adverts/${adverts[1]!= undefined?adverts[1].id:null}`} style={{textDecoration:"none"}}>İlana git</Link></Button>
                    </Card.Body>
                  </Card>
                  <Card key={adverts.id} style={{ float: "left", margin: "2em",width:"25%" }} bg="primary">
                    <Card.Img variant="top" src="https://www.turquagroup.com.tr/images/blog/blog_FCF81632-9A97-47DA-997B-2201C790A954.jpg" />
                    <Card.Body>
                      <Card.Title>{adverts[2]!= undefined?adverts[2].title:null}</Card.Title>
                      <Card.Text>
                        {adverts[2]!= undefined?adverts[2].jobDescription:null}
                      </Card.Text>
                      <Button variant="dark"><Link to={`/adverts/${adverts[2]!= undefined?adverts[2].id:null}`} style={{textDecoration:"none"}}>İlana git</Link></Button>
                    </Card.Body>
                  </Card>
                  <Link to={"/adverts"}>Tümünü gör</Link>
    </div>

  )
}

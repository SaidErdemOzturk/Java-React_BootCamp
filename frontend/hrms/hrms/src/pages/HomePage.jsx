import { Formik } from 'formik'
import React, { useEffect, useState } from 'react'
import { Container, NavLink, Button } from 'react-bootstrap'
import AdvertService from '../services/advertService'
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';

export default function HomePage() {

  const [adverts, setAdverts] = useState([])

  useEffect(() => {
    let advertService = new AdvertService;
    advertService.getAll().then(result => setAdverts(result.data.data))

  }, [])
  var count = 0

  return (

    <div>
      {
        adverts[0] != undefined?


        <Card key={adverts[0].id} style={{ float: "left", margin: "2em",width:"25%" }} bg="primary">
                    <Card.Img variant="top" src="https://www.turquagroup.com.tr/images/blog/blog_FCF81632-9A97-47DA-997B-2201C790A954.jpg" />
                    <Card.Body>
                      <Card.Title>{adverts[0].title}</Card.Title>
                      <Card.Text>
                        {adverts[0].jobDescription}
                      </Card.Text>
                      <Button variant="dark"><Link to={`/adverts/${adverts[0].id}`} style={{textDecoration:"none"}}>İlana git</Link></Button>
                    </Card.Body>
                  </Card>

                  :

                  <Card style={{ float: "left", margin: "2em",width:"25%" }}>
                  <Card.Img variant="top" style={{width:"100%"}} src="https://www.turquagroup.com.tr/images/blog/blog_FCF81632-9A97-47DA-997B-2201C790A954.jpg" />
                  <Card.Body>
                    <Placeholder as={Card.Title} animation="glow">
                      <Placeholder xs={6} />
                    </Placeholder>
                    <Placeholder as={Card.Text} animation="glow">
                      <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                      <Placeholder xs={6} /> <Placeholder xs={8} />
                    </Placeholder>
                    <Placeholder.Button variant="primary" xs={6} />
                  </Card.Body>
                </Card>


      }


{
         adverts[1] != undefined?


        <Card key={adverts[1].id} style={{ float: "left", margin: "2em",width:"25%" }} bg="primary">
                    <Card.Img variant="top" src="https://www.turquagroup.com.tr/images/blog/blog_FCF81632-9A97-47DA-997B-2201C790A954.jpg" />
                    <Card.Body>
                      <Card.Title>{adverts[1].title}</Card.Title>
                      <Card.Text>
                        {adverts[1].jobDescription}
                      </Card.Text>
                      <Button variant="dark"><Link to={`/adverts/${adverts[1].id}`} style={{textDecoration:"none"}}>İlana git</Link></Button>
                    </Card.Body>
                  </Card>



                  :

                  <Card style={{ float: "left", margin: "2em",width:"25%" }}>
                  <Card.Img variant="top" src="https://www.turquagroup.com.tr/images/blog/blog_FCF81632-9A97-47DA-997B-2201C790A954.jpg" />
                  <Card.Body>
                    <Placeholder as={Card.Title} animation="glow">
                      <Placeholder xs={6} />
                    </Placeholder>
                    <Placeholder as={Card.Text} animation="glow">
                      <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                      <Placeholder xs={6} /> <Placeholder xs={8} />
                    </Placeholder>
                    <Placeholder.Button variant="primary" xs={6} />
                  </Card.Body>
                </Card>

      }

{
        adverts[2] != undefined?


        <Card key={adverts[2].id} style={{ float: "left", margin: "2em",width:"25%" }} bg="primary">
                    <Card.Img variant="top" src="https://www.turquagroup.com.tr/images/blog/blog_FCF81632-9A97-47DA-997B-2201C790A954.jpg" />
                    <Card.Body>
                      <Card.Title>{adverts[2].title}</Card.Title>
                      <Card.Text>
                        {adverts[2].jobDescription}
                      </Card.Text>
                      <Button variant="dark"><Link to={`/adverts/${adverts[2].id}`} style={{textDecoration:"none"}}>İlana git</Link></Button>
                    </Card.Body>
                  </Card>



                  :

                  <Card style={{ float: "left", margin: "2em",width:"25%" }}>
                  <Card.Img variant="top" src="https://www.turquagroup.com.tr/images/blog/blog_FCF81632-9A97-47DA-997B-2201C790A954.jpg" />
                  <Card.Body>
                    <Placeholder as={Card.Title} animation="glow">
                      <Placeholder xs={6} />
                    </Placeholder>
                    <Placeholder as={Card.Text} animation="glow">
                      <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                      <Placeholder xs={6} /> <Placeholder xs={8} />
                    </Placeholder>
                    <Placeholder.Button variant="primary" xs={6} />
                  </Card.Body>
                </Card>

      }
                  <Link to={"/adverts"}>Tümünü gör</Link>
    </div>

  )
}

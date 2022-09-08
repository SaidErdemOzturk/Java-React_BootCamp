import React from 'react'
import { Container, NavLink, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

export default function CustomCard(props) {
  return (
    <div>
        {console.log(props)}
<Card key={props.adverts.id} style={{ float: "left", margin: "2em",width:"25%",borderColor:"white"}} bg="primary">
                    <Card.Img variant="top"  style={{height:"20vh"}} src={props.adverts.imageUrl} />
                    <Card.Body>
                      <Card.Title>{props.adverts.title}</Card.Title>
                      <Card.Text>
                        {props.adverts.jobDescription}
                      </Card.Text>
                      <Button variant="dark"><Link to={`/candidate/adverts/${props.adverts.id}`} style={{textDecoration:"none"}}>İlana git</Link></Button>
                    </Card.Body>
                  </Card>
    </div>
  )
}

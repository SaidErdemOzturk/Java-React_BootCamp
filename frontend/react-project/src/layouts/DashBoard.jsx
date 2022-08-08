import React from 'react'
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import ProductList from '../pages/ProductList';
import Categories from './Categories';
import Navi from './Navi';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function DashBoard() {
  return (
    <div>
      <Container>
        <Row>
          <Col sm={2}>
            <Categories />
          </Col>
          <Col sm={10}>
            <ProductList />
          </Col>
        </Row>


      </Container>

    </div>

  )
}
//rfc
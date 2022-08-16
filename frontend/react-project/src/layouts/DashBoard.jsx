import React from 'react'
import { Container } from 'react-bootstrap';
import ProductList from '../pages/ProductList';
import Categories from './Categories';
import Navi from './Navi';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Route,Routes} from 'react-router-dom';
import ProductDetail from '../pages/ProductDetail';
import CartDetail from '../pages/CartDetail';

import { ToastContainer, toast } from 'react-toastify';
import ProductAdd from '../pages/ProductAdd';
export default function DashBoard() {
  return (
    <div>
      <ToastContainer />

            <Row>
              <Col sm="2"> <Categories /></Col>
            
            <Col sm="10">
            <Routes>
            <Route path="/" element={<ProductList/>} />
            <Route path="/products/:id" element={<ProductDetail/>} />
            <Route path="/cart" element={<CartDetail/>} />
            <Route path="/productadd" element={<ProductAdd/>} />
            </Routes>
            </Col>
            </Row>

    </div>

  )
}
//rfc
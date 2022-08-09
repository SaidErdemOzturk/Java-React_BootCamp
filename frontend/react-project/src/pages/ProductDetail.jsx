
import React, { useState,useEffect } from 'react'
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';
import ProductService from '../services/productService';
import Button from 'react-bootstrap/Button';
import { clear } from '@testing-library/user-event/dist/clear';

export default function ProductDetail() {
    let {id} = useParams()

    const [product, setproduct] = useState({})

    useEffect(()=>{
        let productService = new ProductService;
        productService.getByProductId(id).then(result=>setproduct(result.data.data))

    },[])


  return (

    <div><Card>
    <Card.Img variant="top" src="holder.js/100px180" />
    <Card.Body>
      <Card.Text>
        ürün:{id}
        name=:{product.productName}
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
      <Button variant="outline-success" style={{float:"left",width:"49%"}} >
        Sepete Ekle
      </Button>
      <Button  variant="outline-danger" style={{float:"right",width:"49%"}}>
        Sepetten Kaldır
      </Button>
    </Card.Body>
  </Card></div>
  )
}

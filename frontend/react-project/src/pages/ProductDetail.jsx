
import React, { useState,useEffect } from 'react'
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';
import ProductService from '../services/productService';
import Button from 'react-bootstrap/Button';
import { clear } from '@testing-library/user-event/dist/clear';
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../store/actions/cartActions';
import { toast } from 'react-toastify';

export default function ProductDetail() {
    let {id} = useParams()

    const [product, setproduct] = useState({})

    useEffect(()=>{
        let productService = new ProductService;
        productService.getByProductId(id).then(result=>setproduct(result.data.data))

    },[])
    
    let dispatch = useDispatch()

    function handleAddToCart(){
      dispatch(addToCart(product))
      toast.success(`${product.productName} ürünü eklendi`)
    }

    function handleRemoveToCart(){
      dispatch(removeFromCart(product))
      toast.success(`${product.productName} ürünü çıkartıldı`)
    }

  return (

    <div><Card>
    <Card.Img variant="top" src="holder.js/100px180" />
    <Card.Body>
      <Card.Text>
        ürün:{id}
        name=:{product.productName}
        {product.quantityPerUnit}
      </Card.Text>
      <Button variant="outline-success" onClick={()=>handleAddToCart()}  style={{float:"left",width:"49%"}} >
        Sepete Ekle
      </Button>
      <Button  variant="outline-danger" onClick={()=>handleRemoveToCart()}  style={{float:"right",width:"49%"}}>
        Sepetten Kaldır
      </Button>
    </Card.Body>
  </Card></div>
  )
}
